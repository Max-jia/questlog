import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "QuestLog — Game Guides, Walkthroughs & Tips",
    template: "%s | QuestLog",
  },
  description:
    "In-depth game guides, walkthroughs, and pro tips. Master every game with detailed maps, mechanics breakdowns, and strategy guides.",
  keywords: [
    "game guides",
    "walkthrough",
    "strategy guide",
    "Meccha Chameleon",
    "tips and tricks",
    "game wiki",
  ],
  openGraph: {
    title: "QuestLog — Game Guides & Walkthroughs",
    description:
      "In-depth game guides, walkthroughs, and pro tips for the hottest games.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuestLog — Game Guides & Walkthroughs",
    description:
      "In-depth game guides, walkthroughs, and pro tips for the hottest games.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="aaUW1_LvABM8azEDMgMeeo2FxryGrqQk33pyD4c8rFg" />
        {/* WebSite schema with Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "QuestLog",
              url: "https://questlog.site",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://questlog.site/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
