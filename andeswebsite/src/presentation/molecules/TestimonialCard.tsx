import StarRating from "../atoms/StarRating";
import type { Testimonial } from "../../types/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-50 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-neutral-200 overflow-hidden shadow-sm">
          <img
            alt={testimonial.name}
            className="w-full h-full object-cover"
            src={testimonial.avatar}
          />
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 text-lg">
            {testimonial.name}
          </h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      {/* Quote */}
      <blockquote className="italic text-neutral-600 leading-relaxed text-sm">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
