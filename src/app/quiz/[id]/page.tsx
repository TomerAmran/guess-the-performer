"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";

type PerformanceSlice = {
  id: string;
  startTime: number;
  performance: {
    id: string;
    youtubeUrl: string;
    artist: {
      id: string;
      name: string;
      photoUrl: string | null;
    };
  };
};

// Extract YouTube video ID from URL
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  return match?.[1] ?? null;
}

// Shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}

export default function QuizPlayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: quiz, isLoading } = api.quiz.getById.useQuery({ id });

  const [shuffledSlices, setShuffledSlices] = useState<PerformanceSlice[]>([]);
  const [shuffledArtists, setShuffledArtists] = useState<{ id: string; name: string; photoUrl: string | null }[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // sliceId -> artistId
  const [submitted, setSubmitted] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  // Shuffle slices and artists on load
  useEffect(() => {
    if (quiz?.slices) {
      const slices = quiz.slices as PerformanceSlice[];
      setShuffledSlices(shuffleArray(slices));
      setShuffledArtists(shuffleArray(slices.map((s) => s.performance.artist)));
    }
  }, [quiz]);

  const handleSelectArtist = (sliceId: string, artistId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [sliceId]: artistId }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== 3) return;
    setSubmitted(true);
  };

  const getCorrectArtistId = (slice: PerformanceSlice) => slice.performance.artist.id;

  const isCorrect = (sliceId: string) => {
    const slice = shuffledSlices.find((s) => s.id === sliceId);
    if (!slice) return false;
    return answers[sliceId] === getCorrectArtistId(slice);
  };

  const score = submitted
    ? shuffledSlices.filter((s) => isCorrect(s.id)).length
    : 0;

  if (isLoading) {
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
        <Link href="/" className="text-amber-400 hover:text-amber-300">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="mb-8 text-center">
          <h1 className="mb-2 font-serif text-3xl font-bold text-amber-100">
            Who&apos;s Playing?
          </h1>
          <p className="text-xl text-slate-300">
            {quiz.piece.composer.name} - {quiz.piece.name}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Match each recording to the correct artist
          </p>
        </div>

        {/* Audio Players */}
        <div className="mb-8 space-y-4">
          <h2 className="text-lg font-semibold text-amber-200">
            Listen to the recordings:
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {shuffledSlices.map((slice, idx) => {
              const videoId = getYouTubeId(slice.performance.youtubeUrl);
              const selectedArtist = shuffledArtists.find(
                (a) => a.id === answers[slice.id]
              );

              return (
                <div
                  key={slice.id}
                  className={`rounded-xl border-2 p-4 transition-all ${
                    submitted
                      ? isCorrect(slice.id)
                        ? "border-emerald-500 bg-emerald-500/10"
                        : "border-red-500 bg-red-500/10"
                      : answers[slice.id]
                        ? "border-amber-500 bg-amber-500/10"
                        : "border-slate-700 bg-slate-800/50"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 font-bold text-black">
                      {idx + 1}
                    </span>
                    {submitted && (
                      <span className={isCorrect(slice.id) ? "text-emerald-400" : "text-red-400"}>
                        {isCorrect(slice.id) ? "✓" : "✗"}
                      </span>
                    )}
                  </div>

                  {/* YouTube Embed */}
                  {videoId && (
                    <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?start=${slice.startTime}&end=${slice.startTime + quiz.duration}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                  )}

                  {/* Selected Artist */}
                  <div className="text-center">
                    {selectedArtist ? (
                      <div className="text-sm">
                        <span className="text-slate-400">Your answer: </span>
                        <span className="font-medium text-amber-300">
                          {selectedArtist.name}
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm text-slate-500">
                        Select an artist below
                      </div>
                    )}
                    {submitted && !isCorrect(slice.id) && (
                      <div className="mt-1 text-sm text-emerald-400">
                        Correct: {slice.performance.artist.name}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Artist Selection */}
        {!submitted && (
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-amber-200">
              Select artists for each recording:
            </h2>

            {shuffledSlices.map((slice, sliceIdx) => (
              <div key={slice.id} className="mb-4">
                <p className="mb-2 text-sm text-slate-400">
                  Recording {sliceIdx + 1}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {shuffledArtists.map((artist) => {
                    const isSelected = answers[slice.id] === artist.id;
                    const isUsedElsewhere =
                      !isSelected &&
                      Object.values(answers).includes(artist.id);

                    return (
                      <button
                        key={artist.id}
                        onClick={() => handleSelectArtist(slice.id, artist.id)}
                        disabled={isUsedElsewhere}
                        className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
                          isSelected
                            ? "bg-amber-500 text-black"
                            : isUsedElsewhere
                              ? "cursor-not-allowed bg-slate-800 text-slate-600 opacity-50"
                              : "bg-slate-800 text-white hover:bg-slate-700"
                        }`}
                      >
                        {artist.photoUrl && (
                          <img
                            src={artist.photoUrl}
                            alt={artist.name}
                            className="h-6 w-6 rounded-full object-cover"
                          />
                        )}
                        <span className="font-medium">{artist.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submit / Results */}
        <div className="text-center">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== 3}
              className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-black transition-all hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Answers
            </button>
          ) : (
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="mb-2 font-serif text-2xl font-bold">
                {score === 3
                  ? "🎉 Perfect Score!"
                  : score === 2
                    ? "👏 Great Job!"
                    : score === 1
                      ? "👍 Not Bad!"
                      : "😅 Better Luck Next Time!"}
              </h2>
              <p className="mb-4 text-xl">
                You got <span className="font-bold text-amber-400">{score}/3</span> correct
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                    setShuffledSlices(shuffleArray(shuffledSlices));
                    setShuffledArtists(shuffleArray(shuffledArtists));
                  }}
                  className="rounded-lg border border-slate-600 px-6 py-2 font-medium text-slate-300 transition-all hover:bg-slate-700"
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="rounded-lg bg-amber-600 px-6 py-2 font-semibold text-black transition-all hover:bg-amber-500"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
