import Container from "@/components/Container";
import SiteNav from "@/components/SiteNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg">
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4">
        <SiteNav />
      </Container>
    </header>
  );
}
