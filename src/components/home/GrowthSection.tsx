import Image from "next/image";
import { BookOpen, TrendingUp } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function GrowthSection() {
  return (
    <section className="section growth-section">
      <SectionContainer className="split-section">
        <div className="split-section__copy">
          <h2>
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>
          <p>
            Explore a curated selection of courses tailored to enhance your skills and accelerate your career
            journey. Whether you are sharpening a specific skill or beginning a new path, find the resources you
            need.
          </p>
          <div className="stats">
            <div>
              <strong>12K</strong>
              <span>Students</span>
            </div>
            <div>
              <strong>70+</strong>
              <span>Courses</span>
            </div>
            <div>
              <strong>16</strong>
              <span>Creators</span>
            </div>
          </div>
        </div>
        <div className="visual-composition visual-composition--learner">
          <span className="visual-composition__accent" aria-hidden="true" />
          <div className="visual-composition__image">
            <Image
              src="/images/figma/learner-headset-transparent.webp"
              alt="Learner wearing a headset and working on a laptop"
              fill
              sizes="(max-width: 900px) 86vw, 560px"
            />
          </div>
          <div className="mini-course-card">
            <Image src="/images/course-figma.jpg" alt="Learn Figma course preview" width={96} height={72} />
            <div>
              <small>Popular Course</small>
              <strong>Learn Figma from Basic</strong>
              <span>
                <BookOpen size={12} /> 17 Lessons
              </span>
            </div>
          </div>
          <div className="mini-progress-card">
            <span>
              <TrendingUp />
            </span>
            <div>
              <small>Learning Progress</small>
              <strong>78%</strong>
              <i>
                <b />
              </i>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
