/* Building blocks shared by every page: sections, cards, steps, comparisons and buttons. */

const button =
  "inline-flex cursor-pointer items-center justify-center rounded-[10px] border px-[1.4rem] py-3 text-base no-underline";

export const buttonStyles = {
  solid: `${button} border-accent bg-accent text-on-accent hover:text-on-accent hover:brightness-110`,
  ghost: `${button} border-line-strong bg-transparent text-fg hover:border-fg hover:text-fg`,
};

export const headingStyles =
  "m-0 text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.06]";

export const subheadingStyles = "m-0 text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.15]";

interface SectionProps {
  id?: string;
  title: string;
  intro?: React.ReactNode;
  ruled?: boolean;
  className?: string;
  children: React.ReactNode;
}

/* A page section: its heading, an optional line under it, then its content.
   A section that follows another one drops its top padding. */
export function Section({ id, title, intro, ruled, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      data-section
      className={`px-gutter py-[clamp(4.5rem,9vw,7.5rem)] [[data-section]+&]:pt-0 ${className}`}
    >
      <h2
        className={`${headingStyles} ${ruled ? "border-b border-line pb-6" : "max-w-[22ch]"}`}
      >
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-[56ch] text-muted">{intro}</p>}
      {children}
    </section>
  );
}

export type Card = [title: string, text: string];

/* Two columns of cards; an odd last card spans the whole row. */
export function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="mt-12 grid gap-5 tablet:grid-cols-2">
      {cards.map(([title, text]) => (
        <div
          key={title}
          className="rounded-2xl border border-line bg-panel px-8 py-7 [&:last-child:nth-child(odd)]:col-span-full"
        >
          <h3 className="m-0 text-2xl leading-[1.22]">{title}</h3>
          <p className="mt-3 text-muted">{text}</p>
        </div>
      ))}
    </div>
  );
}

/* Numbered steps in a row, each number in a ring. */
export function Steps({ steps }: { steps: Card[] }) {
  return (
    <ol className="mt-12 grid border-t border-line [counter-reset:step] tablet:grid-cols-2 desktop:grid-cols-4">
      {steps.map(([title, text]) => (
        <li
          key={title}
          className="pt-7 pr-7 [counter-increment:step] before:mb-[1.1rem] before:grid before:size-[2.4rem] before:place-items-center before:rounded-full before:border before:border-accent before:text-base before:text-accent-soft before:content-[counter(step)]"
        >
          <h3 className="m-0 font-body text-[1.15rem] font-semibold tracking-normal">{title}</h3>
          <p className="mt-2 text-[.98rem] text-muted">{text}</p>
        </li>
      ))}
    </ol>
  );
}

interface ComparisonProps {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}

/* Two lists side by side, the second one highlighted. */
export function Comparison({ left, right }: ComparisonProps) {
  const column = (side: ComparisonProps["left"], highlighted: boolean) => (
    <div
      className={`p-8 ${highlighted ? "border-t border-line bg-panel-2 desktop:border-t-0 desktop:border-l" : ""}`}
    >
      <h3 className="mb-4 font-body text-[1.1rem] font-semibold tracking-normal">{side.title}</h3>
      <ul className={`list-disc pl-[1.1rem] ${highlighted ? "text-fg" : "text-muted"}`}>
        {side.items.map((item) => (
          <li key={item} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mt-12 grid overflow-hidden rounded-2xl border border-line desktop:grid-cols-2">
      {column(left, false)}
      {column(right, true)}
    </div>
  );
}
