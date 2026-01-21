import { composerRouter } from "~/server/api/routers/composer";
import { artistRouter } from "~/server/api/routers/artist";
import { instrumentRouter } from "~/server/api/routers/instrument";
import { quizRouter } from "~/server/api/routers/quiz";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  composer: composerRouter,
  artist: artistRouter,
  instrument: instrumentRouter,
  quiz: quizRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.quiz.getAll();
 *       ^? Quiz[]
 */
export const createCaller = createCallerFactory(appRouter);
