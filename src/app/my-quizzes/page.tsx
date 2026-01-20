"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { ShareButton } from "~/app/_components/ShareButton";
import { PageHeader } from "~/app/_components/PageHeader";

export default function MyQuizzesPage() {
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  
  const { data: quizzes, isLoading } = api.quiz.getMine.useQuery();
  const deleteMutation = api.quiz.delete.useMutation({
    onSuccess: async () => { setDeleteConfirmId(null); await utils.quiz.getMine.invalidate(); },
  });
  const utils = api.useUtils();

  const handleDelete = async (id: string) => {
    try { await deleteMutation.mutateAsync({ id }); } catch (error) { console.error("Delete error:", error); }
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-accent-gold)] border-t-transparent" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <PageHeader backHref="/" backLabel="Back to Home" />

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-playfair), serif' }}>My Quizzes</h1>
            <p className="text-lg text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}>Manage your created quizzes</p>
          </div>
          <Link href="/quiz/create" className="rounded-lg bg-[var(--color-accent-gold)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}>Create New Quiz</Link>
        </div>

        {!quizzes || quizzes.length === 0 ? (
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-12 text-center">
            <div className="mb-4 text-6xl">🎵</div>
            <h3 className="mb-2 text-2xl font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-playfair), serif' }}>No Quizzes Yet</h3>
            <p className="mb-6 text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}>You haven&apos;t created any quizzes yet. Create your first one!</p>
            <Link href="/quiz/create" className="inline-block rounded-lg bg-[var(--color-accent-gold)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}>Create Your First Quiz</Link>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-6 transition-all hover:border-[var(--color-accent-gold)]">
                <div className="mb-4">
                  <h3 className="mb-1 text-xl font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-playfair), serif' }}>{quiz.composer.name}</h3>
                  <p className="text-lg italic text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}>{quiz.pieceName}</p>
                  <p className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}>{quiz.instrument.name}</p>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {quiz.slices.map((slice) => <span key={slice.id} className="rounded-full bg-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}>{slice.artist.name}</span>)}
                </div>
                <div className="mb-4 flex items-center gap-4 border-t border-[var(--color-border)] pt-4 text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}>
                  <span className="flex items-center gap-1"><span className="text-[var(--color-accent-burgundy)]">♥</span><span>{quiz.likes}</span></span>
                  <span>{quiz.duration}s clips</span>
                  <span className="text-xs">{new Date(quiz.createdAt).toLocaleDateString()}</span>
                </div>

                {deleteConfirmId === quiz.id ? (
                  <div className="rounded-lg border border-[var(--color-error)]/50 bg-[var(--color-error)]/10 p-3">
                    <p className="mb-3 text-sm text-[var(--color-error)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}>Are you sure you want to delete this quiz?</p>
                    <div className="flex gap-2">
                      <button onClick={() => handleDelete(quiz.id)} disabled={deleteMutation.isPending} className="flex-1 rounded-lg bg-[var(--color-error)] px-3 py-2 text-sm font-medium text-[var(--color-bg-primary)] transition-all hover:opacity-90 disabled:opacity-50" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}>{deleteMutation.isPending ? "Deleting..." : "Delete"}</button>
                      <button onClick={() => setDeleteConfirmId(null)} disabled={deleteMutation.isPending} className="flex-1 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)] disabled:opacity-50" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    <Link href={`/quiz/${quiz.id}`} className="flex-1 rounded-lg bg-[var(--color-success)] px-4 py-2 text-center text-sm font-medium text-[var(--color-bg-primary)] transition-all hover:opacity-90" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}>Play</Link>
                    <Link href={`/quiz/edit/${quiz.id}`} className="flex-1 rounded-lg border border-[var(--color-accent-gold)] px-4 py-2 text-center text-sm font-medium text-[var(--color-accent-gold)] transition-all hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-bg-primary)]" style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}>Edit</Link>
                    <ShareButton quizId={quiz.id} variant="icon" className="border border-[var(--color-border)]" />
                    <button onClick={() => setDeleteConfirmId(quiz.id)} className="rounded-lg border border-[var(--color-error)]/50 px-3 py-2 text-sm font-medium text-[var(--color-error)] transition-all hover:bg-[var(--color-error)]/20">🗑</button>
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
