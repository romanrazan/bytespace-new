import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function CreatorCTA() {
  return (
    <section className="creator-cta blue-grid">
      <span className="creator-cta__ring" /><span className="creator-cta__star">✦</span><span className="creator-cta__wave" />
      <SectionContainer>
        <div className="creator-cta__content">
          <h2>Unlock Your Potential as a<br />Creator with ByteSpace</h2>
          <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
          <Button href="/signup">Join as Creator</Button>
        </div>
      </SectionContainer>
    </section>
  );
}
