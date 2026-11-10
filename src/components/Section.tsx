interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mt-16 scroll-mt-32"
    >
      <h2
        id={`${id}-title`}
        className="text-sm font-semibold uppercase tracking-label"
      >
        {title}
      </h2>
      <hr className="mt-3 border-rule" />
      <div className="mt-5">{children}</div>
    </section>
  );
}
