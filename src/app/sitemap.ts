import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/content";

const BASE_URL = "https://questlog.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllGuides();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  // Game hub pages
  const games = [...new Set(guides.map((g) => g.game))];
  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${BASE_URL}/games/${game}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Individual guide pages
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${BASE_URL}/games/${guide.game}/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...gamePages, ...guidePages];
}
