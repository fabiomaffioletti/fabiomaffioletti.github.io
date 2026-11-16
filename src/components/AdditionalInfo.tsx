import type { InfoItem } from "@/data/curriculum";

interface AdditionalInfoProps {
  additionalInfo: InfoItem[];
}

export default function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
  return (
    <section className="section cv" id="more">
      <h2>Beyond the CV</h2>
      <dl className="cv-list two">
        {additionalInfo.map((item) => (
          <div key={item.id}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
