import Section from "./Section";

interface AdditionalInfoProps {
  additionalInfo: string[];
}

export default function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
  return (
    <section className="mt-12">
      <Section title="Additional information" />
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
        {additionalInfo.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
