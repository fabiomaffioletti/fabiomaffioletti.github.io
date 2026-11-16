import type { Metadata } from "next";

import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

const situations = [
  ["You lost your job, or you're afraid you will", "We look at what you're good at, what the market pays for now, and build a plan you believe in."],
  ["You're good at your job, but not sure it has a future", "We work out which of your skills travel, and which new ones are worth the effort."],
  ["You became a manager and nobody showed you how", "Feedback, hiring, conflict, delegation: the parts of the job nobody trains you for."],
  ["You have a decision to make and no obvious answer", "A new offer, a reorg, a co-founder conflict. We think it through until the choice is clear."],
  ["You have a big life choice ahead and don't know how to move", "Moving country, changing path, starting something of your own. We work out what matters most to you and what the first step is."],
  ["Your CV and LinkedIn profile aren't getting you interviews", "We review both together, so they show what you're good at and the role you're looking for."],
];

const expectations = [
  ["We work as equals", "I listen, ask questions and tell you what I see. You do most of the thinking, and the answers come from you."],
  ["Progress happens between sessions too", "When it helps, you leave with something to try at work, something to read or a question to sit with until we meet again."],
  ["You'll be stretched, never judged", "Some sessions will push you out of your comfort zone. Nothing you bring will be judged."],
  ["You stay in control", "You choose what we work on and can stop whenever you want."],
];

const steps = [
  ["A first conversation", "A free first hour to see if we're a good fit. No commitment."],
  ["Your goal", "We agree on what you want to change and how we'll measure it."],
  ["Sessions", "Video sessions every 2, 3 or 4 weeks, each ending with concrete next steps."],
  ["In between", "You act, I'm reachable by message when something comes up."],
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
              <a className="btn solid" href="#contact">
                Book a session
              </a>
              <a className="btn ghost" href="#how">
                How it works
              </a>
              <a className="btn ghost" href="#pricing">
                Pricing
              </a>
            </>
          }
        />

        <section className="section">
          <h2>You might be here because</h2>
          <div className="situations">
            {situations.map(([heading, text]) => (
              <div key={heading} className="situation">
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Why a human coach, when AI can do so much?</h2>
          <p className="intro">
            AI tools are good at structure and reminders. The decisions that
            change a career need something else.
          </p>
          <div className="human">
            <div>
              <h3>What an AI tool gives you</h3>
              <ul>
                <li>Frameworks and templates</li>
                <li>Accountability nudges</li>
                <li>Answers to the question you asked</li>
              </ul>
            </div>
            <div>
              <h3>What I bring to the room</h3>
              <ul>
                <li>Someone who has hired, promoted and let people go</li>
                <li>A read on the politics of your organisation</li>
                <li>Noticing what you&apos;re not saying</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="expect">
          <h2>What to expect</h2>
          <p className="intro">A few things worth knowing before we start.</p>
          <div className="situations">
            {expectations.map(([heading, text]) => (
              <div key={heading} className="situation">
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="how">
          <h2>How it works</h2>
          <p className="intro">
            A coaching path is typically made of 6 to 10 sessions of one hour
            each.
          </p>
          <ol className="steps">
            {steps.map(([heading, text]) => (
              <li key={heading}>
                <h3>{heading}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="pricing">
          <h2>Pricing</h2>
          <p className="intro">
            Start with a free hour. If we decide to work together, you pay per
            session.
          </p>
          <div className="pricing">
            <article className="plan">
              <h3>First session</h3>
              <p className="price">
                <strong>Free</strong>
              </p>
              <p className="plan-desc">
                One hour to talk about where you are and see if we&apos;re a
                good fit.
              </p>
              <ul>
                <li>1 hour, by video</li>
                <li>No commitment</li>
                <li>A first look at your goal</li>
              </ul>
              <a className="btn ghost" href="#contact">
                Book your free session
              </a>
            </article>
            <article className="plan featured">
              <p className="badge">Coaching path</p>
              <h3>Sessions</h3>
              <p className="price">
                <strong>€150</strong>
                <span>per session</span>
              </p>
              <p className="plan-desc">
                A path of 6 to 10 one-hour sessions, every 2, 3 or 4 weeks.
              </p>
              <ul>
                <li>1 hour, by video</li>
                <li>Concrete next steps after every session</li>
                <li>Reachable by message in between</li>
              </ul>
              <a className="btn solid" href="#contact">
                Get in touch
              </a>
            </article>
          </div>
        </section>

        <Contact
          title="Start with a conversation"
          text="Tell me in a few lines where you are and what feels stuck."
        />
      </main>
      <Footer />
    </>
  );
}
