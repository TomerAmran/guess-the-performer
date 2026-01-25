// Time conversion utilities

/**
 * Convert seconds to mm:ss format
 * @param seconds - Total seconds
 * @returns Formatted time string (e.g., "3:45")
 */
export function secondsToTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Parse mm:ss or m:ss or just seconds to total seconds
 * @param time - Time string in mm:ss format or just seconds
 * @returns Total seconds
 */
export function timeToSeconds(time: string): number {
  const trimmed = time.trim();
  if (trimmed.includes(':')) {
    const parts = trimmed.split(':');
    const mins = parseInt(parts[0] ?? '0', 10) || 0;
    const secs = parseInt(parts[1] ?? '0', 10) || 0;
    return mins * 60 + secs;
  }
  return parseInt(trimmed, 10) || 0;
}
