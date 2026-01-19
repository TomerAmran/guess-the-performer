"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";

const ADMIN_EMAIL = "tomerflute@gmail.com";

export default function ArtistsPage() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.email === ADMIN_EMAIL;

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const utils = api.useUtils();

  const { data: artists, isLoading } = api.artist.getAll.useQuery();

  const createArtist = api.artist.create.useMutation({
    onSuccess: () => {
      void utils.artist.getAll.invalidate();
      setName("");
      setPhotoUrl("");
    },
  });

  const deleteArtist = api.artist.delete.useMutation({
    onSuccess: () => {
      void utils.artist.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createArtist.mutate({
      name: name.trim(),
      photoUrl: photoUrl.trim() || undefined,
    });
  };

  return (
    <div>
      <h1 className="mb-8 font-serif text-3xl font-bold text-amber-100">
        Artists
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 rounded-xl bg-slate-800/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-amber-200">Add Artist</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Name (e.g., Vladimir Horowitz)"
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
            disabled={createArtist.isPending || !name.trim()}
            className="rounded-lg bg-amber-600 px-6 py-2 font-semibold text-black hover:bg-amber-500 disabled:opacity-50 transition-colors"
          >
            {createArtist.isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        </div>
      ) : artists?.length === 0 ? (
        <div className="rounded-xl bg-slate-800/30 p-8 text-center text-slate-400">
          No artists yet. Add one above!
        </div>
      ) : (
        <div className="space-y-2">
          {artists?.map((artist) => (
            <div
              key={artist.id}
              className="flex items-center justify-between rounded-xl bg-slate-800/40 p-4"
            >
              <div className="flex items-center gap-4">
                {artist.photoUrl && (
                  <img
                    src={artist.photoUrl}
                    alt={artist.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <span className="font-medium">{artist.name}</span>
              </div>
              {isAdmin && (
                <button
                  onClick={() => deleteArtist.mutate({ id: artist.id })}
                  disabled={deleteArtist.isPending}
                  className="rounded-lg px-4 py-2 text-red-400 hover:bg-red-500/20 transition-colors"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
