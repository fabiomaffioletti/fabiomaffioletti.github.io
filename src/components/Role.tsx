import type { Role as RoleType } from "@/data/curriculum";

interface RoleProps {
  role: RoleType;
}

export default function Role({ role }: RoleProps) {
  return (
    <>
      <div className="col-6">
        <h4>{role.name}</h4>
      </div>
      <div className="col-6 text-end">
        <h4>
          {role.from} - {role.to}
        </h4>
      </div>

      <div className="col-12">
        <ul>
          {role.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
