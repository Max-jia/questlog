import { getAllGuides } from "@/lib/content";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Search Guides",
  description: "Search QuestLog game guides by keyword, game, or topic.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  if (!q || q.trim().length < 2) notFound();

  const query = q.trim().toLowerCase();
  const all = getAllGuides();
  const results = all.filter((g) => {
    const haystack = [
      g.title,
      g.excerpt,
      ...(g.tags || []),
      g.section,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  const sectionColors: Record<string, string> = {
    Beginner: "text-green-400 bg-green-400/10",
    Combat: "text-red-400 bg-red-400/10",
    Systems: "text-amber-400 bg-amber-400/10",
    Farming: "text-emerald-400 bg-emerald-400/10",
    Collectibles: "text-purple-400 bg-purple-400/10",
    Reference: "text-blue-400 bg-blue-400/10",
    Maps: "text-cyan-400 bg-cyan-400/10",
    Walkthrough: "text-orange-400 bg-orange-400/10",
    Lore: "text-pink-400 bg-pink-400/10",
    Romance: "text-rose-400 bg-rose-400/10",
    Progression: "text-yellow-400 bg-yellow-400/10",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 lg:py-16">
      <h1 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary mb-2">
        Search Results
      </h1>
      <p className="text-text-muted mb-8">
        {results.length} guide{results.length !== 1 ? "s" : ""} matching
        &ldquo;{q}&rdquo;
      </p>

      {results.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-text-secondary mb-2">No guides found</p>
          <p className="text-sm text-text-muted">
            Try a different keyword or{" "}
            <Link href="/" className="text-accent hover:underline">
              browse all games
            </Link>
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((r) => (
            <Link
              key={`${r.game}-${r.slug}`}
              href={`/games/${r.game}/${r.slug}`}
              className="block rounded-xl bg-bg-card border border-border p-5 hover:border-accent/30 transition-colors group"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {r.title}
                </h2>
                {r.section && (
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      sectionColors[r.section] ||
                      "text-text-muted bg-bg-elevated"
                    }`}
                  >
                    {r.section}
                  </span>
                )}
              </div>
              <p className="text-xs text-text-muted mt-1">
                {r.gameName} &middot; {r.date}
              </p>
              {r.excerpt && (
                <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                  {r.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
