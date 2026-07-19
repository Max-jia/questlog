"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SearchDialog from "@/components/SearchDialog";

const GAMES = [
  { name: "Meccha Chameleon", slug: "meccha-chameleon" },
  { name: "Moonlight Peaks", slug: "moonlight-peaks" },
  { name: "Subnautica 2", slug: "subnautica-2" },
  { name: "Palworld", slug: "palworld" },
  { name: "AC Black Flag", slug: "ac-black-flag" },
  { name: "GTA 6", slug: "gta-6" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  /* Cmd+K / Ctrl+K to open search */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="QuestLog" className="h-8 w-8" />
            <span className="font-display text-2xl tracking-wider text-text-primary group-hover:text-accent transition-colors">
              QUESTLOG
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {GAMES.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-all"
              >
                {game.name}
              </Link>
            ))}
            <button
              onClick={() => setSearchOpen(true)}
              className="ml-2 p-2 text-text-secondary hover:text-accent transition-colors rounded-lg hover:bg-bg-card"
              aria-label="Search guides"
              title="Search (Cmd+K)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a
              href="https://store.steampowered.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-4 py-2 text-sm font-semibold bg-accent text-black rounded-lg hover:bg-accent-dim transition-colors"
            >
              Get Games
            </a>
          </nav>

          {/* Mobile: search + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="Search guides"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            {GAMES.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
              >
                {game.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
