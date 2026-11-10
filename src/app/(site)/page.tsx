import type { Metadata } from "next";

import AdditionalInfo from "@/components/AdditionalInfo";
import Companies from "@/components/Companies";
import ContactCTA from "@/components/ContactCTA";
import Education from "@/components/Education";
import HomeHero from "@/components/HomeHero";
import Links from "@/components/Links";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import { curriculum } from "@/data/curriculum";
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
      <Summary />
      <Companies companies={curriculum.experience.companies} />
      <Education education={curriculum.education} />
      <Skills skills={curriculum.skills} />
      <Links links={curriculum.links} />
      <AdditionalInfo additionalInfo={curriculum.additionalInfo} />
      <ContactCTA />
    </>
  );
}
