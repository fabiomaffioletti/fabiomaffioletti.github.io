interface HeroProps {
  title: string;
  lead?: string;
  sub?: React.ReactNode;
  actions?: React.ReactNode;
  intro?: boolean;
}

/* The centred page header on a soft lilac glow. The home page (intro) adds a lead line
   and lets its title run wider. */
export default function Hero({ title, lead, sub, actions, intro }: HeroProps) {
  return (
    <section className="relative isolate px-gutter pt-[clamp(5rem,12vw,10rem)] pb-[clamp(3.5rem,8vw,6.5rem)] text-center before:pointer-events-none before:absolute before:inset-[-10%_10%_20%] before:-z-10 before:bg-[radial-gradient(50%_55%_at_50%_30%,rgb(185_168_255/16%),transparent_70%)] before:content-['']">
      <h1
        className={`m-0 mx-auto text-[clamp(2.7rem,6.2vw,6rem)] leading-none ${intro ? "" : "max-w-[18ch]"}`}
      >
        {title}
      </h1>
      {lead && (
        <p className="mx-auto mt-7 max-w-[38ch] text-[clamp(1.25rem,2.1vw,1.7rem)] leading-[1.45] text-balance text-fg">
          {lead}
        </p>
      )}
      {sub && (
        <p
          className={`mx-auto max-w-[50ch] text-muted ${intro ? "mt-5 text-[1.05rem] text-balance" : "mt-7 text-[1.2rem]"}`}
        >
          {sub}
        </p>
      )}
      {actions && (
        <div className="mt-9 flex flex-wrap justify-center gap-3">{actions}</div>
      )}
    </section>
  );
}
