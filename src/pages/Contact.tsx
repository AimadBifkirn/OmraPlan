import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { WhatsAppForm } from '../components/WhatsAppForm';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Building,
  CheckCircle2,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, isRtl } = useTranslation();

  return (
    <div className="w-full pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
          {t('contact.tagline')}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F5132] mt-2">
          {t('contact.title')}
        </h1>
        <p className="text-base sm:text-lg text-[#5A635E] mt-3 max-w-2xl mx-auto leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Grid: Left WhatsApp Form, Right Agency Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Reusable WhatsAppForm */}
          <div className="lg:col-span-7">
            <WhatsAppForm />
          </div>

          {/* Right: Agency Addresses, Phones, Email & Google Maps Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E0D2] shadow-lg space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#0F5132]">
                Nos Bureaux d'Accueil
              </h2>

              {/* Agency 1: Paris */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D2] space-y-2">
                <div className="flex items-center gap-2 text-[#0F5132] font-bold text-base">
                  <Building className="w-5 h-5 text-[#C9A227]" />
                  <span>{t('contact.agencyParis')}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A635E]">
                  <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                  <span>{t('contact.agencyParisAddr')}</span>
                </div>
              </div>

              {/* Agency 2: Lyon */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D2] space-y-2">
                <div className="flex items-center gap-2 text-[#0F5132] font-bold text-base">
                  <Building className="w-5 h-5 text-[#C9A227]" />
                  <span>{t('contact.agencyLyon')}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A635E]">
                  <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                  <span>{t('contact.agencyLyonAddr')}</span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-2 text-sm text-[#1F2421]">
                <div className="flex items-center gap-3">
                  <Phone className={`w-4 h-4 text-[#0F5132] shrink-0 ${isRtl ? 'scale-x-[-1]' : ''}`} />
                  <div>
                    <span className="text-xs text-[#5A635E] block">{t('contact.phoneLabel')}</span>
                    <a href="tel:+33142680000" className="font-semibold hover:text-[#0F5132]">
                      +33 1 42 68 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <div>
                    <span className="text-xs text-[#5A635E] block">{t('contact.whatsappLabel')}</span>
                    <a
                      href="https://wa.me/33700900000"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#0F5132] hover:underline"
                    >
                      +33 7 00 90 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0F5132] shrink-0" />
                  <div>
                    <span className="text-xs text-[#5A635E] block">{t('contact.emailLabel')}</span>
                    <a href="mailto:contact@omraplan.com" className="font-semibold hover:text-[#0F5132]">
                      contact@omraplan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#0F5132] shrink-0" />
                  <div>
                    <span className="text-xs text-[#5A635E] block">{t('contact.hoursLabel')}</span>
                    <span className="font-medium text-xs sm:text-sm text-[#444D47]">{t('contact.hours')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#0F5132] font-semibold bg-[#EAF4EE] p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Accueil avec ou sans rendez-vous en agence.</span>
              </div>
            </div>

            {/* Embedded Google Maps Placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E0D2] shadow-md">
              <div className="p-4 bg-[#FAF7F2] border-b border-[#E8E0D2] flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-[#0F5132]">
                  {t('contact.mapTitle')}
                </span>
                <span className="text-xs text-[#5A635E]">Paris &bull; 75001</span>
              </div>
              <div className="h-64 w-full relative">
                <iframe
                  title="OmraPlan Paris Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=45%20Boulevard%20de%20S%C3%A9bastopol,%2075001%20Paris,%20France&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
