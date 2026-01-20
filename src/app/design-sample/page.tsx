import Link from "next/link";

export default function DesignSample() {
  const sampleText = {
    composer: "Johann Sebastian Bach",
    piece: "Goldberg Variations, BWV 988",
    description: "Piano • 3 recordings • 30s clips • ♥ 42 likes",
    paragraph: "Can you distinguish between Glenn Gould's legendary 1955 recording and his contemplative 1981 interpretation? Test your ear against the masters in this challenging quiz featuring three iconic performances.",
  };

  const fontOptions = [
    {
      name: "Option A: Cormorant (Heavy Weight)",
      bodyFont: "var(--font-cormorant)",
      bodyWeight: "600",
      description: "Same elegant font, but using semi-bold weight for better readability",
    },
    {
      name: "Option B: Libre Baskerville",
      bodyFont: "var(--font-libre-baskerville)",
      bodyWeight: "400",
      description: "Classic book font, sturdy and highly readable, traditional feel",
    },
    {
      name: "Option C: Lora",
      bodyFont: "var(--font-lora)",
      bodyWeight: "500",
      description: "Modern serif with calligraphic roots, balanced and warm",
    },
    {
      name: "Option D: Crimson Pro",
      bodyFont: "var(--font-crimson-pro)",
      bodyWeight: "500",
      description: "Inspired by old-style typefaces, elegant yet readable",
    },
    {
      name: "Option E: EB Garamond",
      bodyFont: "var(--font-eb-garamond)",
      bodyWeight: "500",
      description: "Revival of Claude Garamond's design, scholarly and refined",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F1E9D2]">
      {/* Subtle paper texture overlay */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-16">
        
        {/* Page Title */}
        <header className="text-center">
          <h1 
            className="text-4xl font-bold text-[#2C1810] sm:text-5xl"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Font Comparison
          </h1>
          <p 
            className="mt-4 text-lg text-[#8B4513]"
            style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
          >
            Compare different body fonts to find the most readable option
          </p>
        </header>

        {/* Font Options Grid */}
        <div className="grid w-full gap-8">
          {fontOptions.map((option, index) => (
            <section 
              key={index}
              className="rounded-xl border-2 border-[#D6CCA9] bg-[#EFE4D9]/40 p-8"
            >
              {/* Option Header */}
              <div className="mb-6 flex items-center justify-between border-b border-[#D6CCA9] pb-4">
                <h2 
                  className="text-xl font-bold text-[#722F37]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {option.name}
                </h2>
                <span 
                  className="text-sm text-[#8B4513]/60"
                  style={{ fontFamily: option.bodyFont, fontWeight: Number(option.bodyWeight) }}
                >
                  {option.description}
                </span>
              </div>

              {/* Sample Card */}
              <div className="rounded-lg border border-[#D6CCA9] bg-[#F1E9D2] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Composer - Always Playfair */}
                    <h3 
                      className="text-2xl font-semibold text-[#2C1810]"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      {sampleText.composer}
                    </h3>
                    
                    {/* Piece Name - Test font (italic) */}
                    <p 
                      className="mt-1 text-xl italic text-[#8B4513]"
                      style={{ fontFamily: option.bodyFont, fontWeight: Number(option.bodyWeight) }}
                    >
                      {sampleText.piece}
                    </p>
                    
                    {/* Metadata - Test font (small) */}
                    <p 
                      className="mt-3 text-sm text-[#8B4513]/70"
                      style={{ fontFamily: option.bodyFont, fontWeight: Number(option.bodyWeight) }}
                    >
                      {sampleText.description}
                    </p>
                    
                    {/* Paragraph - Test font (regular) */}
                    <p 
                      className="mt-4 text-base leading-relaxed text-[#8B4513]"
                      style={{ fontFamily: option.bodyFont, fontWeight: Number(option.bodyWeight) }}
                    >
                      {sampleText.paragraph}
                    </p>
                  </div>
                  
                  <button className="ml-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#DAA520] bg-[#DAA520]/10 text-[#DAA520] transition-all hover:bg-[#DAA520] hover:text-[#F1E9D2]">
                    <span className="text-2xl">▶</span>
                  </button>
                </div>
              </div>

              {/* Additional Samples */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-[#D6CCA9]/50 bg-[#F1E9D2]/50 p-4">
                  <span 
                    className="text-xs uppercase tracking-wider text-[#B8860B]"
                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                  >
                    Button Text
                  </span>
                  <div className="mt-2 flex gap-2">
                    <button 
                      className="rounded-full border border-[#DAA520] bg-[#DAA520] px-4 py-2 text-sm text-[#F1E9D2]"
                      style={{ fontFamily: option.bodyFont, fontWeight: Number(option.bodyWeight) }}
                    >
                      Play Quiz
                    </button>
                    <button 
                      className="rounded-full border border-[#722F37] px-4 py-2 text-sm text-[#722F37]"
                      style={{ fontFamily: option.bodyFont, fontWeight: Number(option.bodyWeight) }}
                    >
                      Share
                    </button>
                  </div>
                </div>
                <div className="rounded-lg border border-[#D6CCA9]/50 bg-[#F1E9D2]/50 p-4">
                  <span 
                    className="text-xs uppercase tracking-wider text-[#B8860B]"
                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                  >
                    Navigation
                  </span>
                  <div 
                    className="mt-2 flex gap-4 text-sm text-[#8B4513]"
                    style={{ fontFamily: option.bodyFont, fontWeight: Number(option.bodyWeight) }}
                  >
                    <span className="cursor-pointer hover:text-[#722F37]">Home</span>
                    <span className="cursor-pointer hover:text-[#722F37]">My Quizzes</span>
                    <span className="cursor-pointer hover:text-[#722F37]">Create</span>
                    <span className="cursor-pointer hover:text-[#722F37]">Search</span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Divider */}
        <div className="flex w-full max-w-md items-center gap-4 text-[#B8860B]">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D6CCA9]" />
          <span className="text-2xl">♪</span>
          <span className="text-3xl">𝄞</span>
          <span className="text-2xl">♪</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D6CCA9]" />
        </div>

        {/* Full Page Preview with Recommended Font */}
        <section className="w-full">
          <h2 
            className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-[#8B4513]"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Full Preview (Using Lora - Recommended)
          </h2>

          {/* Sample Quiz Cards with Lora */}
          <div className="space-y-4">
            {[
              { composer: "Johann Sebastian Bach", piece: "Goldberg Variations, BWV 988", instrument: "Piano", recordings: 3, duration: 30, likes: 42 },
              { composer: "Ludwig van Beethoven", piece: "Piano Sonata No. 14 (Moonlight)", instrument: "Piano", recordings: 3, duration: 25, likes: 38 },
            ].map((quiz, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-[#D6CCA9] bg-[#EFE4D9]/60 p-6 shadow-sm transition-all duration-300 hover:border-[#DAA520] hover:shadow-md"
              >
                <div className="absolute left-2 top-2 text-[#D6CCA9] opacity-50 transition-opacity group-hover:opacity-100">❧</div>
                <div className="absolute bottom-2 right-2 rotate-180 text-[#D6CCA9] opacity-50 transition-opacity group-hover:opacity-100">❧</div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-semibold text-[#2C1810] transition-colors group-hover:text-[#722F37]"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      {quiz.composer}
                    </h3>
                    <p 
                      className="mt-1 text-lg italic text-[#8B4513]"
                      style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                    >
                      {quiz.piece}
                    </p>
                    <div 
                      className="mt-3 flex items-center gap-3 text-sm text-[#8B4513]/70"
                      style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
                    >
                      <span>{quiz.instrument}</span>
                      <span className="text-[#D6CCA9]">•</span>
                      <span>{quiz.recordings} recordings</span>
                      <span className="text-[#D6CCA9]">•</span>
                      <span>{quiz.duration}s clips</span>
                      <span className="text-[#D6CCA9]">•</span>
                      <span className="flex items-center gap-1">
                        <span className="text-[#722F37]">♥</span>
                        <span>{quiz.likes}</span>
                      </span>
                    </div>
                  </div>
                  
                  <button className="ml-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#DAA520] bg-[#DAA520]/10 text-[#DAA520] transition-all hover:bg-[#DAA520] hover:text-[#F1E9D2]">
                    <span className="text-xl">▶</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Cards with Lora */}
        <section className="w-full max-w-3xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-lg border-2 border-[#DAA520]/30 bg-gradient-to-br from-[#DAA520]/5 to-[#DAA520]/15 p-6 transition-all duration-300 hover:border-[#DAA520] hover:shadow-lg">
              <div className="absolute -right-4 -top-4 text-6xl text-[#DAA520]/10 transition-all group-hover:text-[#DAA520]/20">♫</div>
              <h3 
                className="text-2xl font-bold text-[#2C1810]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Create Quiz
              </h3>
              <p 
                className="mt-2 text-[#8B4513]/80"
                style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
              >
                Build a quiz with three performances of the same piece by different artists.
              </p>
              <div 
                className="mt-4 inline-flex items-center gap-2 text-[#DAA520]"
                style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}
              >
                <span>Begin</span>
                <span>→</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border-2 border-[#722F37]/30 bg-gradient-to-br from-[#722F37]/5 to-[#722F37]/15 p-6 transition-all duration-300 hover:border-[#722F37] hover:shadow-lg">
              <div className="absolute -right-4 -top-4 text-6xl text-[#722F37]/10 transition-all group-hover:text-[#722F37]/20">🎼</div>
              <h3 
                className="text-2xl font-bold text-[#2C1810]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Search Quizzes
              </h3>
              <p 
                className="mt-2 text-[#8B4513]/80"
                style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
              >
                Find quizzes by composer, instrument, or piece name.
              </p>
              <div 
                className="mt-4 inline-flex items-center gap-2 text-[#722F37]"
                style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }}
              >
                <span>Explore</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </section>

        {/* Back to current design link */}
        <div className="mt-8 border-t border-[#D6CCA9] pt-8 text-center">
          <Link 
            href="/" 
            className="text-sm text-[#8B4513]/60 underline hover:text-[#722F37]"
            style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 500 }}
          >
            ← Back to current design
          </Link>
        </div>
      </div>
    </main>
  );
}
