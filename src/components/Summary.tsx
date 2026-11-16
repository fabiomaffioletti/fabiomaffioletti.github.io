interface SummaryProps {
  paragraphs: string[];
}

export default function Summary({ paragraphs }: SummaryProps) {
  return (
    <section className="section cv" id="summary">
      <h2>Summary</h2>
      <div className="cv-summary">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}
