import Company from "./Company";
import Section from "./Section";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompaniesProps {
  companies: CompanyType[];
}

export default function Companies({ companies }: CompaniesProps) {
  return (
    <div className="row mt-5">
      <Section title="Professional experience" />

      {companies.map((company) => (
        <Company key={company.id} company={company} />
      ))}
    </div>
  );
}
