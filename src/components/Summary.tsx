import { Section } from "./ui";

interface SummaryProps {
  paragraphs: string[];
}

export default function Summary({ paragraphs }: SummaryProps) {
  return (
    <Section id="summary" title="Summary" ruled className="pt-0">
      <div className="pt-10">
        {paragraphs.map((text) => (
          <p key={text} className="mb-5 text-[1.1rem] leading-[1.7] text-muted last:mb-0">
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
}
