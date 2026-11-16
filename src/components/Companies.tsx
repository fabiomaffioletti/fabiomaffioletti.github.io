import Company from "./Company";
import { Section } from "./ui";
import type { Company as CompanyType } from "@/data/curriculum";

interface CompaniesProps {
  companies: CompanyType[];
}

export default function Companies({ companies }: CompaniesProps) {
  return (
    <Section id="experience" title="Experience" ruled>
      {companies.map((company) => (
        <Company key={company.id} company={company} />
      ))}
    </Section>
  );
}
