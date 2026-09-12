import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../context/LanguageContext';
import { Menu, X, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, isRtl } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/packages', label: t('nav.packages') },
    { to: '/hotels', label: t('nav.hotels') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-md border-b border-cream-border'
          : 'bg-cream/90 backdrop-blur-sm border-b border-cream-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-deep font-bold bg-[#EAF4EE]'
                      : 'text-[#444D47] hover:text-emerald-deep hover:bg-[#F2ECE1]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions: Language Switcher & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <LanguageSwitcher />

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-deep text-white text-sm font-semibold shadow-sm hover:bg-[#0C4229] transition-all transform active:scale-98 border border-emerald-deep"
            >
              <PhoneCall className={`w-4 h-4 text-gold ${isRtl ? 'scale-x-[-1]' : ''}`} />
              <span>{t('nav.quoteCta')}</span>
            </NavLink>
          </div>

          {/* Mobile Right Controls: Language Switcher & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher className="scale-90" />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-emerald-deep hover:bg-[#EAE2D2] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-cream border-b border-cream-border shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-deep text-white font-bold shadow-xs'
                      : 'text-[#2C332E] hover:bg-[#ECE4D6]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-3">
              <NavLink
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-deep text-white font-semibold text-center shadow-md"
              >
                <PhoneCall className={`w-4 h-4 text-gold ${isRtl ? 'scale-x-[-1]' : ''}`} />
                <span>{t('nav.quoteCta')}</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
