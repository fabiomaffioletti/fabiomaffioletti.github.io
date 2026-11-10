import type { Metadata } from "next";

import ContactCTA from "@/components/ContactCTA";
import PageHeader from "@/components/PageHeader";
import { routeByKey } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";

const route = routeByKey("contacts");

export const metadata: Metadata = buildPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ContactsPage() {
  return (
    <>
      <PageHeader title="Contacts" lede="The best ways to reach me." />
      <ContactCTA />
    </>
  );
}
