import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getGuidesByGame } from "@/lib/content";
import { ChameleonIcon } from "@/components/Visuals";
import GameBackground from "@/components/GameBackground";
import HeroIllustration from "@/components/HeroIllustration";

const GAME_INFO: Record<string, {
  name: string; desc: string;
  stats: { value: string; label: string; icon: string }[];
  tags: string[];
  heroColor: string;
  heroEmoji: string;
}> = {
  "meccha-chameleon": {
    name: "Meccha Chameleon",
    desc: "The viral hide-and-seek party game that sold 15 million copies. Paint yourself to blend into the environment and outsmart the hunters — or hunt down cleverly disguised chameleons.",
    stats: [
      { value: "15M+", label: "Copies Sold", icon: "📦" },
      { value: "340K", label: "Peak Players", icon: "👥" },
      { value: "$6", label: "Price", icon: "💵" },
      { value: "24", label: "Max Players", icon: "🎮" },
    ],
    tags: ["Multiplayer", "Hide & Seek", "Party Game", "Casual", "Steam"],
    heroColor: "from-accent-green-dim/20 via-bg-primary to-accent-purple-dim/20",
    heroEmoji: "🦎",
  },
  "subnautica-2": {
    name: "Subnautica 2",
    desc: "Return to the depths in this highly anticipated survival sequel. Explore the alien ocean world of Proteus, build underwater bases, craft advanced vehicles, and uncover the mysteries lurking in the abyss.",
    stats: [
      { value: "2M+", label: "Early Access Copies", icon: "📦" },
      { value: "651K", label: "Peak Players", icon: "👥" },
      { value: "450m", label: "Max Depth", icon: "🌊" },
      { value: "1-4", label: "Co-op Players", icon: "🎮" },
    ],
    tags: ["Survival", "Open World", "Base Building", "Crafting", "Co-op", "Early Access"],
    heroColor: "from-cyan-900/20 via-bg-primary to-blue-900/20",
    heroEmoji: "🌊",
  },
  "gta-6": {
    name: "Grand Theft Auto VI",
    desc: "The most anticipated game in history. Return to Vice City in the state of Leonida with dual protagonists Jason and Lucia. Launching November 19, 2026 on PS5 and Xbox Series X|S.",
    stats: [
      { value: "$80", label: "Price", icon: "💵" },
      { value: "Nov 19", label: "Release", icon: "📅" },
      { value: "PS5/XSX", label: "Platforms", icon: "🎮" },
      { value: "700+", label: "Enterable Buildings", icon: "🏢" },
    ],
    tags: ["Open World", "Action", "Crime", "Story-Driven", "PS5", "Xbox Series X|S"],
    heroColor: "from-pink-900/20 via-bg-primary to-orange-900/20",
    heroEmoji: "🌴",
  },
  "palworld": {
    name: "Palworld",
    desc: "The monster-collecting survival game that took Steam by storm. Catch Pals, build bases, automate production, and survive in a vibrant open world. Full 1.0 launch July 2026 with 725K peak players.",
    stats: [
      { value: "725K", label: "Peak Players", icon: "👥" },
      { value: "$30", label: "Price", icon: "💵" },
      { value: "72", label: "New Pals in 1.0", icon: "🦊" },
      { value: "32", label: "Max Players", icon: "🎮" },
    ],
    tags: ["Survival", "Open World", "Monster Collecting", "Base Building", "Multiplayer", "Crafting"],
    heroColor: "from-amber-900/20 via-bg-primary to-orange-900/20",
    heroEmoji: "🦊",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  const info = GAME_INFO[game];
  if (!info) return { title: "Game Not Found" };
  return {
    title: `${info.name} Guides — Walkthroughs, Tips & Maps`,
    description: `Complete ${info.name} guides: beginner tutorials, maps, tips & tricks, and more.`,
  };
}

export default async function GamePage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  const info = GAME_INFO[game];
  if (!info) notFound();
  const guides = getGuidesByGame(game);

  const catColors: Record<string, string> = {
    Beginner: "text-green-400 bg-green-400/10",
    Maps: "text-purple-400 bg-purple-400/10",
    Cosmetics: "text-amber-400 bg-amber-400/10",
    Advanced: "text-rose-400 bg-rose-400/10",
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <GameBackground game={game} />
          <div className={`absolute inset-0 bg-gradient-to-br ${info.heroColor}`} />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #A1FF4F 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16 relative">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Games
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left: Info */}
            <div className="flex-1 max-w-2xl">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider text-text-primary leading-[0.9]">{info.name}</h1>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">{info.desc}</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {info.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-bg-elevated text-text-secondary border border-border">{tag}</span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {info.stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-bg-card border border-border flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-elevated text-lg">{stat.icon}</div>
                <div>
                  <div className="font-display text-xl tracking-wider text-accent">{stat.value}</div>
                  <div className="text-[11px] text-text-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-accent text-black rounded-lg hover:bg-accent-dim transition-colors">Buy on Steam</a>
            <a href="#guides" className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-text-primary border border-border rounded-lg hover:bg-bg-card transition-colors">Browse {guides.length} Guides</a>
          </div>
            </div>

            {/* Right: Animated Illustration */}
            <div className="hidden lg:flex items-center justify-center flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl" style={{ transform: "scale(1.3)" }} />
                <HeroIllustration game={game} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
          <h2 className="font-display text-2xl sm:text-3xl tracking-wider text-text-primary mb-8">All {info.name} Guides</h2>

          {guides.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((guide, i) => {
                const gradients = ["from-accent-green-dim/30 to-accent-purple-dim/30", "from-accent-purple-dim/30 to-blue-900/30", "from-accent-green-dim/30 to-yellow-900/30"];
                const g = gradients[i % gradients.length];
                return (
                  <Link key={guide.slug} href={`/games/${game}/${guide.slug}`} className="group rounded-xl bg-bg-card border border-border card-hover flex flex-col overflow-hidden">
                    <div className={`h-1.5 bg-gradient-to-r ${g}`} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        {guide.category && (
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${catColors[guide.category] || "text-accent-purple bg-accent-purple/10"}`}>{guide.category}</span>
                        )}
                        <span className="text-[10px] text-text-muted">{guide.date}</span>
                      </div>
                      <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">{guide.title}</h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-2">{guide.excerpt}</p>
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
              <div className="text-5xl mb-4">{info.heroEmoji}</div>
              <h3 className="text-lg font-semibold text-text-primary">Guides Coming Soon</h3>
              <p className="mt-1 text-sm text-text-muted max-w-sm mx-auto">We&apos;re crafting the first batch of {info.name} guides. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
