import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

const quizSliceSchema = z.object({
  performanceId: z.string(),
  startTime: z.number().int().min(0).default(0),
});

export const quizRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.quiz.findMany({
      include: {
        piece: { include: { composer: true } },
        createdBy: { select: { id: true, name: true, image: true } },
        slices: {
          include: {
            performance: { include: { artist: true } },
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
          piece: { include: { composer: true } },
          createdBy: { select: { id: true, name: true, image: true } },
          slices: {
            include: {
              performance: { include: { artist: true } },
            },
          },
        },
      });
    }),

  getMine: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.quiz.findMany({
      where: { createdById: ctx.session.user.id },
      include: {
        piece: { include: { composer: true } },
        slices: {
          include: {
            performance: { include: { artist: true } },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  create: protectedProcedure
    .input(z.object({
      pieceId: z.string(),
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
          piece: { include: { composer: true } },
          slices: {
            include: {
              performance: { include: { artist: true } },
            },
          },
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Only allow deletion of own quizzes
      const quiz = await ctx.db.quiz.findUnique({
        where: { id: input.id },
        select: { createdById: true },
      });

      if (!quiz || quiz.createdById !== ctx.session.user.id) {
        throw new Error("Not authorized to delete this quiz");
      }

      return ctx.db.quiz.delete({
        where: { id: input.id },
      });
    }),
});
