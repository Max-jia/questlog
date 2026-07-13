import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "QuestLog Privacy Policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl tracking-wider text-text-primary">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
        <p>
          <strong className="text-text-primary">Last updated:</strong> July 6, 2026
        </p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">
          Information We Collect
        </h2>
        <p>
          QuestLog does not collect personal information directly. However, we
          use third-party services that may collect data:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Google AdSense</strong> — May use cookies to serve
            personalized advertisements. You can opt out of personalized ads
            through Google&apos;s Ad Settings.
          </li>
          <li>
            <strong>Analytics</strong> — We may use privacy-focused analytics to
            understand how visitors use our site (pages viewed, time on site).
            No personal identifiers are collected.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-text-primary mt-8">
          Cookies
        </h2>
        <p>
          We use essential cookies required for the website to function. Third-party
          advertising partners may also set cookies for ad delivery and
          measurement.
        </p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">
          Third-Party Links
        </h2>
        <p>
          Our guides may contain links to external sites (Steam, Amazon, etc.).
          We are not responsible for the privacy practices of these sites.
        </p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">
          Contact
        </h2>
        <p>
          If you have questions about this privacy policy, please contact us.
        </p>

        <p className="pt-4">
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
