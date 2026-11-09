interface SectionProps {
  title: string;
}

export default function Section({ title }: SectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <hr className="mt-2 border-slate-300" />
    </div>
  );
}
