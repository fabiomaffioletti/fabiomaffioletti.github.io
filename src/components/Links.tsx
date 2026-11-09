import Section from "./Section";
import type { LinkItem } from "@/data/curriculum";

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  return (
    <section className="mt-12">
      <Section title="Personal projects and links" />
      <dl className="mt-4 space-y-2 leading-relaxed">
        {links.map((item) => (
          <dd key={item.id}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.title}
            </a>
            : {item.description}
          </dd>
        ))}
      </dl>
    </section>
  );
}
