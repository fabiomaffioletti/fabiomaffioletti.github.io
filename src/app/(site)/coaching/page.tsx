import type { Metadata } from "next";

import ContactCTA from "@/components/ContactCTA";
import PageHeader from "@/components/PageHeader";
import { routeByKey } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";

const route = routeByKey("coaching");

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: route.title,
    description: route.description,
    path: route.path,
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function CoachingPage() {
  return (
    <>
      <PageHeader
        title="Coaching"
        lede="Details about coaching engagements will be published here."
      />
      <ContactCTA context="coaching" />
    </>
  );
}
