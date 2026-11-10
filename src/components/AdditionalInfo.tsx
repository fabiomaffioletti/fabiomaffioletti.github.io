import Section from "./Section";

interface AdditionalInfoProps {
  additionalInfo: string[];
}

export default function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
  return (
    <Section id="additional-information" title="Additional information">
      <ul className="list-disc space-y-2 pl-5">
        {additionalInfo.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
