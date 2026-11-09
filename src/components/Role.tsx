import type { Role as RoleType } from "@/data/curriculum";

interface RoleProps {
  role: RoleType;
}

export default function Role({ role }: RoleProps) {
  return (
    <article className="mt-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4>{role.name}</h4>
        <h4 className="sm:text-right">
          {role.from} - {role.to}
        </h4>
      </div>

      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
        {role.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
