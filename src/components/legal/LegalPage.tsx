import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SectionContainer } from "@/components/ui/SectionContainer";

type LegalSection = { title: string; body: string };

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <main className="legal-page">
      <section className="legal-hero blue-grid">
        <Navbar />
        <SectionContainer className="legal-hero__content"><span>ByteSpace information</span><h1>{title}</h1><p>{intro}</p></SectionContainer>
      </section>
      <SectionContainer className="legal-content">
        {sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
      </SectionContainer>
      <Footer />
    </main>
  );
}
