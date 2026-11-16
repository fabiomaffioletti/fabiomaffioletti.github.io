import type { Metadata } from "next";

import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  CardGrid,
  Comparison,
  Section,
  Steps,
  buttonStyles,
  type Card,
} from "@/components/ui";

import { profile } from "@/data/profile";

const title = `Fractional CTO – ${profile.name}`;
const description =
  "Senior technology leadership with the flexibility you need, for startups and scale-ups not ready to commit to a full-time CTO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fractional-cto/" },
  openGraph: { title, description, url: "/fractional-cto/" },
  twitter: { title, description },
};

const responsibilities: Card[] = [
  ["Sets the technology strategy", "Architecture, build-or-buy choices and a technical roadmap that follows the business plan."],
  ["Builds or scales the engineering team", "Hiring the first engineers or growing an existing team, with clear roles, a career ladder and ways of working that hold up as you grow."],
  ["Evolves the organisation for AI", "Roles, processes and structure for teams that work with AI every day."],
  ["Brings AI in where it pays off", "Effective AI adoption across the company, with governance and costs under control."],
];

const steps: Card[] = [
  ["A first conversation", "We talk about your product, your team and what's slowing you down."],
  ["An assessment", "I look at your technology, team and processes, and share what I find."],
  ["A plan", "We agree on priorities, how much time I spend with you and how we'll measure progress."],
  ["The work", "Strategy, reviews and support for your team, with as much time as the moment needs."],
];

export default function FractionalCto() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero
          title="Fractional CTO"
          sub="Senior technology leadership with the flexibility you need, for startups and scale-ups not ready to commit to a full-time CTO"
          actions={
            <>
              <a className={buttonStyles.ghost} href="#what">
                What a fractional CTO does
              </a>
              <a className={buttonStyles.solid} href="#contact">
                Book a first conversation
              </a>
            </>
          }
        />

        <Section
          id="what"
          title="What a fractional CTO does"
          intro="A fractional CTO is a senior technology leader who works with your company as much as you need, when you need it. You get a CTO's experience on the decisions that matter, without the commitment of a full-time hire."
        >
          <CardGrid cards={responsibilities} />
        </Section>

        <Section
          id="why"
          title="Why startups and scale-ups use one"
          intro="Young companies need senior technical judgement long before they can justify a full-time CTO. A fractional CTO fills that gap for the time it lasts."
        >
          <Comparison
            left={{
              title: "Hiring a full-time CTO",
              items: [
                "A senior salary and equity from day one",
                "A long search before anyone starts",
                "Hard to change when the company's needs change",
              ],
            }}
            right={{
              title: "Working with a fractional CTO",
              items: [
                "Senior experience for the time you actually need",
                "Time that grows or shrinks with the company",
                "Help to hire your full-time CTO when it's time",
              ],
            }}
          />
        </Section>

        <Section id="how" title="How it works">
          <Steps steps={steps} />
        </Section>

        <Contact
          title="Let's talk about your company"
          text="Tell me in a few lines what you're building and where you need help."
        />
      </main>
      <Footer />
    </>
  );
}
