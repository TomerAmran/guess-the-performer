"use client";

import { useState, useEffect, useRef, useCallback, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import { getYouTubeId } from "~/lib/youtube";
import { ShareButton } from "~/app/_components/ShareButton";
import { PageHeader } from "~/app/_components/PageHeader";
import { ComposerAvatar } from "~/app/_components/ComposerAvatar";
import type { YTPlayer } from "~/app/_components/youtube-types";
import "~/app/_components/youtube-types";
import { QUIZ_STATE_KEY } from "~/lib/constants";
import type { QuizSliceWithArtist } from "~/lib/types";

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

// Shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}

export default function QuizPlayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { data: session } = useSession();
  const { data: quiz, isLoading } = api.quiz.getById.useQuery({ id });
  const { data: likeStatus } = api.quiz.getLikeStatus.useQuery(
    { quizId: id },
    { enabled: !!id },
  );

  const likeMutation = api.quiz.like.useMutation();
  const unlikeMutation = api.quiz.unlike.useMutation();
  const utils = api.useUtils();

  // Comments
  const {
    data: commentsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = api.comment.getComments.useInfiniteQuery(
    { quizId: id, limit: 20 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      enabled: !!id,
    },
  );
  const addCommentMutation = api.comment.addComment.useMutation({
    onSuccess: () => {
      setCommentText("");
      setReplyText("");
      setReplyingTo(null);
      void utils.comment.getComments.invalidate({ quizId: id });
    },
  });
  const deleteCommentMutation = api.comment.deleteComment.useMutation({
    onSuccess: () => {
      void utils.comment.getComments.invalidate({ quizId: id });
    },
  });

  const [shuffledSlices, setShuffledSlices] = useState<QuizSliceWithArtist[]>(
    [],
  );
  const [shuffledArtists, setShuffledArtists] = useState<
    { id: string; name: string; photoUrl: string | null }[]
  >([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [playersReady, setPlayersReady] = useState(false);
  const [playProgress, setPlayProgress] = useState<Record<number, number>>({});
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [restoredFromStorage, setRestoredFromStorage] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

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
          shuffledSlices?: QuizSliceWithArtist[];
          shuffledArtists?: {
            id: string;
            name: string;
            photoUrl: string | null;
          }[];
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
      const slices = quiz.slices as QuizSliceWithArtist[];
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
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
    };
  }, [shuffledSlices, quiz]);

  const stopAllPlayers = useCallback(() => {
    playersRef.current.forEach((player) => player?.pauseVideo());
    setCurrentPlaying(null);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
  }, []);

  const playRecording = useCallback(
    (idx: number) => {
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
        if (progressIntervalRef.current)
          clearInterval(progressIntervalRef.current);
      }, quiz.duration * 1000);
    },
    [playersReady, quiz, shuffledSlices, stopAllPlayers],
  );

  const handleSelectArtist = (sliceId: string, artistId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [sliceId]: artistId }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== 3) return;
    stopAllPlayers();
    setSubmitted(true);
  };

  const getCorrectArtistId = (slice: QuizSliceWithArtist) => slice.artist.id;

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
      console.error("Like toggle error:", error);
    }
  };

  const handleSignInToLike = () => {
    const stateToSave = { shuffledSlices, shuffledArtists, answers };
    localStorage.setItem(QUIZ_STATE_KEY + id, JSON.stringify(stateToSave));
    router.push(`/api/auth/signin?callbackUrl=/quiz/${id}`);
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    try {
      await addCommentMutation.mutateAsync({
        quizId: id,
        content: commentText.trim(),
      });
    } catch (error) {
      console.error("Add comment error:", error);
    }
  };

  const handleAddReply = async (parentId: string) => {
    if (!replyText.trim()) return;
    try {
      await addCommentMutation.mutateAsync({
        quizId: id,
        content: replyText.trim(),
        parentId,
      });
    } catch (error) {
      console.error("Add reply error:", error);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteCommentMutation.mutateAsync({ commentId });
    } catch (error) {
      console.error("Delete comment error:", error);
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return new Date(date).toLocaleDateString();
  };

  const comments = commentsData?.pages.flatMap((page) => page.comments) ?? [];

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
        <h1 className="font-body mb-4 text-2xl font-bold text-[var(--color-text-primary)]">
          Quiz not found
        </h1>
        <Link
          href="/"
          className="font-body-medium text-[var(--color-accent-burgundy)] hover:text-[var(--color-accent-gold)]"
        >
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
      {/* Hidden YouTube Players */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        {shuffledSlices.map((_, idx) => (
          <div key={idx} id={`player-${idx}`} />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <PageHeader backHref="/" backLabel="Back to Home" />

        {/* Header */}
        <div className="mb-8">
          <p className="font-body-medium mb-4 text-center text-sm tracking-widest text-[var(--color-text-muted)] uppercase">
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
              <h1 className="font-body text-xl font-bold text-[var(--color-text-primary)] md:text-2xl">
                {quiz.pieceName}
              </h1>
              <div className="font-body-medium flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <span>{quiz.composer.name}</span>
                <span className="text-[var(--color-border)]">•</span>
                <span>
                  {getInstrumentIcon(quiz.instrument.name)}{" "}
                  {quiz.instrument.name}
                </span>
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
                const selectedArtist = shuffledArtists.find(
                  (a) => a.id === answers[slice.id],
                );
                const correct = isCorrect(slice.id);

                const scrollToVideo = () => {
                  const element = document.getElementById(`video-${slice.id}`);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
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
                      <span
                        className={`mb-1 inline-block text-2xl md:text-3xl ${correct ? "text-[var(--color-success)]" : "text-[var(--color-error)]"}`}
                      >
                        {correct ? "✓" : "✗"}
                      </span>

                      {/* Artist photo */}
                      {slice.artist.photoUrl && (
                        <div className="my-2 flex justify-center">
                          <img
                            src={slice.artist.photoUrl}
                            alt={slice.artist.name}
                            className={`h-12 w-12 rounded-full object-cover ring-2 md:h-16 md:w-16 ${
                              correct
                                ? "ring-[var(--color-success)]"
                                : "ring-[var(--color-error)]"
                            }`}
                          />
                        </div>
                      )}

                      {correct ? (
                        /* Correct: just show name in green */
                        <div className="font-body text-xs font-semibold text-[var(--color-success)] md:text-sm">
                          {slice.artist.name}
                        </div>
                      ) : (
                        /* Wrong: strikethrough guess in red, then correct in white */
                        <div className="space-y-0.5">
                          {selectedArtist && (
                            <div className="font-body text-xs font-semibold text-[var(--color-error)] line-through md:text-sm">
                              {selectedArtist.name}
                            </div>
                          )}
                          <div className="font-body text-xs font-semibold text-[var(--color-text-primary)] md:text-sm">
                            {slice.artist.name}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Play button - always at bottom */}
                    <button
                      onClick={scrollToVideo}
                      className={`font-body mt-2 flex items-center justify-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-white md:px-3 md:py-1.5 md:text-sm ${
                        correct
                          ? "bg-[var(--color-success)]"
                          : "bg-[var(--color-error)]"
                      }`}
                    >
                      <span>▶</span>
                      <span className="hidden md:inline">Watch</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Full-width Stacked Videos */}
            <h3 className="font-body mb-4 text-center text-sm font-medium tracking-widest text-[var(--color-text-muted)] uppercase">
              Performances
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {shuffledSlices.map((slice) => {
                const selectedArtist = shuffledArtists.find(
                  (a) => a.id === answers[slice.id],
                );
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
                    <div
                      className={`p-3 ${correct ? "bg-[var(--color-success)]/10" : "bg-[var(--color-error)]/10"}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-body font-semibold text-[var(--color-text-primary)]">
                            {slice.artist.name}
                          </div>
                          {selectedArtist && !correct && (
                            <div className="font-body text-sm text-[var(--color-text-muted)]">
                              You guessed: {selectedArtist.name}
                            </div>
                          )}
                        </div>
                        <span
                          className={`text-2xl ${correct ? "text-[var(--color-success)]" : "text-[var(--color-error)]"}`}
                        >
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
            <h2 className="font-body mb-4 text-center text-sm font-medium tracking-widest text-[var(--color-text-muted)] uppercase">
              Listen
            </h2>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {shuffledSlices.map((slice, idx) => {
                const selectedArtist = shuffledArtists.find(
                  (a) => a.id === answers[slice.id],
                );
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
                        onClick={() =>
                          isPlaying ? stopAllPlayers() : playRecording(idx)
                        }
                        disabled={!playersReady}
                        className={`font-body-semibold flex w-full items-center justify-center gap-1 rounded-lg py-2 text-sm font-semibold transition-all md:gap-3 md:py-4 md:text-lg ${
                          isPlaying
                            ? "bg-[var(--color-error)] text-[var(--color-bg-primary)] hover:opacity-90"
                            : "bg-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-gold)]/20"
                        } disabled:cursor-not-allowed disabled:opacity-50`}
                      >
                        {!playersReady ? (
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent md:h-5 md:w-5" />
                        ) : isPlaying ? (
                          <span className="text-xl md:text-2xl">⏹</span>
                        ) : (
                          <span className="text-xl md:text-2xl">▶</span>
                        )}
                        <span className="hidden md:inline">
                          {!playersReady
                            ? "Loading..."
                            : isPlaying
                              ? "Stop"
                              : "Play"}
                        </span>
                      </button>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[var(--color-border)] md:mt-2 md:h-2">
                        <div
                          className={`h-full transition-all ${isPlaying ? "bg-[var(--color-accent-gold)]" : "bg-[var(--color-accent-gold-muted)]"}`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      {selectedArtist ? (
                        <div className="font-body-medium text-xs md:text-sm">
                          <span className="hidden text-[var(--color-text-muted)] md:inline">
                            Your answer:{" "}
                          </span>
                          <span className="font-medium text-[var(--color-accent-gold)]">
                            {selectedArtist.name}
                          </span>
                        </div>
                      ) : (
                        <div className="font-body-medium text-xs text-[var(--color-text-muted)] md:text-sm">
                          <span className="md:hidden">Select below</span>
                          <span className="hidden md:inline">
                            Select an artist below
                          </span>
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
            <h2 className="font-body mb-4 text-center text-sm font-medium tracking-widest text-[var(--color-text-muted)] uppercase">
              Match
            </h2>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {shuffledSlices.map((slice) => (
                <div key={slice.id} className="flex flex-col gap-1.5 md:gap-2">
                  {shuffledArtists.map((artist) => {
                    const isSelected = answers[slice.id] === artist.id;
                    return (
                      <button
                        key={artist.id}
                        onClick={() => handleSelectArtist(slice.id, artist.id)}
                        className={`font-body-medium flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs transition-all md:justify-center md:gap-2 md:px-4 md:py-2 md:text-base ${
                          isSelected
                            ? "bg-[var(--color-accent-gold)] text-[var(--color-bg-primary)]"
                            : "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)]"
                        }`}
                      >
                        {artist.photoUrl && (
                          <img
                            src={artist.photoUrl}
                            alt={artist.name}
                            className="h-6 w-6 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                          />
                        )}
                        <span className="leading-tight font-medium">
                          {artist.name}
                        </span>
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
          {!submitted ? (
            (() => {
              const selectedArtistIds = Object.values(answers);
              const hasDuplicates =
                new Set(selectedArtistIds).size !== selectedArtistIds.length;
              const allSelected = Object.keys(answers).length === 3;
              const canSubmit = allSelected && !hasDuplicates;

              return (
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="font-body-semibold rounded-lg bg-[var(--color-accent-gold)] px-8 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Submit Answers
                  </button>
                  {hasDuplicates && allSelected && (
                    <p className="font-body-medium mt-2 text-sm text-[var(--color-error)]">
                      Each recording must have a different artist
                    </p>
                  )}
                </div>
              );
            })()
          ) : (
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-6">
              <h2 className="font-body mb-2 text-2xl font-bold text-[var(--color-text-primary)]">
                {score === 3
                  ? "🎉 Perfect Score!"
                  : score === 2
                    ? "👏 Great Job!"
                    : score === 1
                      ? "👍 Not Bad!"
                      : "😅 Better Luck Next Time!"}
              </h2>
              <p className="font-body-medium mb-4 text-xl text-[var(--color-text-secondary)]">
                You got{" "}
                <span className="font-bold text-[var(--color-accent-gold)]">
                  {score}/3
                </span>{" "}
                correct
              </p>

              <div className="mb-6 flex flex-col items-center gap-4">
                <span className="font-body-medium text-[var(--color-text-muted)]">
                  Enjoyed this quiz?
                </span>
                <div className="flex items-center gap-4">
                  {isAuthenticated ? (
                    <button
                      onClick={handleToggleLike}
                      disabled={
                        likeMutation.isPending || unlikeMutation.isPending
                      }
                      className={`font-body-semibold flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${
                        isLiked
                          ? "bg-[var(--color-error)] text-[var(--color-bg-primary)] hover:opacity-90"
                          : "border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:border-[var(--color-error)] hover:bg-[var(--color-border)]"
                      } disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      <span className="text-2xl">{isLiked ? "❤️" : "🤍"}</span>
                      <span>{isLiked ? "Liked" : "Like"}</span>
                      <span className="text-sm opacity-75">({likesCount})</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleSignInToLike}
                      className="font-body-semibold flex items-center gap-2 rounded-lg border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-3 font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-error)] hover:bg-[var(--color-border)]"
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
                  className="font-body-semibold rounded-lg border-2 border-[var(--color-border)] px-6 py-2 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]"
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="font-body-semibold rounded-lg bg-[var(--color-accent-gold)] px-6 py-2 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Comments Section - Only show after quiz is submitted */}
        {submitted && (
          <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-6">
            <h3 className="font-body mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
              Discussion
            </h3>
            <p className="font-body mb-4 text-sm text-[var(--color-text-muted)]">
              Share your thoughts! Why did you think one performer was another?
            </p>

            {/* Comment Form */}
            {isAuthenticated ? (
              <form onSubmit={handleAddComment} className="mb-6">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share your thoughts about this quiz..."
                  maxLength={1000}
                  className="font-body w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-gold)] focus:ring-1 focus:ring-[var(--color-accent-gold)] focus:outline-none"
                  rows={3}
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {commentText.length}/1000
                  </span>
                  <button
                    type="submit"
                    disabled={
                      !commentText.trim() || addCommentMutation.isPending
                    }
                    className="font-body rounded-lg bg-[var(--color-accent-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {addCommentMutation.isPending
                      ? "Posting..."
                      : "Post Comment"}
                  </button>
                </div>
                {addCommentMutation.error && (
                  <p className="mt-2 text-sm text-[var(--color-error)]">
                    {addCommentMutation.error.message}
                  </p>
                )}
              </form>
            ) : (
              <div className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4 text-center">
                <p className="font-body mb-2 text-sm text-[var(--color-text-muted)]">
                  Sign in to join the discussion
                </p>
                <button
                  onClick={handleSignInToLike}
                  className="font-body rounded-lg bg-[var(--color-accent-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]"
                >
                  Sign In
                </button>
              </div>
            )}

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length === 0 ? (
                <p className="font-body py-4 text-center text-sm text-[var(--color-text-muted)]">
                  No comments yet. Be the first to share your thoughts!
                </p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4"
                  >
                    {/* Comment Header */}
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {comment.user.image ? (
                          <img
                            src={comment.user.image}
                            alt={comment.user.name ?? "User"}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
                            {(comment.user.name ?? "U")[0]?.toUpperCase()}
                          </div>
                        )}
                        <div>
                          <span className="font-body text-sm font-semibold text-[var(--color-text-primary)]">
                            {comment.user.name ?? "Anonymous"}
                          </span>
                          <span className="font-body ml-2 text-xs text-[var(--color-text-muted)]">
                            {formatTimeAgo(comment.createdAt)}
                          </span>
                        </div>
                      </div>
                      {session?.user?.id === comment.user.id && (
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          disabled={deleteCommentMutation.isPending}
                          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-error)]"
                        >
                          Delete
                        </button>
                      )}
                    </div>

                    {/* Comment Content */}
                    <p className="font-body mb-3 text-sm whitespace-pre-wrap text-[var(--color-text-primary)]">
                      {comment.content}
                    </p>

                    {/* Reply Button */}
                    {isAuthenticated && (
                      <button
                        onClick={() =>
                          setReplyingTo(
                            replyingTo === comment.id ? null : comment.id,
                          )
                        }
                        className="font-body text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)]"
                      >
                        {replyingTo === comment.id ? "Cancel" : "Reply"}
                      </button>
                    )}

                    {/* Reply Form */}
                    {replyingTo === comment.id && (
                      <div className="mt-3 border-l-2 border-[var(--color-border)] pl-4">
                        <textarea
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Write a reply..."
                          maxLength={1000}
                          className="font-body w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-gold)] focus:outline-none"
                          rows={2}
                        />
                        <div className="mt-2 flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setReplyingTo(null);
                              setReplyText("");
                            }}
                            className="font-body rounded px-3 py-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleAddReply(comment.id)}
                            disabled={
                              !replyText.trim() || addCommentMutation.isPending
                            }
                            className="font-body rounded bg-[var(--color-accent-gold)] px-3 py-1 text-xs font-semibold text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-gold-hover)] disabled:opacity-50"
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 space-y-3 border-l-2 border-[var(--color-border)] pl-4">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="rounded-lg bg-[var(--color-bg-card)] p-3"
                          >
                            <div className="mb-2 flex items-center gap-2">
                              {reply.user.image ? (
                                <img
                                  src={reply.user.image}
                                  alt={reply.user.name ?? "User"}
                                  className="h-6 w-6 rounded-full object-cover"
                                />
                              ) : (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-border)] text-xs text-[var(--color-text-muted)]">
                                  {(reply.user.name ?? "U")[0]?.toUpperCase()}
                                </div>
                              )}
                              <span className="font-body text-xs font-semibold text-[var(--color-text-primary)]">
                                {reply.user.name ?? "Anonymous"}
                              </span>
                              <span className="font-body text-xs text-[var(--color-text-muted)]">
                                {formatTimeAgo(reply.createdAt)}
                              </span>
                            </div>
                            <p className="font-body text-sm whitespace-pre-wrap text-[var(--color-text-primary)]">
                              {reply.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}

              {/* Load More Button */}
              {hasNextPage && (
                <div className="text-center">
                  <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className="font-body rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-border)] disabled:opacity-50"
                  >
                    {isFetchingNextPage ? "Loading..." : "Load more comments"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
