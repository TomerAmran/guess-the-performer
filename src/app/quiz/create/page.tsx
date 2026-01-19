"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";

type QuizSlice = {
  performanceId: string;
  startTime: number;
};

export default function CreateQuizPage() {
  const [step, setStep] = useState(1);
  const [selectedPieceId, setSelectedPieceId] = useState<string>("");
  const [selectedSlices, setSelectedSlices] = useState<QuizSlice[]>([]);
  const [duration, setDuration] = useState(30);

  const { data: pieces, isLoading: piecesLoading } = api.piece.getAll.useQuery();
  const { data: performances, isLoading: performancesLoading } = api.performance.getByPiece.useQuery(
    { pieceId: selectedPieceId },
    { enabled: !!selectedPieceId }
  );

  const createQuiz = api.quiz.create.useMutation({
    onSuccess: () => {
      setStep(4);
    },
    onError: (error) => {
      alert(error.message || "Failed to create quiz. Please sign in first.");
    },
  });

  const selectedPiece = pieces?.find((p) => p.id === selectedPieceId);
  const availablePerformances = performances ?? [];

  const togglePerformance = (performanceId: string) => {
    const existing = selectedSlices.find((s) => s.performanceId === performanceId);
    if (existing) {
      setSelectedSlices(selectedSlices.filter((s) => s.performanceId !== performanceId));
    } else if (selectedSlices.length < 3) {
      setSelectedSlices([...selectedSlices, { performanceId, startTime: 0 }]);
    }
  };

  const updateStartTime = (performanceId: string, startTime: number) => {
    setSelectedSlices(
      selectedSlices.map((s) =>
        s.performanceId === performanceId ? { ...s, startTime } : s
      )
    );
  };

  const handleSubmit = () => {
    if (selectedSlices.length !== 3) return;
    createQuiz.mutate({
      pieceId: selectedPieceId,
      duration,
      slices: selectedSlices,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-2 font-serif text-4xl font-bold tracking-tight text-amber-100">
          Create a Quiz
        </h1>
        <p className="mb-8 text-lg text-slate-400">
          Build a quiz where players match performances to artists
        </p>

        {/* Progress Steps */}
        <div className="mb-12 flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold transition-all ${
                  step >= s
                    ? "border-amber-500 bg-amber-500 text-black"
                    : "border-slate-600 text-slate-500"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`mx-4 h-1 w-24 rounded transition-all ${
                    step > s ? "bg-amber-500" : "bg-slate-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Piece */}
        {step === 1 && (
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 backdrop-blur">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-amber-200">
              Step 1: Choose a Piece
            </h2>

            {piecesLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
              </div>
            ) : pieces?.length === 0 ? (
              <div className="rounded-xl bg-slate-900/50 p-8 text-center">
                <p className="mb-4 text-slate-400">No pieces available yet.</p>
                <Link
                  href="/admin/pieces"
                  className="inline-block rounded-lg bg-amber-600 px-6 py-2 font-medium text-black hover:bg-amber-500 transition-colors"
                >
                  Add Pieces First
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {pieces?.map((piece) => (
                  <button
                    key={piece.id}
                    onClick={() => setSelectedPieceId(piece.id)}
                    className={`w-full rounded-xl p-4 text-left transition-all ${
                      selectedPieceId === piece.id
                        ? "bg-amber-500/20 border-2 border-amber-500"
                        : "bg-slate-900/40 border-2 border-transparent hover:border-slate-600"
                    }`}
                  >
                    <div className="font-semibold text-lg">{piece.name}</div>
                    <div className="text-slate-400">{piece.composer.name}</div>
                  </button>
                ))}
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedPieceId}
                className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-black transition-all hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Performances */}
        {step === 2 && (
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 backdrop-blur">
            <h2 className="mb-2 font-serif text-2xl font-semibold text-amber-200">
              Step 2: Select 3 Performances
            </h2>
            <p className="mb-6 text-slate-400">
              Choose exactly 3 different artists performing{" "}
              <span className="text-amber-300">{selectedPiece?.name}</span>
            </p>

            {performancesLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
              </div>
            ) : availablePerformances.length < 3 ? (
              <div className="rounded-xl bg-slate-900/50 p-8 text-center">
                <p className="mb-4 text-slate-400">
                  Need at least 3 performances. Currently have {availablePerformances.length}.
                </p>
                <Link
                  href="/admin/performances"
                  className="inline-block rounded-lg bg-amber-600 px-6 py-2 font-medium text-black hover:bg-amber-500 transition-colors"
                >
                  Add More Performances
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-slate-500">
                  Selected: {selectedSlices.length}/3
                </div>
                <div className="space-y-3">
                  {availablePerformances.map((perf) => {
                    const isSelected = selectedSlices.some((s) => s.performanceId === perf.id);
                    return (
                      <button
                        key={perf.id}
                        onClick={() => togglePerformance(perf.id)}
                        disabled={!isSelected && selectedSlices.length >= 3}
                        className={`w-full rounded-xl p-4 text-left transition-all ${
                          isSelected
                            ? "bg-amber-500/20 border-2 border-amber-500"
                            : "bg-slate-900/40 border-2 border-transparent hover:border-slate-600 disabled:opacity-40"
                        }`}
                      >
                        <div className="font-semibold text-lg">{perf.artist.name}</div>
                        <div className="text-sm text-slate-400 truncate">{perf.youtubeUrl}</div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-800"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={selectedSlices.length !== 3}
                className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-black transition-all hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Configure & Submit */}
        {step === 3 && (
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 backdrop-blur">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-amber-200">
              Step 3: Set Start Times
            </h2>

            <div className="mb-8 space-y-4">
              {selectedSlices.map((slice, idx) => {
                const perf = availablePerformances.find((p) => p.id === slice.performanceId);
                return (
                  <div key={slice.performanceId} className="rounded-xl bg-slate-900/40 p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 font-bold text-black">
                        {idx + 1}
                      </span>
                      <span className="font-medium">{perf?.artist.name}</span>
                    </div>
                    <label className="flex items-center gap-4">
                      <span className="text-sm text-slate-400">Start time (seconds):</span>
                      <input
                        type="number"
                        min={0}
                        value={slice.startTime}
                        onChange={(e) => updateStartTime(slice.performanceId, parseInt(e.target.value) || 0)}
                        className="w-24 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white focus:border-amber-500 focus:outline-none"
                      />
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Clip Duration (seconds)
              </label>
              <input
                type="number"
                min={5}
                max={120}
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value) || 30)}
                className="w-32 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-800"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={createQuiz.isPending}
                className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-black transition-all hover:bg-amber-500 disabled:opacity-60"
              >
                {createQuiz.isPending ? "Creating..." : "Create Quiz"}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="rounded-2xl border border-emerald-700/50 bg-emerald-900/20 p-8 text-center backdrop-blur">
            <div className="mb-4 text-6xl">🎵</div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-emerald-300">
              Quiz Created!
            </h2>
            <p className="mb-8 text-slate-300">
              Your quiz has been saved and is ready to be played.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedPieceId("");
                  setSelectedSlices([]);
                  setDuration(30);
                }}
                className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-800"
              >
                Create Another
              </button>
              <Link
                href="/"
                className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-black transition-all hover:bg-amber-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
