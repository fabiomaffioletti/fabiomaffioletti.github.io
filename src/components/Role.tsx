import type { Role as RoleType } from "@/data/curriculum";
import { toDateTime } from "@/lib/dates";

interface RoleProps {
  role: RoleType;
}

export default function Role({ role }: RoleProps) {
  const fromDateTime = toDateTime(role.from);
  const toDateTimeValue = toDateTime(role.to);

  return (
    <article className="mt-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4 className="text-base font-semibold text-fg">{role.name}</h4>
        <p className="text-sm text-muted tabular-nums">
          <time dateTime={fromDateTime}>{role.from}</time>
          {" - "}
          {toDateTimeValue ? (
            <time dateTime={toDateTimeValue}>{role.to}</time>
          ) : (
            role.to
          )}
        </p>
      </div>

      <ul className="mt-3 list-disc space-y-2 pl-5">
        {role.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
