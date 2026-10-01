import Image from "next/image";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function CreatorBenefits() {
  return (
    <section id="creators" className="section creator-section">
      <SectionContainer className="split-section split-section--reverse">
        <div className="visual-composition visual-composition--creator">
          <span className="visual-composition__blob" aria-hidden="true" />
          <span className="visual-composition__accent" aria-hidden="true" />
          <div className="visual-composition__image">
            <Image
              src="/images/figma/creator-headset-transparent.webp"
              alt="ByteSpace creator wearing a headset and holding a tablet"
              fill
              sizes="(max-width: 900px) 86vw, 540px"
            />
          </div>
          <div className="metric-card metric-card--revenue">
            <small>Total Revenue</small>
            <em>July 1, 2019</em>
            <strong>$120.29</strong>
            <span>+12%</span>
          </div>
          <div className="metric-card metric-card--year">
            <small>Year To Date</small>
            <em>2023</em>
            <strong>$1,200.38</strong>
            <span>+12%</span>
          </div>
          <div className="metric-card metric-card--happy">
            <div>
              <strong>Happy Students</strong>
              <span>
                4.5 (240) <Star size={12} fill="currentColor" />
              </span>
              <div className="avatar-stack">
                {[1, 2, 3, 4].map((id) => (
                  <Image key={id} src={`/images/avatar-${id}.jpg`} alt="" width={25} height={25} />
                ))}
                <b>2K+</b>
              </div>
            </div>
          </div>
        </div>
        <div className="split-section__copy">
          <span className="eyebrow">Teach what you love</span>
          <h2>
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p>
            Turn what you know into a meaningful learning experience. ByteSpace gives you simple tools and a ready
            community.
          </p>
          <ul className="creator-features">
            {features.map((feature) => (
              <li key={feature}>
                <span>
                  <Check />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Button href="/signup">Become a Creator</Button>
        </div>
      </SectionContainer>
    </section>
  );
}
