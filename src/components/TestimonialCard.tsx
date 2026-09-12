import React from 'react';
import { TestimonialItem } from '../data/testimonials';
import { useTranslation } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { language } = useTranslation();

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-md border border-[#E8E0D2] flex flex-col justify-between relative hover:shadow-lg transition-shadow">
      {/* Decorative Quote mark */}
      <Quote className="w-8 h-8 text-[#C9A227]/20 absolute top-6 right-6 pointer-events-none" />

      <div>
        {/* Stars */}
        <div className="flex items-center gap-1 text-[#C9A227] mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm sm:text-base text-[#2C332E] italic leading-relaxed">
          « {testimonial.quote[language]} »
        </p>
      </div>

      {/* Author Footer */}
      <div className="pt-6 mt-6 border-t border-[#E8E0D2]/70 flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-full bg-[#EAF4EE] text-[#0F5132] font-serif font-bold text-sm flex items-center justify-center shrink-0 border border-[#0F5132]/20">
          {testimonial.avatarInitials}
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm sm:text-base text-[#1F2421]">
            {testimonial.author}
          </h4>
          <p className="text-xs text-[#5A635E]">
            {testimonial.city[language]} • {testimonial.tripType[language]}
          </p>
        </div>
      </div>
    </div>
  );
};
