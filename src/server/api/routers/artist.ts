import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const artistRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.artist.findMany({
      orderBy: { name: "asc" },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.artist.findUnique({
        where: { id: input.id },
      });
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      photoUrl: z.string().url().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.artist.create({
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
      return ctx.db.artist.update({
        where: { id },
        data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.artist.delete({
        where: { id: input.id },
      });
    }),
});
