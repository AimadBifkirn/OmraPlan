import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { hotelsData } from '../data/hotels';
import { HotelCard } from '../components/HotelCard';
import { MapPin, Sparkles, Clock } from 'lucide-react';

type CityFilter = 'all' | 'makkah' | 'medina';

export const Hotels: React.FC = () => {
  const { t } = useTranslation();
  const [activeCity, setActiveCity] = useState<CityFilter>('all');

  const filteredHotels = hotelsData.filter((h) => {
    if (activeCity === 'all') return true;
    return h.city === activeCity;
  });

  return (
    <div className="w-full pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-gold font-bold">
          {t('hotels.tagline')}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-deep mt-2">
          {t('hotels.title')}
        </h1>
        <p className="text-base sm:text-lg text-[#5A635E] mt-3 max-w-2xl mx-auto leading-relaxed">
          {t('hotels.subtitle')}
        </p>

        {/* City Filter Pills */}
        <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-cream-border shadow-sm">
          {[
            { id: 'all', label: t('hotels.allCities') },
            { id: 'makkah', label: t('hotels.makkah') },
            { id: 'medina', label: t('hotels.medina') },
          ].map((item) => {
            const isActive = activeCity === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCity(item.id as CityFilter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-deep text-white shadow-sm font-bold'
                    : 'text-[#5A635E] hover:text-emerald-deep hover:bg-cream'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Assurance Banners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-cream-border flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4EE] text-emerald-deep flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1F2421]">{t('hotels.bannerProximityTitle')}</h3>
              <p className="text-xs text-[#5A635E]">{t('hotels.bannerProximityDesc')}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-cream-border flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-gold-light text-gold flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1F2421]">{t('hotels.bannerStandardsTitle')}</h3>
              <p className="text-xs text-[#5A635E]">{t('hotels.bannerStandardsDesc')}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-cream-border flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4EE] text-emerald-deep flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1F2421]">{t('hotels.bannerPrayerTitle')}</h3>
              <p className="text-xs text-[#5A635E]">{t('hotels.bannerPrayerDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};
