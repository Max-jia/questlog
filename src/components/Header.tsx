"use client";

import { useState } from "react";
import Link from "next/link";

const GAMES = [
  { name: "Meccha Chameleon", slug: "meccha-chameleon" },
  { name: "Subnautica 2", slug: "subnautica-2" },
  { name: "Palworld", slug: "palworld" },
  { name: "AC Black Flag", slug: "ac-black-flag" },
  { name: "GTA 6", slug: "gta-6" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <a
              href="https://store.steampowered.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-sm font-semibold bg-accent text-black rounded-lg hover:bg-accent-dim transition-colors"
            >
              Get Games
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors"
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
    </header>
  );
}
