import Link from "next/link";
import Image from "next/image";
import { getLatestGuides } from "@/lib/content";
import Newsletter from "@/components/Newsletter";

/** Simple SVG chameleon for the hero section */
function ChameleonIllustration() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[340px] opacity-90"
    >
      {/* Body */}
      <ellipse cx="140" cy="200" rx="90" ry="55" fill="#1C2329" stroke="#A1FF4F" strokeWidth="1.5" />
      <ellipse cx="160" cy="195" rx="70" ry="42" fill="#161B20" />
      {/* Camo pattern on body */}
      <circle cx="120" cy="190" r="12" fill="#A1FF4F" opacity="0.2" />
      <circle cx="185" cy="210" r="9" fill="#A1FF4F" opacity="0.15" />
      <circle cx="150" cy="175" r="7" fill="#C74FFF" opacity="0.15" />
      <circle cx="105" cy="215" r="6" fill="#A1FF4F" opacity="0.12" />
      {/* Tail curl */}
      <path d="M50 200 Q20 200 15 170 Q10 140 25 125 Q40 110 55 125" stroke="#A1FF4F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Head */}
      <ellipse cx="238" cy="188" rx="30" ry="28" fill="#1C2329" stroke="#A1FF4F" strokeWidth="1.5" />
      {/* Eye */}
      <circle cx="248" cy="180" r="11" fill="#0A0E11" stroke="#A1FF4F" strokeWidth="1" />
      <circle cx="251" cy="179" r="5" fill="#A1FF4F" />
      <circle cx="253" cy="177" r="2" fill="#FFF" />
      {/* Mouth line */}
      <path d="M263 192 Q268 190 266 196" stroke="#A1FF4F" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <line x1="110" y1="250" x2="100" y2="275" stroke="#A1FF4F" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="160" y1="252" x2="160" y2="278" stroke="#A1FF4F" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="195" y1="245" x2="205" y2="270" stroke="#A1FF4F" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      {/* Tongue */}
      <path d="M270 198 Q290 205 295 215" stroke="#C74FFF" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Floating particles */}
      <circle cx="300" cy="140" r="3" fill="#A1FF4F" opacity="0.3" />
      <circle cx="80" cy="100" r="2" fill="#C74FFF" opacity="0.25" />
      <circle cx="330" cy="180" r="2" fill="#A1FF4F" opacity="0.2" />
      <circle cx="60" cy="150" r="3" fill="#C74FFF" opacity="0.2" />
      <circle cx="280" cy="110" r="2.5" fill="#A1FF4F" opacity="0.25" />
    </svg>
  );
}

/** SVG icons for stats */
function StatIcon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    guides: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    maps: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
    tricks: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#A1FF4F">
      {paths[type]}
    </svg>
  );
}

export default function Home() {
  const latestGuides = getLatestGuides();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <div className="absolute top-0 -right-20 w-[700px] h-[500px] opacity-[0.06]" style={{ background: "radial-gradient(circle at 60% 40%, #A1FF4F 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[400px] opacity-[0.05]" style={{ background: "radial-gradient(circle at 30% 60%, #C74FFF 0%, transparent 65%)" }} />
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #A1FF4F 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Text */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Trending Now</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider text-text-primary leading-[0.9]">
                MASTER<br />
                <span className="text-accent glow-text">EVERY GAME</span>
              </h1>

              <p className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed">
                In-depth guides, walkthroughs, and pro tips for the hottest games.
                From beginner basics to advanced strategies — we&apos;ve got you covered.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/games/meccha-chameleon" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-accent text-black rounded-lg hover:bg-accent-dim transition-colors">
                  Start With Meccha Chameleon
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="#latest-guides" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-text-primary border border-border rounded-lg hover:bg-bg-card transition-colors">
                  Browse All Guides
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { value: "15", label: "In-Depth Guides", icon: "guides" },
                  { value: "7", label: "Maps Covered", icon: "maps" },
                  { value: "40+", label: "Tips & Tricks", icon: "tricks" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 p-3 rounded-xl bg-bg-card/60 border border-border/50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                      <StatIcon type={stat.icon} />
                    </div>
                    <div>
                      <div className="font-display text-xl tracking-wider text-text-primary">{stat.value}</div>
                      <div className="text-[11px] text-text-muted">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="hidden lg:flex items-center justify-center flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl" style={{ transform: "scale(1.3)" }} />
                <ChameleonIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED GAME ===== */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              {/* Game icon */}
              <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-green-dim/30 to-accent-purple-dim/30 border border-accent/20 text-2xl">🦎</div>
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Featured Game</span>
                <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary mt-1">Meccha Chameleon</h2>
              </div>
            </div>
            <Link href="/games/meccha-chameleon" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dim transition-colors">
              View All Guides
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main featured card */}
            <Link href="/games/meccha-chameleon" className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-bg-card border border-border card-hover group min-h-[360px] flex flex-col justify-end">
              {/* Background image */}
              <Image src="/images/meccha-chameleon/cover.jpg" alt="Meccha Chameleon" fill className="object-cover opacity-100" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/60 to-bg-card/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-card/80 via-bg-card/40 to-transparent" />

              <div className="relative z-10 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/15 px-2.5 py-1 rounded-full">#1 Bestseller</span>
                  <span className="text-[10px] text-text-muted">15M+ copies sold</span>
                </div>
                <h3 className="font-display text-4xl sm:text-5xl tracking-wider text-text-primary group-hover:text-accent transition-colors">The Ultimate Guide</h3>
                <p className="mt-3 text-text-secondary max-w-lg">Master every hiding spot, unlock all secret skins, and dominate as both Hunter and Hider.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Beginner", "Maps", "Skins", "Seeker", "Hider"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-bg-elevated text-text-secondary border border-border">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Side cards with gradient accents */}
            <div className="flex flex-col gap-4">
              {[
                { title: "Complete Beginner's Guide", desc: "Everything you need to know to start playing", tag: "Essential", color: "#A1FF4F", icon: "🎯" },
                { title: "All Maps & Best Hiding Spots", desc: "Every official map analyzed in detail", tag: "Popular", color: "#C74FFF", icon: "🗺️" },
                { title: "How to Unlock All Secret Skins", desc: "Step-by-step unlock guide for all 5 skins", tag: "New", color: "#F59E0B", icon: "✨" },
              ].map((card) => (
                <Link key={card.title} href="/games/meccha-chameleon" className="flex items-start gap-4 p-5 rounded-xl bg-bg-card border border-border card-hover group overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ background: `linear-gradient(to bottom, ${card.color}, transparent)` }} />
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-elevated text-lg flex-shrink-0">{card.icon}</div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: card.color }}>{card.tag}</span>
                    <h4 className="text-sm font-semibold text-text-primary mt-1 group-hover:text-accent transition-colors">{card.title}</h4>
                    <p className="text-xs text-text-muted mt-1 line-clamp-2">{card.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST GUIDES ===== */}
      <section id="latest-guides" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20">
          <div className="mb-8">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Latest Guides</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary mt-1">Fresh From the Forge</h2>
          </div>

          {latestGuides.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latestGuides.map((guide, i) => {
                const gradients = [
                  "from-accent-green-dim/20 to-accent-purple-dim/20",
                  "from-accent-purple-dim/20 to-blue-900/20",
                  "from-accent-green-dim/20 to-yellow-900/20",
                ];
                const gradient = gradients[i % gradients.length];

                return (
                  <Link key={guide.slug} href={`/games/${guide.game}/${guide.slug}`} className="group rounded-xl bg-bg-card border border-border card-hover flex flex-col overflow-hidden">
                    {/* Gradient accent bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-semibold text-accent-purple uppercase tracking-wider bg-accent-purple/10 px-2 py-0.5 rounded-full">{guide.gameName}</span>
                        <span className="text-[10px] text-text-muted">{guide.date}</span>
                      </div>
                      <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">{guide.title}</h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-2">{guide.excerpt}</p>
                      {guide.tags && guide.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {guide.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="px-2 py-0.5 text-[10px] rounded bg-bg-elevated text-text-muted">{tag}</span>
                          ))}
                        </div>
                      )}
                      <div className="mt-auto pt-4 flex items-center gap-2">
                        <span className="text-xs text-accent font-medium">Read Guide</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-accent group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-bg-card rounded-2xl border border-border">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-lg text-text-muted">No guides published yet.</p>
              <p className="text-sm text-text-muted mt-1">We&apos;re crafting the first batch. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== COMING SOON ===== */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20">
          <div className="mb-8">
            <span className="text-xs font-semibold text-accent-purple uppercase tracking-wider">Coming Soon</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary mt-1">Guides In the Pipeline</h2>
            <p className="mt-2 text-text-muted text-sm">We&apos;re already preparing guides for these upcoming games.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Subnautica 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border p-8 opacity-70 hover:opacity-100 transition-opacity group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-bg-card to-blue-900/10" />
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-cyan-500/5 blur-3xl" />
              {/* Ocean wave pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-20 opacity-[0.04]">
                <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full"><path d="M0 20 Q50 0 100 20 T200 20 T300 20 T400 20 V40 H0 Z" fill="#06B6D4" /><path d="M0 25 Q50 15 100 25 T200 25 T300 25 T400 25 V40 H0 Z" fill="#0891B2" opacity="0.5" /></svg>
              </div>
              <div className="relative">
                <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-400/10 px-2.5 py-1 rounded-full">Coming Q3 2026</span>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-2xl">🌊</div>
                  <h3 className="font-display text-2xl tracking-wider text-text-primary">Subnautica 2</h3>
                </div>
                <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-sm">Deep sea survival — resource maps, base building, and Leviathan evasion guides incoming.</p>
              </div>
            </div>

            {/* GTA 6 */}
            <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border p-8 opacity-70 hover:opacity-100 transition-opacity group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-bg-card to-purple-900/10" />
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-pink-500/5 blur-3xl" />
              {/* City skyline silhouette */}
              <div className="absolute bottom-0 left-0 right-0 h-16 opacity-[0.04]">
                <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full"><rect x="10" y="15" width="12" height="25" fill="#EC4899" /><rect x="26" y="5" width="8" height="35" fill="#EC4899" /><rect x="38" y="10" width="15" height="30" fill="#EC4899" /><rect x="58" y="18" width="10" height="22" fill="#EC4899" /><rect x="72" y="8" width="6" height="32" fill="#EC4899" /></svg>
              </div>
              <div className="relative">
                <span className="text-[10px] font-semibold text-pink-400 uppercase tracking-wider bg-pink-400/10 px-2.5 py-1 rounded-full">Coming Nov 2026</span>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pink-500/10 text-2xl">🌴</div>
                  <h3 className="font-display text-2xl tracking-wider text-text-primary">Grand Theft Auto VI</h3>
                </div>
                <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-sm">Complete walkthrough, collectibles map, and side mission guides ready for launch day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
