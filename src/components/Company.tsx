import Role from "./Role";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompanyProps {
  company: CompanyType;
}

export default function Company({ company }: CompanyProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-2">{company.name}</h3>
      {company.roles.map((role) => (
        <Role key={role.id} role={role} />
      ))}
    </div>
  );
}
