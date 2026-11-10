import Link from "next/link";

import Container from "@/components/Container";
import SiteNav from "@/components/SiteNav";
import { profile } from "@/data/profile";

export default function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <Container className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-4">
        <Link
          href="/"
          className="text-base font-semibold text-fg no-underline hover:text-accent-hover"
        >
          {profile.name}
        </Link>
        <SiteNav />
      </Container>
    </header>
  );
}
