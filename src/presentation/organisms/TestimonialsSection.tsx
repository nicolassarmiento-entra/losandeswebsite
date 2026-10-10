import { forwardRef } from "react";
import SectionTitle from "../atoms/SectionTitle";
import TestimonialCard from "../molecules/TestimonialCard";
import { testimonials } from "../../data/testimonials";

const TestimonialsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 bg-andes-primary relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle>Casos de Éxito</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
