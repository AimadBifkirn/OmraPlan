import React from 'react';
import { useTranslation, Language } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useTranslation();

  const options: Array<{ code: Language; label: string; name: string }> = [
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'ar', label: 'عربي', name: 'العربية' },
    { code: 'en', label: 'EN', name: 'English' },
  ];

  return (
    <div
      className={`inline-flex items-center bg-[#EDE7DC] p-1 rounded-full border border-[#DFD6C5] shadow-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      {options.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLanguage(opt.code)}
            title={opt.name}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-emerald-deep text-white shadow-xs font-bold'
                : 'text-[#5A635E] hover:text-emerald-deep hover:bg-[#E2D9C8]/60'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
