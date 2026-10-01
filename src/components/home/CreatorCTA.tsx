import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function CreatorCTA() {
  return (
    <section className="creator-cta blue-grid">
      <span className="creator-cta__ring" /><span className="creator-cta__star">✦</span><span className="creator-cta__wave" />
      <SectionContainer>
        <div><span className="eyebrow eyebrow--light"><Sparkles size={14} /> Your knowledge matters</span><h2>Unlock Your Potential as a<br />Creator with ByteSpace</h2><p>Inspire learners, grow a global community, and build an income doing what you love.</p></div>
        <Button href="/signup">Join as Creator <ArrowUpRight size={17} /></Button>
      </SectionContainer>
    </section>
  );
}
