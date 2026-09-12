import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import {
  ShieldCheck,
  Compass,
  Building2,
  CheckCircle,
  Clock,
  HeartHandshake,
  Award,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
} from 'lucide-react';

export const About: React.FC = () => {
  const { t, isRtl } = useTranslation();

  const values = [
    {
      title: t('about.val1Title'),
      desc: t('about.val1Desc'),
      icon: ShieldCheck,
      color: 'bg-[#0F5132] text-white',
    },
    {
      title: t('about.val2Title'),
      desc: t('about.val2Desc'),
      icon: Compass,
      color: 'bg-[#C9A227] text-[#082D1B]',
    },
    {
      title: t('about.val3Title'),
      desc: t('about.val3Desc'),
      icon: Building2,
      color: 'bg-[#0F5132] text-white',
    },
  ];

  const commitments = [
    t('about.commit1'),
    t('about.commit2'),
    t('about.commit3'),
    t('about.commit4'),
  ];

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
          {t('about.tagline')}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F5132] mt-2 max-w-3xl mx-auto">
          {t('about.title')}
        </h1>
        <p className="text-base sm:text-lg text-[#5A635E] mt-3 max-w-2xl mx-auto leading-relaxed">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Story Section with Large Remote Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8E0D2] grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="h-80 lg:h-auto min-h-[360px] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg"
              alt="Makkah and Madinah Sanctity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F5132]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm backdrop-blur-sm bg-black/40 p-3 rounded-xl border border-white/20">
              « Servir les hôtes du Très-Miséricordieux avec dévouement et excellence. »
            </div>
          </div>

          {/* Text Content */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4EE] text-[#0F5132] text-xs font-bold w-fit">
              <Award className="w-4 h-4 text-[#C9A227]" />
              <span>Depuis 2011 • Plus de 14 Ans d'Engagement</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F5132]">
              L'Art du Pèlerinage en Paix
            </h2>

            <p className="text-sm sm:text-base text-[#444D47] leading-relaxed">
              {t('about.storyP1')}
            </p>

            <p className="text-sm sm:text-base text-[#444D47] leading-relaxed">
              {t('about.storyP2')}
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#5A635E]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A227]" />
                <span>Assistance 24h/7</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#C9A227]" />
                <span>Encadrement Bienveillant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars / Values Section */}
      <div className="bg-[#F3ECE1] py-20 border-y border-[#E8E0D2] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
              Fondations de Notre Maison
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F5132] mt-1">
              {t('about.valuesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-md border border-[#E8E0D2] flex flex-col justify-between hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mb-6 shadow-sm`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#0F5132] mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#5A635E] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quality Commitments */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E0D2] shadow-xl text-center">
          <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
            Charte d'Excellence
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F5132] mt-1 mb-8">
            {t('about.commitmentsTitle')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {commitments.map((comm, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D2]"
              >
                <CheckCircle className="w-5 h-5 text-[#0F5132] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2C332E] leading-snug">
                  {comm}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#E8E0D2] flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F5132] text-white font-semibold text-sm shadow-md hover:bg-[#0C4229] transition-colors"
            >
              <span>{t('hero.ctaPackages')}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-md hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t('nav.quoteCta')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
