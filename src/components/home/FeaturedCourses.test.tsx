import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CourseExplorerProvider } from "@/components/course/CourseExplorerProvider";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";

describe("FeaturedCourses", () => {
  it("filters the shared course data when a category is selected", async () => {
    const user = userEvent.setup();

    render(
      <CourseExplorerProvider>
        <FeaturedCourses />
      </CourseExplorerProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Marketing" }));

    expect(screen.getByRole("button", { name: "Marketing" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: "From Idea to Startup Success" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Learn Figma from Basic" })).not.toBeInTheDocument();
  });
});
