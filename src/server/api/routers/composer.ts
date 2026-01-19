import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const composerRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.composer.findMany({
      orderBy: { name: "asc" },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.composer.findUnique({
        where: { id: input.id },
      });
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      photoUrl: z.string().url().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.composer.create({
        data: input,
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().min(1).optional(),
      photoUrl: z.string().url().nullable().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.composer.update({
        where: { id },
        data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.composer.delete({
        where: { id: input.id },
      });
    }),
});
