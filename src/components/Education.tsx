import type { EducationItem } from "@/data/curriculum";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="section cv" id="education">
      <h2>Education and training</h2>
      <dl className="cv-list">
        {education.map((item) => (
          <div key={item.id}>
            <dt>{item.name}</dt>
            <dd>{item.description}</dd>
            <dd className="when">{item.date}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
