"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { useToast } from "~/app/_components/ToastProvider";

export default function EditArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { showError } = useToast();

  const { data: artist, isLoading } = api.artist.getById.useQuery({ id });
  const updateMutation = api.artist.update.useMutation({
    onSuccess: () => {
      router.push("/admin/artists");
    },
    onError: (error) => {
      showError(error.message || "Failed to update artist");
    },
  });
  const deleteMutation = api.artist.delete.useMutation({
    onSuccess: () => {
      router.push("/admin/artists");
    },
    onError: (error) => {
      showError(error.message || "Failed to delete artist");
    },
  });

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (artist) {
      setName(artist.name);
      setPhotoUrl(artist.photoUrl ?? "");
    }
  }, [artist]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    updateMutation.mutate({
      id,
      name: name.trim(),
      photoUrl: (photoUrl.trim() !== "" ? photoUrl.trim() : undefined),
    });
  };

  const handleDelete = () => {
    deleteMutation.mutate({ id });
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
      </main>
    );
  }

  if (!artist) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
        <h1 className="mb-4 text-2xl font-bold">Artist not found</h1>
        <Link href="/admin/artists" className="text-amber-400 hover:text-amber-300">
          ← Back to Artists
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Link
          href="/admin/artists"
          className="mb-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Back to Artists
        </Link>

        <h1 className="mb-8 font-serif text-4xl font-bold tracking-tight text-amber-100">
          Edit Artist
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 backdrop-blur">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Vladimir Horowitz"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Photo URL (optional)
                </label>
                <input
                  type="url"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
                {photoUrl && (
                  <div className="mt-4">
                    <p className="mb-2 text-sm text-slate-400">Preview:</p>
                    <img
                      src={photoUrl}
                      alt={name}
                      className="h-24 w-24 rounded-full object-cover border-2 border-slate-700"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="rounded-lg border border-red-500/50 px-6 py-3 font-medium text-red-400 transition-all hover:bg-red-500/20"
            >
              Delete Artist
            </button>
            <div className="flex gap-4">
              <Link
                href="/admin/artists"
                className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-800"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={!name.trim() || updateMutation.isPending}
                className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-black transition-all hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {updateMutation.isPending ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl border border-red-500/50 bg-slate-900 p-8">
              <h2 className="mb-4 font-serif text-2xl font-bold text-red-400">
                Delete Artist?
              </h2>
              <p className="mb-6 text-slate-300">
                Are you sure you want to delete <strong>{name}</strong>?
              </p>
              <p className="mb-6 text-sm text-red-300">
                ⚠️ This will also delete all quiz slices (performances) associated with this artist due to cascade deletion.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  disabled={deleteMutation.isPending}
                  className="flex-1 rounded-lg border border-slate-600 px-4 py-3 font-medium text-slate-300 transition-all hover:bg-slate-800 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deleteMutation.isPending}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition-all hover:bg-red-700 disabled:opacity-50"
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
