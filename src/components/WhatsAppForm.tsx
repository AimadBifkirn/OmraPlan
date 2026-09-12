import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { MessageCircle, Shield, User, Phone, MapPin, Calendar, Users, Home, AlertCircle, CheckCircle2 } from 'lucide-react';

/**
 * =========================================================================
 * AGENCY WHATSAPP CONFIGURATION
 * Edit the number below (in international format without '+' or spaces).
 * Example for Morocco: '212600000000', for France: '33700900000'.
 * =========================================================================
 */
export const AGENCY_PHONE_NUMBER = '33700900000';

interface WhatsAppFormProps {
  initialPackageName?: string;
  initialOfferType?: string;
  className?: string;
  id?: string;
}

export const WhatsAppForm: React.FC<WhatsAppFormProps> = ({
  initialPackageName,
  initialOfferType,
  className = '',
  id = 'whatsapp-quote-form',
}) => {
  const { t, language } = useTranslation();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [offerType, setOfferType] = useState<string>(
    initialOfferType || 'Omra Confort'
  );
  const [month, setMonth] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [room, setRoom] = useState('Double');
  const [city, setCity] = useState('Paris CDG / Orly');
  const [notes, setNotes] = useState('');

  // Validation state
  const [touched, setTouched] = useState<{ fullName?: boolean; phone?: boolean }>({});
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackageName) {
      setNotes((prev) =>
        prev
          ? prev
          : language === 'ar'
          ? `طلب خاص ببرنامج: ${initialPackageName}`
          : language === 'en'
          ? `Inquiry specifically for: ${initialPackageName}`
          : `Demande spécifique pour le forfait : ${initialPackageName}`
      );
    }
  }, [initialPackageName, language]);

  useEffect(() => {
    if (initialOfferType) {
      setOfferType(initialOfferType);
    }
  }, [initialOfferType]);

  const validate = () => {
    const errs: { fullName?: string; phone?: string } = {};
    if (!fullName.trim()) {
      errs.fullName = t('form.errorRequired');
    }
    if (!phone.trim() || phone.trim().length < 6) {
      errs.phone = t('form.errorRequired');
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, phone: true });

    if (!validate()) {
      return;
    }

    // Compose polite, structured WhatsApp message based on selected language
    let message = `${t('form.whatsappGreeting')}\n\n`;

    if (initialPackageName) {
      message += `★ ${t('form.packageTitle')} *${initialPackageName}*\n`;
    }
    message += `• ${t('form.offerType')} : ${offerType}\n`;
    message += `• ${t('form.fullName')} : ${fullName.trim()}\n`;
    message += `• ${t('form.phone')} : ${phone.trim()}\n`;
    message += `• ${t('form.travelers')} : ${travelers} pèlerin(s)\n`;
    message += `• ${t('form.room')} : ${room}\n`;
    message += `• ${t('form.city')} : ${city}\n`;
    message += `• ${t('form.month')} : ${month.trim() || (language === 'ar' ? 'يُحدد لاحقاً' : 'À définir ensemble')}\n`;

    if (notes.trim()) {
      message += `• ${t('form.notes')} : ${notes.trim()}\n`;
    }

    message += `\n${t('form.whatsappClosing')}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${AGENCY_PHONE_NUMBER}?text=${encoded}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id={id}
      className={`bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#E8E0D2] relative overflow-hidden ${className}`}
    >
      {/* Decorative ambient glowing accents */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#C9A227]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#0F5132]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4EE] text-[#0F5132] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            {t('form.badge')}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F5132] leading-tight">
            {t('form.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#5A635E] mt-2">
            {t('form.subtitle')}
          </p>

          {initialPackageName && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF4E2] text-[#B48F1E] border border-[#DEC786]/60 text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
              <span>
                {t('form.packageTitle')} <strong>{initialPackageName}</strong>
              </span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Offer Type Toggle */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#1F2421] uppercase tracking-wider">
              {t('form.offerType')}
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { val: 'Omra Confort', label: t('form.offerOmra') },
                { val: 'Omra Ramadan', label: t('form.offerRamadan') },
                { val: 'Hajj 2025', label: t('form.offerHajj') },
              ].map((item) => {
                const selected = offerType === item.val;
                return (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setOfferType(item.val)}
                    className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer border ${
                      selected
                        ? 'bg-[#0F5132] text-white border-[#0F5132] shadow-sm font-bold scale-102'
                        : 'bg-[#FAF7F2] text-[#444D47] border-[#E8E0D2] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs font-bold text-[#1F2421]">
                {t('form.fullName')} *
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-[#88928B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
                  placeholder={t('form.fullNamePlaceholder')}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#1F2421] placeholder-[#88928B]/60 focus:bg-white focus:outline-none transition-colors ${
                    touched.fullName && errors.fullName
                      ? 'border-red-500 ring-1 ring-red-400'
                      : 'border-[#E8E0D2] focus:border-[#0F5132]'
                  }`}
                  required
                />
              </div>
              {touched.fullName && errors.fullName && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-bold text-[#1F2421]">
                {t('form.phone')} *
              </label>
              <div className="relative">
                <Phone className="w-5 h-5 text-[#88928B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                  placeholder={t('form.phonePlaceholder')}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#1F2421] placeholder-[#88928B]/60 focus:bg-white focus:outline-none transition-colors ${
                    touched.phone && errors.phone
                      ? 'border-red-500 ring-1 ring-red-400'
                      : 'border-[#E8E0D2] focus:border-[#0F5132]'
                  }`}
                  required
                />
              </div>
              {touched.phone && errors.phone && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Travelers & Room Preference & Departure City */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="space-y-1.5">
              <label htmlFor="travelers" className="block text-xs font-bold text-[#1F2421]">
                {t('form.travelers')}
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-[#88928B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="travelers"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E0D2] text-sm text-[#1F2421] focus:bg-white focus:border-[#0F5132] focus:outline-none transition-colors"
                >
                  <option value="1">{t('form.travelers1')}</option>
                  <option value="2">{t('form.travelers2')}</option>
                  <option value="3">{t('form.travelers3')}</option>
                  <option value="4">{t('form.travelers4')}</option>
                  <option value="5+">{t('form.travelers5')}</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="room" className="block text-xs font-bold text-[#1F2421]">
                {t('form.room')}
              </label>
              <div className="relative">
                <Home className="w-4 h-4 text-[#88928B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="room"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E0D2] text-sm text-[#1F2421] focus:bg-white focus:border-[#0F5132] focus:outline-none transition-colors"
                >
                  <option value="Double">{t('form.roomDouble')}</option>
                  <option value="Triple">{t('form.roomTriple')}</option>
                  <option value="Quadruple">{t('form.roomQuad')}</option>
                  <option value="Suite">{t('form.roomSuite')}</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="city" className="block text-xs font-bold text-[#1F2421]">
                {t('form.city')}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#88928B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={t('form.cityPlaceholder')}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E0D2] text-sm text-[#1F2421] focus:bg-white focus:border-[#0F5132] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Preferred Month */}
          <div className="space-y-1.5">
            <label htmlFor="month" className="block text-xs font-bold text-[#1F2421]">
              {t('form.month')}
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-[#88928B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="month"
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder={t('form.monthPlaceholder')}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E0D2] text-sm text-[#1F2421] placeholder-[#88928B]/60 focus:bg-white focus:border-[#0F5132] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-1.5">
            <label htmlFor="notes" className="block text-xs font-bold text-[#1F2421]">
              {t('form.notes')}
            </label>
            <textarea
              id="notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('form.notesPlaceholder')}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E0D2] text-sm text-[#1F2421] placeholder-[#88928B]/60 focus:bg-white focus:border-[#0F5132] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6B756F]">
              <Shield className="w-4 h-4 text-[#0F5132] shrink-0" />
              <span>{t('form.privacy')}</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t('form.submit')}</span>
            </button>
          </div>

          {isSubmitted && (
            <div className="p-3 bg-[#EAF4EE] border border-[#0F5132]/20 rounded-xl text-center text-xs text-[#0F5132] font-semibold animate-in fade-in duration-300">
              ✓ WhatsApp ouvert avec votre demande personnalisée !
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
