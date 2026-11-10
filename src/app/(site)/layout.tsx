import Container from "@/components/Container";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <Container>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </Container>
      <Container>
        <SiteFooter />
      </Container>
    </>
  );
}
