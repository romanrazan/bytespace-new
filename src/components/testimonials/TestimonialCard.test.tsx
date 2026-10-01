import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import type { Testimonial } from "@/types";

const testimonial: Testimonial = {
  id: "learner-one",
  name: "Learner One",
  role: "Enthusiastic Learner",
  quote: "The lessons helped me make steady progress.",
  avatar: "/images/testimonials/sarah-m.webp",
};

describe("TestimonialCard", () => {
  it("renders the testimonial identity and quote", () => {
    render(<TestimonialCard testimonial={testimonial} />);

    expect(screen.getByRole("img", { name: testimonial.name })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: testimonial.name })).toBeInTheDocument();
    expect(screen.getByText(testimonial.role)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(testimonial.quote))).toBeInTheDocument();
  });
});
