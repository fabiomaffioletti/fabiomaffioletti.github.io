import Role from "./Role";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompanyProps {
  company: CompanyType;
}

export default function Company({ company }: CompanyProps) {
  return (
    <div className="cv-row">
      <h3 className="cv-company">{company.name}</h3>
      <div>
        {company.roles.map((role) => (
          <Role key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}
