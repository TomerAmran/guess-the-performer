"use client";

import { useEffect, useRef, useState } from "react";
import { getYouTubeId } from "~/lib/youtube";
import type { YTPlayer } from "~/app/_components/youtube-types";
import "~/app/_components/youtube-types";

type YouTubeClipPickerProps = {
  youtubeUrl: string;
  startTime: number;
  duration: number;
};

export function YouTubeClipPicker({
  youtubeUrl,
  startTime,
  duration,
}: YouTubeClipPickerProps) {
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const elementId = useRef(`yt-picker-${Math.random().toString(36).slice(2)}`);

  const videoId = getYouTubeId(youtubeUrl);

  // Load YouTube IFrame API
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Initialize player when video ID changes
  useEffect(() => {
    if (!videoId) return;

    const initPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      // Get container width for responsive sizing
      const containerWidth = containerRef.current?.clientWidth ?? 320;
      const playerHeight = Math.round(containerWidth * 9 / 16); // 16:9 aspect ratio

      const player = new window.YT.Player(elementId.current, {
        height: String(playerHeight),
        width: "100%",
        videoId,
        playerVars: {
          start: startTime,
          controls: 1,
          playsinline: 1, // Important for mobile - play inline instead of fullscreen
        },
        events: {
          onReady: () => {
            setPlayerReady(true);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });

      playerRef.current = player;
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (stopTimeoutRef.current) {
        clearTimeout(stopTimeoutRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      // Reset states when player is destroyed (e.g., when startTime changes)
      setIsPlaying(false);
      setPlayerReady(false);
    };
  }, [videoId, startTime]);

  const handleTogglePlay = () => {
    if (!playerRef.current || !playerReady) return;

    if (isPlaying) {
      // Stop playing
      if (stopTimeoutRef.current) {
        clearTimeout(stopTimeoutRef.current);
      }
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      // Start playing from start time
      playerRef.current.seekTo(startTime, true);
      playerRef.current.playVideo();

      // Auto-stop after duration
      stopTimeoutRef.current = setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
        }
      }, duration * 1000);
    }
  };

  if (!videoId) {
    return null;
  }

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-3 sm:p-4">
      {/* Responsive video container */}
      <div className="mb-3" ref={containerRef}>
        <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
          <div id={elementId.current} className="absolute inset-0 h-full w-full" />
        </div>
      </div>

      {/* Single play/stop button */}
      <button
        onClick={handleTogglePlay}
        disabled={!playerReady}
        className={`font-body-semibold w-full rounded-lg px-4 py-3 font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
          isPlaying
            ? "bg-red-600 text-white hover:bg-red-500"
            : "bg-[var(--color-accent-gold)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-gold-hover)]"
        }`}
      >
        {!playerReady ? (
          "Loading..."
        ) : isPlaying ? (
          <>
            <span className="mr-1">■</span> Stop
          </>
        ) : (
          <>
            <span className="mr-1">▶</span> Play
          </>
        )}
      </button>
    </div>
  );
}
