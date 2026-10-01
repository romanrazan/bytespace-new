import Image from "next/image";
import { BookOpen, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function GrowthSection() {
  return (
    <section className="section growth-section">
      <SectionContainer className="split-section">
        <div className="split-section__copy">
          <span className="eyebrow">Learn. Practice. Grow.</span>
          <h2>Your Path to Professional<br />Growth Starts Here!</h2>
          <p>Master relevant skills through focused lessons and real-world projects. Every step is designed to help you move with confidence.</p>
          <ul className="check-list"><li><CheckCircle2 />Practical, project-based learning</li><li><CheckCircle2 />Supportive global community</li><li><CheckCircle2 />Learn anytime, on any device</li></ul>
          <div className="stats"><div><strong>12K</strong><span>Students</span></div><div><strong>70+</strong><span>Courses</span></div><div><strong>16</strong><span>Creators</span></div></div>
          <Button href="#courses">Start Learning</Button>
        </div>
        <div className="visual-composition visual-composition--learner">
          <span className="visual-composition__blob" />
          <div className="visual-composition__image"><Image src="/images/hero-student.jpg" alt="Student building professional skills" fill loading="eager" sizes="(max-width: 900px) 86vw, 520px" /></div>
          <div className="mini-course-card"><Image src="/images/course-digital.jpg" alt="" width={72} height={58} /><div><small>Popular Course</small><strong>Digital Design Essentials</strong><span><BookOpen size={12} /> 17 Lessons</span></div></div>
          <div className="mini-progress-card"><span><TrendingUp /></span><div><small>Learning Progress</small><strong>78%</strong><i><b /></i></div></div>
        </div>
      </SectionContainer>
    </section>
  );
}
