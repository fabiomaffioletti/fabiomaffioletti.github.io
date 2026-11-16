import Link from "next/link";

import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { profile, yearsOfExperience } from "@/data/profile";

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

const stats = [
  { pre: "More than", value: `${yearsOfExperience()} years`, post: "in the tech industry" },
  { pre: "Led up to", value: "50 people", post: "in one org" },
  { pre: "Delivered", value: "+125%", post: "engineering throughput" },
  { pre: "Achieved", value: "9.29 / 10", post: "team eNPS" },
];

const services = [
  {
    audience: "For engineering organisations",
    title: "Engineering leadership",
    text: "Leadership from inside, for efficient teams aligned with product, business and customers.",
    items: [
      "Engineering strategy and roadmap",
      "Engineering management",
      "Org design and career ladder",
      "AI strategy, governance and cost efficiency",
    ],
    href: "/engineering-leadership/",
    link: "Read my CV",
  },
  {
    audience: "For people in tech who feel stuck",
    title: "Executive coaching",
    text: "1:1 coaching for engineers, managers and executives facing a career that AI is reshaping.",
    items: [
      "Career transitions and layoffs",
      "Stepping into leadership",
      "Hard decisions and office politics",
      "CV and LinkedIn profile review",
    ],
    href: "/executive-coaching/",
    link: "Book a session",
  },
  {
    audience: "For startups and scale-ups",
    title: "Fractional CTO",
    text: "A CTO's judgement when you need it, for companies not ready to commit to a full-time CTO.",
    items: [
      "Technology strategy and architecture",
      "Hiring the first engineering team",
      "AI-native org evolution",
      "Effective AI adoption",
    ],
    href: "/fractional-cto/",
    link: "How I can help your company",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteNav />
      <main>
        <Hero
          intro
          title={profile.name}
          lead="I help product companies build effective engineering teams, and coach people in tech through the AI era"
          sub={
            <>
              <span className="role">Engineering Leader</span> &mdash;{" "}
              <span className="role">Executive Coach</span> &mdash;{" "}
              <span className="role">Fractional CTO</span>
            </>
          }
          actions={
            <>
              <a className="btn solid" href="#contact">
                Get in touch
              </a>
              <a className="btn ghost" href="#services">
                See how I can help
              </a>
            </>
          }
        />

        <section className="stats" aria-label="Track record">
          {stats.map((stat) => (
            <div key={stat.value}>
              <span className="pre">{stat.pre}</span>
              <strong>{stat.value}</strong>
              <span>{stat.post}</span>
            </div>
          ))}
        </section>

        <section className="section" id="services">
          <h2>Three ways to work together</h2>
          <p className="intro">
            Pick the one that matches where you are. If you&apos;re not sure,
            write to me and we&apos;ll work it out.
          </p>
          <div className="services">
            {services.map((service) => (
              <article key={service.title} className="service">
                <p className="for">{service.audience}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={service.href}>{service.link}</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <h2>Engineer first, leader and coach now</h2>
          </div>
          <div>
            <p>
              I started as a software engineer in 2008 and moved into
              management at eBay. At Tidio I led an organisation of up to 50
              people through an AI-first transformation, reaching the
              company&apos;s highest eNPS while more than doubling throughput.
            </p>
            <p>
              I also trained as an executive coach at the Escuela Europea de
              Coaching and had countless hours of coaching conversations with a
              multitude of people.
            </p>
          </div>
        </section>

        <Contact
          title="Let's talk"
          text="Write a few lines about where you are. I reply to every message."
        />
      </main>
      <Footer />
    </>
  );
}
