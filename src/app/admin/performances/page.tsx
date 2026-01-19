"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function PerformancesPage() {
  const [pieceId, setPieceId] = useState("");
  const [artistId, setArtistId] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const utils = api.useUtils();

  const { data: performances, isLoading } = api.performance.getAll.useQuery();
  const { data: pieces } = api.piece.getAll.useQuery();
  const { data: artists } = api.artist.getAll.useQuery();

  const createPerformance = api.performance.create.useMutation({
    onSuccess: () => {
      void utils.performance.getAll.invalidate();
      setPieceId("");
      setArtistId("");
      setYoutubeUrl("");
    },
  });

  const deletePerformance = api.performance.delete.useMutation({
    onSuccess: () => {
      void utils.performance.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pieceId || !artistId || !youtubeUrl.trim()) return;
    createPerformance.mutate({
      pieceId,
      artistId,
      youtubeUrl: youtubeUrl.trim(),
    });
  };

  return (
    <div>
      <h1 className="mb-8 font-serif text-3xl font-bold text-amber-100">
        Performances
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 rounded-xl bg-slate-800/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-amber-200">Add Performance</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <select
            value={pieceId}
            onChange={(e) => setPieceId(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
          >
            <option value="">Select Piece</option>
            {pieces?.map((piece) => (
              <option key={piece.id} value={piece.id}>
                {piece.composer.name} - {piece.name}
              </option>
            ))}
          </select>
          <select
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
          >
            <option value="">Select Artist</option>
            {artists?.map((artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.name}
              </option>
            ))}
          </select>
          <input
            type="url"
            placeholder="YouTube URL"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none sm:col-span-2"
          />
        </div>
        <button
          type="submit"
          disabled={createPerformance.isPending || !pieceId || !artistId || !youtubeUrl.trim()}
          className="mt-4 rounded-lg bg-amber-600 px-6 py-2 font-semibold text-black hover:bg-amber-500 disabled:opacity-50 transition-colors"
        >
          {createPerformance.isPending ? "Adding..." : "Add Performance"}
        </button>
        {(pieces?.length === 0 || artists?.length === 0) && (
          <p className="mt-3 text-sm text-amber-400">
            ⚠️ Add pieces and artists first before adding performances.
          </p>
        )}
      </form>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        </div>
      ) : performances?.length === 0 ? (
        <div className="rounded-xl bg-slate-800/30 p-8 text-center text-slate-400">
          No performances yet. Add one above!
        </div>
      ) : (
        <div className="space-y-2">
          {performances?.map((perf) => (
            <div
              key={perf.id}
              className="flex items-center justify-between rounded-xl bg-slate-800/40 p-4"
            >
              <div className="min-w-0 flex-1">
                <div className="font-medium">
                  {perf.piece.composer.name} - {perf.piece.name}
                </div>
                <div className="text-sm text-amber-400">{perf.artist.name}</div>
                <div className="truncate text-xs text-slate-500">{perf.youtubeUrl}</div>
              </div>
              <button
                onClick={() => deletePerformance.mutate({ id: perf.id })}
                disabled={deletePerformance.isPending}
                className="ml-4 rounded-lg px-4 py-2 text-red-400 hover:bg-red-500/20 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
