import { BriefcaseBusiness, Brush, Camera, Code2, Megaphone, MonitorCog } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

const paths = [
  { label: "Design", icon: Brush, count: "24 Courses" },
  { label: "Development", icon: Code2, count: "32 Courses" },
  { label: "IT & Software", icon: MonitorCog, count: "18 Courses" },
  { label: "Business", icon: BriefcaseBusiness, count: "20 Courses" },
  { label: "Marketing", icon: Megaphone, count: "16 Courses" },
  { label: "Photography", icon: Camera, count: "12 Courses" },
];

export function LearningPaths() {
  return (
    <section id="paths" className="section paths-section">
      <SectionContainer>
        <div className="section-heading section-heading--center"><span className="eyebrow">Find your direction</span><h2>Explore Diverse Learning<br />Paths at ByteSpace</h2><p>Choose a path that matches your goals and grow through carefully structured, creator-led courses.</p></div>
        <div className="path-grid">{paths.map(({ label, icon: Icon, count }) => <a href="#courses" className="path-card" key={label}><span><Icon /></span><div><strong>{label}</strong><small>{count}</small></div><b>↗</b></a>)}</div>
      </SectionContainer>
    </section>
  );
}
