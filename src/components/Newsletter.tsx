"use client";

import { useState } from "react";

const BUTTONDOWN_USERNAME = process.env.NEXT_PUBLIC_BUTTONDOWN_USERNAME || "";
const FORM_ACTION = `https://buttondown.email/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!BUTTONDOWN_USERNAME) return null;

  const handleSubmit = (e: React.FormEvent) => {
    // Let the form submit naturally to Buttondown in a new tab
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border p-8 sm:p-12 text-center">
        <div className="relative">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary">
            Check Your Inbox
          </h2>
          <p className="mt-3 text-text-secondary max-w-md mx-auto">
            We sent a confirmation email. Click the link inside to confirm your subscription.
          </p>
          <p className="mt-3 text-xs text-text-muted">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border p-8 sm:p-12 text-center">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #A1FF4F 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary">
          Never Miss a Guide
        </h2>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          New guides dropping weekly. Get notified when we publish fresh
          content for your favorite games.
        </p>

        <form
          action={FORM_ACTION}
          method="post"
          target="_blank"
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 text-sm bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 text-sm font-semibold bg-accent text-black rounded-lg hover:bg-accent-dim transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-3 text-xs text-text-muted">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
