import type { Role as RoleType } from "@/data/curriculum";

interface RoleProps {
  role: RoleType;
}

export default function Role({ role }: RoleProps) {
  return (
    <article className="not-first:mt-10">
      <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h4 className="m-0 font-body text-[1.15rem] font-semibold">{role.name}</h4>
        <p className="m-0 text-[.95rem] text-muted">
          {role.from} – {role.to}
        </p>
      </header>
      <ul className="mt-4 list-disc pl-[1.1rem] text-muted">
        {role.description.map((item) => (
          <li key={item} className="mb-[.55rem] marker:text-line-strong">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
