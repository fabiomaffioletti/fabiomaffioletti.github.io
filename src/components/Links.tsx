import type { LinkItem } from "@/data/curriculum";

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  return (
    <section className="section cv" id="links">
      <h2>Projects and links</h2>
      <div className="cv-links">
        {links.map((item) => (
          <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
