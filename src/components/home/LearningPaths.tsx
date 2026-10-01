import { BriefcaseBusiness, Brush, Camera, Code2, Megaphone, MonitorCog } from "lucide-react";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";

const paths = [
  { label: "Design", icon: Brush },
  { label: "Development", icon: Code2 },
  { label: "IT & Software", icon: MonitorCog },
  { label: "Business", icon: BriefcaseBusiness },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];

export function LearningPaths() {
  return (
    <section id="paths" className="section paths-section">
      <SectionContainer>
        <div className="section-heading section-heading--center">
          <span className="eyebrow">Find your direction</span>
          <h2>
            Explore Diverse Learning
            <br />
            Paths at ByteSpace
          </h2>
          <p>Choose a path that matches your goals and grow through carefully structured, creator-led courses.</p>
        </div>
        <div className="path-grid">
          {paths.map(({ label, icon: Icon }) => (
            <Link href="/#courses" className="path-card" key={label}>
              <span>
                <Icon />
              </span>
              <strong>{label}</strong>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
