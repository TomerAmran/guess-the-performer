import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1 className="font-body mb-8 text-3xl font-bold text-[var(--color-text-primary)]">
        Content Management
      </h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/composers"
          className="rounded-xl bg-[var(--color-bg-card)]/60 p-6 transition-all hover:bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]"
        >
          <h2 className="font-body mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
            Composers
          </h2>
          <p className="font-body-medium text-[var(--color-text-muted)]">
            Add composers like Beethoven, Chopin, Mozart...
          </p>
        </Link>

        <Link
          href="/admin/artists"
          className="rounded-xl bg-[var(--color-bg-card)]/60 p-6 transition-all hover:bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]"
        >
          <h2 className="font-body mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
            Artists
          </h2>
          <p className="font-body-medium text-[var(--color-text-muted)]">
            Add performers like Horowitz, Argerich, Lang Lang...
          </p>
        </Link>
      </div>
    </div>
  );
}
