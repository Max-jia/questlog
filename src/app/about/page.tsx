import Link from "next/link";

export const metadata = {
  title: "About QuestLog",
  description:
    "QuestLog creates in-depth game guides, walkthroughs, and pro tips for the hottest games.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl tracking-wider text-text-primary">
        About QuestLog
      </h1>
      <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
        <p>
          QuestLog is an independent game guide website built by players, for
          players. We create in-depth, well-researched guides to help you master
          the games you love.
        </p>
        <p>
          We launched in July 2026 with a focus on Meccha Chameleon — 2026&apos;s
          biggest indie breakout hit. Our mission is to provide the most
          complete, accurate, and beginner-friendly guides on the web.
        </p>
        <p>
          Every guide on this site is written from hands-on experience. We play
          the games, test the strategies, and verify every tip before publishing.
        </p>
        <p>
          Got a question, suggestion, or want to request a guide for a specific
          game? Reach out to us — we&apos;d love to hear from you.
        </p>
        <p>
          <Link
            href="/"
            className="text-accent hover:text-accent-dim underline transition-colors"
          >
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
