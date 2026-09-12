import React from 'react';
import { Link } from 'react-router-dom';
import { PackageItem } from '../data/packages';
import { useTranslation } from '../context/LanguageContext';
import { MapPin, CheckCircle2, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface PackageCardProps {
  packageItem: PackageItem;
  onSelectPackageForQuote?: (pkg: PackageItem) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  packageItem,
  onSelectPackageForQuote,
}) => {
  const { language, t, isRtl } = useTranslation();

  const handleQuoteClick = (e: React.MouseEvent) => {
    if (onSelectPackageForQuote) {
      e.preventDefault();
      onSelectPackageForQuote(packageItem);
    }
  };

  const isFeatured = packageItem.featured && packageItem.category === 'ramadan';

  return (
    <div
      className={`bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 border ${
        isFeatured ? 'border-gold ring-2 ring-gold/30 lg:-translate-y-2' : 'border-cream-border'
      }`}
    >
      <div>
        {/* Top Badges & Duration */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-cream border border-cream-border text-[#444D47] text-xs font-semibold uppercase tracking-wider">
            {packageItem.duration[language]}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-gold">
            {packageItem.badge[language]}
          </span>
        </div>

        {/* Thumbnail Preview */}
        <div className="h-44 w-full rounded-xl overflow-hidden relative mb-4 border border-cream-border">
          <img
            src={packageItem.mainImage}
            alt={packageItem.name[language]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="font-semibold drop-shadow-sm">{packageItem.period[language]}</span>
            <span className="bg-emerald-deep/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-bold">
              {packageItem.price.toLocaleString()} {packageItem.currency} {t('packages.perPerson')}
            </span>
          </div>
        </div>

        {/* Package Title & Short Tagline */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-deep leading-snug">
          {packageItem.name[language]}
        </h3>
        <p className="text-xs sm:text-sm text-[#5A635E] mt-2 line-clamp-2 leading-relaxed">
          {packageItem.tagline[language]}
        </p>

        {/* Spatial Indicators: Medina & Makkah Hotels */}
        <div className="mt-4 space-y-1.5">
          <div className="p-2.5 bg-cream rounded-xl flex items-center justify-between text-xs border border-cream-border">
            <div className="flex items-center gap-2 font-medium text-[#1F2421] truncate">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="truncate">{packageItem.medinaHotel.name}</span>
            </div>
            <span className="text-emerald-deep font-semibold shrink-0 ml-2">
              {packageItem.medinaHotel.distance[language]}
            </span>
          </div>

          <div className="p-2.5 bg-cream rounded-xl flex items-center justify-between text-xs border border-cream-border">
            <div className="flex items-center gap-2 font-medium text-[#1F2421] truncate">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="truncate">{packageItem.makkahHotel.name}</span>
            </div>
            <span className="text-emerald-deep font-semibold shrink-0 ml-2">
              {packageItem.makkahHotel.distance[language]}
            </span>
          </div>
        </div>

        {/* Features List */}
        <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#2C332E]">
          {packageItem.features[language].slice(0, 3).map((feat) => (
            <li key={feat} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span className="leading-tight">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Pricing & Action Buttons */}
      <div className="mt-6 pt-4 border-t border-cream-border">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-xs text-[#5A635E]">{t('packages.fromPrice')}</span>
          <div className="text-right">
            <span className="font-serif text-2xl font-bold text-emerald-deep">
              {packageItem.price.toLocaleString()} {packageItem.currency}
            </span>
            <span className="text-xs text-[#5A635E] ml-1">{t('packages.perPerson')}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/packages/${packageItem.id}`}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cream hover:bg-[#EAF4EE] text-emerald-deep font-semibold text-xs border border-emerald-deep/30 text-center transition-colors"
          >
            <span>{t('packages.viewDetails')}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>

          <button
            type="button"
            onClick={handleQuoteClick}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs text-center transition-colors shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>{t('packages.quoteBtn')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
