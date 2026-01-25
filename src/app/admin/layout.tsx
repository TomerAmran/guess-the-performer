"use client";

import Link from "next/link";
import { ThemeToggle } from "../_components/ThemeProvider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
      <nav className="border-b border-[var(--color-border)] bg-[var(--color-bg-card)]/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="font-body text-xl font-bold text-[var(--color-accent-burgundy)] hover:text-[var(--color-accent-gold)] transition-colors"
            >
              ← Home
            </Link>
            <div className="flex gap-4">
              <Link
                href="/admin/composers"
                className="font-body-medium rounded-lg px-4 py-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors"
              >
                Composers
              </Link>
              <Link
                href="/admin/artists"
                className="font-body-medium rounded-lg px-4 py-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors"
              >
                Artists
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>
      <div className="container mx-auto max-w-4xl px-4 py-8">{children}</div>
    </main>
  );
}
