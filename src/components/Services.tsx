import Link from "next/link";

import Section from "@/components/Section";

const services = [
  {
    title: "Technology leadership & Engineering Management",
    description:
      "Engineering leadership for teams that need strategy, structure, and delivery discipline.",
    href: "/curriculum/",
    cta: "Curriculum",
  },
  {
    title: "Coaching",
    description:
      "Executive coaching for engineering leaders who want to grow their impact and their teams.",
    href: "/coaching/",
    cta: "Coaching",
  },
  {
    title: "Fractional CTO",
    description:
      "Senior technology leadership for companies that need direction without a full-time CTO.",
    href: "/fractional-cto/",
    cta: "Fractional CTO",
  },
];

export default function Services() {
  return (
    <Section id="services" title="What can I do for you?">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col border border-rule p-6"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-3 flex-1">{service.description}</p>
            <Link
              href={service.href}
              className="mt-6 inline-flex min-h-11 w-fit items-center border border-accent px-4 py-2 text-sm font-semibold text-accent no-underline transition-colors hover:border-accent-hover hover:bg-accent-hover hover:text-accent-contrast"
            >
              {service.cta}
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
