import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Testimonials() {
  return (
    <section className="section testimonials-section">
      <SectionContainer>
        <div className="section-heading section-heading--split">
          <h2>Discover What Our<br />Community Is Saying</h2>
          <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.id}><Image src={testimonial.avatar} alt={testimonial.name} width={76} height={76} /><h3>{testimonial.name}</h3><span>{testimonial.role}</span><blockquote>“{testimonial.quote}”</blockquote></article>)}</div>
      </SectionContainer>
    </section>
  );
}
