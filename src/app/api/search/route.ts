import { NextRequest, NextResponse } from "next/server";
import { getAllGuides } from "@/lib/content";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim().toLowerCase();
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const all = getAllGuides();
  const results = all
    .filter((g) => {
      const title = g.title.toLowerCase();
      const excerpt = g.excerpt?.toLowerCase() || "";
      const tags = (g.tags || []).join(" ").toLowerCase();
      const section = g.section?.toLowerCase() || "";
      const haystack = `${title} ${excerpt} ${tags} ${section}`;
      return haystack.includes(q);
    })
    .slice(0, 12)
    .map((g) => ({
      title: g.title,
      excerpt: g.excerpt,
      slug: g.slug,
      game: g.game,
      gameName: g.gameName,
      section: g.section || null,
      date: g.date,
    }));

  return NextResponse.json({ results });
}
