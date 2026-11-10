import Section from "./Section";
import type { LinkItem } from "@/data/curriculum";

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  return (
    <Section id="links" title="Personal projects and links">
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.id}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            : {item.description}
          </li>
        ))}
      </ul>
    </Section>
  );
}
