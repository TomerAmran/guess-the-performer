"use client";

import { useState, useEffect, useRef, useCallback, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { getYouTubeId } from "~/app/_components/youtube";
import { ShareButton } from "~/app/_components/ShareButton";
import { PageHeader } from "~/app/_components/PageHeader";
import { ComposerAvatar } from "~/app/_components/ComposerAvatar";
import type { YTPlayer } from "~/app/_components/youtube-types";

// Instrument icons mapping
const instrumentIcons: Record<string, string> = {
  piano: "🎹",
  violin: "🎻",
  cello: "🎻",
  viola: "🎻",
  flute: "🪈",
  clarinet: "🎷",
  oboe: "🎷",
  bassoon: "🎷",
  trumpet: "🎺",
  horn: "🎺",
  trombone: "🎺",
  tuba: "🎺",
  guitar: "🎸",
  harp: "🎵",
  organ: "🎹",
  voice: "🎤",
  soprano: "🎤",
  tenor: "🎤",
  baritone: "🎤",
  bass: "🎤",
  orchestra: "🎼",
  chamber: "🎼",
};

function getInstrumentIcon(instrumentName: string): string {
  const name = instrumentName.toLowerCase();
  for (const [key, icon] of Object.entries(instrumentIcons)) {
    if (name.includes(key)) return icon;
  }
  return "🎵";
}
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
        if (parsed.shuffledSlices?.length === quiz.slices.length) {
          setShuffledSlices(parsed.shuffledSlices);
          setShuffledArtists(parsed.shuffledArtists ?? []);
          setAnswers(parsed.answers ?? {});
          setSubmitted(true);
          setRestoredFromStorage(true);
          localStorage.removeItem(QUIZ_STATE_KEY + id);
        }
      }
    } catch {
      localStorage.removeItem(QUIZ_STATE_KEY + id);
    }
  }, [id, quiz?.slices]);

  // Shuffle slices and artists on load
  useEffect(() => {
    if (quiz?.slices && !restoredFromStorage) {
      const slices = quiz.slices as QuizSlice[];
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

  // Initialize YouTube players
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
          playerVars: { autoplay: 0, start: slice.startTime, controls: 0 },
          events: {
            onReady: () => {
              readyCount++;
              if (readyCount === shuffledSlices.length) setPlayersReady(true);
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

    if (window.YT?.Player) initPlayers();
    else window.onYouTubeIframeAPIReady = initPlayers;

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
    stopAllPlayers();

    const player = playersRef.current[idx];
    const slice = shuffledSlices[idx];
    if (!player || !slice) return;

    player.seekTo(slice.startTime, true);
    player.playVideo();
    setCurrentPlaying(idx);
    setPlayProgress((prev) => ({ ...prev, [idx]: 0 }));

    progressIntervalRef.current = setInterval(() => {
      const currentTime = player.getCurrentTime();
      const elapsed = currentTime - slice.startTime;
      const progress = Math.min((elapsed / quiz.duration) * 100, 100);
      setPlayProgress((prev) => ({ ...prev, [idx]: progress }));
    }, 100);

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

  const score = submitted ? shuffledSlices.filter((s) => isCorrect(s.id)).length : 0;

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
      console.error("Like toggle error:", error);
    }
  };

  const handleSignInToLike = () => {
    const stateToSave = { shuffledSlices, shuffledArtists, answers };
    localStorage.setItem(QUIZ_STATE_KEY + id, JSON.stringify(stateToSave));
    router.push(`/api/auth/signin?callbackUrl=/quiz/${id}`);
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-accent-gold)] border-t-transparent" />
      </main>
    );
  }

  if (!quiz) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)]">
        <h1 className="mb-4 text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>
          Quiz not found
        </h1>
        <Link href="/" className="text-[var(--color-accent-burgundy)] hover:text-[var(--color-accent-gold)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
      {/* Hidden YouTube Players */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        {shuffledSlices.map((_, idx) => <div key={idx} id={`player-${idx}`} />)}
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <PageHeader backHref="/" backLabel="Back to Home" />

        {/* Header */}
        <div className="mb-8">
          <p className="mb-4 text-center text-sm uppercase tracking-widest text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
            Who&apos;s Playing?
          </p>
          
          {/* Piece info grid */}
          <div className="flex items-center justify-center gap-4">
            <ComposerAvatar 
              name={quiz.composer.name} 
              photoUrl={quiz.composer.photoUrl} 
              size="lg" 
            />
            <div>
              <h1 className="text-xl font-bold text-[var(--color-text-primary)] md:text-2xl" style={{ fontFamily: 'var(--font-body), serif' }}>
                {quiz.pieceName}
              </h1>
              <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
                <span>{quiz.composer.name}</span>
                <span className="text-[var(--color-border)]">•</span>
                <span>{getInstrumentIcon(quiz.instrument.name)} {quiz.instrument.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results View - Summary + Full-width Videos */}
        {submitted && (
          <div className="mb-6 md:mb-8">
            {/* Horizontal Summary Cards */}
            <div className="mb-6 grid grid-cols-3 gap-2 md:gap-4">
              {shuffledSlices.map((slice) => {
                const selectedArtist = shuffledArtists.find((a) => a.id === answers[slice.id]);
                const correct = isCorrect(slice.id);
                
                const scrollToVideo = () => {
                  const element = document.getElementById(`video-${slice.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                };

                return (
                  <div
                    key={slice.id}
                    className={`flex flex-col rounded-lg border-2 p-2 text-center md:p-3 ${
                      correct
                        ? "border-[var(--color-success)] bg-[var(--color-success)]/10"
                        : "border-[var(--color-error)] bg-[var(--color-error)]/10"
                    }`}
                  >
                    {/* Content area - grows to fill space */}
                    <div className="flex-1">
                      {/* Status indicator */}
                      <span className={`mb-1 inline-block text-2xl md:text-3xl ${correct ? "text-[var(--color-success)]" : "text-[var(--color-error)]"}`}>
                        {correct ? "✓" : "✗"}
                      </span>
                      
                      {correct ? (
                        /* Correct: just show name in green */
                        <div className="text-xs font-semibold text-[var(--color-success)] md:text-sm" style={{ fontFamily: 'var(--font-body), serif' }}>
                          {slice.artist.name}
                        </div>
                      ) : (
                        /* Wrong: strikethrough guess in red, then correct in white */
                        <div className="space-y-0.5">
                          {selectedArtist && (
                            <div className="text-xs text-[var(--color-error)] line-through md:text-sm" style={{ fontFamily: 'var(--font-body), serif' }}>
                              {selectedArtist.name}
                            </div>
                          )}
                          <div className="text-xs font-semibold text-[var(--color-text-primary)] md:text-sm" style={{ fontFamily: 'var(--font-body), serif' }}>
                            {slice.artist.name}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Play button - always at bottom */}
                    <button
                      onClick={scrollToVideo}
                      className={`mt-2 flex items-center justify-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-white md:px-3 md:py-1.5 md:text-sm ${
                        correct
                          ? "bg-[var(--color-success)]"
                          : "bg-[var(--color-error)]"
                      }`}
                      style={{ fontFamily: 'var(--font-body), serif' }}
                    >
                      <span>▶</span>
                      <span className="hidden md:inline">Watch</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Full-width Stacked Videos */}
            <h3 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif' }}>
              Performances
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {shuffledSlices.map((slice) => {
                const selectedArtist = shuffledArtists.find((a) => a.id === answers[slice.id]);
                const correct = isCorrect(slice.id);

                return (
                  <div
                    key={slice.id}
                    id={`video-${slice.id}`}
                    className={`overflow-hidden rounded-xl border-2 ${
                      correct
                        ? "border-[var(--color-success)]"
                        : "border-[var(--color-error)]"
                    }`}
                  >
                    {/* Video */}
                    <div className="aspect-video bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYouTubeId(slice.youtubeUrl)}?start=${slice.startTime}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                    
                    {/* Artist Info */}
                    <div className={`p-3 ${correct ? "bg-[var(--color-success)]/10" : "bg-[var(--color-error)]/10"}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>
                            {slice.artist.name}
                          </div>
                          {selectedArtist && !correct && (
                            <div className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif' }}>
                              You guessed: {selectedArtist.name}
                            </div>
                          )}
                        </div>
                        <span className={`text-2xl ${correct ? "text-[var(--color-success)]" : "text-[var(--color-error)]"}`}>
                          {correct ? "✓" : "✗"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Listen - Quiz Mode */}
        {!submitted && (
          <div className="mb-6 md:mb-8">
            <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif' }}>
              Listen
            </h2>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {shuffledSlices.map((slice, idx) => {
                const selectedArtist = shuffledArtists.find((a) => a.id === answers[slice.id]);
                const isPlaying = currentPlaying === idx;
                const progress = playProgress[idx] ?? 0;

                return (
                  <div
                    key={slice.id}
                    className={`rounded-lg border-2 p-2 transition-all md:rounded-xl md:p-4 ${
                      answers[slice.id]
                        ? "border-[var(--color-accent-gold)] bg-[var(--color-accent-gold)]/10"
                        : "border-[var(--color-border)] bg-[var(--color-bg-card)]/60"
                    }`}
                  >
                    <div className="mb-2 md:mb-4">
                      <button
                        onClick={() => isPlaying ? stopAllPlayers() : playRecording(idx)}
                        disabled={!playersReady}
                        className={`flex w-full items-center justify-center gap-1 rounded-lg py-2 text-sm font-semibold transition-all md:gap-3 md:py-4 md:text-lg ${
                          isPlaying
                            ? "bg-[var(--color-error)] text-[var(--color-bg-primary)] hover:opacity-90"
                            : "bg-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-gold)]/20"
                        } disabled:cursor-not-allowed disabled:opacity-50`}
                        style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}
                      >
                        {!playersReady ? (
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent md:h-5 md:w-5" />
                        ) : isPlaying ? (
                          <span className="text-xl md:text-2xl">⏹</span>
                        ) : (
                          <span className="text-xl md:text-2xl">▶</span>
                        )}
                        <span className="hidden md:inline">{!playersReady ? "Loading..." : isPlaying ? "Stop" : "Play"}</span>
                      </button>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[var(--color-border)] md:mt-2 md:h-2">
                        <div className={`h-full transition-all ${isPlaying ? "bg-[var(--color-accent-gold)]" : "bg-[var(--color-accent-gold-muted)]"}`} style={{ width: `${progress}%` }} />
                      </div>
                    </div>

                    <div className="text-center">
                      {selectedArtist ? (
                        <div className="text-xs md:text-sm" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
                          <span className="hidden text-[var(--color-text-muted)] md:inline">Your answer: </span>
                          <span className="font-medium text-[var(--color-accent-gold)]">{selectedArtist.name}</span>
                        </div>
                      ) : (
                        <div className="text-xs text-[var(--color-text-muted)] md:text-sm" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
                          <span className="md:hidden">Select below</span>
                          <span className="hidden md:inline">Select an artist below</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Match */}
        {!submitted && (
          <div className="mb-6 md:mb-8">
            <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif' }}>
              Match
            </h2>
            <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:justify-center md:gap-3">
              {shuffledSlices.map((slice) => (
                <div key={slice.id} className="flex flex-col gap-1.5 md:flex-row md:gap-2">
                    {shuffledArtists.map((artist) => {
                      const isSelected = answers[slice.id] === artist.id;
                      return (
                        <button
                          key={artist.id}
                          onClick={() => handleSelectArtist(slice.id, artist.id)}
                          className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs transition-all md:justify-center md:gap-2 md:px-4 md:py-2 md:text-base ${
                            isSelected
                              ? "bg-[var(--color-accent-gold)] text-[var(--color-bg-primary)]"
                              : "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)]"
                          }`}
                          style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}
                        >
                          {artist.photoUrl && (
                            <img 
                              src={artist.photoUrl} 
                              alt={artist.name} 
                              className="h-6 w-6 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10" 
                            />
                          )}
                          <span className="font-medium leading-tight">{artist.name}</span>
                        </button>
                      );
                    })}
                </div>
              ))}
            </div>
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
                  className="rounded-lg bg-[var(--color-accent-gold)] px-8 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)] disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}
                >
                  Submit Answers
                </button>
                {hasDuplicates && allSelected && (
                  <p className="mt-2 text-sm text-[var(--color-error)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
                    Each recording must have a different artist
                  </p>
                )}
              </div>
            );
          })() : (
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-6">
              <h2 className="mb-2 text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>
                {score === 3 ? "🎉 Perfect Score!" : score === 2 ? "👏 Great Job!" : score === 1 ? "👍 Not Bad!" : "😅 Better Luck Next Time!"}
              </h2>
              <p className="mb-4 text-xl text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
                You got <span className="font-bold text-[var(--color-accent-gold)]">{score}/3</span> correct
              </p>

              <div className="mb-6 flex flex-col items-center gap-4">
                <span className="text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>Enjoyed this quiz?</span>
                <div className="flex items-center gap-4">
                  {isAuthenticated ? (
                    <button
                      onClick={handleToggleLike}
                      disabled={likeMutation.isPending || unlikeMutation.isPending}
                      className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${
                        isLiked
                          ? "bg-[var(--color-error)] text-[var(--color-bg-primary)] hover:opacity-90"
                          : "border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:border-[var(--color-error)] hover:bg-[var(--color-border)]"
                      } disabled:cursor-not-allowed disabled:opacity-50`}
                      style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}
                    >
                      <span className="text-2xl">{isLiked ? "❤️" : "🤍"}</span>
                      <span>{isLiked ? "Liked" : "Like"}</span>
                      <span className="text-sm opacity-75">({likesCount})</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleSignInToLike}
                      className="flex items-center gap-2 rounded-lg border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-3 font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-error)] hover:bg-[var(--color-border)]"
                      style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}
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
                  className="rounded-lg border-2 border-[var(--color-border)] px-6 py-2 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]"
                  style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="rounded-lg bg-[var(--color-accent-gold)] px-6 py-2 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]"
                  style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}
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
