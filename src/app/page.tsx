import Link from "next/link";

import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import YearsOfExperience from "@/components/YearsOfExperience";
import { Section, buttonStyles, headingStyles } from "@/components/ui";

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
  {
    pre: "More than",
    value: (
      <>
        <YearsOfExperience buildValue={yearsOfExperience()} /> years
      </>
    ),
    post: "in the tech industry",
  },
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
              <span className="whitespace-nowrap">Engineering Leader</span> &mdash;{" "}
              <span className="whitespace-nowrap">Executive Coach</span> &mdash;{" "}
              <span className="whitespace-nowrap">Fractional CTO</span>
            </>
          }
          actions={
            <>
              <a className={buttonStyles.ghost} href="#services">
                See how I can help
              </a>
              <a className={buttonStyles.solid} href="#contact">
                Get in touch
              </a>
            </>
          }
        />

        <section
          aria-label="Track record"
          className="grid grid-cols-2 border-y border-line text-center desktop:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.post}
              className="border-line px-gutter py-8 even:border-l nth-[n+3]:border-t desktop:border-l desktop:first:border-l-0 desktop:nth-[n+3]:border-t-0"
            >
              <span className="mb-[.3rem] block text-[.95rem] text-muted">{stat.pre}</span>
              <strong className="block font-display text-[clamp(2rem,3.4vw,3rem)] leading-none font-bold tracking-display">
                {stat.value}
              </strong>
              <span className="mt-[.6rem] block text-[.95rem] text-muted">{stat.post}</span>
            </div>
          ))}
        </section>

        <Section
          id="services"
          title="Three ways to work together"
          intro="Pick the one that matches where you are. If you're not sure, write to me and we'll work it out."
        >
          <div className="mt-12 grid gap-5 desktop:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="relative flex flex-col rounded-2xl border border-line bg-panel p-8 transition-colors duration-200 hover:border-line-strong hover:bg-panel-2 has-[a:focus-visible]:border-accent motion-reduce:transition-none"
              >
                <p className="m-0 text-[.95rem] text-accent-soft">{service.audience}</p>
                <h3 className="mt-2.5 text-[clamp(1.6rem,1.9vw,2rem)] leading-[1.08] font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 mb-5 text-muted">{service.text}</p>
                <ul className="mb-7 border-t border-line">
                  {service.items.map((item) => (
                    <li key={item} className="border-b border-line py-2.5 text-[.98rem]">
                      {item}
                    </li>
                  ))}
                </ul>
                {/* The link's ::after covers the whole card, so the card is clickable as one target */}
                <Link
                  href={service.href}
                  className="mt-auto after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none"
                >
                  {service.link}
                </Link>
              </article>
            ))}
          </div>
        </Section>

        <section className="grid items-start gap-x-20 gap-y-12 px-gutter py-[clamp(4.5rem,9vw,7.5rem)] pt-0 desktop:grid-cols-2">
          <h2 className={headingStyles}>Engineer first, leader and coach now</h2>
          <div className="text-muted">
            <p className="mb-[1.1rem]">
              I started as a software engineer in 2008 and moved into
              management at eBay. At Tidio I led an organisation of up to 50
              people through an AI-first transformation, reaching the
              company&apos;s highest eNPS while more than doubling throughput.
            </p>
            <p className="mb-[1.1rem]">
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
