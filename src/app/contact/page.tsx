import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with QuestLog — questions, suggestions, corrections, or guide requests.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <h1 className="font-display text-4xl tracking-wider text-text-primary">Contact Us</h1>
      <p className="mt-4 text-text-secondary leading-relaxed">
        Got a question, spotted an error, or want to request a guide for a specific game? We&apos;d love to hear from you.
      </p>

      <div className="mt-10 space-y-6 text-text-secondary leading-relaxed">
        <div className="p-6 rounded-xl bg-bg-card border border-border">
          <h2 className="text-lg font-semibold text-text-primary mb-2">Report an Error</h2>
          <p className="text-sm">
            Found something wrong in one of our guides? Let us know which guide and what needs fixing. We update guides regularly based on reader feedback.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-bg-card border border-border">
          <h2 className="text-lg font-semibold text-text-primary mb-2">Request a Guide</h2>
          <p className="text-sm">
            Is there a game you&apos;d like us to cover? Tell us which game and what kind of guides you&apos;d find most helpful.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-bg-card border border-border">
          <h2 className="text-lg font-semibold text-text-primary mb-2">General Inquiries</h2>
          <p className="text-sm">
            For any other questions, suggestions, or feedback — we read everything.
          </p>
        </div>
      </div>

      <p className="mt-8 text-sm text-text-muted">
        Email us at: <span className="text-accent">hello@questlog.site</span>
      </p>
    </div>
  );
}
