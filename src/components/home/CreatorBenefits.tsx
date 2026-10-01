import Image from "next/image";
import { Check, DollarSign, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

const features = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export function CreatorBenefits() {
  return (
    <section id="creators" className="section creator-section">
      <SectionContainer className="split-section split-section--reverse">
        <div className="visual-composition visual-composition--creator">
          <span className="visual-composition__blob" />
          <div className="visual-composition__image"><Image src="/images/creator-woman.jpg" alt="ByteSpace course creator" fill loading="eager" sizes="(max-width: 900px) 86vw, 520px" /></div>
          <div className="metric-card metric-card--revenue"><span><DollarSign /></span><div><small>Total Revenue</small><strong>$24,500</strong><em>+18.2%</em></div></div>
          <div className="metric-card metric-card--year"><small>Year To Date</small><strong>$18,940</strong><span>↗ 12.4%</span></div>
          <div className="metric-card metric-card--happy"><Users /><div><strong>2K+</strong><small>Happy Students</small><span><Star size={12} fill="currentColor" /> 4.8</span></div></div>
        </div>
        <div className="split-section__copy">
          <span className="eyebrow">Teach what you love</span>
          <h2>Create &amp; Manage<br />Courses Easily.</h2>
          <p>Turn what you know into a meaningful learning experience. ByteSpace gives you simple tools and a ready community.</p>
          <ul className="creator-features">{features.map((feature) => <li key={feature}><span><Check /></span>{feature}</li>)}</ul>
          <Button href="/signup">Become a Creator</Button>
        </div>
      </SectionContainer>
    </section>
  );
}
