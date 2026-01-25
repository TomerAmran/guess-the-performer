import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { ADMIN_EMAIL, QUIZ_SLICE_COUNT } from "~/lib/constants";

const quizSliceSchema = z.object({
  artistId: z.string(),
  youtubeUrl: z.string().url(),
  startTime: z.number().int().min(0).default(0),
});

export const quizRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.quiz.findMany({
      include: {
        composer: true,
        instrument: true,
        createdBy: { select: { id: true, name: true, image: true } },
        slices: {
          include: {
            artist: true,
          },
        },
      },
      orderBy: { likes: "desc" },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.quiz.findUnique({
        where: { id: input.id },
        include: {
          composer: true,
          instrument: true,
          createdBy: { select: { id: true, name: true, image: true } },
          slices: {
            include: {
              artist: true,
            },
          },
        },
      });
    }),

  getMine: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.quiz.findMany({
      where: { createdById: ctx.session.user.id },
      include: {
        composer: true,
        instrument: true,
        slices: {
          include: {
            artist: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  create: protectedProcedure
    .input(z.object({
      composerId: z.string(),
      instrumentId: z.string(),
      pieceName: z.string().min(1),
      duration: z.number().int().min(5).max(120).default(30),
      slices: z.array(quizSliceSchema).length(QUIZ_SLICE_COUNT),
    }))
    .mutation(async ({ ctx, input }) => {
      const { slices, ...quizData } = input;

      return ctx.db.quiz.create({
        data: {
          ...quizData,
          createdById: ctx.session.user.id,
          slices: {
            create: slices,
          },
        },
        include: {
          composer: true,
          instrument: true,
          slices: {
            include: {
              artist: true,
            },
          },
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const quiz = await ctx.db.quiz.findUnique({
        where: { id: input.id },
        select: { createdById: true },
      });

      if (!quiz) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Quiz not found" });
      }

      // Allow deletion if user is admin OR owns the quiz
      const isAdmin = ctx.session.user.email === ADMIN_EMAIL;
      const isOwner = quiz.createdById === ctx.session.user.id;

      if (!isAdmin && !isOwner) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to delete this quiz"
        });
      }

      return ctx.db.quiz.delete({
        where: { id: input.id },
      });
    }),

  like: protectedProcedure
    .input(z.object({ quizId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if quiz exists
      const quiz = await ctx.db.quiz.findUnique({
        where: { id: input.quizId },
      });

      if (!quiz) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Quiz not found" });
      }

      // Check if already liked
      const existingLike = await ctx.db.quizLike.findUnique({
        where: {
          userId_quizId: {
            userId: ctx.session.user.id,
            quizId: input.quizId,
          },
        },
      });

      if (existingLike) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You have already liked this quiz"
        });
      }

      // Create like and increment counter in a transaction
      await ctx.db.$transaction([
        ctx.db.quizLike.create({
          data: {
            userId: ctx.session.user.id,
            quizId: input.quizId,
          },
        }),
        ctx.db.quiz.update({
          where: { id: input.quizId },
          data: { likes: { increment: 1 } },
        }),
      ]);

      return { success: true };
    }),

  unlike: protectedProcedure
    .input(z.object({ quizId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if like exists
      const existingLike = await ctx.db.quizLike.findUnique({
        where: {
          userId_quizId: {
            userId: ctx.session.user.id,
            quizId: input.quizId,
          },
        },
      });

      if (!existingLike) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "You haven't liked this quiz"
        });
      }

      // Delete like and decrement counter in a transaction
      await ctx.db.$transaction([
        ctx.db.quizLike.delete({
          where: {
            userId_quizId: {
              userId: ctx.session.user.id,
              quizId: input.quizId,
            },
          },
        }),
        ctx.db.quiz.update({
          where: { id: input.quizId },
          data: { likes: { decrement: 1 } },
        }),
      ]);

      return { success: true };
    }),

  getLikeStatus: publicProcedure
    .input(z.object({ quizId: z.string() }))
    .query(async ({ ctx, input }) => {
      // If not logged in, return not liked
      if (!ctx.session?.user?.id) {
        return { isLiked: false, isAuthenticated: false };
      }

      const like = await ctx.db.quizLike.findUnique({
        where: {
          userId_quizId: {
            userId: ctx.session.user.id,
            quizId: input.quizId,
          },
        },
      });

      return { isLiked: !!like, isAuthenticated: true };
    }),

  search: publicProcedure
    .input(z.object({
      composerId: z.string().optional(),
      instrumentId: z.string().optional(),
      pieceName: z.string().optional(),
      orderBy: z.enum(["likes", "recent"]).default("likes"),
      limit: z.number().int().min(1).max(100).default(50),
      offset: z.number().int().min(0).default(0),
    }))
    .query(async ({ ctx, input }) => {
      const { composerId, instrumentId, pieceName, orderBy, limit, offset } = input;

      // Build where clause with proper typing
      const where: {
        composerId?: string;
        instrumentId?: string;
        pieceName?: { contains: string; mode: 'insensitive' };
      } = {};

      if (composerId) where.composerId = composerId;
      if (instrumentId) where.instrumentId = instrumentId;
      if (pieceName) {
        where.pieceName = {
          contains: pieceName,
          mode: "insensitive",
        };
      }

      return ctx.db.quiz.findMany({
        where,
        include: {
          composer: true,
          instrument: true,
          createdBy: { select: { id: true, name: true, image: true } },
          slices: {
            include: {
              artist: true,
            },
          },
        },
        orderBy: orderBy === "likes" ? { likes: "desc" } : { createdAt: "desc" },
        take: limit,
        skip: offset,
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      composerId: z.string().optional(),
      instrumentId: z.string().optional(),
      pieceName: z.string().min(1).optional(),
      duration: z.number().int().min(5).max(120).optional(),
      slices: z.array(quizSliceSchema).length(QUIZ_SLICE_COUNT).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, slices, ...updateData } = input;

      // Check ownership
      const quiz = await ctx.db.quiz.findUnique({
        where: { id },
        select: { createdById: true },
      });

      if (!quiz) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Quiz not found" });
      }

      if (quiz.createdById !== ctx.session.user.id) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You can only edit your own quizzes"
        });
      }

      // If slices are provided, update them in a transaction
      if (slices) {
        return ctx.db.$transaction(async (tx) => {
          // Delete old slices
          await tx.quizSlice.deleteMany({
            where: { quizId: id },
          });

          // Update quiz and create new slices
          return tx.quiz.update({
            where: { id },
            data: {
              ...updateData,
              slices: {
                create: slices,
              },
            },
            include: {
              composer: true,
              instrument: true,
              slices: {
                include: {
                  artist: true,
                },
              },
            },
          });
        });
      }

      // Just update quiz metadata
      return ctx.db.quiz.update({
        where: { id },
        data: updateData,
        include: {
          composer: true,
          instrument: true,
          slices: {
            include: {
              artist: true,
            },
          },
        },
      });
    }),
});
