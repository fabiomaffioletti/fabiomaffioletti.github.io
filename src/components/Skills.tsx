import type { SkillGroup } from "@/data/curriculum";

interface SkillsProps {
  skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="section cv" id="skills">
      <h2>Skills</h2>
      {skills.map((group) => (
        <div key={group.id} className="cv-row">
          <h3 className="cv-company">{group.label}</h3>
          <ul className="tags">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
