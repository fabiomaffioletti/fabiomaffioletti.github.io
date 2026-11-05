interface SectionProps {
  title: string;
}

export default function Section({ title }: SectionProps) {
  return (
    <div className="col-12">
      <h2>{title}</h2>
      <hr />
    </div>
  );
}
