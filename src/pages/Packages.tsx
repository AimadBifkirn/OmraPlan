import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { packagesData, PackageItem } from '../data/packages';
import { PackageCard } from '../components/PackageCard';
import { WhatsAppForm } from '../components/WhatsAppForm';
import { Filter } from 'lucide-react';

type FilterType = 'all' | 'omra' | 'hajj' | 'ramadan';

export const Packages: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState<PackageItem | null>(null);

  const filterTabs: Array<{ id: FilterType; label: string }> = [
    { id: 'all', label: t('packages.filterAll') },
    { id: 'omra', label: t('packages.filterOmra') },
    { id: 'hajj', label: t('packages.filterHajj') },
    { id: 'ramadan', label: t('packages.filterRamadan') },
  ];

  const filteredPackages = packagesData.filter((pkg) => {
    if (activeFilter === 'all') return true;
    return pkg.category === activeFilter;
  });

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackageForQuote(pkg);
    const el = document.getElementById('package-quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
          {t('packages.tagline')}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F5132] mt-2">
          {t('packages.title')}
        </h1>
        <p className="text-base sm:text-lg text-[#5A635E] mt-3 max-w-2xl mx-auto leading-relaxed">
          {t('packages.subtitle')}
        </p>

        {/* Filter Pills */}
        <div className="mt-8 inline-flex items-center flex-wrap justify-center gap-2 p-1.5 bg-white rounded-2xl border border-[#E8E0D2] shadow-sm">
          <div className="flex items-center gap-1 px-3 text-xs text-[#5A635E] font-medium hidden sm:flex">
            <Filter className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Filtres :</span>
          </div>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F5132] text-white shadow-sm font-bold'
                    : 'text-[#5A635E] hover:text-[#0F5132] hover:bg-[#FAF7F2]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                packageItem={pkg}
                onSelectPackageForQuote={handleSelectPackage}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-[#E8E0D2]">
            <p className="text-[#5A635E] text-base">{t('packages.noPackages')}</p>
          </div>
        )}
      </div>

      {/* Dedicated Quote Section */}
      <div id="package-quote-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatsAppForm
          initialPackageName={
            selectedPackageForQuote ? selectedPackageForQuote.name.fr : undefined
          }
          initialOfferType={
            selectedPackageForQuote
              ? selectedPackageForQuote.category === 'hajj'
                ? 'Hajj 2025'
                : selectedPackageForQuote.category === 'ramadan'
                ? 'Omra Ramadan'
                : 'Omra Confort'
              : undefined
          }
        />
      </div>
    </div>
  );
};
