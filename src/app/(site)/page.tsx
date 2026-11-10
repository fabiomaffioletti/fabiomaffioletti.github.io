import type { Metadata } from "next";

import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import { profile } from "@/data/profile";
import { buildPageMetadata, siteDescription } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `${profile.name} – ${profile.headline}`,
  description: siteDescription,
  path: "/",
  type: "profile",
  absoluteTitle: true,
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.jobTitle,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: profile.location,
  sameAs: [profile.linkedin, profile.github],
  worksFor: {
    "@type": "Organization",
    name: profile.currentCompany,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HomeHero />
      <Services />
    </>
  );
}
