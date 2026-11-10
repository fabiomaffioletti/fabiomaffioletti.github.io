import Section from "./Section";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Management and technical skills">
      <ul className="list-disc space-y-2 pl-5">
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
