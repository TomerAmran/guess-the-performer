import { postRouter } from "~/server/api/routers/post";
import { composerRouter } from "~/server/api/routers/composer";
import { pieceRouter } from "~/server/api/routers/piece";
import { artistRouter } from "~/server/api/routers/artist";
import { performanceRouter } from "~/server/api/routers/performance";
import { quizRouter } from "~/server/api/routers/quiz";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  composer: composerRouter,
  piece: pieceRouter,
  artist: artistRouter,
  performance: performanceRouter,
  quiz: quizRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
