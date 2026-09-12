import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatBlockProps {
  value: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-cream-border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between pb-3">
        <span className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep leading-none">
          {value}
        </span>
        <div className="w-11 h-11 rounded-xl bg-cream border border-cream-border flex items-center justify-center text-gold shadow-xs">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div>
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#1F2421]">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#5A635E] mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
