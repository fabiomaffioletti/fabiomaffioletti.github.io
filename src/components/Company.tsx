import Role from "./Role";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompanyProps {
  company: CompanyType;
}

export default function Company({ company }: CompanyProps) {
  return (
    <>
      <h3 className="mt-2">{company.name}</h3>
      {company.roles.map((role) => (
        <Role key={role.id} role={role} />
      ))}
    </>
  );
}
