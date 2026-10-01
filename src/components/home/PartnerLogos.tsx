import { SectionContainer } from "@/components/ui/SectionContainer";

const brands = ["typeform", "webflow", "SKETCH", "Miro", "Framer", "Notion"];

export function PartnerLogos() {
  return <section className="partners"><SectionContainer><p>Trusted by learners from innovative teams</p><div>{brands.map((brand) => <span key={brand}>{brand}</span>)}</div></SectionContainer></section>;
}
