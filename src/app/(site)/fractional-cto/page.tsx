import type { Metadata } from "next";

import ContactCTA from "@/components/ContactCTA";
import PageHeader from "@/components/PageHeader";
import { routeByKey } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";

const route = routeByKey("fractional-cto");

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

export default function FractionalCtoPage() {
  return (
    <>
      <PageHeader
        title="Fractional CTO"
        lede="Details about fractional CTO engagements will be published here."
      />
      <ContactCTA context="fractional-cto" />
    </>
  );
}
