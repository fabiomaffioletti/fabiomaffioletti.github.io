import type { Role as RoleType } from "@/data/curriculum";

interface RoleProps {
  role: RoleType;
}

export default function Role({ role }: RoleProps) {
  return (
    <article className="role">
      <header>
        <h4>{role.name}</h4>
        <p className="when">
          {role.from} – {role.to}
        </p>
      </header>
      <ul>
        {role.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
