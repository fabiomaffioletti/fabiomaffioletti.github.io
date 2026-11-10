import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { routeByKey } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";

const route = routeByKey("fractional-cto");

export const metadata: Metadata = buildPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function FractionalCtoPage() {
  return (
    <>
      <PageHeader
        title="Fractional CTO"
        lede="Senior technology leadership for companies that need direction without a full-time CTO."
      />
      <Section id="fractional-cto-details" title="Details">
        <p>
          Placeholder: fractional CTO offer, engagement model, and availability
          will be published here.
        </p>
        <p className="mt-4">
          <Link href="/contacts/">
            Contact me to talk about fractional CTO work.
          </Link>
        </p>
      </Section>
    </>
  );
}
