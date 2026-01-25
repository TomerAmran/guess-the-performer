"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { SearchableSelect } from "../_components/SearchableSelect";
import { ShareButton } from "~/app/_components/ShareButton";
import { PageHeader } from "~/app/_components/PageHeader";

export default function SearchQuizzesPage() {
  const [composerId, setComposerId] = useState("");
  const [instrumentId, setInstrumentId] = useState("");
  const [pieceName, setPieceName] = useState("");
  const [orderBy, setOrderBy] = useState<"likes" | "recent">("likes");
  const [debouncedPieceName, setDebouncedPieceName] = useState("");

  const { data: composers, isLoading: composersLoading } = api.composer.getAll.useQuery();
  const { data: instruments, isLoading: instrumentsLoading } = api.instrument.getAll.useQuery();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedPieceName(pieceName), 500);
    return () => clearTimeout(timer);
  }, [pieceName]);

  const { data: searchResults, isLoading: searchLoading } = api.quiz.search.useQuery({
    composerId: composerId || undefined,
    instrumentId: instrumentId || undefined,
    pieceName: debouncedPieceName || undefined,
    orderBy,
  });

  const handleClearAll = () => { setComposerId(""); setInstrumentId(""); setPieceName(""); setOrderBy("likes"); };
  const hasFilters = composerId || instrumentId || pieceName;

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <PageHeader backHref="/" backLabel="Back to Home" />

        <h1 className="font-body mb-2 text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">Search Quizzes</h1>
        <p className="font-body-medium mb-8 text-lg text-[var(--color-text-muted)]">Find quizzes by composer, instrument, or piece name</p>

        <div className="mb-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SearchableSelect label="Composer" items={composers ?? []} valueId={composerId} onChange={setComposerId} placeholder="Any composer..." isLoading={composersLoading} emptyText="No composers found" allowClear />
            <SearchableSelect label="Instrument" items={instruments?.map(i => ({ id: i.id, name: i.name })) ?? []} valueId={instrumentId} onChange={setInstrumentId} placeholder="Any instrument..." isLoading={instrumentsLoading} emptyText="No instruments found" allowClear />
            <div>
              <label className="font-body-semibold block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Piece Name</label>
              <input type="text" value={pieceName} onChange={(e) => setPieceName(e.target.value)} placeholder="Search by name..." className="font-body-medium w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-6">
            <div className="flex items-center gap-2">
              <span className="font-body-medium text-sm text-[var(--color-text-muted)]">Sort by:</span>
              <button onClick={() => setOrderBy("likes")} className={`font-body-medium rounded-lg px-4 py-2 text-sm font-medium transition-all ${orderBy === "likes" ? "bg-[var(--color-accent-gold)] text-[var(--color-bg-primary)]" : "bg-[var(--color-border)] text-[var(--color-text-primary)] hover:opacity-80"}`}>Most Popular</button>
              <button onClick={() => setOrderBy("recent")} className={`font-body-medium rounded-lg px-4 py-2 text-sm font-medium transition-all ${orderBy === "recent" ? "bg-[var(--color-accent-gold)] text-[var(--color-bg-primary)]" : "bg-[var(--color-border)] text-[var(--color-text-primary)] hover:opacity-80"}`}>Most Recent</button>
            </div>
            {hasFilters && <button onClick={handleClearAll} className="font-body-medium text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-burgundy)] transition-colors">Clear All Filters</button>}
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="font-body text-2xl font-semibold text-[var(--color-text-primary)]">{searchLoading ? "Searching..." : `${searchResults?.length ?? 0} ${(searchResults?.length ?? 0) === 1 ? 'Quiz' : 'Quizzes'} Found`}</h2>
          </div>

          {searchLoading ? (
            <div className="flex items-center justify-center py-12"><div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-accent-gold)] border-t-transparent" /></div>
          ) : searchResults && searchResults.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {searchResults.map((quiz) => (
                <div key={quiz.id} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-6 transition-all hover:border-[var(--color-accent-gold)] hover:shadow-md">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-body mb-1 text-xl font-semibold text-[var(--color-text-primary)]">{quiz.pieceName}</h3>
                      <p className="font-body-medium text-sm text-[var(--color-text-muted)]">{quiz.composer.name}</p>
                      <p className="font-body-medium text-sm text-[var(--color-text-muted)]">{quiz.instrument.name}</p>
                    </div>
                    <ShareButton quizId={quiz.id} variant="icon" />
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {quiz.slices.map((slice) => <span key={slice.id} className="font-body-medium rounded-full bg-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-primary)]">{slice.artist.name}</span>)}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-body-medium flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                      <span className="flex items-center gap-1"><span className="text-[var(--color-accent-burgundy)]">♥</span><span>{quiz.likes}</span></span>
                      <span>{quiz.duration}s clips</span>
                    </div>
                    <Link href={`/quiz/${quiz.id}`} className="font-body-semibold rounded-lg bg-[var(--color-accent-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]">Play Quiz</Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-12 text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="font-body mb-2 text-2xl font-semibold text-[var(--color-text-primary)]">No Quizzes Found</h3>
              <p className="font-body-medium mb-6 text-[var(--color-text-muted)]">{hasFilters ? "Try adjusting your search filters" : "No quizzes have been created yet"}</p>
              {hasFilters && <button onClick={handleClearAll} className="font-body-semibold rounded-lg border-2 border-[var(--color-border)] px-6 py-2 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)]">Clear All Filters</button>}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
