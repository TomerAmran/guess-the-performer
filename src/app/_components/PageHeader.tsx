"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeProvider";

type PageHeaderProps = {
  backHref: string;
  backLabel: string;
};

export function PageHeader({ backHref, backLabel }: PageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <Link
        href={backHref}
        className="font-body-medium inline-flex items-center gap-2 text-[var(--color-accent-burgundy)] hover:text-[var(--color-accent-gold)] transition-colors"
      >
        ← {backLabel}
      </Link>
      <ThemeToggle />
    </div>
  );
}
