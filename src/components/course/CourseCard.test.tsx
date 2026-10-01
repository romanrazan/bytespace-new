import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CourseCard } from "@/components/course/CourseCard";
import type { Course } from "@/types";

const course: Course = {
  id: 7,
  title: "Practical Interface Design",
  image: "/images/course-figma.jpg",
  creator: "ByteSpace Studio",
  rating: 4.8,
  price: 25,
  lessons: 12,
  duration: "1 hour 40 mins",
  comments: 32,
  level: "Beginner",
  students: ["/images/avatar-1.jpg"],
  studentCount: "20+",
  categories: ["UI/UX Design"],
};

describe("CourseCard", () => {
  it("renders the supplied course data with meaningful image text", () => {
    render(<CourseCard course={course} />);

    expect(screen.getByRole("heading", { name: course.title })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: `${course.title} course thumbnail` })).toBeInTheDocument();
    expect(screen.getByText(course.creator)).toBeInTheDocument();
    expect(screen.getByText("$25")).toBeInTheDocument();
  });
});
