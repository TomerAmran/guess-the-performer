"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";

const ADMIN_EMAIL = "tomerflute@gmail.com";

export default function PiecesPage() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.email === ADMIN_EMAIL;

  const [name, setName] = useState("");
  const [composerId, setComposerId] = useState("");
  const utils = api.useUtils();

  const { data: pieces, isLoading } = api.piece.getAll.useQuery();
  const { data: composers } = api.composer.getAll.useQuery();

  const createPiece = api.piece.create.useMutation({
    onSuccess: () => {
      void utils.piece.getAll.invalidate();
      setName("");
      setComposerId("");
    },
  });

  const deletePiece = api.piece.delete.useMutation({
    onSuccess: () => {
      void utils.piece.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !composerId) return;
    createPiece.mutate({
      name: name.trim(),
      composerId,
    });
  };

  return (
    <div>
      <h1 className="mb-8 font-serif text-3xl font-bold text-amber-100">
        Pieces
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 rounded-xl bg-slate-800/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-amber-200">Add Piece</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Name (e.g., Moonlight Sonata)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
          />
          <select
            value={composerId}
            onChange={(e) => setComposerId(e.target.value)}
            className="flex-1 rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
          >
            <option value="">Select Composer</option>
            {composers?.map((composer) => (
              <option key={composer.id} value={composer.id}>
                {composer.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={createPiece.isPending || !name.trim() || !composerId}
            className="rounded-lg bg-amber-600 px-6 py-2 font-semibold text-black hover:bg-amber-500 disabled:opacity-50 transition-colors"
          >
            {createPiece.isPending ? "Adding..." : "Add"}
          </button>
        </div>
        {composers?.length === 0 && (
          <p className="mt-3 text-sm text-amber-400">
            ⚠️ Add composers first before adding pieces.
          </p>
        )}
      </form>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        </div>
      ) : pieces?.length === 0 ? (
        <div className="rounded-xl bg-slate-800/30 p-8 text-center text-slate-400">
          No pieces yet. Add one above!
        </div>
      ) : (
        <div className="space-y-2">
          {pieces?.map((piece) => (
            <div
              key={piece.id}
              className="flex items-center justify-between rounded-xl bg-slate-800/40 p-4"
            >
              <div>
                <div className="font-medium">{piece.name}</div>
                <div className="text-sm text-slate-400">{piece.composer.name}</div>
              </div>
              {isAdmin && (
                <button
                  onClick={() => deletePiece.mutate({ id: piece.id })}
                  disabled={deletePiece.isPending}
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
