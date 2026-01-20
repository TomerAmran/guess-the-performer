"use client";

import { useState, useEffect, useRef, use } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { SearchableSelect } from "../../create/_components/SearchableSelect";
import { YouTubeClipPicker } from "../../create/_components/YouTubeClipPicker";
import { isValidYouTubeUrl } from "~/app/_components/youtube";
import { PageHeader } from "~/app/_components/PageHeader";

type QuizSlice = { artistId: string; youtubeUrl: string; startTime: number };

export default function EditQuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  // Disable automatic refetching to prevent form data from being overwritten
  const { data: quiz, isLoading: quizLoading } = api.quiz.getById.useQuery({ id }, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const { data: composers, isLoading: composersLoading, refetch: refetchComposers } = api.composer.getAll.useQuery();
  const { data: instruments, isLoading: instrumentsLoading, refetch: refetchInstruments } = api.instrument.getAll.useQuery();
  const { data: artists, isLoading: artistsLoading, refetch: refetchArtists } = api.artist.getAll.useQuery();

  const [pieceName, setPieceName] = useState("");
  const [composerId, setComposerId] = useState("");
  const [instrumentId, setInstrumentId] = useState("");
  const [duration, setDuration] = useState(30);
  const [slices, setSlices] = useState<QuizSlice[]>([{ artistId: "", youtubeUrl: "", startTime: 0 }, { artistId: "", youtubeUrl: "", startTime: 0 }, { artistId: "", youtubeUrl: "", startTime: 0 }]);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Track if form has been initialized to prevent re-initialization on refetch
  const formInitialized = useRef(false);

  const createComposer = api.composer.create.useMutation({ onSuccess: async () => { await refetchComposers(); } });
  const createInstrument = api.instrument.create.useMutation({ onSuccess: async () => { await refetchInstruments(); } });
  const createArtist = api.artist.create.useMutation({ onSuccess: async () => { await refetchArtists(); } });
  const updateQuiz = api.quiz.update.useMutation({ onSuccess: () => { setShowSuccess(true); }, onError: (error) => { alert(error.message || "Failed to update quiz"); } });

  // Only initialize form once when quiz data first loads
  useEffect(() => {
    if (quiz && !formInitialized.current) {
      setPieceName(quiz.pieceName); 
      setComposerId(quiz.composerId); 
      setInstrumentId(quiz.instrumentId); 
      setDuration(quiz.duration);
      setSlices(quiz.slices.map(s => ({ artistId: s.artistId, youtubeUrl: s.youtubeUrl, startTime: s.startTime })));
      formInitialized.current = true;
    }
  }, [quiz]);

  const updateSlice = (index: number, field: keyof QuizSlice, value: string | number) => {
    setSlices(slices.map((s, i) => i === index ? { ...s, [field]: value } : s));
  };

  const isFormValid = () => {
    if (!pieceName.trim() || !composerId || !instrumentId || duration < 5 || duration > 120) return false;
    return slices.every((s) => s.artistId && isValidYouTubeUrl(s.youtubeUrl) && s.startTime >= 0);
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    updateQuiz.mutate({ id, composerId, instrumentId, pieceName: pieceName.trim(), duration, slices });
  };

  if (quizLoading) {
    return <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)]"><div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-accent-gold)] border-t-transparent" /></main>;
  }

  if (!quiz) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)]">
        <h1 className="mb-4 text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>Quiz not found</h1>
        <Link href="/my-quizzes" className="text-[var(--color-accent-burgundy)] hover:text-[var(--color-accent-gold)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>← Back to My Quizzes</Link>
      </main>
    );
  }

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-2xl border-2 border-[var(--color-success)]/50 bg-[var(--color-success)]/10 p-8 text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="mb-4 text-3xl font-bold text-[var(--color-success)]" style={{ fontFamily: 'var(--font-body), serif' }}>Quiz Updated!</h2>
            <p className="mb-8 text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>Your changes have been saved successfully.</p>
            <div className="flex justify-center gap-4">
              <Link href={`/quiz/${id}`} className="rounded-lg bg-[var(--color-success)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:opacity-90" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>View Quiz</Link>
              <Link href="/my-quizzes" className="rounded-lg border-2 border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>Back to My Quizzes</Link>
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

        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>Edit Quiz</h1>
        <p className="mb-8 text-lg text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>Update your quiz details and performances</p>

        <div className="space-y-8">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-8">
            <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>Quiz Setup</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>Piece Name <span className="text-[var(--color-error)]">*</span></label>
                <input type="text" value={pieceName} onChange={(e) => setPieceName(e.target.value)} placeholder="e.g., Nocturne Op. 9 No. 2" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }} />
              </div>
              <SearchableSelect label="Composer *" items={composers ?? []} valueId={composerId} onChange={setComposerId} placeholder="Search for a composer..." isLoading={composersLoading} emptyText="No composers found" createLabel="Add new composer" onCreate={async (input) => { const result = await createComposer.mutateAsync(input); return result; }} />
              <SearchableSelect label="Instrument *" items={instruments?.map(i => ({ id: i.id, name: i.name })) ?? []} valueId={instrumentId} onChange={setInstrumentId} placeholder="Search for an instrument..." isLoading={instrumentsLoading} emptyText="No instruments found" createLabel="Add new instrument" onCreate={async (input) => { const result = await createInstrument.mutateAsync({ name: input.name }); return result; }} />
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>Clip Duration (seconds) <span className="text-[var(--color-error)]">*</span></label>
                <input type="number" min={5} max={120} value={duration} onChange={(e) => setDuration(parseInt(e.target.value) || 30)} className="w-32 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-2 text-[var(--color-text-primary)] focus:border-[var(--color-accent-gold)] focus:outline-none" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }} />
                <p className="mt-1 text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>Between 5 and 120 seconds</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-8">
            <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>Performances (3 required)</h2>
            <div className="space-y-6">
              {slices.map((slice, idx) => (
                <div key={idx} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-input)]/80 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-gold)] text-lg font-bold text-[var(--color-bg-primary)]">{idx + 1}</span>
                    <span className="font-medium text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>Performance {idx + 1}</span>
                  </div>
                  <div className="space-y-4">
                    <SearchableSelect label="Artist *" items={artists ?? []} valueId={slice.artistId} onChange={(id) => updateSlice(idx, "artistId", id)} placeholder="Search for an artist..." isLoading={artistsLoading} emptyText="No artists found" createLabel="Add new artist" onCreate={async (input) => { const result = await createArtist.mutateAsync(input); return result; }} />
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>YouTube URL <span className="text-[var(--color-error)]">*</span></label>
                      <input type="url" value={slice.youtubeUrl} onChange={(e) => updateSlice(idx, "youtubeUrl", e.target.value)} placeholder="https://www.youtube.com/watch?v=..." className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>Start Time (seconds) <span className="text-[var(--color-error)]">*</span></label>
                      <input type="number" min={0} value={slice.startTime} onChange={(e) => updateSlice(idx, "startTime", parseInt(e.target.value) || 0)} className="w-32 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-2 text-[var(--color-text-primary)] focus:border-[var(--color-accent-gold)] focus:outline-none" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }} />
                    </div>
                    {isValidYouTubeUrl(slice.youtubeUrl) && <YouTubeClipPicker youtubeUrl={slice.youtubeUrl} startTime={slice.startTime} duration={duration} onChangeStartTime={(seconds) => updateSlice(idx, "startTime", seconds)} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link href="/my-quizzes" className="rounded-lg border-2 border-[var(--color-border)] px-8 py-3 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>Cancel</Link>
            <button onClick={handleSubmit} disabled={!isFormValid() || updateQuiz.isPending} className="rounded-lg bg-[var(--color-accent-gold)] px-8 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)] disabled:cursor-not-allowed disabled:opacity-40" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>{updateQuiz.isPending ? "Updating..." : "Update Quiz"}</button>
          </div>
        </div>
      </div>
    </main>
  );
}
