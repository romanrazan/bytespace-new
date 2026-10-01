import { ArrowRight } from "lucide-react";
import { CategoryPill } from "@/components/course/CategoryPill";
import { CourseCard } from "@/components/course/CourseCard";
import { courseCategories, courses } from "@/data/courses";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function FeaturedCourses() {
  return (
    <section id="courses" className="section courses-section">
      <SectionContainer>
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">Popular classes</span><h2>Discover Your Passion,<br />Build Your Skills</h2></div>
          <p>Whether you are starting something new or sharpening your craft, learn at your pace with clear, practical lessons.</p>
        </div>
        <div className="category-list">{courseCategories.map((category, index) => <CategoryPill key={category} label={category} active={index === 0} />)}</div>
        <div className="course-grid">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
        <a className="text-link" href="#paths">Explore all courses <ArrowRight size={17} /></a>
      </SectionContainer>
    </section>
  );
}
