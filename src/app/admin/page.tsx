import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-3xl font-bold text-amber-100">
        Content Management
      </h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/composers"
          className="rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/50"
        >
          <h2 className="mb-2 text-xl font-semibold text-amber-200">Composers</h2>
          <p className="text-slate-400">
            Add composers like Beethoven, Chopin, Mozart...
          </p>
        </Link>

        <Link
          href="/admin/artists"
          className="rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/50"
        >
          <h2 className="mb-2 text-xl font-semibold text-amber-200">Artists</h2>
          <p className="text-slate-400">
            Add performers like Horowitz, Argerich, Lang Lang...
          </p>
        </Link>
      </div>
    </div>
  );
}
