import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { ShareButton } from "./_components/ShareButton";
import { ThemeToggle } from "./_components/ThemeProvider";

export default async function Home() {
  const session = await auth();
  const quizzes = await api.quiz.getAll();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
        {/* Subtle paper texture overlay */}
        <div 
          className="pointer-events-none fixed inset-0 transition-opacity duration-300"
          style={{
            opacity: 'var(--texture-opacity)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Theme Toggle - Fixed Position */}
        <div className="fixed right-6 top-6 z-50">
          <ThemeToggle />
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-16 px-6 py-20">
          
          {/* Header */}
          <header className="text-center">
            <h1 
              className="text-5xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-6xl"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Guess the Performer
            </h1>
            <p 
              className="mt-3 text-lg tracking-widest text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
            >
              classical music game
            </p>
          </header>

          {/* Decorative Musical Divider */}
          <div className="flex w-full max-w-md items-center gap-4 text-[var(--color-accent-gold-muted)]">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-border)]" />
            <span className="text-2xl">♪</span>
            <span className="text-3xl">𝄞</span>
            <span className="text-2xl">♪</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--color-border)]" />
          </div>

          {/* Available Quizzes */}
          {quizzes.length > 0 && (
            <section className="w-full max-w-2xl">
              <h2 
                className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-[var(--color-text-secondary)]"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Most Popular Quizzes
              </h2>
              
              <div className="space-y-4">
                {quizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="group relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-6 shadow-sm transition-all duration-300 hover:border-[var(--color-accent-gold)] hover:shadow-md"
                  >
                    {/* Decorative corner ornaments */}
                    <div className="absolute left-2 top-2 text-[var(--color-border)] opacity-50 transition-opacity group-hover:opacity-100">
                      ❧
                    </div>
                    <div className="absolute bottom-2 right-2 rotate-180 text-[var(--color-border)] opacity-50 transition-opacity group-hover:opacity-100">
                      ❧
                    </div>

                    <div className="flex items-center justify-between">
                      <Link href={`/quiz/${quiz.id}`} className="flex-1">
                        <h3 
                          className="text-xl font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent-burgundy)]"
                          style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                          {quiz.composer.name}
                        </h3>
                        <p 
                          className="mt-1 text-lg italic text-[var(--color-text-secondary)]"
                          style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                        >
                          {quiz.pieceName}
                        </p>
                        <div 
                          className="mt-3 flex items-center gap-3 text-sm text-[var(--color-text-muted)]"
                          style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                        >
                          <span>{quiz.instrument.name}</span>
                          <span className="text-[var(--color-border)]">•</span>
                          <span>{quiz.slices.length} recordings</span>
                          <span className="text-[var(--color-border)]">•</span>
                          <span>{quiz.duration}s clips</span>
                          <span className="text-[var(--color-border)]">•</span>
                          <span className="flex items-center gap-1">
                            <span className="text-[var(--color-accent-burgundy)]">♥</span>
                            <span>{quiz.likes} {quiz.likes === 1 ? 'like' : 'likes'}</span>
                          </span>
                        </div>
                      </Link>
                      
                      <div className="ml-4 flex items-center gap-2">
                        <ShareButton quizId={quiz.id} variant="icon" />
                        <Link
                          href={`/quiz/${quiz.id}`}
                          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-accent-gold)] bg-[var(--color-accent-gold)]/10 text-[var(--color-accent-gold)] transition-all hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-bg-primary)]"
                        >
                          <span className="text-xl">▶</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Action Cards */}
          <section className="w-full max-w-2xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {session && (
                <Link
                  href="/my-quizzes"
                  className="group relative overflow-hidden rounded-lg border-2 border-[var(--color-accent-forest)]/30 bg-gradient-to-br from-[var(--color-accent-forest)]/5 to-[var(--color-accent-forest)]/15 p-6 transition-all duration-300 hover:border-[var(--color-accent-forest)] hover:shadow-lg"
                >
                  <div className="absolute -right-4 -top-4 text-6xl text-[var(--color-accent-forest)]/10 transition-all group-hover:text-[var(--color-accent-forest)]/20">
                    📜
                  </div>
                  <h3 
                    className="text-2xl font-bold text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    My Quizzes
                  </h3>
                  <p 
                    className="mt-2 text-[var(--color-text-muted)]"
                    style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                  >
                    View, edit, and manage your created quizzes.
                  </p>
                  <div 
                    className="mt-4 inline-flex items-center gap-2 text-[var(--color-accent-forest)]"
                    style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}
                  >
                    <span>View</span>
                    <span>→</span>
                  </div>
                </Link>
              )}

              <Link
                href="/quiz/search"
                className="group relative overflow-hidden rounded-lg border-2 border-[var(--color-accent-burgundy)]/30 bg-gradient-to-br from-[var(--color-accent-burgundy)]/5 to-[var(--color-accent-burgundy)]/15 p-6 transition-all duration-300 hover:border-[var(--color-accent-burgundy)] hover:shadow-lg"
              >
                <div className="absolute -right-4 -top-4 text-6xl text-[var(--color-accent-burgundy)]/10 transition-all group-hover:text-[var(--color-accent-burgundy)]/20">
                  🔍
                </div>
                <h3 
                  className="text-2xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Search Quizzes
                </h3>
                <p 
                  className="mt-2 text-[var(--color-text-muted)]"
                  style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                >
                  Find quizzes by composer, instrument, or piece name.
                </p>
                <div 
                  className="mt-4 inline-flex items-center gap-2 text-[var(--color-accent-burgundy)]"
                  style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}
                >
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/quiz/create"
                className="group relative overflow-hidden rounded-lg border-2 border-[var(--color-accent-gold)]/30 bg-gradient-to-br from-[var(--color-accent-gold)]/5 to-[var(--color-accent-gold)]/15 p-6 transition-all duration-300 hover:border-[var(--color-accent-gold)] hover:shadow-lg"
              >
                <div className="absolute -right-4 -top-4 text-6xl text-[var(--color-accent-gold)]/10 transition-all group-hover:text-[var(--color-accent-gold)]/20">
                  ♫
                </div>
                <h3 
                  className="text-2xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Create Quiz
                </h3>
                <p 
                  className="mt-2 text-[var(--color-text-muted)]"
                  style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                >
                  Build a quiz with 3 performances of the same piece by different artists.
                </p>
                <div 
                  className="mt-4 inline-flex items-center gap-2 text-[var(--color-accent-gold)]"
                  style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}
                >
                  <span>Begin</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/admin"
                className="group relative overflow-hidden rounded-lg border-2 border-[var(--color-text-secondary)]/20 bg-gradient-to-br from-[var(--color-text-secondary)]/5 to-[var(--color-text-secondary)]/10 p-6 transition-all duration-300 hover:border-[var(--color-text-secondary)]/50 hover:shadow-lg"
              >
                <div className="absolute -right-4 -top-4 text-6xl text-[var(--color-text-secondary)]/10 transition-all group-hover:text-[var(--color-text-secondary)]/20">
                  ⚙
                </div>
                <h3 
                  className="text-2xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Admin Panel
                </h3>
                <p 
                  className="mt-2 text-[var(--color-text-muted)]"
                  style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                >
                  Manage composers, artists, and instruments.
                </p>
                <div 
                  className="mt-4 inline-flex items-center gap-2 text-[var(--color-text-secondary)]"
                  style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}
                >
                  <span>Manage</span>
                  <span>→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Auth Section */}
          <footer className="text-center">
            <p 
              className="text-lg text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
            >
              {session ? (
                <span>Welcome, {session.user?.name}</span>
              ) : (
                <span>Sign in to create and save quizzes</span>
              )}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="mt-4 inline-block rounded-full border-2 border-[var(--color-text-secondary)]/30 bg-transparent px-8 py-3 text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)]/10"
              style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </footer>
        </div>
      </main>
    </HydrateClient>
  );
}
