import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { routeByKey } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";

const route = routeByKey("coaching");

export const metadata: Metadata = buildPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function CoachingPage() {
  return (
    <>
      <PageHeader
        title="Coaching"
        lede="Executive coaching for engineering leaders."
      />
      <Section id="coaching-details" title="Details">
        <p>
          Placeholder: coaching offer, format, and availability will be
          published here.
        </p>
        <p className="mt-4">
          <Link href="/contacts/">Contact me to talk about coaching.</Link>
        </p>
      </Section>
    </>
  );
}
