"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { courses } from "@/data/courses";
import type { Course } from "@/types";

type CourseExplorerValue = {
  activeCategory: string;
  query: string;
  visibleCourses: Course[];
  setActiveCategory: (category: string) => void;
  submitSearch: (query: string) => void;
};

const CourseExplorerContext = createContext<CourseExplorerValue | null>(null);

export function CourseExplorerProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [query, setQuery] = useState("");

  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory = activeCategory === "Featured" || activeCategory === "+ More" || course.categories.includes(activeCategory);
      const searchableText = [course.title, course.creator, course.level, ...course.categories].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  function submitSearch(nextQuery: string) {
    setQuery(nextQuery.trim());
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <CourseExplorerContext.Provider value={{ activeCategory, query, visibleCourses, setActiveCategory, submitSearch }}>
      {children}
    </CourseExplorerContext.Provider>
  );
}

export function useCourseExplorer() {
  const context = useContext(CourseExplorerContext);
  if (!context) throw new Error("useCourseExplorer must be used within CourseExplorerProvider");
  return context;
}
