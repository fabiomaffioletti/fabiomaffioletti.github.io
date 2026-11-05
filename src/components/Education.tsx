import Section from "./Section";
import type { EducationItem } from "@/data/curriculum";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="row mt-5">
      <Section title="Education and courses" />

      <div className="col-12">
        <dl>
          {education.map((item) => (
            <dd key={item.id}>
              <strong>{item.name}</strong> – {item.description}, {item.date}
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
}
