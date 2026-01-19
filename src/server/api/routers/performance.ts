import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure, adminProcedure } from "~/server/api/trpc";

export const performanceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.performance.findMany({
      include: {
        piece: { include: { composer: true } },
        artist: true,
      },
      orderBy: { piece: { name: "asc" } },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.performance.findUnique({
        where: { id: input.id },
        include: {
          piece: { include: { composer: true } },
          artist: true,
        },
      });
    }),

  getByPiece: publicProcedure
    .input(z.object({ pieceId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.performance.findMany({
        where: { pieceId: input.pieceId },
        include: {
          piece: { include: { composer: true } },
          artist: true,
        },
      });
    }),

  create: protectedProcedure
    .input(z.object({
      pieceId: z.string(),
      artistId: z.string(),
      youtubeUrl: z.string().url(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.performance.create({
        data: input,
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      pieceId: z.string().optional(),
      artistId: z.string().optional(),
      youtubeUrl: z.string().url().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.performance.update({
        where: { id },
        data,
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.performance.delete({
        where: { id: input.id },
      });
    }),
});
