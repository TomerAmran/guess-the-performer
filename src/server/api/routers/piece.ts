import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const pieceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.piece.findMany({
      include: { composer: true },
      orderBy: { name: "asc" },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.piece.findUnique({
        where: { id: input.id },
        include: { composer: true },
      });
    }),

  getByComposer: publicProcedure
    .input(z.object({ composerId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.piece.findMany({
        where: { composerId: input.composerId },
        include: { composer: true },
        orderBy: { name: "asc" },
      });
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      composerId: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.piece.create({
        data: input,
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().min(1).optional(),
      composerId: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.piece.update({
        where: { id },
        data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.piece.delete({
        where: { id: input.id },
      });
    }),
});
