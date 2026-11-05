import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { profile, yearsOfExperience } from "@/data/profile";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-spectral",
});

const title = `${profile.name} – ${profile.headline}`;

const description = `Technology leader with ${yearsOfExperience()}+ years of experience driving engineering excellence, building high-performing teams, and delivering scalable software solutions.`;

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
        alt: `${profile.name} – ${profile.jobTitle}`,
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
    <html lang="en">
      <body className={spectral.variable}>
        <div className="container">{children}</div>
        <GoogleAnalytics gaId="G-09GX8HGR97" />
      </body>
    </html>
  );
}
