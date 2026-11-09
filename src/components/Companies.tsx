import Company from "./Company";
import Section from "./Section";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompaniesProps {
  companies: CompanyType[];
}

export default function Companies({ companies }: CompaniesProps) {
  return (
    <section className="mt-12">
      <Section title="Professional experience" />

      {companies.map((company) => (
        <Company key={company.id} company={company} />
      ))}
    </section>
  );
}
