import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { useTranslation } from '../context/LanguageContext';
import { AGENCY_PHONE_NUMBER, AGENCY_PHONE_DISPLAY, AGENCY_WHATSAPP_DISPLAY, AGENCY_EMAIL } from '../config';
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isRtl } = useTranslation();

  return (
    <footer className="w-full bg-[#11231B] text-cream border-t-2 border-gold/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#2C4136]">
          {/* Col 1: Brand & Vocation */}
          <div className="space-y-4">
            <div className="p-1 -ml-1">
              <BrandLogo showSubtitle={true} />
            </div>
            <p className="text-sm text-[#B4C2BA] leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E8C868]">
              <ShieldCheck className="w-4 h-4 shrink-0 text-gold" />
              <span>{t('footer.license')}</span>
            </div>
            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook OmraPlan"
                className="w-9 h-9 rounded-full bg-[#1C3328] hover:bg-gold hover:text-emerald-dark flex items-center justify-center text-cream transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram OmraPlan"
                className="w-9 h-9 rounded-full bg-[#1C3328] hover:bg-gold hover:text-emerald-dark flex items-center justify-center text-cream transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${AGENCY_PHONE_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp OmraPlan"
                className="w-9 h-9 rounded-full bg-[#1C3328] hover:bg-[#25D366] hover:text-white flex items-center justify-center text-cream transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Agency Branches */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#E8C868] tracking-wide">
              {t('footer.agenciesTitle')}
            </h3>
            <div className="space-y-4 text-sm text-[#C8D4CD]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <div>
                  <strong className="block text-white font-semibold">{t('contact.agencyParis')}</strong>
                  <span className="text-[#A5B5AC]">{t('contact.agencyParisAddr')}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <div>
                  <strong className="block text-white font-semibold">{t('contact.agencyLyon')}</strong>
                  <span className="text-[#A5B5AC]">{t('contact.agencyLyonAddr')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Concierge & Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#E8C868] tracking-wide">
              {t('footer.conciergeTitle')}
            </h3>
            <div className="space-y-3 text-sm text-[#C8D4CD]">
              <div className="flex items-center gap-2.5">
                <Phone className={`w-4 h-4 text-gold shrink-0 ${isRtl ? 'scale-x-[-1]' : ''}`} />
                <a href={`tel:${AGENCY_PHONE_NUMBER}`} className="hover:text-gold transition-colors">
                  {AGENCY_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${AGENCY_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {AGENCY_WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${AGENCY_EMAIL}`} className="hover:text-gold transition-colors">
                  {AGENCY_EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#A5B5AC] pt-1">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>{t('contact.hours')}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Navigation & Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#E8C868] tracking-wide">
              {t('footer.navTitle')}
            </h3>
            <nav className="flex flex-col space-y-2 text-sm text-[#C8D4CD]">
              <Link to="/" className="hover:text-gold transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="hover:text-gold transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/packages" className="hover:text-gold transition-colors">
                {t('nav.packages')}
              </Link>
              <Link to="/hotels" className="hover:text-gold transition-colors">
                {t('nav.hotels')}
              </Link>
              <Link to="/contact" className="hover:text-gold transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#98A8A0]">
          <p>{t('footer.rights')}</p>
          <p className="italic text-gold/90">{t('footer.motto')}</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">
              {t('footer.legalTerms')}
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              {t('footer.privacyPolicy')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
