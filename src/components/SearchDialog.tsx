"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchResult {
  title: string;
  excerpt: string;
  slug: string;
  game: string;
  gameName: string;
  section: string | null;
  date: string;
}

export default function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  /* Focus input on open */
  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  /* Debounced search */
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query.trim())}`,
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  /* Keyboard shortcuts */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter" && query.trim().length >= 2) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        onClose();
      }
    },
    [query, onClose, router],
  );

  /* Global Esc to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

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
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="absolute top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-xl mx-auto px-4">
        <div
          className="bg-bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-text-muted flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Search guides... (e.g. "legendary ships")'
              className="flex-1 bg-transparent text-text-primary placeholder-text-muted text-base outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-text-muted bg-bg-elevated rounded border border-border">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto">
            {loading && (
              <div className="px-5 py-8 text-center text-sm text-text-muted">
                Searching...
              </div>
            )}

            {!loading && query.trim().length >= 2 && results.length === 0 && (
              <div className="px-5 py-8 text-center">
                <p className="text-sm text-text-muted">
                  No guides found for &ldquo;{query}&rdquo;
                </p>
              </div>
            )}

            {!loading && query.trim().length < 2 && (
              <div className="px-5 py-8 text-center">
                <p className="text-xs text-text-muted">
                  Type at least 2 characters to search across {141} guides
                </p>
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="py-2">
                {results.map((r, i) => (
                  <Link
                    key={`${r.game}-${r.slug}`}
                    href={`/games/${r.game}/${r.slug}`}
                    onClick={onClose}
                    className={`flex items-start gap-4 px-5 py-3.5 hover:bg-bg-elevated transition-colors ${
                      i > 0 ? "" : ""
                    }`}
                  >
                    {/* Game icon dot */}
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-text-primary truncate">
                          {highlightMatch(r.title, query)}
                        </span>
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
                      <p className="text-xs text-text-muted mt-0.5">
                        {r.gameName}
                      </p>
                      {r.excerpt && (
                        <p className="text-xs text-text-muted mt-0.5 line-clamp-1">
                          {r.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
                {/* See all link */}
                <Link
                  href={`/search?q=${encodeURIComponent(query.trim())}`}
                  onClick={onClose}
                  className="block px-5 py-3 text-center text-xs font-medium text-accent hover:text-accent-dim transition-colors border-t border-border mt-1"
                >
                  View all results →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Wrap matching text in a highlight span (simple substring match) */
function highlightMatch(text: string, query: string): React.ReactNode {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return (
    <>
      {before}
      <span className="text-accent">{match}</span>
      {after}
    </>
  );
}
