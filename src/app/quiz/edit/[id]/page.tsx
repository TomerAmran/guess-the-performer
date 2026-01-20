"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { SearchableSelect } from "../../create/_components/SearchableSelect";
import { YouTubeClipPicker } from "../../create/_components/YouTubeClipPicker";
import { isValidYouTubeUrl } from "~/app/_components/youtube";

type QuizSlice = {
  artistId: string;
  youtubeUrl: string;
  startTime: number;
};

export default function EditQuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const { data: quiz, isLoading: quizLoading } = api.quiz.getById.useQuery({ id });
  const { data: composers, isLoading: composersLoading, refetch: refetchComposers } = api.composer.getAll.useQuery();
  const { data: instruments, isLoading: instrumentsLoading, refetch: refetchInstruments } = api.instrument.getAll.useQuery();
  const { data: artists, isLoading: artistsLoading, refetch: refetchArtists } = api.artist.getAll.useQuery();

  const [pieceName, setPieceName] = useState("");
  const [composerId, setComposerId] = useState("");
  const [instrumentId, setInstrumentId] = useState("");
  const [duration, setDuration] = useState(30);
  const [slices, setSlices] = useState<QuizSlice[]>([
    { artistId: "", youtubeUrl: "", startTime: 0 },
    { artistId: "", youtubeUrl: "", startTime: 0 },
    { artistId: "", youtubeUrl: "", startTime: 0 },
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const createComposer = api.composer.create.useMutation({
    onSuccess: async () => {
      await refetchComposers();
    },
  });

  const createInstrument = api.instrument.create.useMutation({
    onSuccess: async () => {
      await refetchInstruments();
    },
  });

  const createArtist = api.artist.create.useMutation({
    onSuccess: async () => {
      await refetchArtists();
    },
  });

  const updateQuiz = api.quiz.update.useMutation({
    onSuccess: () => {
      setShowSuccess(true);
    },
    onError: (error) => {
      alert(error.message || "Failed to update quiz");
    },
  });

  // Load quiz data
  useEffect(() => {
    if (quiz) {
      setPieceName(quiz.pieceName);
      setComposerId(quiz.composerId);
      setInstrumentId(quiz.instrumentId);
      setDuration(quiz.duration);
      setSlices(quiz.slices.map(s => ({
        artistId: s.artistId,
        youtubeUrl: s.youtubeUrl,
        startTime: s.startTime,
      })));
    }
  }, [quiz]);

  const updateSlice = (index: number, field: keyof QuizSlice, value: string | number) => {
    setSlices(slices.map((s, i) => 
      i === index ? { ...s, [field]: value } : s
    ));
  };

  const isFormValid = () => {
    if (!pieceName.trim()) return false;
    if (!composerId) return false;
    if (!instrumentId) return false;
    if (duration < 5 || duration > 120) return false;
    
    return slices.every(
      (s) => s.artistId && isValidYouTubeUrl(s.youtubeUrl) && s.startTime >= 0
    );
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    
    updateQuiz.mutate({
      id,
      composerId,
      instrumentId,
      pieceName: pieceName.trim(),
      duration,
      slices,
    });
  };

  if (quizLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
      </main>
    );
  }

  if (!quiz) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
        <h1 className="mb-4 text-2xl font-bold">Quiz not found</h1>
        <Link href="/my-quizzes" className="text-amber-400 hover:text-amber-300">
          ← Back to My Quizzes
        </Link>
      </main>
    );
  }

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-2xl border border-emerald-700/50 bg-emerald-900/20 p-8 text-center backdrop-blur">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-emerald-300">
              Quiz Updated!
            </h2>
            <p className="mb-8 text-slate-300">
              Your changes have been saved successfully.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href={`/quiz/${id}`}
                className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-500"
              >
                View Quiz
              </Link>
              <Link
                href="/my-quizzes"
                className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-800"
              >
                Back to My Quizzes
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/my-quizzes"
          className="mb-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Back to My Quizzes
        </Link>

        <h1 className="mb-2 font-serif text-4xl font-bold tracking-tight text-amber-100">
          Edit Quiz
        </h1>
        <p className="mb-8 text-lg text-slate-400">
          Update your quiz details and performances
        </p>

        <div className="space-y-8">
          {/* Quiz Setup */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 backdrop-blur">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-amber-200">
              Quiz Setup
            </h2>

            <div className="space-y-6">
              {/* Piece Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Piece Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={pieceName}
                  onChange={(e) => setPieceName(e.target.value)}
                  placeholder="e.g., Nocturne Op. 9 No. 2"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Composer */}
              <SearchableSelect
                label="Composer *"
                items={composers ?? []}
                valueId={composerId}
                onChange={setComposerId}
                placeholder="Search for a composer..."
                isLoading={composersLoading}
                emptyText="No composers found"
                createLabel="Add new composer"
                onCreate={async (input) => {
                  const result = await createComposer.mutateAsync(input);
                  return result;
                }}
              />

              {/* Instrument */}
              <SearchableSelect
                label="Instrument *"
                items={instruments?.map(i => ({ id: i.id, name: i.name })) ?? []}
                valueId={instrumentId}
                onChange={setInstrumentId}
                placeholder="Search for an instrument..."
                isLoading={instrumentsLoading}
                emptyText="No instruments found"
                createLabel="Add new instrument"
                onCreate={async (input) => {
                  const result = await createInstrument.mutateAsync({ name: input.name });
                  return result;
                }}
              />

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Clip Duration (seconds) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  min={5}
                  max={120}
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value) || 30)}
                  className="w-32 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
                />
                <p className="mt-1 text-sm text-slate-500">Between 5 and 120 seconds</p>
              </div>
            </div>
          </div>

          {/* Slices */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 backdrop-blur">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-amber-200">
              Performances (3 required)
            </h2>

            <div className="space-y-6">
              {slices.map((slice, idx) => (
                <div key={idx} className="rounded-xl border border-slate-700 bg-slate-900/40 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-black">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-slate-200">Performance {idx + 1}</span>
                  </div>

                  <div className="space-y-4">
                    {/* Artist */}
                    <SearchableSelect
                      label="Artist *"
                      items={artists ?? []}
                      valueId={slice.artistId}
                      onChange={(id) => updateSlice(idx, "artistId", id)}
                      placeholder="Search for an artist..."
                      isLoading={artistsLoading}
                      emptyText="No artists found"
                      createLabel="Add new artist"
                      onCreate={async (input) => {
                        const result = await createArtist.mutateAsync(input);
                        return result;
                      }}
                    />

                    {/* YouTube URL */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        YouTube URL <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="url"
                        value={slice.youtubeUrl}
                        onChange={(e) => updateSlice(idx, "youtubeUrl", e.target.value)}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    {/* Start Time */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Start Time (seconds) <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="number"
                        min={0}
                        value={slice.startTime}
                        onChange={(e) => updateSlice(idx, "startTime", parseInt(e.target.value) || 0)}
                        className="w-32 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    {/* YouTube Preview */}
                    {isValidYouTubeUrl(slice.youtubeUrl) && (
                      <YouTubeClipPicker
                        youtubeUrl={slice.youtubeUrl}
                        startTime={slice.startTime}
                        duration={duration}
                        onChangeStartTime={(seconds) => updateSlice(idx, "startTime", seconds)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <Link
              href="/my-quizzes"
              className="rounded-lg border border-slate-600 px-8 py-3 font-medium text-slate-300 transition-all hover:bg-slate-800"
            >
              Cancel
            </Link>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid() || updateQuiz.isPending}
              className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-black transition-all hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {updateQuiz.isPending ? "Updating..." : "Update Quiz"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
