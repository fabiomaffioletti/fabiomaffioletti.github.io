import type { Metadata } from "next";

import AdditionalInfo from "@/components/AdditionalInfo";
import Companies from "@/components/Companies";
import Education from "@/components/Education";
import Links from "@/components/Links";
import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import { curriculum } from "@/data/curriculum";
import { routeByKey } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";

const route = routeByKey("curriculum");

export const metadata: Metadata = buildPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function CurriculumPage() {
  return (
    <>
      <PageHeader
        title="Curriculum"
        lede="Professional experience, education, skills, and links."
      />
      <Summary />
      <Companies companies={curriculum.experience.companies} />
      <Education education={curriculum.education} />
      <Skills skills={curriculum.skills} />
      <Links links={curriculum.links} />
      <AdditionalInfo additionalInfo={curriculum.additionalInfo} />
    </>
  );
}
