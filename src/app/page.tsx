import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { ShareButton } from "./_components/ShareButton";

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
                Most Popular Quizzes
              </h2>
              <div className="space-y-3">
                {quizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition-all hover:border-emerald-500 hover:bg-emerald-500/20"
                  >
                    <Link
                      href={`/quiz/${quiz.id}`}
                      className="flex-1"
                    >
                      <div className="font-semibold text-emerald-300">
                        {quiz.composer.name} - {quiz.pieceName}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span>{quiz.instrument.name}</span>
                        <span>•</span>
                        <span>{quiz.slices.length} recordings</span>
                        <span>•</span>
                        <span>{quiz.duration}s clips</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span>❤️</span>
                          <span>{quiz.likes} {quiz.likes === 1 ? 'like' : 'likes'}</span>
                        </span>
                      </div>
                    </Link>
                    <div className="ml-4 flex items-center gap-2">
                      <ShareButton quizId={quiz.id} variant="icon" />
                      <Link
                        href={`/quiz/${quiz.id}`}
                        className="text-2xl"
                      >
                        ▶
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {session && (
              <Link
                className="flex flex-col gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 transition-all hover:border-emerald-500 hover:bg-emerald-500/20"
                href="/my-quizzes"
              >
                <h3 className="text-2xl font-bold text-emerald-300">My Quizzes →</h3>
                <p className="text-slate-300">
                  View, edit, and manage your created quizzes.
                </p>
              </Link>
            )}
            <Link
              className="flex flex-col gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 transition-all hover:border-blue-500 hover:bg-blue-500/20"
              href="/quiz/search"
            >
              <h3 className="text-2xl font-bold text-blue-300">Search Quizzes →</h3>
              <p className="text-slate-300">
                Find quizzes by composer, instrument, or piece name.
              </p>
            </Link>
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
              <h3 className="text-2xl font-bold text-slate-200">Admin Panel →</h3>
              <p className="text-slate-400">
                Manage composers, artists, and instruments.
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
