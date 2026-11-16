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

const title = `Executive coaching – ${profile.name}`;
const description =
  "1:1 coaching for software engineers, engineering managers and executives working out what comes next in a market that AI keeps rewriting. The first hour is free.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/executive-coaching/" },
  openGraph: { title, description, url: "/executive-coaching/" },
  twitter: { title, description },
};

const situations: Card[] = [
  ["You lost your job, or you're afraid you will", "We look at what you're good at, what the market pays for now, and build a plan you believe in."],
  ["You're good at your job, but not sure it has a future", "We work out which of your skills travel, and which new ones are worth the effort."],
  ["You became a manager and nobody showed you how", "Feedback, hiring, conflict, delegation: the parts of the job nobody trains you for."],
  ["You have a decision to make and no obvious answer", "A new offer, a reorg, a co-founder conflict. We think it through until the choice is clear."],
  ["You have a big life choice ahead and don't know how to move", "Moving country, changing path, starting something of your own. We work out what matters most to you and what the first step is."],
  ["Your CV and LinkedIn profile aren't getting you interviews", "We review both together, so they show what you're good at and the role you're looking for."],
];

const expectations: Card[] = [
  ["We work as equals", "I listen, ask questions and tell you what I see. You do most of the thinking, and the answers come from you."],
  ["Progress happens between sessions too", "When it helps, you leave with something to try at work, something to read or a question to sit with until we meet again."],
  ["You'll be stretched, never judged", "Some sessions will push you out of your comfort zone. Nothing you bring will be judged."],
  ["You stay in control", "You choose what we work on and can stop whenever you want."],
];

const steps: Card[] = [
  ["A first conversation", "A free first hour to see if we're a good fit. No commitment."],
  ["Your goal", "We agree on what you want to change and how we'll measure it."],
  ["Sessions", "Video sessions every 2, 3 or 4 weeks, each ending with concrete next steps."],
  ["In between", "You act, I'm reachable by message when something comes up."],
];

const plans = [
  {
    name: "First session",
    price: "Free",
    description: "One hour to talk about where you are and see if we're a good fit.",
    items: ["1 hour, by video", "No commitment", "A first look at your goal"],
    action: "Book your free session",
    featured: false,
  },
  {
    name: "Sessions",
    badge: "Coaching path",
    price: "€150",
    unit: "per session",
    description: "A path of 6 to 10 one-hour sessions, every 2, 3 or 4 weeks.",
    items: [
      "1 hour, by video",
      "Concrete next steps after every session",
      "Reachable by message in between",
    ],
    action: "Get in touch",
    featured: true,
  },
];

export default function ExecutiveCoaching() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero
          title="Executive Coaching"
          sub="1:1 coaching for software engineers, engineering managers and executives, technical or not, working out what comes next in a market that AI keeps rewriting"
          actions={
            <>
              <a className={buttonStyles.solid} href="#contact">
                Book a session
              </a>
              <a className={buttonStyles.ghost} href="#how">
                How it works
              </a>
              <a className={buttonStyles.ghost} href="#pricing">
                Pricing
              </a>
            </>
          }
        />

        <Section title="You might be here because">
          <CardGrid cards={situations} />
        </Section>

        <Section
          title="Why a human coach, when AI can do so much?"
          intro="AI tools are good at structure and reminders. The decisions that change a career need something else."
        >
          <Comparison
            left={{
              title: "What an AI tool gives you",
              items: [
                "Frameworks and templates",
                "Accountability nudges",
                "Answers to the question you asked",
              ],
            }}
            right={{
              title: "What I bring to the room",
              items: [
                "Someone who has hired, promoted and let people go",
                "A read on the politics of your organisation",
                "Noticing what you're not saying",
              ],
            }}
          />
        </Section>

        <Section id="expect" title="What to expect" intro="A few things worth knowing before we start.">
          <CardGrid cards={expectations} />
        </Section>

        <Section
          id="how"
          title="How it works"
          intro="A coaching path is typically made of 6 to 10 sessions of one hour each."
        >
          <Steps steps={steps} />
        </Section>

        <Section
          id="pricing"
          title="Pricing"
          intro="Start with a free hour. If we decide to work together, you pay per session."
        >
          <div className="mt-12 grid max-w-[60rem] gap-5 desktop:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${plan.featured ? "border-accent bg-panel-2" : "border-line bg-panel"}`}
              >
                {plan.badge && (
                  <p className="absolute top-[1.6rem] right-[1.6rem] m-0 rounded-full bg-accent px-[.7rem] py-[.2rem] text-[.85rem] font-medium text-on-accent">
                    {plan.badge}
                  </p>
                )}
                <h3 className="m-0 font-body text-[1.15rem] font-semibold tracking-normal">
                  {plan.name}
                </h3>
                <p className="mt-5 flex items-baseline gap-2">
                  <strong className="font-display text-[clamp(2.6rem,4vw,3.4rem)] leading-none font-medium tracking-display">
                    {plan.price}
                  </strong>
                  {plan.unit && <span className="text-muted">{plan.unit}</span>}
                </p>
                <p className="mt-4 text-muted">{plan.description}</p>
                <ul className="mt-6 mb-8 border-t border-line">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="relative border-b border-line py-2.5 pl-[1.6rem] before:absolute before:top-[1.05rem] before:left-[.2rem] before:h-[.4rem] before:w-[.7rem] before:-rotate-45 before:border-b-2 before:border-l-2 before:border-accent-soft before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className={`${plan.featured ? buttonStyles.solid : buttonStyles.ghost} mt-auto`}
                  href="#contact"
                >
                  {plan.action}
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Contact
          title="Start with a conversation"
          text="Tell me in a few lines where you are and what feels stuck."
        />
      </main>
      <Footer />
    </>
  );
}
