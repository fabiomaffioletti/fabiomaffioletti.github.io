import Link from "next/link";

import Container from "@/components/Container";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <Container>
        <main id="main" tabIndex={-1} className="mt-16">
          <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
          <p className="mt-4 max-w-prose text-lg text-muted">
            The page you are looking for does not exist or has moved.
          </p>
          <p className="mt-6">
            <Link href="/">Back to the home page</Link>
          </p>
        </main>
      </Container>
      <Container>
        <SiteFooter />
      </Container>
    </>
  );
}
