// Shared constants across the application

export const ADMIN_EMAIL = "tomerflute@gmail.com";

export const QUIZ_SLICE_COUNT = 3;

export const QUIZ_STATE_KEY = "quiz_state_";

// Instrument icons mapping
export const INSTRUMENT_ICONS: Record<string, string> = {
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

/**
 * Get the emoji icon for an instrument
 * @param instrumentName - The name of the instrument
 * @returns The emoji icon for the instrument
 */
export function getInstrumentIcon(instrumentName: string): string {
  const name = instrumentName.toLowerCase();
  for (const [key, icon] of Object.entries(INSTRUMENT_ICONS)) {
    if (name.includes(key)) return icon;
  }
  return "🎵";
}
