export function getYouTubeId(url: string): string | null {
  // Common patterns we want to support:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // Also tolerate extra query params after the ID.
  const match = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/.exec(url);
  return match?.[1] ?? null;
}

export function isValidYouTubeUrl(url: string): boolean {
  return getYouTubeId(url) !== null;
}

