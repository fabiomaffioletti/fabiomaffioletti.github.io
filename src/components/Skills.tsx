import { Section, subheadingStyles } from "./ui";
import type { SkillGroup } from "@/data/curriculum";

interface SkillsProps {
  skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Skills" ruled>
      {skills.map((group) => (
        <div key={group.id} className="grid gap-6 pt-10">
          <h3 className={subheadingStyles}>{group.label}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line-strong px-[.85rem] py-[.35rem] text-[.92rem] text-fg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
