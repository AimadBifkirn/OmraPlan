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
      color: 'bg-emerald-deep text-white',
    },
    {
      title: t('about.val2Title'),
      desc: t('about.val2Desc'),
      icon: Compass,
      color: 'bg-gold text-emerald-dark',
    },
    {
      title: t('about.val3Title'),
      desc: t('about.val3Desc'),
      icon: Building2,
      color: 'bg-emerald-deep text-white',
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
        <span className="text-xs uppercase tracking-widest text-gold font-bold">
          {t('about.tagline')}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-deep mt-2 max-w-3xl mx-auto">
          {t('about.title')}
        </h1>
        <p className="text-base sm:text-lg text-[#5A635E] mt-3 max-w-2xl mx-auto leading-relaxed">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Story Section with Large Remote Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-cream-border grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="h-80 lg:h-auto min-h-[360px] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg"
              alt="Makkah and Madinah Sanctity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm backdrop-blur-sm bg-black/40 p-3 rounded-xl border border-white/20">
              « Servir les hôtes du Très-Miséricordieux avec dévouement et excellence. »
            </div>
          </div>

          {/* Text Content */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4EE] text-emerald-deep text-xs font-bold w-fit">
              <Award className="w-4 h-4 text-gold" />
              <span>{t('about.storyBadge')}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-deep">
              {t('about.storySubtitle')}
            </h2>

            <p className="text-sm sm:text-base text-[#444D47] leading-relaxed">
              {t('about.storyP1')}
            </p>

            <p className="text-sm sm:text-base text-[#444D47] leading-relaxed">
              {t('about.storyP2')}
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#5A635E]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>{t('about.storyAssistance')}</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-gold" />
                <span>{t('about.storySupport')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars / Values Section */}
      <div className="bg-cream-subtle py-20 border-y border-cream-border mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              {t('about.valuesSectionTagline')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep mt-1">
              {t('about.valuesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-3xl p-8 shadow-md border border-cream-border flex flex-col justify-between hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mb-6 shadow-sm`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">
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
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-border shadow-xl text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">
            {t('about.commitmentsTagline')}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-deep mt-1 mb-8">
            {t('about.commitmentsTitle')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {commitments.map((comm) => (
              <div
                key={comm}
                className="flex items-start gap-3 p-4 rounded-2xl bg-cream border border-cream-border"
              >
                <CheckCircle className="w-5 h-5 text-emerald-deep shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2C332E] leading-snug">
                  {comm}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-cream-border flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-deep text-white font-semibold text-sm shadow-md hover:bg-[#0C4229] transition-colors"
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
