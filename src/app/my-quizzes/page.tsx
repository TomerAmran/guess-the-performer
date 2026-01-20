"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { ShareButton } from "~/app/_components/ShareButton";

export default function MyQuizzesPage() {
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  
  const { data: quizzes, isLoading } = api.quiz.getMine.useQuery();
  const deleteMutation = api.quiz.delete.useMutation({
    onSuccess: async () => {
      setDeleteConfirmId(null);
      await utils.quiz.getMine.invalidate();
    },
  });
  const utils = api.useUtils();

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync({ id });
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold tracking-tight text-amber-100">
              My Quizzes
            </h1>
            <p className="text-lg text-slate-400">
              Manage your created quizzes
            </p>
          </div>
          <Link
            href="/quiz/create"
            className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-black transition-all hover:bg-amber-500"
          >
            Create New Quiz
          </Link>
        </div>

        {!quizzes || quizzes.length === 0 ? (
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-12 text-center">
            <div className="mb-4 text-6xl">🎵</div>
            <h3 className="mb-2 font-serif text-2xl font-semibold text-slate-300">
              No Quizzes Yet
            </h3>
            <p className="mb-6 text-slate-400">
              You haven&apos;t created any quizzes yet. Create your first one!
            </p>
            <Link
              href="/quiz/create"
              className="inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-black transition-all hover:bg-amber-500"
            >
              Create Your First Quiz
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-amber-500/50"
              >
                <div className="mb-4">
                  <h3 className="mb-1 font-serif text-xl font-semibold text-emerald-300">
                    {quiz.composer.name}
                  </h3>
                  <p className="text-lg text-white">{quiz.pieceName}</p>
                  <p className="text-sm text-slate-400">{quiz.instrument.name}</p>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {quiz.slices.map((slice) => (
                    <span
                      key={slice.id}
                      className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300"
                    >
                      {slice.artist.name}
                    </span>
                  ))}
                </div>

                <div className="mb-4 flex items-center gap-4 border-t border-slate-700 pt-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <span>❤️</span>
                    <span>{quiz.likes}</span>
                  </span>
                  <span>{quiz.duration}s clips</span>
                  <span className="text-xs">
                    {new Date(quiz.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {deleteConfirmId === quiz.id ? (
                  <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3">
                    <p className="mb-3 text-sm text-red-300">
                      Are you sure you want to delete this quiz?
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(quiz.id)}
                        disabled={deleteMutation.isPending}
                        className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition-all hover:bg-red-700 disabled:opacity-50"
                      >
                        {deleteMutation.isPending ? "Deleting..." : "Delete"}
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(null)}
                        disabled={deleteMutation.isPending}
                        className="flex-1 rounded-lg border border-slate-600 px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-700 disabled:opacity-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/quiz/${quiz.id}`}
                      className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white transition-all hover:bg-emerald-700"
                    >
                      Play
                    </Link>
                    <Link
                      href={`/quiz/edit/${quiz.id}`}
                      className="flex-1 rounded-lg border border-amber-500 px-4 py-2 text-center text-sm font-medium text-amber-400 transition-all hover:bg-amber-500 hover:text-black"
                    >
                      Edit
                    </Link>
                    <ShareButton quizId={quiz.id} variant="icon" className="border border-slate-600" />
                    <button
                      onClick={() => setDeleteConfirmId(quiz.id)}
                      className="rounded-lg border border-red-500/50 px-3 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-500/20"
                    >
                      🗑
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
