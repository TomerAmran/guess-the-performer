import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await auth();
  const quizzes = await api.quiz.getAll();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
        <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-16">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight sm:text-7xl">
              Classical Music
              <span className="block text-amber-400">Quiz</span>
            </h1>
            <p className="text-xl text-slate-400">
              Can you tell the masters apart?
            </p>
          </div>

          {/* Available Quizzes */}
          {quizzes.length > 0 && (
            <div className="w-full max-w-2xl">
              <h2 className="mb-4 text-center font-serif text-2xl font-semibold text-amber-200">
                Play a Quiz
              </h2>
              <div className="space-y-3">
                {quizzes.map((quiz) => (
                  <Link
                    key={quiz.id}
                    href={`/quiz/${quiz.id}`}
                    className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition-all hover:border-emerald-500 hover:bg-emerald-500/20"
                  >
                    <div>
                      <div className="font-semibold text-emerald-300">
                        {quiz.composer.name} - {quiz.pieceName}
                      </div>
                      <div className="text-sm text-slate-400">
                        {quiz.instrument.name} • {quiz.slices.length} recordings • {quiz.duration}s clips
                      </div>
                    </div>
                    <span className="text-2xl">▶</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              className="flex flex-col gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 transition-all hover:border-amber-500 hover:bg-amber-500/20"
              href="/quiz/create"
            >
              <h3 className="text-2xl font-bold text-amber-300">Create Quiz →</h3>
              <p className="text-slate-300">
                Build a quiz with 3 performances of the same piece by different artists.
              </p>
            </Link>
            <Link
              className="flex flex-col gap-3 rounded-2xl border border-slate-600/50 bg-slate-800/30 p-6 transition-all hover:border-slate-500 hover:bg-slate-800/50"
              href="/admin"
            >
              <h3 className="text-2xl font-bold text-slate-200">Add Content →</h3>
              <p className="text-slate-400">
                Add composers, artists, pieces, and YouTube performances.
              </p>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-lg text-slate-400">
              {session ? (
                <span>Welcome, {session.user?.name}</span>
              ) : (
                <span>Sign in to create and save quizzes</span>
              )}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full border border-slate-600 bg-slate-800/50 px-8 py-3 font-semibold transition hover:border-amber-500 hover:bg-slate-800"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
