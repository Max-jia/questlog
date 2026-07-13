import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface GuideMeta {
  title: string;
  excerpt: string;
  game: string;
  gameName: string;
  date: string;
  slug: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  gameVersion?: string;
  sources?: { name: string; url: string }[];
  verified?: "verified" | "community" | "unverified";
  tldr?: string[];
}

export interface Guide {
  meta: GuideMeta;
  content: string;
}

/** Get all guides sorted by date (newest first) */
export function getAllGuides(): GuideMeta[] {
  const guidesDir = path.join(CONTENT_DIR, "guides");
  if (!fs.existsSync(guidesDir)) return [];

  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const guides = files.map((file) => {
    const raw = fs.readFileSync(path.join(guidesDir, file), "utf-8");
    const { data } = matter(raw);
    const slug = file.replace(/\.md$/, "");
    return { ...data, slug } as GuideMeta;
  });

  return guides.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Get latest N guides */
export function getLatestGuides(limit = 6): GuideMeta[] {
  return getAllGuides().slice(0, limit);
}

/** Get guides for a specific game */
export function getGuidesByGame(gameSlug: string): GuideMeta[] {
  return getAllGuides().filter((g) => g.game === gameSlug);
}

/** Get a single guide by game slug and guide slug */
export function getGuide(
  gameSlug: string,
  guideSlug: string
): Guide | null {
  const filePath = path.join(CONTENT_DIR, "guides", `${guideSlug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (data.game !== gameSlug) return null;

  return {
    meta: { ...data, slug: guideSlug } as GuideMeta,
    content,
  };
}
