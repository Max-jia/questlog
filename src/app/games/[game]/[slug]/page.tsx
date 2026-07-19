import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, getGuidesByGame } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import { KeybindCard, GameModeCards, MapLayout, SkinCard, TipBox, ChameleonIcon } from "@/components/Visuals";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

/** Parse Q&A from FAQ content for Schema.org structured data */
function parseFAQ(content: string): { question: string; answer: string }[] {
  const qa: { question: string; answer: string }[] = [];
  const lines = content.split("\n");
  let currentQ = "";
  let currentA = "";

  for (const line of lines) {
    if (line.match(/^\*\*Q:\s/)) {
      if (currentQ && currentA) qa.push({ question: currentQ, answer: currentA.trim() });
      currentQ = line.replace(/^\*\*Q:\s*/, "").replace(/\*\*$/, "").trim();
      currentA = "";
    } else if (currentQ && line.startsWith("A:")) {
      currentA += line.replace(/^A:\s*/, "") + " ";
    } else if (currentQ && currentA) {
      currentA += line + " ";
    }
  }
  if (currentQ && currentA) qa.push({ question: currentQ, answer: currentA.trim() });
  return qa;
}

/** Content-matched visuals injected per guide slug */
function GuideVisuals({ slug }: { slug: string }) {
  switch (slug) {

    case "meccha-chameleon-beginner-guide":
      return (
        <>
          <KeybindCard />
          <GameModeCards />
          <TipBox type="pro">
            Turn off your shadows by pressing <strong>V</strong> in paint mode. This single setting is the difference between looking like a flat part of the environment and a sticker pasted on a wall. Most beginners skip this entirely.
          </TipBox>
          <div className="not-prose my-8 rounded-xl bg-bg-card border border-border p-6">
            <div className="flex items-center gap-4 mb-5">
              <ChameleonIcon size={48} />
              <div>
                <h3 className="font-display text-xl tracking-wider text-text-primary">Match Quick Reference</h3>
                <p className="text-xs text-text-muted mt-1">The complete round flow at a glance</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { phase: "1. Prep", desc: "Find spot, sample colors, paint body, lock pose", time: "30-60s", icon: "🎨" },
                { phase: "2. Hunt", desc: "Seekers search. Hiders freeze. Caught = eliminated.", time: "3-5 min", icon: "🔍" },
                { phase: "3. Results", desc: "All spots revealed. Laugh at the obvious ones.", time: "15s", icon: "👀" },
              ].map((p) => (
                <div key={p.phase} className="rounded-lg bg-bg-elevated border border-border p-3 text-center">
                  <div className="text-xl mb-1">{p.icon}</div>
                  <div className="text-xs font-bold text-text-primary">{p.phase}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">{p.desc}</div>
                  <div className="text-[10px] text-accent mt-1 font-mono">{p.time}</div>
                </div>
              ))}
            </div>
          </div>
          <TipBox type="warning">
            If a hunter shoots your clone (Q key), you are eliminated too. Clone placement is high-risk, high-reward. Only use clones when you&apos;ve mastered basic hiding first.
          </TipBox>
        </>
      );

    case "meccha-chameleon-all-maps-guide":
      return (
        <>
          <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Hider Difficulty by Map", color: "#A1FF4F", data: [["Penguin Hotel",85],["Mansion",80],["Sewer",65],["Sugar Land",55],["Backrooms",40],["Indoor Country",30],["Osaka",25]] },
              { label: "Seeker Difficulty by Map", color: "#C74FFF", data: [["Osaka",90],["Backrooms",75],["Indoor Country",70],["Sugar Land",60],["Sewer",50],["Mansion",35],["Penguin Hotel",25]] },
            ].map((col) => (
              <div key={col.label} className="rounded-xl bg-bg-card border border-border p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: col.color }}>{col.label}</h4>
                {col.data.map(([name, val]) => (
                  <div key={name} className="flex items-center gap-3 mb-2.5">
                    <span className="text-xs text-text-secondary w-24 truncate">{name}</span>
                    <div className="flex-1 h-2 rounded-full bg-bg-elevated overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${val}%`, background: col.color, opacity: 0.7 }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <MapLayout name="Hide-and-Seek Mansion" spots={["Library bookshelves","Ceiling pillars","Horse statue","Kitchen wall posters","Bathroom tile corner","Balloon banner","Behind front door"]} color="#A1FF4F" />
          <MapLayout name="Penguin Hotel" spots={["Stuffed penguin toys","White curtains (high)","Ballroom rafters","Under beds","Second-floor tables","Hallway dice blocks"]} color="#C74FFF" />
          <MapLayout name="Sewer" spots={["Graffiti walls (best)","Ceiling pipes","Oil barrels","Side lockers","Under boards in muck"]} color="#F59E0B" />
          <MapLayout name="Osaka" spots={["Truck bed/underneath","Overhead signs","Octopus wall decor","Open shop walls","Trash piles","Plywood corners"]} color="#06B6D4" />
          <TipBox type="tip">
            Custom maps appear in <strong>pink/purple</strong> in the lobby map selector. Subscribe on the Steam Workshop and the game auto-downloads them. All players in your lobby must have the same custom map subscribed.
          </TipBox>
        </>
      );

    case "meccha-chameleon-secret-skins":
      return (
        <>
          <SkinCard name="Glitched Matrix" difficulty={1} time="10-15 min" color="#A1FF4F" desc="Hidden in the graphics settings menu. Set everything to minimum, reopen settings 3 times, toggle [MATRIX]." />
          <SkinCard name="Mecha-Titanium Hazard" difficulty={2} time="Several matches" color="#F59E0B" desc="Collect 5 glowing orange data pads across Industrial Foundry map locations." />
          <SkinCard name="Neon Specter" difficulty={3} time="30-60 min" color="#06B6D4" desc="Solve a neon sign puzzle in Neo-Tokyo Grid, then survive Endless Alley without taking damage." />
          <SkinCard name="Retro Pixel Chameleon" difficulty={4} time="Variable (days)" color="#C74FFF" desc="Complete Ghost, Sharpshooter, and Flawless challenges all in a single match." />
          <SkinCard name="Prismatic Overlord" difficulty={5} time="Team dependent" color="#EC4899" desc="Assemble a 4+ player team, solve a community hub puzzle, and defeat a hidden multi-phase boss." />
          <TipBox type="warning">
            <strong>Prismatic Overlord requires a coordinated team of 4+ players.</strong> Solo is impossible. Join the Meccha Chameleon Discord server to find groups attempting this unlock.
          </TipBox>
        </>
      );

    default:
      return null;
  }
}

const OG_IMAGES: Record<string, string> = {
  "meccha-chameleon": "/images/meccha-chameleon/cover.jpg",
  "subnautica-2": "/images/subnautica-2/cover.jpg",
  "gta-6": "/images/gta-6/screenshots/cover.jpg",
};

export async function generateMetadata({ params }: { params: Promise<{ game: string; slug: string }> }) {
  const { game, slug } = await params;
  const guide = getGuide(game, slug);
  if (!guide) return { title: "Guide Not Found" };
  const ogImage = OG_IMAGES[game];
  return {
    title: guide.meta.title,
    description: guide.meta.excerpt,
    openGraph: {
      title: guide.meta.title,
      description: guide.meta.excerpt,
      type: "article",
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: guide.meta.title,
      description: guide.meta.excerpt,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ game: string; slug: string }> }) {
  const { game, slug } = await params;
  const guide = getGuide(game, slug);
  if (!guide) notFound();

  const { meta, content } = guide;
  const allGuides = getGuidesByGame(game).filter((g) => g.slug !== slug).slice(0, 3);
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const faqItems = parseFAQ(content);
  const siteUrl = "https://questlog.cc";
  const canonicalUrl = `${siteUrl}/games/${game}/${slug}`;
  const datePublished = meta.date;

  return (
    <div className="flex justify-center">
    <article className="flex-1 max-w-4xl px-4 sm:px-6 py-10 lg:py-14 min-w-0">
      {/* ===== Structured Data (Schema.org) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            /* Article schema — all guides */
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: meta.title,
              description: meta.excerpt,
              datePublished,
              dateModified: meta.date,
              author: { "@type": "Organization", name: "QuestLog", url: siteUrl },
              publisher: { "@type": "Organization", name: "QuestLog", url: siteUrl },
              mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
              ...(meta.tags && meta.tags.length > 0
                ? { keywords: meta.tags.join(", ") }
                : {}),
            },
            /* BreadcrumbList schema */
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: meta.gameName,
                  item: `${siteUrl}/games/${meta.game}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: meta.title,
                },
              ],
            },
            /* FAQPage schema — any article with Q&A sections */
            ...(faqItems.length > 0
              ? [
                  {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqItems.map((item) => ({
                      "@type": "Question",
                      name: item.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                      },
                    })),
                  },
                ]
              : []),
          ]),
        }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/games/${meta.game}`} className="hover:text-accent transition-colors">{meta.gameName}</Link>
        <span>/</span>
        <span className="text-text-secondary truncate">{meta.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          {meta.category && (
            <span className="text-[10px] font-semibold text-accent-purple uppercase tracking-wider bg-accent-purple/10 px-2.5 py-1 rounded-full">{meta.category}</span>
          )}
          <span className="text-xs text-text-muted">{meta.date}</span>
          <span className="text-xs text-text-muted">·</span>
          <span className="text-xs text-text-muted">{readingTime} min read</span>
          {meta.featured && (
            <span className="text-[10px] font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded-full">Featured</span>
          )}
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-text-primary leading-[1.1]">{meta.title}</h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">{meta.excerpt}</p>
        {meta.tags && meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.tags.map((tag: string) => (
              <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-bg-elevated text-text-secondary border border-border">{tag}</span>
            ))}
          </div>
        )}
      </header>

      {/* TL;DR Summary */}
      {meta.tldr && meta.tldr.length > 0 && (
        <div className="mb-10 rounded-xl border border-accent/20 bg-accent/[0.03] p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm">⚡</span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">TL;DR — What You'll Learn</span>
          </div>
          <ul className="space-y-1.5">
            {meta.tldr.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Visual separator */}
      <div className="flex items-center gap-3 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="w-2 h-2 rounded-full bg-accent/40" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Content-matched visuals (before markdown) */}
      <GuideVisuals slug={slug} />

      {/* Markdown content */}
      <div className="guide-content">
        <ReactMarkdown
          components={{
            /* Add IDs to headings for TOC anchor links */
            h2: ({ children, ...props }) => {
              const text = extractText(children);
              const id = slugify(text);
              return (
                <h2 id={id} {...props}>
                  {children}
                </h2>
              );
            },
            h3: ({ children, ...props }) => {
              const text = extractText(children);
              const id = slugify(text);
              return (
                <h3 id={id} {...props}>
                  {children}
                </h3>
              );
            },
            /* Style <details> as spoiler blocks */
            details: ({ children, ...props }) => (
              <details
                className="my-5 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] overflow-hidden group"
                {...props}
              >
                {children}
              </details>
            ),
            summary: ({ children, ...props }) => (
              <summary
                className="cursor-pointer px-5 py-3 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors select-none bg-amber-500/[0.06] border-b border-amber-500/20"
                {...props}
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-shrink-0 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  {children}
                </span>
              </summary>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* ===== Credibility Footer ===== */}
      <div className="mt-12 pt-8 border-t border-border space-y-6">
        {/* Verification status + Version */}
        <div className="flex flex-wrap items-center gap-4">
          {meta.verified && (
            <div className="flex items-center gap-2">
              {meta.verified === "verified" ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  Verified — 3+ sources
                </span>
              ) : meta.verified === "community" ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Community Consensus
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted bg-bg-elevated px-3 py-1.5 rounded-full">
                  Awaiting Verification
                </span>
              )}
            </div>
          )}
          {meta.gameVersion && (
            <span className="text-xs text-text-muted font-mono">
              Game v<strong className="text-text-secondary">{meta.gameVersion}</strong>
            </span>
          )}
          {meta.dateModified && meta.dateModified !== meta.date && (
            <span className="text-xs text-text-muted">
              Updated <strong className="text-text-secondary">{meta.dateModified}</strong>
            </span>
          )}
        </div>

        {/* Sources */}
        {meta.sources && meta.sources.length > 0 && (
          <div className="rounded-xl bg-bg-card border border-border p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Sources</h4>
            <ul className="space-y-1.5">
              {meta.sources.map((src, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-accent font-mono text-xs mt-0.5">[{i + 1}]</span>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors underline underline-offset-2">{src.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Report error */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors px-3 py-2 rounded-lg border border-border hover:border-accent/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            Report an error or outdated info
          </button>
          <p className="text-[10px] text-text-muted">
            This guide was compiled from multiple public sources. We cross-reference with 3+ sources before publishing.
          </p>
        </div>
      </div>

      {/* Related guides */}
      {allGuides.length > 0 && (
        <div className="mt-16 pt-10 border-t border-border">
          <h3 className="font-display text-xl tracking-wider text-text-primary mb-5">More {meta.gameName} Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {allGuides.map((g, i) => {
              const gradients = ["from-accent-green-dim/30 to-accent-purple-dim/30", "from-accent-purple-dim/30 to-blue-900/30", "from-accent-green-dim/30 to-yellow-900/30"];
              return (
                <Link key={g.slug} href={`/games/${game}/${g.slug}`} className="group rounded-xl bg-bg-card border border-border card-hover overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${gradients[i % gradients.length]}`} />
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">{g.title}</h4>
                    <p className="mt-1 text-xs text-text-muted line-clamp-2">{g.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Share buttons */}
      <ShareButtons title={meta.title} />

      {/* Back */}
      <div className="mt-8 pt-6 border-t border-border">
        <Link href={`/games/${meta.game}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dim transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to {meta.gameName} Guides
        </Link>
      </div>
    </article>

    {/* Sticky table of contents (desktop only) */}
    <TableOfContents content={content} readingTime={readingTime} />
    </div>
  );
}

/** Extract plain text from React children */
function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return extractText((children as { props: { children?: React.ReactNode } }).props.children);
  }
  return "";
}

/** Slugify a heading string for anchor IDs */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
