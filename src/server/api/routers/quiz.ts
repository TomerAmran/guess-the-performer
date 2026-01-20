import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

const ADMIN_EMAIL = "tomerflute@gmail.com";

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
        createdBy: { select: { id: true, name: true, image: true } },
        slices: {
          include: {
            artist: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.quiz.findUnique({
        where: { id: input.id },
        include: {
          composer: true,
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
      pieceName: z.string().min(1),
      duration: z.number().int().min(5).max(120).default(30),
      slices: z.array(quizSliceSchema).length(3),
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
});
