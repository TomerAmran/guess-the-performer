import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>
        Content Management
      </h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/composers"
          className="rounded-xl bg-[var(--color-bg-card)]/60 p-6 transition-all hover:bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]"
        >
          <h2 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>
            Composers
          </h2>
          <p className="text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
            Add composers like Beethoven, Chopin, Mozart...
          </p>
        </Link>

        <Link
          href="/admin/artists"
          className="rounded-xl bg-[var(--color-bg-card)]/60 p-6 transition-all hover:bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]"
        >
          <h2 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body), serif' }}>
            Artists
          </h2>
          <p className="text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body), serif', fontWeight: 500 }}>
            Add performers like Horowitz, Argerich, Lang Lang...
          </p>
        </Link>
      </div>
    </div>
  );
}
