"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { SearchableSelect } from "../create/_components/SearchableSelect";
import { ShareButton } from "~/app/_components/ShareButton";

export default function SearchQuizzesPage() {
  const [composerId, setComposerId] = useState("");
  const [instrumentId, setInstrumentId] = useState("");
  const [pieceName, setPieceName] = useState("");
  const [orderBy, setOrderBy] = useState<"likes" | "recent">("likes");
  const [debouncedPieceName, setDebouncedPieceName] = useState("");

  const { data: composers, isLoading: composersLoading } = api.composer.getAll.useQuery();
  const { data: instruments, isLoading: instrumentsLoading } = api.instrument.getAll.useQuery();

  // Debounce piece name search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedPieceName(pieceName);
    }, 500);

    return () => clearTimeout(timer);
  }, [pieceName]);

  const { data: searchResults, isLoading: searchLoading } = api.quiz.search.useQuery({
    composerId: composerId || undefined,
    instrumentId: instrumentId || undefined,
    pieceName: debouncedPieceName || undefined,
    orderBy,
  });

  const handleClearAll = () => {
    setComposerId("");
    setInstrumentId("");
    setPieceName("");
    setOrderBy("likes");
  };

  const hasFilters = composerId || instrumentId || pieceName;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-2 font-serif text-4xl font-bold tracking-tight text-amber-100">
          Search Quizzes
        </h1>
        <p className="mb-8 text-lg text-slate-400">
          Find quizzes by composer, instrument, or piece name
        </p>

        {/* Search Filters */}
        <div className="mb-8 rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Composer Filter */}
            <SearchableSelect
              label="Composer"
              items={composers ?? []}
              valueId={composerId}
              onChange={setComposerId}
              placeholder="Any composer..."
              isLoading={composersLoading}
              emptyText="No composers found"
              allowClear
            />

            {/* Instrument Filter */}
            <SearchableSelect
              label="Instrument"
              items={instruments?.map(i => ({ id: i.id, name: i.name })) ?? []}
              valueId={instrumentId}
              onChange={setInstrumentId}
              placeholder="Any instrument..."
              isLoading={instrumentsLoading}
              emptyText="No instruments found"
              allowClear
            />

            {/* Piece Name Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Piece Name
              </label>
              <input
                type="text"
                value={pieceName}
                onChange={(e) => setPieceName(e.target.value)}
                placeholder="Search by name..."
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-700 pt-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">Sort by:</span>
              <button
                onClick={() => setOrderBy("likes")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  orderBy === "likes"
                    ? "bg-amber-500 text-black"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                Most Popular
              </button>
              <button
                onClick={() => setOrderBy("recent")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  orderBy === "recent"
                    ? "bg-amber-500 text-black"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                Most Recent
              </button>
            </div>

            {hasFilters && (
              <button
                onClick={handleClearAll}
                className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-semibold text-amber-200">
              {searchLoading ? "Searching..." : `${searchResults?.length ?? 0} ${(searchResults?.length ?? 0) === 1 ? 'Quiz' : 'Quizzes'} Found`}
            </h2>
          </div>

          {searchLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
            </div>
          ) : searchResults && searchResults.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {searchResults.map((quiz) => (
                <div
                  key={quiz.id}
                  className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-amber-500/50 hover:bg-slate-800/50"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-1 font-serif text-xl font-semibold text-emerald-300">
                        {quiz.composer.name} - {quiz.pieceName}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {quiz.instrument.name}
                      </p>
                    </div>
                    <ShareButton quizId={quiz.id} variant="icon" />
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {quiz.slices.map((slice) => (
                      <span
                        key={slice.id}
                        className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-300"
                      >
                        {slice.artist.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <span>❤️</span>
                        <span>{quiz.likes}</span>
                      </span>
                      <span>{quiz.duration}s clips</span>
                    </div>
                    <Link
                      href={`/quiz/${quiz.id}`}
                      className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-amber-500"
                    >
                      Play Quiz
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-12 text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 font-serif text-2xl font-semibold text-slate-300">
                No Quizzes Found
              </h3>
              <p className="mb-6 text-slate-400">
                {hasFilters
                  ? "Try adjusting your search filters"
                  : "No quizzes have been created yet"}
              </p>
              {hasFilters && (
                <button
                  onClick={handleClearAll}
                  className="rounded-lg border border-slate-600 px-6 py-2 font-medium text-slate-300 transition-all hover:bg-slate-700"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
