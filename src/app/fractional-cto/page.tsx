import type { Metadata } from "next";

import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

const responsibilities = [
  ["Sets the technology strategy", "Architecture, build-or-buy choices and a technical roadmap that follows the business plan."],
  ["Builds or scales the engineering team", "Hiring the first engineers or growing an existing team, with clear roles, a career ladder and ways of working that hold up as you grow."],
  ["Evolves the organisation for AI", "Roles, processes and structure for teams that work with AI every day."],
  ["Brings AI in where it pays off", "Effective AI adoption across the company, with governance and costs under control."],
];

const steps = [
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
              <a className="btn solid" href="#contact">
                Book a first conversation
              </a>
              <a className="btn ghost" href="#what">
                What a fractional CTO does
              </a>
            </>
          }
        />

        <section className="section" id="what">
          <h2>What a fractional CTO does</h2>
          <p className="intro">
            A fractional CTO is a senior technology leader who works with your
            company as much as you need, when you need it. You get a CTO&apos;s
            experience on the decisions that matter, without the commitment of
            a full-time hire.
          </p>
          <div className="situations">
            {responsibilities.map(([heading, text]) => (
              <div key={heading} className="situation">
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="why">
          <h2>Why startups and scale-ups use one</h2>
          <p className="intro">
            Young companies need senior technical judgement long before they
            can justify a full-time CTO. A fractional CTO fills that gap for the
            time it lasts.
          </p>
          <div className="human">
            <div>
              <h3>Hiring a full-time CTO</h3>
              <ul>
                <li>A senior salary and equity from day one</li>
                <li>A long search before anyone starts</li>
                <li>Hard to change when the company&apos;s needs change</li>
              </ul>
            </div>
            <div>
              <h3>Working with a fractional CTO</h3>
              <ul>
                <li>Senior experience for the time you actually need</li>
                <li>Time that grows or shrinks with the company</li>
                <li>Help to hire your full-time CTO when it&apos;s time</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <h2>How it works</h2>
          <ol className="steps">
            {steps.map(([heading, text]) => (
              <li key={heading}>
                <h3>{heading}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <Contact
          title="Let's talk about your company"
          text="Tell me in a few lines what you're building and where you need help."
        />
      </main>
      <Footer />
    </>
  );
}
