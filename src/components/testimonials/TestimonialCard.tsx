import Image from "next/image";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card">
      <Image src={testimonial.avatar} alt={testimonial.name} width={76} height={76} />
      <h3>{testimonial.name}</h3>
      <span>{testimonial.role}</span>
      <blockquote>“{testimonial.quote}”</blockquote>
    </article>
  );
}
