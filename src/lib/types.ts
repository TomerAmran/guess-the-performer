// Shared types across the application

/**
 * Quiz slice input type for create/edit forms
 * Used when submitting quiz data to the API
 */
export type QuizSliceInput = {
  artistId: string;
  youtubeUrl: string;
  startTime: number;
};

/**
 * Quiz slice with populated artist data
 * Used when displaying quiz data from the API
 */
export type QuizSliceWithArtist = {
  id: string;
  startTime: number;
  youtubeUrl: string;
  artist: {
    id: string;
    name: string;
    photoUrl: string | null;
  };
};
