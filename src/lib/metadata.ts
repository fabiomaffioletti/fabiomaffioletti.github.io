import type { Metadata } from "next";

import { profile, yearsOfExperience } from "@/data/profile";

export const siteDescription = `Technology leader with ${yearsOfExperience()}+ years of experience driving engineering excellence, building high-performing teams, and delivering scalable software solutions.`;

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile" | "article";
  absoluteTitle?: boolean;
}

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${profile.name} – ${profile.jobTitle}`,
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: profile.name,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
