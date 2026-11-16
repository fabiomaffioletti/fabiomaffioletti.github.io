import { Section } from "./ui";
import type { EducationItem } from "@/data/curriculum";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <Section id="education" title="Education and training" ruled>
      <dl className="m-0">
        {education.map((item) => (
          <div
            key={item.id}
            className="grid items-baseline gap-x-8 gap-y-1 pt-5 tablet:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_10rem]"
          >
            <dt className="font-semibold">{item.name}</dt>
            <dd className="m-0 text-muted">{item.description}</dd>
            <dd className="m-0 text-[.95rem] text-muted tablet:text-right">{item.date}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
