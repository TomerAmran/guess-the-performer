// YouTube utilities

/**
 * Extract YouTube video ID from various URL formats
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - URLs with extra query params
 * 
 * @param url - YouTube video URL
 * @returns Video ID or null if not found
 */
export function getYouTubeId(url: string): string | null {
  const match = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/.exec(url);
  return match?.[1] ?? null;
}

/**
 * Check if a URL is a valid YouTube video URL
 * @param url - URL to validate
 * @returns true if valid YouTube URL
 */
export function isValidYouTubeUrl(url: string): boolean {
  return getYouTubeId(url) !== null;
}
