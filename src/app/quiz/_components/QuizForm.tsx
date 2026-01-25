"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { SearchableSelect } from "./SearchableSelect";
import { YouTubeClipPicker } from "./YouTubeClipPicker";
import { isValidYouTubeUrl } from "~/lib/youtube";
import { useToast } from "~/app/_components/ToastProvider";
import { secondsToTime, timeToSeconds } from "~/lib/time";
import { QUIZ_SLICE_COUNT } from "~/lib/constants";
import type { QuizSliceInput } from "~/lib/types";

export type QuizFormData = {
  composerId: string;
  instrumentId: string;
  pieceName: string;
  duration: number;
  slices: QuizSliceInput[];
};

export type QuizFormProps = {
  mode: "create" | "edit";
  initialValues?: QuizFormData;
  onSubmit: (data: QuizFormData) => void;
  isSubmitting: boolean;
};

export function QuizForm({
  mode,
  initialValues,
  onSubmit,
  isSubmitting,
}: QuizFormProps) {
  const [pieceName, setPieceName] = useState(initialValues?.pieceName ?? "");
  const [composerId, setComposerId] = useState(initialValues?.composerId ?? "");
  const [instrumentId, setInstrumentId] = useState(
    initialValues?.instrumentId ?? "",
  );
  const [duration, setDuration] = useState(initialValues?.duration ?? 30);
  const [slices, setSlices] = useState<QuizSliceInput[]>(
    initialValues?.slices ??
      Array.from({ length: QUIZ_SLICE_COUNT }, () => ({
        artistId: "",
        youtubeUrl: "",
        startTime: 0,
      })),
  );

  const { showError } = useToast();

  const {
    data: composers,
    isLoading: composersLoading,
    refetch: refetchComposers,
  } = api.composer.getAll.useQuery();
  const {
    data: instruments,
    isLoading: instrumentsLoading,
    refetch: refetchInstruments,
  } = api.instrument.getAll.useQuery();
  const {
    data: artists,
    isLoading: artistsLoading,
    refetch: refetchArtists,
  } = api.artist.getAll.useQuery();

  const createComposer = api.composer.create.useMutation({
    onSuccess: async () => {
      await refetchComposers();
    },
    onError: (error) => {
      showError(error.message || "Failed to create composer");
    },
  });
  const createInstrument = api.instrument.create.useMutation({
    onSuccess: async () => {
      await refetchInstruments();
    },
    onError: (error) => {
      showError(error.message || "Failed to create instrument");
    },
  });
  const createArtist = api.artist.create.useMutation({
    onSuccess: async () => {
      await refetchArtists();
    },
    onError: (error) => {
      showError(error.message || "Failed to create artist");
    },
  });

  const updateSlice = (
    index: number,
    field: keyof QuizSliceInput,
    value: string | number,
  ) => {
    setSlices(
      slices.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
    );
  };

  const isFormValid = () => {
    if (
      !pieceName.trim() ||
      !composerId ||
      !instrumentId ||
      duration < 5 ||
      duration > 120
    )
      return false;
    return slices.every(
      (s) => s.artistId && isValidYouTubeUrl(s.youtubeUrl) && s.startTime >= 0,
    );
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    onSubmit({
      composerId,
      instrumentId,
      pieceName: pieceName.trim(),
      duration,
      slices,
    });
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-8">
        <h2 className="font-body mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Quiz Setup
        </h2>
        <div className="space-y-6">
          <div>
            <label className="font-body-semibold mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
              Piece Name <span className="text-[var(--color-error)]">*</span>
            </label>
            <input
              type="text"
              value={pieceName}
              onChange={(e) => setPieceName(e.target.value)}
              placeholder="e.g., Nocturne Op. 9 No. 2"
              className="font-body-medium w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none"
            />
          </div>
          <SearchableSelect
            label="Composer *"
            items={composers ?? []}
            valueId={composerId}
            onChange={setComposerId}
            placeholder="Search for a composer..."
            isLoading={composersLoading}
            emptyText="No composers found"
            createLabel="Add new composer"
            onCreate={async (input) => {
              const result = await createComposer.mutateAsync(input);
              return result;
            }}
          />
          <SearchableSelect
            label="Instrument *"
            items={instruments?.map((i) => ({ id: i.id, name: i.name })) ?? []}
            valueId={instrumentId}
            onChange={setInstrumentId}
            placeholder="Search for an instrument..."
            isLoading={instrumentsLoading}
            emptyText="No instruments found"
            createLabel="Add new instrument"
            onCreate={async (input) => {
              const result = await createInstrument.mutateAsync({
                name: input.name,
              });
              return result;
            }}
          />
          <div>
            <label className="font-body-semibold mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
              Clip Duration (seconds){" "}
              <span className="text-[var(--color-error)]">*</span>
            </label>
            <input
              type="number"
              min={5}
              max={120}
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value) || 30)}
              className="font-body-medium w-32 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-2 text-[var(--color-text-primary)] focus:border-[var(--color-accent-gold)] focus:outline-none"
            />
            <p className="font-body-medium mt-1 text-sm text-[var(--color-text-muted)]">
              Between 5 and 120 seconds
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-8">
        <h2 className="font-body mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Performances (3 required)
        </h2>
        <div className="space-y-6">
          {slices.map((slice, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-input)]/80 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-gold)] text-lg font-bold text-[var(--color-bg-primary)]">
                  {idx + 1}
                </span>
                <span className="font-body-semibold font-medium text-[var(--color-text-primary)]">
                  Performance {idx + 1}
                </span>
              </div>
              <div className="space-y-4">
                <SearchableSelect
                  label="Artist *"
                  items={artists ?? []}
                  valueId={slice.artistId}
                  onChange={(id) => updateSlice(idx, "artistId", id)}
                  placeholder="Search for an artist..."
                  isLoading={artistsLoading}
                  emptyText="No artists found"
                  createLabel="Add new artist"
                  onCreate={async (input) => {
                    const result = await createArtist.mutateAsync(input);
                    return result;
                  }}
                />
                <div>
                  <label className="font-body-semibold mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                    YouTube URL{" "}
                    <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <input
                    type="url"
                    value={slice.youtubeUrl}
                    onChange={(e) =>
                      updateSlice(idx, "youtubeUrl", e.target.value)
                    }
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="font-body-medium w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-body-semibold mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                    Start Time{" "}
                    <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <div className="mb-2">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={secondsToTime(slice.startTime)}
                      onChange={(e) =>
                        updateSlice(
                          idx,
                          "startTime",
                          timeToSeconds(e.target.value),
                        )
                      }
                      placeholder="0:00"
                      className="font-body-semibold w-24 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3 text-center text-xl text-[var(--color-text-primary)] focus:border-[var(--color-accent-gold)] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        updateSlice(
                          idx,
                          "startTime",
                          Math.max(0, slice.startTime - 10),
                        )
                      }
                      className="font-body flex h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] text-sm font-bold text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)] active:scale-95"
                    >
                      −10s
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        updateSlice(
                          idx,
                          "startTime",
                          Math.max(0, slice.startTime - 1),
                        )
                      }
                      className="font-body flex h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] text-sm font-bold text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)] active:scale-95"
                    >
                      −1s
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        updateSlice(idx, "startTime", slice.startTime + 1)
                      }
                      className="font-body flex h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] text-sm font-bold text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)] active:scale-95"
                    >
                      +1s
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        updateSlice(idx, "startTime", slice.startTime + 10)
                      }
                      className="font-body flex h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] text-sm font-bold text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)] active:scale-95"
                    >
                      +10s
                    </button>
                  </div>
                  <p className="font-body mt-2 text-xs text-[var(--color-text-muted)]">
                    Adjust with buttons or type mm:ss
                  </p>
                </div>
                {isValidYouTubeUrl(slice.youtubeUrl) && (
                  <YouTubeClipPicker
                    youtubeUrl={slice.youtubeUrl}
                    startTime={slice.startTime}
                    duration={duration}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid() || isSubmitting}
          className="font-body-semibold rounded-lg bg-[var(--color-accent-gold)] px-8 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isSubmitting
            ? mode === "create"
              ? "Creating..."
              : "Updating..."
            : mode === "create"
              ? "Create Quiz"
              : "Update Quiz"}
        </button>
      </div>
    </div>
  );
}
