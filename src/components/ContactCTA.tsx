import { profile } from "@/data/profile";

type ContactContext = "general" | "coaching" | "fractional-cto";

interface ContactCTAProps {
  context?: ContactContext;
  className?: string;
}

const subjects: Record<ContactContext, string> = {
  general: "Hello Fabio",
  coaching: "Coaching inquiry",
  "fractional-cto": "Fractional CTO inquiry",
};

const copy: Record<ContactContext, string> = {
  general:
    "For coaching, fractional CTO work, or a conversation about engineering leadership, email me.",
  coaching:
    "Tell me about your team and what you want to change. Email me to start a conversation.",
  "fractional-cto":
    "Tell me about your engineering organization and the problem you need to solve. Email me to start a conversation.",
};

export default function ContactCTA({
  context = "general",
  className = "",
}: ContactCTAProps) {
  const subject = encodeURIComponent(subjects[context]);
  const mailto = `mailto:${profile.email}?subject=${subject}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={`mt-16 scroll-mt-8 border-t border-rule pt-[2rem] ${className}`}
    >
      <h2
        id="contact-title"
        className="text-sm font-semibold uppercase tracking-label"
      >
        Contact
      </h2>
      <p className="mt-4 text-lg text-fg">{copy[context]}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={mailto}
          className="inline-flex min-h-11 items-center bg-accent px-5 py-3 text-base font-semibold text-accent-contrast no-underline transition-colors hover:bg-accent-hover hover:text-accent-contrast"
        >
          Email Fabio
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center text-base"
        >
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
