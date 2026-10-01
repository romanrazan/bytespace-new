import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Testimonials() {
  return (
    <section className="section testimonials-section">
      <SectionContainer>
        <div className="section-heading section-heading--split">
          <h2>
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear
            directly from those who have experienced the transformative journey of learning and creating on our
            platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and
            accomplished creators.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
