"use client";

import { useState, useEffect, useRef, useCallback, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { getYouTubeId } from "~/app/_components/youtube";
import { ShareButton } from "~/app/_components/ShareButton";
import type { YTPlayer } from "~/app/_components/youtube-types";
import "~/app/_components/youtube-types";

// localStorage key for saving quiz state
const QUIZ_STATE_KEY = "quiz_state_";

type QuizSlice = {
  id: string;
  startTime: number;
  youtubeUrl: string;
  artist: {
    id: string;
    name: string;
    photoUrl: string | null;
  };
};

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
  const router = useRouter();
  const { data: quiz, isLoading } = api.quiz.getById.useQuery({ id });
  const { data: likeStatus } = api.quiz.getLikeStatus.useQuery(
    { quizId: id },
    { enabled: !!id }
  );

  const likeMutation = api.quiz.like.useMutation();
  const unlikeMutation = api.quiz.unlike.useMutation();
  const utils = api.useUtils();

  const [shuffledSlices, setShuffledSlices] = useState<QuizSlice[]>([]);
  const [shuffledArtists, setShuffledArtists] = useState<{ id: string; name: string; photoUrl: string | null }[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [playersReady, setPlayersReady] = useState(false);
  const [playProgress, setPlayProgress] = useState<Record<number, number>>({});
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [restoredFromStorage, setRestoredFromStorage] = useState(false);

  const playersRef = useRef<(YTPlayer | null)[]>([]);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    if (typeof window !== "undefined" && !window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Restore state from localStorage if available
  useEffect(() => {
    if (!id || !quiz?.slices) return;
    
    try {
      const savedState = localStorage.getItem(QUIZ_STATE_KEY + id);
      if (savedState) {
        const parsed = JSON.parse(savedState) as {
          shuffledSlices?: QuizSlice[];
          shuffledArtists?: { id: string; name: string; photoUrl: string | null }[];
          answers?: Record<string, string>;
        };
        // Verify the saved state matches current quiz structure
        if (parsed.shuffledSlices?.length === quiz.slices.length) {
          setShuffledSlices(parsed.shuffledSlices);
          setShuffledArtists(parsed.shuffledArtists ?? []);
          setAnswers(parsed.answers ?? {});
          setSubmitted(true);
          setRestoredFromStorage(true);
          // Clear the saved state
          localStorage.removeItem(QUIZ_STATE_KEY + id);
        }
      }
    } catch {
      // Ignore parse errors
      localStorage.removeItem(QUIZ_STATE_KEY + id);
    }
  }, [id, quiz?.slices]);

  // Shuffle slices and artists on load (only if not restored from storage)
  useEffect(() => {
    if (quiz?.slices && !restoredFromStorage) {
      const slices = quiz.slices as QuizSlice[];
      // Only shuffle if we haven't already set slices (prevents re-shuffle)
      if (shuffledSlices.length === 0) {
        setShuffledSlices(shuffleArray(slices));
        setShuffledArtists(shuffleArray(slices.map((s) => s.artist)));
      }
    }
    if (quiz) {
      setLikesCount(quiz.likes);
    }
  }, [quiz, restoredFromStorage, shuffledSlices.length]);

  // Update like status
  useEffect(() => {
    if (likeStatus) {
      setIsLiked(likeStatus.isLiked);
      setIsAuthenticated(likeStatus.isAuthenticated);
    }
  }, [likeStatus]);

  // Initialize YouTube players when slices are ready
  useEffect(() => {
    if (shuffledSlices.length === 0 || !quiz) return;

    const initPlayers = () => {
      playersRef.current = [];
      let readyCount = 0;

      shuffledSlices.forEach((slice, idx) => {
        const videoId = getYouTubeId(slice.youtubeUrl);
        if (!videoId) return;

        const player = new window.YT.Player(`player-${idx}`, {
          height: "1",
          width: "1",
          videoId,
          playerVars: {
            autoplay: 0,
            start: slice.startTime,
            controls: 0,
          },
          events: {
            onReady: () => {
              readyCount++;
              if (readyCount === shuffledSlices.length) {
                setPlayersReady(true);
              }
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                setCurrentPlaying((prev) => (prev === idx ? null : prev));
              }
            },
          },
        });
        playersRef.current[idx] = player;
      });
    };

    if (window.YT?.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = initPlayers;
    }

    return () => {
      playersRef.current.forEach((player) => player?.destroy());
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
    };
  }, [shuffledSlices, quiz]);

  const stopAllPlayers = useCallback(() => {
    playersRef.current.forEach((player) => player?.pauseVideo());
    setCurrentPlaying(null);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
  }, []);

  const playRecording = useCallback((idx: number) => {
    if (!playersReady || !quiz) return;

    // Stop any currently playing
    stopAllPlayers();

    const player = playersRef.current[idx];
    const slice = shuffledSlices[idx];
    if (!player || !slice) return;

    // Seek to start and play
    player.seekTo(slice.startTime, true);
    player.playVideo();
    setCurrentPlaying(idx);
    setPlayProgress((prev) => ({ ...prev, [idx]: 0 }));

    // Update progress
    progressIntervalRef.current = setInterval(() => {
      const currentTime = player.getCurrentTime();
      const elapsed = currentTime - slice.startTime;
      const progress = Math.min((elapsed / quiz.duration) * 100, 100);
      setPlayProgress((prev) => ({ ...prev, [idx]: progress }));
    }, 100);

    // Auto-stop after duration
    stopTimeoutRef.current = setTimeout(() => {
      player.pauseVideo();
      setCurrentPlaying(null);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }, quiz.duration * 1000);
  }, [playersReady, quiz, shuffledSlices, stopAllPlayers]);

  const handleSelectArtist = (sliceId: string, artistId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [sliceId]: artistId }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== 3) return;
    stopAllPlayers();
    setSubmitted(true);
  };

  const getCorrectArtistId = (slice: QuizSlice) => slice.artist.id;

  const isCorrect = (sliceId: string) => {
    const slice = shuffledSlices.find((s) => s.id === sliceId);
    if (!slice) return false;
    return answers[sliceId] === getCorrectArtistId(slice);
  };

  const score = submitted
    ? shuffledSlices.filter((s) => isCorrect(s.id)).length
    : 0;

  const handleToggleLike = async () => {
    if (!id) return;

    try {
      if (isLiked) {
        await unlikeMutation.mutateAsync({ quizId: id });
        setIsLiked(false);
        setLikesCount((prev) => Math.max(0, prev - 1));
      } else {
        await likeMutation.mutateAsync({ quizId: id });
        setIsLiked(true);
        setLikesCount((prev) => prev + 1);
      }
      await utils.quiz.getById.invalidate({ id });
    } catch (error) {
      // Handle errors silently or show a toast
      console.error("Like toggle error:", error);
    }
  };

  const handleSignInToLike = () => {
    // Save current quiz state to localStorage before redirecting
    const stateToSave = {
      shuffledSlices,
      shuffledArtists,
      answers,
    };
    localStorage.setItem(QUIZ_STATE_KEY + id, JSON.stringify(stateToSave));
    // Redirect to sign-in with callback to this quiz
    router.push(`/api/auth/signin?callbackUrl=/quiz/${id}`);
  };

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
      {/* Hidden YouTube Players */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        {shuffledSlices.map((_, idx) => (
          <div key={idx} id={`player-${idx}`} />
        ))}
      </div>

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
            {quiz.composer.name} - {quiz.pieceName}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Listen to each recording and match it to the correct artist
          </p>
        </div>

        {/* Audio Players */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-amber-200">
            Listen to the recordings:
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {shuffledSlices.map((slice, idx) => {
              const selectedArtist = shuffledArtists.find(
                (a) => a.id === answers[slice.id]
              );
              const isPlaying = currentPlaying === idx;
              const progress = playProgress[idx] ?? 0;

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
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-black">
                      {idx + 1}
                    </span>
                    {submitted && (
                      <span className={`text-2xl ${isCorrect(slice.id) ? "text-emerald-400" : "text-red-400"}`}>
                        {isCorrect(slice.id) ? "✓" : "✗"}
                      </span>
                    )}
                  </div>

                  {/* Audio Control (before submit) / Video (after submit) */}
                  <div className="mb-4">
                    {submitted ? (
                      /* Show full video after submission */
                      <div className="aspect-video overflow-hidden rounded-lg bg-black">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${getYouTubeId(slice.youtubeUrl)}?start=${slice.startTime}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="border-0"
                        />
                      </div>
                    ) : (
                      /* Audio-only controls before submission */
                      <>
                        <button
                          onClick={() => isPlaying ? stopAllPlayers() : playRecording(idx)}
                          disabled={!playersReady}
                          className={`flex w-full items-center justify-center gap-3 rounded-lg py-4 text-lg font-semibold transition-all ${
                            isPlaying
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-slate-700 text-white hover:bg-slate-600"
                          } disabled:cursor-not-allowed disabled:opacity-50`}
                        >
                          {!playersReady ? (
                            <>
                              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              Loading...
                            </>
                          ) : isPlaying ? (
                            <>
                              <span className="text-2xl">⏹</span>
                              Stop
                            </>
                          ) : (
                            <>
                              <span className="text-2xl">▶</span>
                              Play
                            </>
                          )}
                        </button>

                        {/* Progress Bar */}
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-700">
                          <div
                            className={`h-full transition-all ${isPlaying ? "bg-amber-500" : "bg-slate-600"}`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="mt-1 text-center text-xs text-slate-500">
                          {quiz.duration} seconds
                        </div>
                      </>
                    )}
                  </div>

                  {/* Selected Artist / Result */}
                  <div className="text-center">
                    {submitted ? (
                      /* Show artist name prominently after submission */
                      <div>
                        <div className="text-lg font-semibold text-white">
                          {slice.artist.name}
                        </div>
                        {selectedArtist && (
                          <div className="mt-1 text-sm">
                            <span className="text-slate-400">You guessed: </span>
                            <span className={isCorrect(slice.id) ? "text-emerald-400" : "text-red-400"}>
                              {selectedArtist.name}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Show selection status before submission */
                      selectedArtist ? (
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
                      )
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

                    return (
                      <button
                        key={artist.id}
                        onClick={() => handleSelectArtist(slice.id, artist.id)}
                        className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
                          isSelected
                            ? "bg-amber-500 text-black"
                            : "bg-slate-800 text-white hover:bg-slate-700"
                        }`}
                      >
                        {artist.photoUrl && (
                          <img
                            src={artist.photoUrl}
                            alt={artist.name}
                            className="h-10 w-10 rounded-full object-cover"
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
          {!submitted ? (() => {
            const selectedArtistIds = Object.values(answers);
            const hasDuplicates = new Set(selectedArtistIds).size !== selectedArtistIds.length;
            const allSelected = Object.keys(answers).length === 3;
            const canSubmit = allSelected && !hasDuplicates;

            return (
              <div>
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-black transition-all hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit Answers
                </button>
                {hasDuplicates && allSelected && (
                  <p className="mt-2 text-sm text-red-400">
                    Each recording must have a different artist
                  </p>
                )}
              </div>
            );
          })() : (
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

              {/* Like and Share Section */}
              <div className="mb-6 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Enjoyed this quiz?</span>
                </div>
                <div className="flex items-center gap-4">
                  {isAuthenticated ? (
                    <button
                      onClick={handleToggleLike}
                      disabled={likeMutation.isPending || unlikeMutation.isPending}
                      className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${
                        isLiked
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "border border-slate-600 bg-slate-800 text-white hover:border-red-500 hover:bg-slate-700"
                      } disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      <span className="text-2xl">{isLiked ? "❤️" : "🤍"}</span>
                      <span>{isLiked ? "Liked" : "Like"}</span>
                      <span className="text-sm opacity-75">({likesCount})</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleSignInToLike}
                      className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-6 py-3 font-semibold text-white transition-all hover:border-red-500 hover:bg-slate-700"
                    >
                      <span className="text-2xl">🤍</span>
                      <span>Sign in to like</span>
                      <span className="text-sm opacity-75">({likesCount})</span>
                    </button>
                  )}
                  <ShareButton quizId={id} variant="button" />
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                    setPlayProgress({});
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
