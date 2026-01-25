"use client";

import { useEffect, useRef, use } from "react";
import { useState } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { QuizForm, type QuizFormData } from "../../_components/QuizForm";
import { PageHeader } from "~/app/_components/PageHeader";
import { useToast } from "~/app/_components/ToastProvider";

export default function EditQuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { showError } = useToast();
  
  const { data: quiz, isLoading: quizLoading } = api.quiz.getById.useQuery({ id }, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [initialValues, setInitialValues] = useState<QuizFormData | undefined>(undefined);
  const formInitialized = useRef(false);

  const updateQuiz = api.quiz.update.useMutation({ 
    onSuccess: () => { setShowSuccess(true); }, 
    onError: (error) => { showError(error.message || "Failed to update quiz"); } 
  });

  // Only initialize form once when quiz data first loads
  useEffect(() => {
    if (quiz && !formInitialized.current) {
      setInitialValues({
        pieceName: quiz.pieceName,
        composerId: quiz.composerId,
        instrumentId: quiz.instrumentId,
        duration: quiz.duration,
        slices: quiz.slices.map(s => ({ artistId: s.artistId, youtubeUrl: s.youtubeUrl, startTime: s.startTime })),
      });
      formInitialized.current = true;
    }
  }, [quiz]);

  const handleSubmit = (data: QuizFormData) => {
    updateQuiz.mutate({ id, ...data });
  };

  if (quizLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-accent-gold)] border-t-transparent" />
      </main>
    );
  }

  if (!quiz) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)]">
        <h1 className="font-body mb-4 text-2xl font-bold text-[var(--color-text-primary)]">Quiz not found</h1>
        <Link href="/my-quizzes" className="font-body-medium text-[var(--color-accent-burgundy)] hover:text-[var(--color-accent-gold)]">← Back to My Quizzes</Link>
      </main>
    );
  }

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-2xl border-2 border-[var(--color-success)]/50 bg-[var(--color-success)]/10 p-8 text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="font-body mb-4 text-3xl font-bold text-[var(--color-success)]">Quiz Updated!</h2>
            <p className="font-body-medium mb-8 text-[var(--color-text-secondary)]">Your changes have been saved successfully.</p>
            <div className="flex justify-center gap-4">
              <Link href={`/quiz/${id}`} className="font-body-semibold rounded-lg bg-[var(--color-success)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:opacity-90">View Quiz</Link>
              <Link href="/my-quizzes" className="font-body-semibold rounded-lg border-2 border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]">Back to My Quizzes</Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <PageHeader backHref="/my-quizzes" backLabel="Back to My Quizzes" />

        <h1 className="font-body mb-2 text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">Edit Quiz</h1>
        <p className="font-body-medium mb-8 text-lg text-[var(--color-text-muted)]">Update your quiz details and performances</p>

        {initialValues && (
          <QuizForm 
            mode="edit" 
            initialValues={initialValues}
            onSubmit={handleSubmit} 
            isSubmitting={updateQuiz.isPending} 
          />
        )}

        <div className="mt-4 flex justify-start">
          <Link href="/my-quizzes" className="font-body-semibold rounded-lg border-2 border-[var(--color-border)] px-8 py-3 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]">Cancel</Link>
        </div>
      </div>
    </main>
  );
}
