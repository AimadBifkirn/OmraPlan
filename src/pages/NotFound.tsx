import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import { Home as HomeIcon, AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { language, isRtl } = useTranslation();

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-20">
      <div className="bg-cream p-8 rounded-full border border-cream-border mb-6 shadow-sm">
        <AlertTriangle className="w-16 h-16 text-gold" />
      </div>
      
      <h1 className="font-serif text-6xl font-bold text-emerald-deep mb-4">
        404
      </h1>
      
      <h2 className="text-2xl font-bold text-[#1F2421] mb-4">
        {language === 'ar' 
          ? 'عذراً، الصفحة غير موجودة' 
          : language === 'en'
          ? 'Oops! Page Not Found'
          : 'Oups ! Page introuvable'}
      </h2>
      
      <p className="text-[#5A635E] max-w-md mx-auto mb-10">
        {language === 'ar'
          ? 'يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها، أو أن الرابط غير صحيح.'
          : language === 'en'
          ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
          : 'La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.'}
      </p>
      
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-deep text-white font-semibold text-sm shadow-md hover:bg-[#0C4229] transition-colors"
      >
        <HomeIcon className="w-4 h-4" />
        <span>
          {language === 'ar' 
            ? 'العودة للرئيسية' 
            : language === 'en'
            ? 'Back to Home'
            : 'Retour à l\'accueil'}
        </span>
      </Link>
    </div>
  );
};

