import Role from "./Role";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompanyProps {
  company: CompanyType;
}

export default function Company({ company }: CompanyProps) {
  return (
    <div className="mt-8 first:mt-0">
      <h3 className="text-xl font-semibold text-fg">{company.name}</h3>
      {company.roles.map((role) => (
        <Role key={role.id} role={role} />
      ))}
    </div>
  );
}
