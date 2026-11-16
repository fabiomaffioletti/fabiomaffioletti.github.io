import Role from "./Role";
import { subheadingStyles } from "./ui";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompanyProps {
  company: CompanyType;
}

export default function Company({ company }: CompanyProps) {
  return (
    <div className="grid gap-6 pt-10">
      <h3 className={subheadingStyles}>{company.name}</h3>
      <div>
        {company.roles.map((role) => (
          <Role key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}
