"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";

const ADMIN_EMAIL = "tomerflute@gmail.com";

function ComposerAvatar({ name, photoUrl }: { name: string; photoUrl: string | null }) {
  const [imgError, setImgError] = useState(false);
  
  if (!photoUrl || imgError) {
    return (
      <div className="h-12 w-12 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] font-medium" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }
  
  return (
    <img 
      src={photoUrl} 
      alt={name} 
      className="h-12 w-12 rounded-full object-cover bg-[var(--color-border)]" 
      onError={() => setImgError(true)}
      referrerPolicy="no-referrer"
    />
  );
}

export default function ComposersPage() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.email === ADMIN_EMAIL;

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const utils = api.useUtils();

  const { data: composers, isLoading } = api.composer.getAll.useQuery();
  const { data: allQuizzes } = api.quiz.getAll.useQuery();

  const getQuizCount = (composerId: string) => allQuizzes?.filter(q => q.composerId === composerId).length ?? 0;

  const createComposer = api.composer.create.useMutation({ onSuccess: () => { void utils.composer.getAll.invalidate(); setName(""); setPhotoUrl(""); } });
  const deleteComposer = api.composer.delete.useMutation({ onSuccess: () => { void utils.composer.getAll.invalidate(); } });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createComposer.mutate({ name: name.trim(), photoUrl: photoUrl.trim() || undefined });
  };

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>Composers</h1>

      <form onSubmit={handleSubmit} className="mb-8 rounded-xl bg-[var(--color-bg-card)]/60 p-6 border border-[var(--color-border)]">
        <h2 className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>Add Composer</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <input type="text" placeholder="Name (e.g., Ludwig van Beethoven)" value={name} onChange={(e) => setName(e.target.value)} className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-2 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }} />
          <input type="url" placeholder="Photo URL (optional)" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-2 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }} />
          <button type="submit" disabled={createComposer.isPending || !name.trim()} className="rounded-lg bg-[var(--color-accent-gold)] px-6 py-2 font-semibold text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-gold-hover)] disabled:opacity-50 transition-colors" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>{createComposer.isPending ? "Adding..." : "Add"}</button>
        </div>
      </form>

      {isLoading ? (
        <div className="flex justify-center py-12"><div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-accent-gold)] border-t-transparent" /></div>
      ) : composers?.length === 0 ? (
        <div className="rounded-xl bg-[var(--color-bg-card)]/60 p-8 text-center text-[var(--color-text-muted)] border border-[var(--color-border)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>No composers yet. Add one above!</div>
      ) : (
        <div className="space-y-2">
          {composers?.map((composer) => {
            const quizCount = getQuizCount(composer.id);
            return (
              <div key={composer.id} className="flex items-center justify-between rounded-xl bg-[var(--color-bg-card)]/60 p-4 border border-[var(--color-border)]">
                <div className="flex items-center gap-4">
                  <ComposerAvatar name={composer.name} photoUrl={composer.photoUrl} />
                  <div>
                    <div className="font-medium text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}>{composer.name}</div>
                    <div className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>{quizCount} {quizCount === 1 ? 'quiz' : 'quizzes'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isAdmin && (
                    <>
                      <Link href={`/admin/composers/edit/${composer.id}`} className="rounded-lg px-4 py-2 text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)]/20 transition-colors" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>Edit</Link>
                      <button onClick={() => deleteComposer.mutate({ id: composer.id })} disabled={deleteComposer.isPending} className="rounded-lg px-4 py-2 text-[var(--color-error)] hover:bg-[var(--color-error)]/20 transition-colors disabled:opacity-50" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
