import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { hotelsData, HotelItem } from '../data/hotels';
import { HotelCard } from '../components/HotelCard';
import { Building, MapPin, Sparkles, Clock } from 'lucide-react';

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
        <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
          {t('hotels.tagline')}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F5132] mt-2">
          {t('hotels.title')}
        </h1>
        <p className="text-base sm:text-lg text-[#5A635E] mt-3 max-w-2xl mx-auto leading-relaxed">
          {t('hotels.subtitle')}
        </p>

        {/* City Filter Pills */}
        <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#E8E0D2] shadow-sm">
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
                    ? 'bg-[#0F5132] text-white shadow-sm font-bold'
                    : 'text-[#5A635E] hover:text-[#0F5132] hover:bg-[#FAF7F2]'
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
          <div className="bg-white p-5 rounded-2xl border border-[#E8E0D2] flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4EE] text-[#0F5132] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1F2421]">Proximité Zéro Fatigue</h3>
              <p className="text-xs text-[#5A635E]">Moins de 250m des portails d'accès aux sanctuaires.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E8E0D2] flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FBF4E2] text-[#C9A227] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1F2421]">Standards 5 Étoiles</h3>
              <p className="text-xs text-[#5A635E]">Literie royale, silence et restauration de haute volée.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E8E0D2] flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4EE] text-[#0F5132] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1F2421]">Synchro des 5 Prières</h3>
              <p className="text-xs text-[#5A635E]">Accédez aux esplanades en quelques minutes montre en main.</p>
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
