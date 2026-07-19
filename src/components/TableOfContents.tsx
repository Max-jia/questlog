"use client";

import { useEffect, useState, useCallback } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

/** Extract ## and ### headings from markdown content */
function extractHeadings(content: string): TOCItem[] {
  const headings: TOCItem[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;
    const level = match[1].length; // 2 or 3
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    headings.push({ id, text, level });
  }
  return headings;
}

export default function TableOfContents({
  content,
  readingTime,
}: {
  content: string;
  readingTime: number;
}) {
  const headings = extractHeadings(content);
  const [activeId, setActiveId] = useState<string>("");

  /* IntersectionObserver: highlight current section */
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  if (headings.length < 3) return null;

  return (
    <nav className="hidden xl:block sticky top-24 w-56 flex-shrink-0 self-start ml-8">
      <div className="rounded-xl bg-bg-card border border-border p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">
          On this page
        </h4>
        <p className="text-[10px] text-text-muted mb-4">
          {readingTime} min read &middot; {headings.length} sections
        </p>
        <ul className="space-y-0.5">
          {headings.map((h) => (
            <li key={h.id}>
              <button
                onClick={() => scrollTo(h.id)}
                className={`w-full text-left text-xs py-1.5 px-2 rounded-md transition-colors truncate block ${
                  h.level === 3 ? "pl-5" : ""
                } ${
                  activeId === h.id
                    ? "text-accent bg-accent/10 font-semibold"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                }`}
                title={h.text}
              >
                {h.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
