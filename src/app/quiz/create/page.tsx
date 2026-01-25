"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { QuizForm, type QuizFormData } from "../_components/QuizForm";
import { PageHeader } from "~/app/_components/PageHeader";
import { useToast } from "~/app/_components/ToastProvider";

export default function CreateQuizPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { showError } = useToast();

  const createQuiz = api.quiz.create.useMutation({ 
    onSuccess: () => { setShowSuccess(true); }, 
    onError: (error) => { showError(error.message || "Failed to create quiz. Please sign in first."); } 
  });

  const handleSubmit = (data: QuizFormData) => {
    createQuiz.mutate(data);
  };

  const handleReset = () => {
    setShowSuccess(false);
  };

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-2xl border-2 border-[var(--color-success)]/50 bg-[var(--color-success)]/10 p-8 text-center">
            <div className="mb-4 text-6xl">🎵</div>
            <h2 className="font-body mb-4 text-3xl font-bold text-[var(--color-success)]">Quiz Created!</h2>
            <p className="font-body-medium mb-8 text-[var(--color-text-secondary)]">Your quiz has been saved and is ready to be played.</p>
            <div className="flex justify-center gap-4">
              <button onClick={handleReset} className="font-body-semibold rounded-lg border-2 border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]">Create Another</button>
              <Link href="/" className="font-body-semibold rounded-lg bg-[var(--color-accent-gold)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]">Back to Home</Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <PageHeader backHref="/" backLabel="Back to Home" />

        <h1 className="font-body mb-2 text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">Create a Quiz</h1>
        <p className="font-body-medium mb-8 text-lg text-[var(--color-text-muted)]">Build a quiz where players match performances to artists</p>

        <QuizForm 
          mode="create" 
          onSubmit={handleSubmit} 
          isSubmitting={createQuiz.isPending} 
        />
      </div>
    </main>
  );
}
