import Section from "./Section";
import type { EducationItem } from "@/data/curriculum";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="mt-12">
      <Section title="Education and courses" />

      <dl className="mt-4 space-y-2 leading-relaxed">
        {education.map((item) => (
          <dd key={item.id}>
            <strong>{item.name}</strong> – {item.description}, {item.date}
          </dd>
        ))}
      </dl>
    </section>
  );
}
