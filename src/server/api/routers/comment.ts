import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { Filter } from "bad-words";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  adminProcedure,
} from "~/server/api/trpc";

const filter = new Filter();

const MAX_COMMENTS_PER_USER_PER_QUIZ = 5;
const MAX_COMMENT_LENGTH = 1000;
const COMMENTS_PER_PAGE = 20;

export const commentRouter = createTRPCRouter({
  getComments: publicProcedure
    .input(
      z.object({
        quizId: z.string(),
        cursor: z.string().optional(),
        limit: z.number().min(1).max(50).default(COMMENTS_PER_PAGE),
      })
    )
    .query(async ({ ctx, input }) => {
      const { quizId, cursor, limit } = input;

      const comments = await ctx.db.comment.findMany({
        where: {
          quizId,
          hidden: false,
          parentId: null, // Only get top-level comments
        },
        take: limit + 1, // Take one extra to determine if there's more
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { id: true, name: true, image: true } },
          replies: {
            where: { hidden: false },
            orderBy: { createdAt: "asc" },
            include: {
              user: { select: { id: true, name: true, image: true } },
            },
          },
        },
      });

      let nextCursor: string | undefined = undefined;
      if (comments.length > limit) {
        const nextItem = comments.pop();
        nextCursor = nextItem?.id;
      }

      return {
        comments,
        nextCursor,
      };
    }),

  addComment: protectedProcedure
    .input(
      z.object({
        quizId: z.string(),
        content: z.string().min(1).max(MAX_COMMENT_LENGTH),
        parentId: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { quizId, content, parentId } = input;

      // Check if quiz exists
      const quiz = await ctx.db.quiz.findUnique({
        where: { id: quizId },
      });

      if (!quiz) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Quiz not found" });
      }

      // Rate limiting: check user's comment count for this quiz
      const userCommentCount = await ctx.db.comment.count({
        where: { quizId, userId: ctx.session.user.id },
      });

      if (userCommentCount >= MAX_COMMENTS_PER_USER_PER_QUIZ) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: `Maximum ${MAX_COMMENTS_PER_USER_PER_QUIZ} comments per quiz`,
        });
      }

      // Profanity filter
      if (filter.isProfane(content)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Please keep comments respectful",
        });
      }

      // If replying, verify parent comment exists and belongs to same quiz
      if (parentId) {
        const parentComment = await ctx.db.comment.findUnique({
          where: { id: parentId },
        });

        if (!parentComment || parentComment.quizId !== quizId) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Parent comment not found",
          });
        }

        // Prevent nested replies (only allow 1 level of replies)
        if (parentComment.parentId) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Cannot reply to a reply",
          });
        }
      }

      return ctx.db.comment.create({
        data: {
          content,
          userId: ctx.session.user.id,
          quizId,
          parentId,
        },
        include: {
          user: { select: { id: true, name: true, image: true } },
        },
      });
    }),

  updateComment: protectedProcedure
    .input(
      z.object({
        commentId: z.string(),
        content: z.string().min(1).max(MAX_COMMENT_LENGTH),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { commentId, content } = input;

      const comment = await ctx.db.comment.findUnique({
        where: { id: commentId },
        select: { userId: true },
      });

      if (!comment) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Comment not found" });
      }

      if (comment.userId !== ctx.session.user.id) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You can only edit your own comments",
        });
      }

      // Profanity filter
      if (filter.isProfane(content)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Please keep comments respectful",
        });
      }

      return ctx.db.comment.update({
        where: { id: commentId },
        data: {
          content,
          updatedAt: new Date(),
        },
        include: {
          user: { select: { id: true, name: true, image: true } },
        },
      });
    }),

  deleteComment: protectedProcedure
    .input(z.object({ commentId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.db.comment.findUnique({
        where: { id: input.commentId },
        select: { userId: true },
      });

      if (!comment) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Comment not found" });
      }

      if (comment.userId !== ctx.session.user.id) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You can only delete your own comments",
        });
      }

      // Delete the comment and all its replies (cascade)
      return ctx.db.comment.delete({
        where: { id: input.commentId },
      });
    }),

  hideComment: adminProcedure
    .input(
      z.object({
        commentId: z.string(),
        hidden: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.db.comment.findUnique({
        where: { id: input.commentId },
      });

      if (!comment) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Comment not found" });
      }

      return ctx.db.comment.update({
        where: { id: input.commentId },
        data: { hidden: input.hidden },
      });
    }),
});
