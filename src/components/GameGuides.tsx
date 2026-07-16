"use client";

import { useState } from "react";
import Link from "next/link";
import type { GuideMeta } from "@/lib/content";

const SECTION_COLORS: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10",
  Maps: "text-blue-400 bg-blue-400/10",
  Combat: "text-red-400 bg-red-400/10",
  Building: "text-amber-400 bg-amber-400/10",
  Progression: "text-purple-400 bg-purple-400/10",
  Reference: "text-cyan-400 bg-cyan-400/10",
  News: "text-pink-400 bg-pink-400/10",
  Multiplayer: "text-orange-400 bg-orange-400/10",
};

const GRADIENTS = [
  "from-accent-green-dim/30 to-accent-purple-dim/30",
  "from-accent-purple-dim/30 to-blue-900/30",
  "from-accent-green-dim/30 to-yellow-900/30",
];

export default function GameGuides({
  guides,
  sections,
  game,
}: {
  guides: GuideMeta[];
  sections: string[];
  game: string;
}) {
  const [activeSection, setActiveSection] = useState("All");

  const filteredGuides =
    activeSection === "All"
      ? guides
      : guides.filter((g) => (g.section || "Other") === activeSection);

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveSection("All")}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            activeSection === "All"
              ? "bg-accent/15 text-accent border border-accent/30"
              : "bg-bg-card text-text-secondary border border-border hover:text-text-primary"
          }`}
        >
          All ({guides.length})
        </button>
        {sections.map((sec) => {
          const count = guides.filter(
            (g) => (g.section || "Other") === sec
          ).length;
          return (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeSection === sec
                  ? "bg-accent/15 text-accent border border-accent/30"
                  : "bg-bg-card text-text-secondary border border-border hover:text-text-primary"
              }`}
            >
              {sec} ({count})
            </button>
          );
        })}
      </div>

      {/* Guides grid */}
      {filteredGuides.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGuides.map((guide, i) => {
            const g = GRADIENTS[i % GRADIENTS.length];
            return (
              <Link
                key={guide.slug}
                href={`/games/${game}/${guide.slug}`}
                className="group rounded-xl bg-bg-card border border-border card-hover flex flex-col overflow-hidden"
              >
                <div className={`h-1.5 bg-gradient-to-r ${g}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    {guide.section && (
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          SECTION_COLORS[guide.section] ||
                          "text-accent-purple bg-accent-purple/10"
                        }`}
                      >
                        {guide.section}
                      </span>
                    )}
                    <span className="text-[10px] text-text-muted">
                      {guide.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-2">
                    {guide.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <span className="text-xs text-accent font-medium">
                      Read Guide
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-accent group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-bg-card rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary">
            No guides in this section yet
          </h3>
          <p className="mt-1 text-sm text-text-muted">
            More {game} guides are coming soon.
          </p>
        </div>
      )}
    </>
  );
}
