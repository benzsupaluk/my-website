import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

import Analytics from "./components/Analytics";
import Rail from "./components/Rail";
import Footer from "./components/Footer";
import { site } from "@/data/site";

const sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(sans.variable, mono.variable)}>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink-fg focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-ink-base"
        >
          Skip to content
        </a>
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
          <div className="md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-x-16 lg:grid-cols-[260px_minmax(0,1fr)]">
            <Rail />
            <div className="flex min-h-dvh min-w-0 flex-col">
              <main id="content" className="grow py-12 md:py-24">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
