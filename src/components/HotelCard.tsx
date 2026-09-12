import React from 'react';
import { HotelItem } from '../data/hotels';
import { useTranslation } from '../context/LanguageContext';
import { Star, MapPin, Check, MessageCircle } from 'lucide-react';
import { AGENCY_PHONE_NUMBER } from './WhatsAppForm';

interface HotelCardProps {
  hotel: HotelItem;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const { language, t } = useTranslation();

  const handleInquire = () => {
    const text =
      language === 'ar'
        ? `السلام عليكم، أود الاستفسار عن حجز وإقامة بفندق ${hotel.name} عبر وكالة عمرة بلان.`
        : language === 'en'
        ? `Assalamu alaykum, I would like to inquire about staying at ${hotel.name} through OmraPlan.`
        : `Assalamu alaykum, je souhaite me renseigner sur l'hôtel ${hotel.name} pour mon séjour avec OmraPlan.`;
    const url = `https://wa.me/${AGENCY_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#E8E0D2] flex flex-col justify-between group">
      <div>
        {/* Remote Photo with proximity badge */}
        <div className="h-56 w-full overflow-hidden relative">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 right-3 bg-[#0F5132]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#E8C868]" />
            <span>{hotel.distance[language]}</span>
          </div>

          <div className="absolute bottom-3 left-3 bg-[#C9A227] text-white px-3 py-0.5 rounded-lg text-xs font-bold shadow-xs">
            {hotel.city === 'makkah' ? t('hotels.makkah') : t('hotels.medina')}
          </div>
        </div>

        {/* Hotel Details */}
        <div className="p-6">
          {/* Star Rating */}
          <div className="flex items-center gap-1 text-[#C9A227] mb-2">
            {Array.from({ length: hotel.stars }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs text-[#5A635E] ml-1 font-semibold">
              {hotel.badge[language]}
            </span>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#0F5132] leading-snug">
            {hotel.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#5A635E] mt-2.5 line-clamp-3 leading-relaxed">
            {hotel.shortDescription[language]}
          </p>

          {/* Key Amenities */}
          <div className="mt-4 pt-3 border-t border-[#E8E0D2]/60 space-y-1.5">
            {hotel.features[language].slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#2C332E]">
                <Check className="w-3.5 h-3.5 text-[#0F5132] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Inquire Action */}
      <div className="px-6 pb-6 pt-2">
        <button
          type="button"
          onClick={handleInquire}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#25D366] text-[#0F5132] hover:text-white border border-[#E8E0D2] hover:border-[#25D366] text-xs font-semibold transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t('packages.quoteBtn')}</span>
        </button>
      </div>
    </div>
  );
};
