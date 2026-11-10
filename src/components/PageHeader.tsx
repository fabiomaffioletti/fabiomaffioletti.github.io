interface PageHeaderProps {
  title: string;
  lede?: string;
}

export default function PageHeader({ title, lede }: PageHeaderProps) {
  return (
    <header className="mt-16">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {lede ? (
        <p className="mt-4 text-lg text-muted">{lede}</p>
      ) : null}
    </header>
  );
}
