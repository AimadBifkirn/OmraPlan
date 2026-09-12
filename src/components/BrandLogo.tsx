import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Brand Icon SVG: Elegant emerald badge with golden celestial compass/minaret arc */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#0F5132] flex items-center justify-center shadow-md group-hover:bg-[#0C4229] transition-colors border border-[#C9A227]/30">
          <svg
            className="w-6 h-6 text-[#C9A227]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer circular compass crescent */}
            <path d="M12 3a9 9 0 1 0 9 9" />
            {/* North star pearl */}
            <circle cx="12" cy="3" r="1.5" fill="#FAF7F2" stroke="none" />
            {/* Inner radiant center */}
            <circle cx="12" cy="12" r="3" fill="#C9A227" stroke="none" />
            {/* Subtle directional axis */}
            <line x1="12" y1="6" x2="12" y2="18" stroke="#FAF7F2" strokeWidth="1.5" />
            <line x1="6" y1="12" x2="18" y2="12" stroke="#FAF7F2" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight">
          <span className="font-serif font-bold text-2xl md:text-[26px] text-[#0F5132] leading-none">
            Omra
          </span>
          <span className="font-serif font-bold text-2xl md:text-[26px] text-[#C9A227] leading-none">
            Plan
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#5A635E] font-semibold mt-0.5">
            Voyages &amp; Pèlerinages
          </span>
        )}
      </div>
    </Link>
  );
};
