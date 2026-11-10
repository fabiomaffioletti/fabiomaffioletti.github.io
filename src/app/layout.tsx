import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import { profile } from "@/data/profile";
import { siteDescription } from "@/lib/metadata";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-spectral",
});

const description = siteDescription;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} – ${profile.headline}`,
    template: `%s – ${profile.name}`,
  },
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_US",
    title: `${profile.name} – ${profile.headline}`,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} – ${profile.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} – ${profile.headline}`,
    description,
    images: ["/og-image.png"],
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
  return (
    <html lang="en">
      <body className={spectral.variable}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:px-4 focus:py-2 focus:text-fg focus:outline-2 focus:outline-offset-2 focus:outline-focus"
        >
          Skip to content
        </a>
        {children}
        <GoogleAnalytics gaId="G-09GX8HGR97" />
      </body>
    </html>
  );
}
