interface HeroProps {
  title: string;
  lead?: string;
  sub?: React.ReactNode;
  actions?: React.ReactNode;
  intro?: boolean;
}

export default function Hero({ title, lead, sub, actions, intro }: HeroProps) {
  return (
    <section className={intro ? "hero intro" : "hero"}>
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {sub && <p className="sub">{sub}</p>}
      {actions && <div className="actions">{actions}</div>}
    </section>
  );
}
