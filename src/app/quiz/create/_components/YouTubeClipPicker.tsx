"use client";

import { useEffect, useRef, useState } from "react";
import { getYouTubeId } from "~/app/_components/youtube";
import type { YTPlayer } from "~/app/_components/youtube-types";
import "~/app/_components/youtube-types";

type YouTubeClipPickerProps = {
  youtubeUrl: string;
  startTime: number;
  duration: number;
  onChangeStartTime: (seconds: number) => void;
};

export function YouTubeClipPicker({
  youtubeUrl,
  startTime,
  duration,
  onChangeStartTime,
}: YouTubeClipPickerProps) {
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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

      const player = new window.YT.Player(elementId.current, {
        height: "315",
        width: "560",
        videoId,
        playerVars: {
          start: startTime,
          controls: 1,
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
    };
  }, [videoId, startTime]);

  const handlePlayClip = () => {
    if (!playerRef.current || !playerReady) return;

    // Clear any existing timeout
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
    }

    // Seek to start time and play
    playerRef.current.seekTo(startTime, true);
    playerRef.current.playVideo();

    // Auto-stop after duration
    stopTimeoutRef.current = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      }
    }, duration * 1000);
  };

  const handleUseCurrentTime = () => {
    if (!playerRef.current || !playerReady) return;
    const currentTime = Math.floor(playerRef.current.getCurrentTime());
    onChangeStartTime(currentTime);
  };

  if (!videoId) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
      <div className="mb-3">
        <div className="aspect-video overflow-hidden rounded-lg bg-black">
          <div id={elementId.current} />
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handlePlayClip}
          disabled={!playerReady}
          className="flex-1 rounded-lg bg-amber-600 px-4 py-2 font-medium text-black transition-all hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {playerReady ? (
            <>
              <span className="text-lg">▶</span> Play {duration}s clip
            </>
          ) : (
            "Loading..."
          )}
        </button>
        <button
          onClick={handleUseCurrentTime}
          disabled={!playerReady}
          className="flex-1 rounded-lg border border-slate-600 px-4 py-2 font-medium text-slate-300 transition-all hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Use current time
        </button>
      </div>

      {isPlaying && (
        <p className="mt-2 text-center text-sm text-amber-400">
          Playing clip...
        </p>
      )}
    </div>
  );
}
