import Section from "./Section";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="row mt-5">
      <Section title="Management and technical skills" />
      <div className="col-12">
        <ul>
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
