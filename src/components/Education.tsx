import Section from "./Section";
import type { EducationItem } from "@/data/curriculum";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <Section id="education" title="Education and courses">
      <ul className="space-y-2">
        {education.map((item) => (
          <li key={item.id}>
            <strong className="font-semibold">{item.name}</strong> –{" "}
            {item.description},{" "}
            <span className="text-muted">{item.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
