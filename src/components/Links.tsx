import { Section } from "./ui";
import type { LinkItem } from "@/data/curriculum";

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  return (
    <Section id="links" title="Projects and links" ruled>
      <div className="mt-10 grid gap-5 tablet:grid-cols-2 desktop:grid-cols-4">
        {links.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-2 rounded-2xl border border-line bg-panel p-6 no-underline transition-colors duration-200 hover:border-line-strong motion-reduce:transition-none"
          >
            <strong className="font-semibold text-fg">{item.title}</strong>
            <span className="text-[.95rem] text-muted">{item.description}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
