"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import CircularGallery from "./CircularGallery/CircularGallery";

// Games shown in the homepage gallery. Add a new entry here once the game
// has a cover image at /public/images/<slug>/cover.jpg.
const GALLERY_GAMES = [
  { slug: "meccha-chameleon", title: "Meccha Chameleon" },
  { slug: "moonlight-peaks", title: "Moonlight Peaks" },
  { slug: "palworld", title: "Palworld" },
  { slug: "subnautica-2", title: "Subnautica 2" },
  { slug: "gta-6", title: "GTA 6" },
  { slug: "ac-black-flag", title: "AC IV: Black Flag" },
];

export default function HomeGamesGallery() {
  const router = useRouter();

  const items = useMemo(
    () =>
      GALLERY_GAMES.map((game) => ({
        image: `/images/${game.slug}/cover.jpg`,
        text: game.title,
        link: `/games/${game.slug}`,
      })),
    []
  );

  const handleItemClick = useCallback(
    (item: { link?: string }) => {
      if (item.link) router.push(item.link);
    },
    [router]
  );

  return (
    <div style={{ height: "500px", position: "relative" }}>
      <CircularGallery
        items={items}
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.05}
        onItemClick={handleItemClick}
      />
    </div>
  );
}
