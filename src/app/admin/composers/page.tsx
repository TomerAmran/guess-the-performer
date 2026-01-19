"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function ComposersPage() {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const utils = api.useUtils();

  const { data: composers, isLoading } = api.composer.getAll.useQuery();

  const createComposer = api.composer.create.useMutation({
    onSuccess: () => {
      void utils.composer.getAll.invalidate();
      setName("");
      setPhotoUrl("");
    },
  });

  const deleteComposer = api.composer.delete.useMutation({
    onSuccess: () => {
      void utils.composer.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createComposer.mutate({
      name: name.trim(),
      photoUrl: photoUrl.trim() || undefined,
    });
  };

  return (
    <div>
      <h1 className="mb-8 font-serif text-3xl font-bold text-amber-100">
        Composers
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 rounded-xl bg-slate-800/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-amber-200">Add Composer</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Name (e.g., Ludwig van Beethoven)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
          />
          <input
            type="url"
            placeholder="Photo URL (optional)"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="flex-1 rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={createComposer.isPending || !name.trim()}
            className="rounded-lg bg-amber-600 px-6 py-2 font-semibold text-black hover:bg-amber-500 disabled:opacity-50 transition-colors"
          >
            {createComposer.isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        </div>
      ) : composers?.length === 0 ? (
        <div className="rounded-xl bg-slate-800/30 p-8 text-center text-slate-400">
          No composers yet. Add one above!
        </div>
      ) : (
        <div className="space-y-2">
          {composers?.map((composer) => (
            <div
              key={composer.id}
              className="flex items-center justify-between rounded-xl bg-slate-800/40 p-4"
            >
              <div className="flex items-center gap-4">
                {composer.photoUrl && (
                  <img
                    src={composer.photoUrl}
                    alt={composer.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <span className="font-medium">{composer.name}</span>
              </div>
              <button
                onClick={() => deleteComposer.mutate({ id: composer.id })}
                disabled={deleteComposer.isPending}
                className="rounded-lg px-4 py-2 text-red-400 hover:bg-red-500/20 transition-colors"
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
