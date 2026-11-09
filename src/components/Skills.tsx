import Section from "./Section";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="mt-12">
      <Section title="Management and technical skills" />
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
