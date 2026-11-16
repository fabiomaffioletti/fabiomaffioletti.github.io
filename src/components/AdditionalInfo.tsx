import { Section } from "./ui";
import type { InfoItem } from "@/data/curriculum";

interface AdditionalInfoProps {
  additionalInfo: InfoItem[];
}

export default function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
  return (
    <Section id="more" title="Beyond the CV" ruled>
      <dl className="m-0">
        {additionalInfo.map((item) => (
          <div
            key={item.id}
            className="grid items-baseline gap-x-16 gap-y-1 pt-5 desktop:grid-cols-[minmax(0,1fr)_minmax(0,2.6fr)]"
          >
            <dt className="font-semibold">{item.label}</dt>
            <dd className="m-0 text-muted">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
