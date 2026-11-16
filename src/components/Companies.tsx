import Company from "./Company";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompaniesProps {
  companies: CompanyType[];
}

export default function Companies({ companies }: CompaniesProps) {
  return (
    <section className="section cv" id="experience">
      <h2>Experience</h2>
      {companies.map((company) => (
        <Company key={company.id} company={company} />
      ))}
    </section>
  );
}
