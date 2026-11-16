import type { Metadata } from "next";

import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Companies from "@/components/Companies";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Links from "@/components/Links";
import AdditionalInfo from "@/components/AdditionalInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { curriculum } from "@/data/curriculum";
import { profile } from "@/data/profile";

const title = `Engineering leadership – ${profile.name}`;
const description =
  "Leadership from inside, for efficient teams aligned with product, business and customers. The full curriculum vitae of Fabio Maffioletti.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/engineering-leadership/" },
  openGraph: { title, description, url: "/engineering-leadership/" },
  twitter: { title, description },
};

export default function EngineeringLeadership() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero
          title="Engineering leadership"
          sub="Leadership from inside, for efficient teams aligned with product, business and customers"
        />
        <Summary paragraphs={curriculum.summary} />
        <Companies companies={curriculum.experience.companies} />
        <Education education={curriculum.education} />
        <Skills skills={curriculum.skills} />
        <Links links={curriculum.links} />
        <AdditionalInfo additionalInfo={curriculum.additionalInfo} />
        <Contact
          title="Let's talk about your team"
          text="Tell me in a few lines where your engineering organisation is and where you want it to be."
        />
      </main>
      <Footer />
    </>
  );
}
