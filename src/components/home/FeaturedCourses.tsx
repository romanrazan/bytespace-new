import { ArrowRight } from "lucide-react";
import { CategoryPill } from "@/components/course/CategoryPill";
import { CourseCard } from "@/components/course/CourseCard";
import { courseCategories, courses } from "@/data/courses";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function FeaturedCourses() {
  return (
    <section id="courses" className="section courses-section">
      <SectionContainer>
        <div className="section-heading section-heading--center courses-section__heading">
          <h2>Discover Your Passion,<br />Build Your Skills</h2>
          <p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        <div className="category-list courses-section__categories">{courseCategories.map((category, index) => <CategoryPill key={category} label={category} active={index === 0} />)}</div>
        <div className="course-grid">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
        <a className="text-link" href="#paths">Explore all courses <ArrowRight size={17} /></a>
      </SectionContainer>
    </section>
  );
}
