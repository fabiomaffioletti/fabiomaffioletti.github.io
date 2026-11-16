import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import { profile } from "@/data/profile";
import { themeScript } from "@/lib/theme";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-bricolage",
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const title = `${profile.name} – ${profile.headline}`;

const description =
  "Senior engineering leader and executive coach, helping product companies build effective engineering teams and coaching people in tech through the AI era.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} – ${profile.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
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
    <html
      lang="en"
      data-theme="dark"
      className={`${bricolage.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies a saved theme before first paint; see src/lib/theme.ts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-09GX8HGR97" />
      </body>
    </html>
  );
}
