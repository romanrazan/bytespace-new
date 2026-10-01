"use client";

import { ArrowRight } from "lucide-react";
import { CategoryPill } from "@/components/course/CategoryPill";
import { CourseCard } from "@/components/course/CourseCard";
import { useCourseExplorer } from "@/components/course/CourseExplorerProvider";
import { courseCategories } from "@/data/courses";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function FeaturedCourses() {
  const { activeCategory, query, setActiveCategory, visibleCourses } = useCourseExplorer();

  return (
    <section id="courses" className="section courses-section">
      <SectionContainer>
        <div className="section-heading section-heading--center courses-section__heading">
          <h2>
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses
            across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>
        <div id="categories" className="category-list courses-section__categories" aria-label="Course categories">
          {courseCategories.map((category) => (
            <CategoryPill
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
        {visibleCourses.length > 0 ? (
          <div className="course-grid" aria-live="polite">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="course-empty" role="status">
            <strong>No courses found</strong>
            <span>Try another category or search term{query ? ` instead of “${query}”` : ""}.</span>
          </div>
        )}
        <a className="text-link" href="#paths">
          Explore all courses <ArrowRight size={17} />
        </a>
      </SectionContainer>
    </section>
  );
}
