import Section from "./Section";
import type { LinkItem } from "@/data/curriculum";

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  return (
    <div className="row mt-5">
      <Section title="Personal projects and links" />
      <div className="col-12">
        <dl>
          {links.map((item) => (
            <dd key={item.id}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              : {item.description}
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
}
