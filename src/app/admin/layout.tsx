import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center gap-8 px-4 py-4">
          <Link href="/" className="font-serif text-xl font-bold text-amber-400">
            ← Home
          </Link>
          <div className="flex gap-4">
            <Link
              href="/admin/composers"
              className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Composers
            </Link>
            <Link
              href="/admin/artists"
              className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Artists
            </Link>
            <Link
              href="/admin/pieces"
              className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Pieces
            </Link>
            <Link
              href="/admin/performances"
              className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Performances
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto max-w-4xl px-4 py-8">{children}</div>
    </main>
  );
}
