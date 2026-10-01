import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Testimonials() {
  return (
    <section className="section testimonials-section">
      <SectionContainer>
        <div className="section-heading section-heading--split"><div><span className="eyebrow">Learner stories</span><h2>Discover What Our<br />Community Is Saying</h2></div><p>Thousands of learners and creators are already building brighter futures—one practical skill at a time.</p></div>
        <div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.id}><Quote /><div className="testimonial-card__stars">{[1,2,3,4,5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div><blockquote>“{testimonial.quote}”</blockquote><footer><Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} /><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></footer></article>)}</div>
      </SectionContainer>
    </section>
  );
}
