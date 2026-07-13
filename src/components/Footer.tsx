import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-xl tracking-wider text-text-primary">
              QUESTLOG
            </span>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              In-depth game guides for players who want to master every game.
              Walkthroughs, maps, builds, and pro tips.
            </p>
          </div>

          {/* Games */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Games
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/games/meccha-chameleon"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Meccha Chameleon
                </Link>
              </li>
              <li>
                <Link
                  href="/games/subnautica-2"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Subnautica 2
                </Link>
              </li>
              <li>
                <Link
                  href="/games/palworld"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Palworld
                </Link>
              </li>
              <li>
                <Link
                  href="/games/gta-6"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Grand Theft Auto VI
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Latest Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/games/meccha-chameleon"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Beginner&apos;s Corner
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Info
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-xs text-text-muted">
            &copy; {new Date().getFullYear()} QuestLog. All game names and
            images are property of their respective owners. We are not
            affiliated with any game developer or publisher.
          </p>
        </div>
      </div>
    </footer>
  );
}
