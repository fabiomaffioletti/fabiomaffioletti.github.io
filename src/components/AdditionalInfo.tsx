import Section from "./Section";

interface AdditionalInfoProps {
  additionalInfo: string[];
}

export default function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
  return (
    <div className="row mt-5">
      <Section title="Additional information" />
      <div className="col-12">
        <ul>
          {additionalInfo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
