import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { packagesData } from '../data/packages';
import { useTranslation } from '../context/LanguageContext';
import { WhatsAppForm } from '../components/WhatsAppForm';
import {
  Calendar,
  Clock,
  MapPin,
  Check,
  X,
  Building,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Plane,
  Star,
  MessageCircle,
} from 'lucide-react';

export const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t, isRtl } = useTranslation();
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  const pkg = packagesData.find((p) => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!pkg) {
    return (
      <div className="w-full min-h-[60vh] pt-36 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-3xl font-bold text-emerald-deep">
          {language === 'ar' ? 'البرنامج غير موجود' : 'Forfait introuvable'}
        </h1>
        <p className="text-[#5A635E] mt-3">
          {language === 'ar'
            ? 'عذراً، لم نتمكن من العثور على تفاصيل هذه الباقة.'
            : "Désolé, nous n'avons pas trouvé les informations relatives à ce forfait."}
        </p>
        <Link
          to="/packages"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-deep text-white font-semibold text-sm shadow-md"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('packages.filterAll')}</span>
        </Link>
      </div>
    );
  }

  const galleryImages = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.mainImage];

  const handleScrollToBooking = () => {
    quoteSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5A635E] hover:text-emerald-deep transition-colors"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{t('packages.filterAll')}</span>
          </Link>
        </div>

        {/* Header Title & Pricing Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-cream-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-cream border border-cream-border text-[#444D47] text-xs font-semibold uppercase">
                {pkg.duration[language]}
              </span>
              <span className="px-3 py-1 rounded-full bg-gold-light border border-gold-border text-gold-hover text-xs font-bold uppercase">
                {pkg.badge[language]}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-deep">
              {pkg.name[language]}
            </h1>
            <p className="text-sm sm:text-base text-[#5A635E] mt-2 max-w-2xl">
              {pkg.tagline[language]}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-md flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 shrink-0">
            <div className="text-left lg:text-right">
              <span className="text-xs text-[#5A635E]">{t('packages.fromPrice')}</span>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
                {pkg.price.toLocaleString()} {pkg.currency}
              </div>
              <span className="text-xs text-[#5A635E]">{t('packages.perPerson')}</span>
            </div>

            <button
              type="button"
              onClick={handleScrollToBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm shadow-md transition-all transform active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t('packages.requestThisPackage')}</span>
            </button>
          </div>
        </div>

        {/* Gallery & Quick Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
          {/* Main Gallery Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="h-80 sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-lg border border-cream-border relative">
              <img
                src={galleryImages[activeImageIndex] || pkg.mainImage}
                alt={pkg.name[language]}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {activeImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-emerald-deep ring-2 ring-emerald-deep/30 scale-102'
                        : 'border-cream-border opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specs Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-border shadow-md space-y-5">
              <h3 className="font-serif text-xl font-bold text-emerald-deep pb-3 border-b border-cream-border">
                {t('packages.details')}
              </h3>

              <div className="flex items-start gap-3 text-sm">
                <Calendar className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F2421] font-semibold">{t('packageDetails.periodLabel')}</strong>
                  <span className="text-[#5A635E]">{pkg.period[language]}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F2421] font-semibold">{t('packages.duration')} :</strong>
                  <span className="text-[#5A635E]">{pkg.duration[language]}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Plane className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F2421] font-semibold">{t('packageDetails.flightsLabel')}</strong>
                  <span className="text-[#5A635E]">{t('packageDetails.flightsValue')}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F2421] font-semibold">{t('packageDetails.guaranteeLabel')}</strong>
                  <span className="text-[#5A635E]">{t('packageDetails.guaranteeValue')}</span>
                </div>
              </div>
            </div>

            {/* Hotels Included Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-border shadow-md space-y-4">
              <h3 className="font-serif text-lg font-bold text-emerald-deep pb-2 border-b border-cream-border">
                {t('packages.includedHotels')}
              </h3>

              {/* Makkah */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-gold font-semibold">
                  <span>{t('hotels.makkah')} ({pkg.makkahHotel.nights} Nuits)</span>
                  <div className="flex items-center">
                    {Array.from({ length: pkg.makkahHotel.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="font-semibold text-sm text-[#1F2421]">
                  {pkg.makkahHotel.name}
                </div>
                <div className="text-xs text-emerald-deep flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{pkg.makkahHotel.distance[language]}</span>
                </div>
              </div>

              <div className="border-t border-cream-border/60 pt-3 space-y-1">
                <div className="flex items-center justify-between text-xs text-gold font-semibold">
                  <span>{t('hotels.medina')} ({pkg.medinaHotel.nights} Nuits)</span>
                  <div className="flex items-center">
                    {Array.from({ length: pkg.medinaHotel.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="font-semibold text-sm text-[#1F2421]">
                  {pkg.medinaHotel.name}
                </div>
                <div className="text-xs text-emerald-deep flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{pkg.medinaHotel.distance[language]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Program / Itinerary Section */}
        <div className="my-16">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              {t('packageDetails.itineraryTagline')}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-deep mt-1">
              {t('packages.itinerary')}
            </h2>
          </div>

          <div className="space-y-4">
            {pkg.itinerary[language].map((step) => (
              <div
                key={step.day}
                className="bg-white rounded-2xl p-6 border border-cream-border shadow-sm flex flex-col sm:flex-row items-start gap-4 hover:border-emerald-deep transition-colors"
              >
                <div className="px-3.5 py-1.5 rounded-xl bg-[#EAF4EE] text-emerald-deep text-xs font-bold shrink-0">
                  {step.day}
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-[#1F2421]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5A635E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included vs. Not Included Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* Inclusions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-md">
            <h3 className="font-serif text-xl font-bold text-emerald-deep mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-[#25D366]" />
              <span>{t('packages.includedServices')}</span>
            </h3>
            <ul className="space-y-3">
              {pkg.included[language].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#2C332E]">
                  <Check className="w-4 h-4 text-emerald-deep mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-md">
            <h3 className="font-serif text-xl font-bold text-[#88928B] mb-6 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              <span>{t('packageDetails.notIncludedTitle')}</span>
            </h3>
            <ul className="space-y-3">
              {pkg.notIncluded[language].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#5A635E]">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pre-filled WhatsApp Quote Form */}
        <div ref={quoteSectionRef} id="booking-quote-form" className="max-w-4xl mx-auto my-20">
          <WhatsAppForm
            initialPackageName={pkg.name[language]}
            initialOfferType={
              pkg.category === 'hajj'
                ? 'Hajj 2025'
                : pkg.category === 'ramadan'
                ? 'Omra Ramadan'
                : 'Omra Confort'
            }
          />
        </div>
      </div>
    </div>
  );
};
