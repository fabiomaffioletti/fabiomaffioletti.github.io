import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Companies from "@/components/Companies";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Links from "@/components/Links";
import AdditionalInfo from "@/components/AdditionalInfo";
import Footer from "@/components/Footer";

import { curriculum } from "@/data/curriculum";
import { profile } from "@/data/profile";

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
      <Header />
      <Summary />
      <Companies companies={curriculum.experience.companies} />
      <Education education={curriculum.education} />
      <Skills skills={curriculum.skills} />
      <Links links={curriculum.links} />
      <AdditionalInfo additionalInfo={curriculum.additionalInfo} />
      <Footer />
    </>
  );
}
