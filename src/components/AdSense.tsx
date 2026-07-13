"use client";

import { useEffect } from "react";

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || "";

/** In-article ad — placed between content sections */
export function ArticleAd() {
  useEffect(() => {
    if (PUBLISHER_ID && typeof window !== "undefined") {
      try {
        // @ts-expect-error AdSense global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {}
    }
  }, []);

  if (!PUBLISHER_ID) return null;

  return (
    <div className="my-8 flex justify-center">
      <div className="rounded-xl bg-bg-card border border-border p-4 w-full max-w-2xl text-center">
        <span className="text-[10px] uppercase tracking-wider text-text-muted mb-2 block">
          Advertisement
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: "block", height: "90px" }}
          data-ad-client={PUBLISHER_ID}
          data-ad-slot="2345678901"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

/** Sidebar ad — narrower, vertical */
export function SidebarAd() {
  useEffect(() => {
    if (PUBLISHER_ID && typeof window !== "undefined") {
      try {
        // @ts-expect-error AdSense global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {}
    }
  }, []);

  if (!PUBLISHER_ID) return null;

  return (
    <div className="flex justify-center">
      <div className="rounded-xl bg-bg-card border border-border p-4 text-center w-full">
        <span className="text-[10px] uppercase tracking-wider text-text-muted mb-2 block">
          Advertisement
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: "block", height: "250px" }}
          data-ad-client={PUBLISHER_ID}
          data-ad-slot="3456789012"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
