import React, { createContext, useContext, useState, useEffect } from 'react';
import fr from '../i18n/fr.json';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

export type Language = 'fr' | 'en' | 'ar';
type TranslationSchema = typeof fr;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  isRtl: boolean;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, TranslationSchema> = {
  fr,
  en,
  ar,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('omraplan_lang');
      if (saved === 'fr' || saved === 'en' || saved === 'ar') {
        return saved;
      }
    } catch {
      // fallback if storage disabled
    }
    return 'fr';
  });

  const isRtl = language === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
    try {
      localStorage.setItem('omraplan_lang', language);
    } catch {
      // Ignore
    }
  }, [language, dir]);

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to French if missing
        let fallback: any = translations.fr;
        for (const fKey of keys) {
          if (fallback && typeof fallback === 'object' && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return typeof fallback === 'string' ? fallback : path;
      }
    }

    return typeof current === 'string' ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl, dir }}>
      <div dir={dir} className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
