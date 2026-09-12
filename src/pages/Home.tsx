import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import { packagesData, PackageItem } from '../data/packages';
import { hotelsData } from '../data/hotels';
import { testimonialsData } from '../data/testimonials';
import { StatBlock } from '../components/StatBlock';
import { PackageCard } from '../components/PackageCard';
import { HotelCard } from '../components/HotelCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { WhatsAppForm } from '../components/WhatsAppForm';
import {
  History,
  Users,
  Star,
  Building,
  CheckCircle2,
  Train,
  HeartPulse,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  MessageCircle,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t, isRtl } = useTranslation();

  const handleSelectPackageForQuote = (pkg: PackageItem) => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      value: t('stats.stat1Value'),
      title: t('stats.stat1Title'),
      description: t('stats.stat1Desc'),
      icon: History,
    },
    {
      value: t('stats.stat2Value'),
      title: t('stats.stat2Title'),
      description: t('stats.stat2Desc'),
      icon: Users,
    },
    {
      value: t('stats.stat3Value'),
      title: t('stats.stat3Title'),
      description: t('stats.stat3Desc'),
      icon: Star,
    },
    {
      value: t('stats.stat4Value'),
      title: t('stats.stat4Title'),
      description: t('stats.stat4Desc'),
      icon: Building,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-[#082D1B] text-white pt-24 pb-20 md:pt-36 md:pb-28">
        {/* Full-width remote image background of Mecca / Medina with deep emerald & gold gradient overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg')`,
          }}
        >
          {/* Subtle multi-layer scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D1B]/95 via-[#082D1B]/85 to-[#082D1B]/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082D1B] via-transparent to-[#082D1B]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[520px]">
          <div className="max-w-3xl space-y-6">
            {/* Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/20 backdrop-blur-md text-[#F7EED2] text-xs font-semibold uppercase tracking-wider border border-[#C9A227]/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
                {t('hero.badgeLicense')}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                <Users className="w-3.5 h-3.5 text-[#E8C868]" />
                {t('hero.badgeGuide')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              {t('hero.title')}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#C8D4CD] leading-relaxed max-w-2xl font-light">
              {t('hero.subtitle')}
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#quote-section"
                onClick={scrollToQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#B48F1E] text-[#082D1B] font-bold text-sm sm:text-base shadow-xl transition-all transform active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t('hero.ctaWhatsApp')}</span>
              </a>

              <a
                href="#packages-section"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm sm:text-base border border-white/20 transition-all"
              >
                <span>{t('hero.ctaPackages')}</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Live Trust Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#EAF4EE] border-t border-white/15">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#C9A227]" />
                <span>{t('hero.feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#C9A227]" />
                <span>{t('hero.feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#C9A227]" />
                <span>{t('hero.feature3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STAT HIGHLIGHTS ================= */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <StatBlock
              key={idx}
              value={stat.value}
              title={stat.title}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>

      {/* ================= FEATURED PACKAGES ================= */}
      <section id="packages-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
              {t('packages.tagline')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F5132] mt-1">
              {t('packages.title')}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A635E] max-w-md mt-2 md:mt-0">
            {t('packages.subtitle')}
          </p>
        </div>

        {/* 3-Column Curated Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {packagesData.slice(0, 3).map((pkg) => (
            <PackageCard
              key={pkg.id}
              packageItem={pkg}
              onSelectPackageForQuote={handleSelectPackageForQuote}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] hover:bg-[#EAF4EE] text-[#0F5132] font-semibold text-sm border border-[#0F5132]/30 shadow-xs transition-colors"
          >
            <span>{t('packages.filterAll')}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      </section>

      {/* ================= HOTELS PREVIEW ================= */}
      <section className="w-full bg-[#F3ECE1] py-20 border-y border-[#E8E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
                {t('hotels.tagline')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F5132] mt-1">
                {t('hotels.title')}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A635E] max-w-md mt-2 md:mt-0">
              {t('hotels.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hotelsData.slice(0, 3).map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/hotels"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#0F5132] hover:text-white text-[#0F5132] font-semibold text-sm border border-[#E8E0D2] shadow-sm transition-all"
            >
              <span>{t('hotels.allCities')}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
            {t('testimonials.tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F5132] mt-1">
            {t('testimonials.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#5A635E] mt-2">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </section>

      {/* ================= WHATSAPP QUOTE REQUEST SECTION ================= */}
      <section id="quote-section" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <WhatsAppForm />
      </section>
    </div>
  );
};
