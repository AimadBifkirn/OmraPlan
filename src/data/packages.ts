import { Language } from '../context/LanguageContext';

export interface PackageItem {
  id: string;
  category: 'omra' | 'hajj' | 'ramadan';
  featured?: boolean;
  name: Record<Language, string>;
  tagline: Record<Language, string>;
  badge: Record<Language, string>;
  duration: Record<Language, string>;
  period: Record<Language, string>;
  price: number;
  currency: string;
  mainImage: string;
  gallery: string[];
  makkahHotel: {
    name: string;
    stars: number;
    distance: Record<Language, string>;
    nights: number;
  };
  medinaHotel: {
    name: string;
    stars: number;
    distance: Record<Language, string>;
    nights: number;
  };
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  itinerary: Record<Language, Array<{ day: string; title: string; description: string }>>;
  included: Record<Language, string[]>;
  notIncluded: Record<Language, string[]>;
}

export const packagesData: PackageItem[] = [
  {
    id: 'omra-confort-printemps',
    category: 'omra',
    featured: true,
    name: {
      fr: 'Omra Confort Printemps',
      en: 'Spring Comfort Umrah',
      ar: 'عمرة الربيع المتميزة'
    },
    tagline: {
      fr: "L'équilibre absolu entre recueillement, douceur printanière et hôtels 5 étoiles à quelques pas des esplanades.",
      en: 'The ideal balance between devotion, mild spring weather, and 5-star hotels just footsteps from the sacred plazas.',
      ar: 'التوازن المثالي بين السكينة الإيمانية واعتدال الجو مع إقامة في فنادق 5 نجوم على خطوات من الحرم.'
    },
    badge: {
      fr: 'Printemps 2025',
      en: 'Spring 2025',
      ar: 'ربيع 2025'
    },
    duration: {
      fr: '10 Jours / 9 Nuits',
      en: '10 Days / 9 Nights',
      ar: '10 أيام / 9 ليالٍ'
    },
    period: {
      fr: 'Avril 2025',
      en: 'April 2025',
      ar: 'أبريل 2025'
    },
    price: 1690,
    currency: '€',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxSzxFiq5KfveNLpEfqiai3LX9TdKDCcIISM4vgx9S3SdMyStDBJBXeT6Z8jJ822quMQTPq7JZyoLO418ur-OMcEksceX6y5xpko29H6sd0WIBJ0bL3fV34UGfPFnL63wsh1qVNByqtV-0MMjaWy98XpfnrfFQT4zpGyMtasCF60DRjsyXJqA9s-hDLE4ftuBAlS-QrfSWyVr-8Dc0luvB2s9no6pAanSA_9lkvu_5cV-TPKh1I7OMBQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqwbaWMlACcysXu6qIsa-EJbY1xMEs8wjZpgxpPxuGNhZMGsSW5EFhAcp-ZledFBoRFlUHcnsUkxm9UeZI2IackNTDwcQiiDSS7-Rg9r07KN28upWg9r0VImwHzFEEdOxQD_EEQBffE_EtRYpoX2E0DDwaGHiBDifeQyiPIpJv6EJzKFhkqq7s4ShAqvrWdZkiYQlJR7wsIWr4jdnaZMujuAzehJy0Q-G87FoNjPFBD48pqGML_-WQ'
    ],
    makkahHotel: {
      name: 'Swissôtel Al Maqam Makkah 5★',
      stars: 5,
      distance: {
        fr: '50m de la Kaaba (Tour Abraj Al-Bait)',
        en: '50m from Kaaba (Abraj Al-Bait Complex)',
        ar: '50 متراً من الكعبة (أبراج البيت)'
      },
      nights: 5
    },
    medinaHotel: {
      name: 'Pullman Zamzam Madina 5★',
      stars: 5,
      distance: {
        fr: '150m de la Porte des Femmes et Rawda',
        en: '150m from Rawdah and Ladies Gate',
        ar: '150 متراً من الروضة الشريفة وباب السلام'
      },
      nights: 4
    },
    description: {
      fr: "Un séjour conçu pour allier sérénité et praticité. Dès votre arrivée à Médine, vous êtes pris en charge par notre équipe locale. Vous profiterez de la proximité immédiate de nos hôtels partenaires pour assister à chaque prière sans fatigue.",
      en: "A pilgrimage crafted to merge tranquility and comfort. Upon arrival in Madinah, our attentive local team welcomes you. Benefit from immediate walking access to the holy mosques for every prayer.",
      ar: "برنامج صمم خصيصاً ليجمع بين السكينة والراحة الفائقة. استقبال مباشر بمطار المدينة، وإقامة في قلب المنطقة المركزية لأداء جميع الصلوات بكل يسر وسهولة."
    },
    features: {
      fr: [
        'Vol direct régulier au départ de Paris, Lyon ou Bruxelles',
        'Transfert Médine - Makkah en TGV Haramain 1ère classe',
        'Guide théologique francophone et arabophone diplômé',
        'Petit-déjeuner buffet gastronomique inclus',
        'Visites pieuses (Ziyarat) de Médine et Makkah en bus VIP'
      ],
      en: [
        'Direct scheduled flights from major European hubs',
        'Haramain High-Speed Train (1st Class) Madinah to Makkah',
        'Bilingual qualified scholarly guide throughout the rites',
        'Full gourmet breakfast buffet included daily',
        'Historical guided Ziyarat tours in Madinah and Makkah in VIP coaches'
      ],
      ar: [
        'طيران مباشر منتظم من كبرى المطارات الأوروبية',
        'الانتقال بين المدينة ومكة بقطار الحرمين السريع (درجة أولى)',
        'مرشد ديني وتربوي متمكن طوال فترة المناسك',
        'إفطار بوفيه فاخر مشمول يومياً',
        'زيارات مزارات المدينة ومكة بحافلات VIP مكيفة'
      ]
    },
    itinerary: {
      fr: [
        { day: 'Jour 1', title: 'Départ & Accueil à Médine', description: 'Vol direct, accueil personnalisé par nos délégués et installation au Pullman Zamzam Madinah 5★.' },
        { day: 'Jour 2-4', title: 'Recueillement & Ziyarat Médine', description: 'Prières au Masjid An-Nabawi, visite de la Rawdah Chérifa avec permis Nusuk, visite de la mosquée de Quba et du mont Uhud.' },
        { day: 'Jour 5', title: 'TGV Haramain vers La Mecque', description: 'Entrée en état d’Ihram au Miqat, trajet en TGV 1ère classe vers Makkah, installation au Swissôtel Al Maqam et accomplissement de la Omra encadrée.' },
        { day: 'Jour 6-9', title: 'Séjour face à la Kaaba', description: 'Temps libre pour les Tawafs, prières face à la Kaaba, conférences spirituelles et Ziyarat des lieux saints mecquois.' },
        { day: 'Jour 10', title: 'Tawaf d’Adieu & Retour', description: 'Tawaf Al-Wadaa, transfert vers l’aéroport de Djeddah et vol retour vers la France.' }
      ],
      en: [
        { day: 'Day 1', title: 'Departure & Madinah Welcome', description: 'Direct flight, private VIP airport greeting, and check-in at Pullman Zamzam Madina 5★.' },
        { day: 'Day 2-4', title: 'Prophet’s Mosque & Ziyarat', description: 'Prayers in the Prophet’s Mosque, reserved Rawdah visit through Nusuk, historical tours of Quba and Mount Uhud.' },
        { day: 'Day 5', title: 'High-Speed Train to Makkah', description: 'Assume Ihram at Miqat, travel in 1st class on Haramain TGV, check-in at Swissôtel Al Maqam, and guided group Umrah.' },
        { day: 'Day 6-9', title: 'Spiritual Devotion at Kaaba', description: 'Personal devotion, Tawaf, prayers, daily spiritual lectures, and guided historical visits in Makkah.' },
        { day: 'Day 10', title: 'Farewell Tawaf & Departure', description: 'Farewell Tawaf (Al-Wadaa), private transfer to Jeddah Airport, and flight home.' }
      ],
      ar: [
        { day: 'اليوم 1', title: 'الوصول إلى المدينة المنورة', description: 'رحلة جوية مباشرة، استقبال خاص بالمطار، واستلام الغرف بفندق بولمان زمزم المدينة 5★.' },
        { day: 'الأيام 2-4', title: 'الصلاة بالمسجد النبوي والزيارات', description: 'الصلوات بالمسجد النبوي، زيارة الروضة الشريفة عبر نسك، وزيارة مسجد قباء وجبل أحد ومقبرة الشهداء.' },
        { day: 'اليوم 5', title: 'الإحرام والتوجه لمكة المكرمة', description: 'الإحرام من الميقات، الانتقال بقطار الحرمين درجة أولى، والتسكين بسويس أوتيل المقام ثم أداء مناسك العمرة جماعة.' },
        { day: 'الأيام 6-9', title: 'الاعتكاف والطواف بمكة', description: 'أداء الصلوات أمام الكعبة المشرفة، مجالس تذكيرية إيمانية، وجولة تعريفية بالمشاعر المقدسة.' },
        { day: 'اليوم 10', title: 'طواف الوداع والعودة', description: 'طواف الوداع، الانتقال إلى مطار جدة الدولي، ورحلة العودة بسلامة الله.' }
      ]
    },
    included: {
      fr: ['Billets d’avion A/R vols réguliers', 'Hébergement 5★ en formule petit-déjeuner', 'Billet TGV Haramain 1ère classe', 'Visa officiel Omra et assurance médicale saoudienne', 'Accompagnement théologique et logistique 24/7', 'Kit du pèlerin (Ihram, guide, sacoche)'],
      en: ['Return direct scheduled flights', '5-star hotel accommodation with breakfast buffet', '1st Class Haramain High-Speed Train ticket', 'Official Umrah visa and Saudi medical insurance', '24/7 theological & on-ground guide support', 'Pilgrim welcome gift kit (Ihram, guide booklet, tote)'],
      ar: ['تذاكر الطيران ذهاباً وإياباً على خطوط منتظمة', 'إقامة 5 نجوم شاملة الإفطار الفاخر', 'تذكرة قطار الحرمين السريع الدرجة الأولى', 'تأشيرة العمرة والتأمين الطبي الرسمي', 'مرافقة شرعية وإدارية متكاملة على مدار الساعة', 'حقيبة المعتمر الهدية (إحرام، كتيب أدعية)']
    },
    notIncluded: {
      fr: ['Repas du midi et du soir (sauf petit-déjeuner)', 'Dépenses personnelles et pourboires', 'Assurance annulation facultative'],
      en: ['Lunches and dinners (outside breakfast)', 'Personal expenses and shopping', 'Optional travel cancellation insurance'],
      ar: ['وجبات الغداء والعشاء (ما عدا الإفطار)', 'المصروفات الشخصية والمشتريات', 'تأمين إلغاء السفر الاختياري']
    }
  },
  {
    id: 'omra-ramadan-10-dernieres-nuits',
    category: 'ramadan',
    featured: true,
    name: {
      fr: 'Omra Ramadan : 10 Dernières Nuits',
      en: 'Ramadan Umrah: Last 10 Nights',
      ar: 'عمرة العشر الأواخر من رمضان'
    },
    tagline: {
      fr: "Vivez l'apogée spirituelle de l'année au cœur de Makkah. Prières, Taraweeh et Tahajjoud en direct avec vue sur la Kaaba.",
      en: 'Experience the spiritual peak of the year at the Kaaba. Taraweeh and Tahajjud prayers with direct Haram courtyard access.',
      ar: 'عش أعظم ليالي العام في رحاب المسجد الحرام. صلوات التراويح والتهجد وليلة القدر بأرقى مستويات الراحة.'
    },
    badge: {
      fr: 'Plus Populaire • Laylat Al-Qadr',
      en: 'Most Requested • Laylat Al-Qadr',
      ar: 'الأكثر طلباً • ليلة القدر'
    },
    duration: {
      fr: '12 Nuits d’Intensité',
      en: '12 Intensive Nights',
      ar: '12 ليلة إيمانية مباركة'
    },
    period: {
      fr: 'Fin Ramadan 1446',
      en: 'Late Ramadan 1446',
      ar: 'أواخر رمضان 1446'
    },
    price: 3250,
    currency: '€',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxSzxFiq5KfveNLpEfqiai3LX9TdKDCcIISM4vgx9S3SdMyStDBJBXeT6Z8jJ822quMQTPq7JZyoLO418ur-OMcEksceX6y5xpko29H6sd0WIBJ0bL3fV34UGfPFnL63wsh1qVNByqtV-0MMjaWy98XpfnrfFQT4zpGyMtasCF60DRjsyXJqA9s-hDLE4ftuBAlS-QrfSWyVr-8Dc0luvB2s9no6pAanSA_9lkvu_5cV-TPKh1I7OMBQ'
    ],
    makkahHotel: {
      name: 'Makkah Clock Royal Tower Fairmont 5★',
      stars: 5,
      distance: {
        fr: '0m Cour du Haram (Ascenseurs directs)',
        en: '0m Haram Courtyard (Direct elevators)',
        ar: 'مباشرة على ساحات الحرم (مصاعد خاصة)'
      },
      nights: 9
    },
    medinaHotel: {
      name: 'The Oberoi Madinah 5★',
      stars: 5,
      distance: {
        fr: 'Accès direct Rawdah et esplanade',
        en: 'Direct private gate to Prophet’s Mosque',
        ar: 'مباشرة أمام باب السلام والروضة الشريفة'
      },
      nights: 3
    },
    description: {
      fr: "Un voyage exceptionnel pour les nuits impaires et Laylat Al-Qadr. Les hôtels choisis permettent d'éviter les foules grâce à des accès réservés. Les buffets Iftar et Suhour gastronomiques sont inclus.",
      en: "An extraordinary journey for the odd nights and Laylat Al-Qadr. Accommodations chosen specifically for effortless courtyard access during crowded hours. Gourmet Iftar and Suhoor buffets included.",
      ar: "رحلة استثنائية لالتماس ليلة القدر في أطهر بقاع الأرض. فنادق بمصاعد مباشرة توفر عليك مشقة الزحام مع بوفيهات سحور وإفطار رمضانية راقية."
    },
    features: {
      fr: [
        'Suhoors et Iftars gastronomiques inclus chaque jour',
        'Accompagnement théologique dédié pour Laylat Al-Qadr et les Tahajjud',
        'Assistance VIP pour fauteuils roulants et pèlerins seniors',
        'Hôtel Fairmont avec ascenseurs privatifs descendant sur l’esplanade',
        'Célébration de la prière de l’Aïd Al-Fitr au Sanctuaire'
      ],
      en: [
        'Daily gourmet Suhoor and Iftar buffets included',
        'Dedicated scholarly companion for Tahajjud and Laylat Al-Qadr',
        'VIP concierge assistance for wheelchairs and senior pilgrims',
        'Fairmont Clock Tower with direct express elevators to prayer halls',
        'Eid Al-Fitr prayer celebrated directly facing the Kaaba'
      ],
      ar: [
        'وجبات إفطار وسحور فاخرة مفتوحة يومياً',
        'توجيه ديني خاص لصلاة التهجد وقيام ليلة القدر',
        'خدمة مساعدة خاصة لكبار السن والكراسي المتحركة',
        'مصاعد مباشرة من الفندق إلى مصليات الحرم بدون اختناقات',
        'شهود صلاة عيد الفطر المبارك بالمسجد الحرام'
      ]
    },
    itinerary: {
      fr: [
        { day: 'Jour 1', title: 'Arrivée à Médine en Ramadan', description: 'Vol direct, accueil VIP et rupture du jeûne face au Masjid An-Nabawi.' },
        { day: 'Jour 2-3', title: 'Médine la Lumineuse & Rawdah', description: 'Recueillement, visites spirituelles et prières des nuits de Ramadan.' },
        { day: 'Jour 4', title: 'TGV Haramain & Arrivée Makkah', description: 'Ihram au Miqat, TGV 1ère classe, accomplissement de la Omra en soirée.' },
        { day: 'Jour 5-11', title: 'Les 10 Dernières Nuits & Qadr', description: 'Iftars au coucher du soleil, Taraweeh et veillées de Tahajjud à 1h du matin.' },
        { day: 'Jour 12', title: 'Prière de l’Aïd & Retour', description: 'Prière de l’Aïd Al-Fitr au Haram, Tawaf d’adieu et vol retour.' }
      ],
      en: [
        { day: 'Day 1', title: 'Arrival in Madinah during Ramadan', description: 'Direct flight, VIP airport reception, and Iftar facing the Prophet’s Mosque.' },
        { day: 'Day 2-3', title: 'Madinah Nights & Rawdah', description: 'Spiritual quietude, Rawdah prayers, and soulful Ramadan gatherings.' },
        { day: 'Day 4', title: 'TGV to Makkah & Night Umrah', description: 'Ihram at Miqat, high-speed rail, and performing Umrah during serene hours.' },
        { day: 'Day 5-11', title: 'The Last 10 Nights & Laylat Al-Qadr', description: 'Daily communal Iftars, Taraweeh, and deep midnight Tahajjud prayers.' },
        { day: 'Day 12', title: 'Eid Prayer & Return Flight', description: 'Communal Eid Al-Fitr prayer in the Holy Sanctuary and flight home.' }
      ],
      ar: [
        { day: 'اليوم 1', title: 'الوصول إلى المدينة في رمضان', description: 'رحلة مباشرة، استقبال رفيع، وإفطار رمضاني بأجواء المسجد النبوي.' },
        { day: 'الأيام 2-3', title: 'ليالي المدينة والروضة الشريفة', description: 'صلاة التراويح والزيارات وزيارة الروضة الشريفة بتنسيق مسبق.' },
        { day: 'اليوم 4', title: 'قطار الحرمين ومناسك العمرة', description: 'الإحرام والانطلاق بالقطار السريع، وأداء مناسك العمرة في أجواء روحانية.' },
        { day: 'الأيام 5-11', title: 'العشر الأواخر وليلة القدر', description: 'إفطار وسحور فاخر، تراويح وتهجد، وتحري ليلة القدر المباركة.' },
        { day: 'اليوم 12', title: 'صلاة العيد وطواف الوداع', description: 'صلاة عيد الفطر بالمسجد الحرام وطواف الوداع قبل رحلة العودة.' }
      ]
    },
    included: {
      fr: ['Vols réguliers directs', 'Hébergement Fairmont Makkah & Oberoi Médine 5★', 'Formule demi-pension Iftar & Suhour', 'Transfert TGV Haramain 1ère classe', 'Visa Omra & Assurance tous risques', 'Assistance personnalisée 24/7'],
      en: ['Scheduled direct flights', 'Fairmont Makkah & Oberoi Madinah 5-star lodging', 'Half-board Iftar and Suhoor included daily', '1st Class Haramain TGV fast train ticket', 'Official Umrah visa & comprehensive medical insurance', '24/7 dedicated bilingual host'],
      ar: ['طيران مباشر مع حقائب كاملة', 'إقامة فاخرة بفيرمونت برج الساعة وأوبروي المدينة', 'وجبات إفطار وسحور يومياً', 'قطار الحرمين درجة أولى', 'تأشيرة العمرة وتأمين طبي شامل', 'مرشدون متفرغون طوال الرحلة']
    },
    notIncluded: {
      fr: ['Dépenses et achats personnels', 'Repas hors Suhoor et Iftar'],
      en: ['Personal purchases and laundry', 'Items outside included Suhoor & Iftar'],
      ar: ['المشتريات والمصروفات الشخصية', 'أي طلبات إضافية خارج الوجبات المحددة']
    }
  },
  {
    id: 'hajj-confort-serenite-2025',
    category: 'hajj',
    featured: true,
    name: {
      fr: 'Hajj Confort & Sérénité 2025',
      en: 'Hajj Comfort & Serenity 2025',
      ar: 'حج التميز والسكينة 2025'
    },
    tagline: {
      fr: "Le grand pèlerinage délivré de toute inquiétude logistique. Campement Mina VIP climatisé, hôtels face au Haram et médecins francophones.",
      en: 'The major pilgrimage freed from all logistical worry. VIP air-conditioned Mina tents, 5-star hotels, and dedicated bilingual medical staff.',
      ar: 'أداء فريضة الحج بطمأنينة وسكينة تامة. مخيمات منى VIP المكيفة، وفنادق مقابلة للحرم، ورعاية طبية على مدار الساعة.'
    },
    badge: {
      fr: 'Hajj 1446 / 2025',
      en: 'Hajj 1446 / 2025',
      ar: 'موسم حج 1446'
    },
    duration: {
      fr: '18 Jours Complets',
      en: '18 Complete Days',
      ar: '18 يوماً متكاملاً'
    },
    period: {
      fr: 'Mai - Juin 2025 (Dhul-Hijjah)',
      en: 'May - June 2025 (Dhul-Hijjah)',
      ar: 'مايو - يونيو 2025 (ذو الحجة)'
    },
    price: 7900,
    currency: '€',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxSzxFiq5KfveNLpEfqiai3LX9TdKDCcIISM4vgx9S3SdMyStDBJBXeT6Z8jJ822quMQTPq7JZyoLO418ur-OMcEksceX6y5xpko29H6sd0WIBJ0bL3fV34UGfPFnL63wsh1qVNByqtV-0MMjaWy98XpfnrfFQT4zpGyMtasCF60DRjsyXJqA9s-hDLE4ftuBAlS-QrfSWyVr-8Dc0luvB2s9no6pAanSA_9lkvu_5cV-TPKh1I7OMBQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxSzxFiq5KfveNLpEfqiai3LX9TdKDCcIISM4vgx9S3SdMyStDBJBXeT6Z8jJ822quMQTPq7JZyoLO418ur-OMcEksceX6y5xpko29H6sd0WIBJ0bL3fV34UGfPFnL63wsh1qVNByqtV-0MMjaWy98XpfnrfFQT4zpGyMtasCF60DRjsyXJqA9s-hDLE4ftuBAlS-QrfSWyVr-8Dc0luvB2s9no6pAanSA_9lkvu_5cV-TPKh1I7OMBQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA'
    ],
    makkahHotel: {
      name: 'Makkah Pavillon Al Safwah 5★ & Tentes Mina VIP',
      stars: 5,
      distance: {
        fr: '50m du Haram & Mina Zone Majar Al-Kabsh',
        en: '50m from Haram & VIP Majar Al-Kabsh in Mina',
        ar: '50 متراً من الحرم ومخيمات مجر الكبش VIP بمنى'
      },
      nights: 12
    },
    medinaHotel: {
      name: 'Dar Al Taqwa Hotel Madinah 5★',
      stars: 5,
      distance: {
        fr: 'Face à la porte du Roi Fahd',
        en: 'Directly facing King Fahd gate',
        ar: 'مباشرة أمام بوابة الملك فهد'
      },
      nights: 5
    },
    description: {
      fr: "Notre formule phare pour le Hajj. Un encadrement théologique francophone permanent, des tentes climatisées à Mina proches des Jamarat, et un staff médical dédié présent à chaque étape du pèlerinage.",
      en: "Our premier flagship Hajj program. Continuous bilingual scholarly guidance, air-conditioned Mina VIP tents close to the Jamarat, and doctors accompanying pilgrims every step.",
      ar: "برنامجنا المتكامل لأداء الفريضة براحة وأمان. مخيمات منى الحديثة والمطورة، ومرافقة دينية وطبية مستمرة تضمن لكم الراحة والتركيز التام على العبادة."
    },
    features: {
      fr: [
        'Campement privé Mina VIP climatisé avec couchages individuels',
        'Staff médical et docteurs francophones 24h/24',
        'Conférences préparatoires et séminaires quotidiens sur place',
        'Pension complète : repas chauds et collations continues',
        'Accès au métro des lieux saints (Mashaer Train)'
      ],
      en: [
        'Private air-conditioned Mina VIP camp with individual comfortable beds',
        'On-site bilingual medical doctors and nursing team 24/7',
        'Daily spiritual lectures and preparatory workshops on rites',
        'Full board: hot chef-prepared meals, fruits, and hydration stations',
        'Fast access passes for the Mashaer Holy Sites Train'
      ],
      ar: [
        'مخيمات منى VIP مطورة ومكيفة مع أسرة مريحة خاصة',
        'طاقم طبي وتمريضي مرافق طوال أيام الحج 24/7',
        'محاضرات إيمانية ولقاءات إرشادية يومية لشرح المناسك',
        'إعاشة كاملة: وجبات طازجة، مشروبات وفواكه مستمرة',
        'تذاكر قطار المشاعر المقدسة السريع'
      ]
    },
    itinerary: {
      fr: [
        { day: 'Jour 1-5', title: 'Médine la Sanctifiée', description: 'Visites de la Rawdah, conférences préparatoires et recueillement spirituel.' },
        { day: 'Jour 6-7', title: 'Makkah & Préparation du Hajj', description: 'Tawaf d’arrivée, repos au Pavillon 5★ et vérification du matériel du rite.' },
        { day: 'Jour 8-12', title: 'Les Jours du Hajj (Mina, Arafat, Muzdalifah)', description: 'Jour de Tarwiyah à Mina, station grandiose à Arafat, nuitée à Muzdalifah et jours de Tachriq.' },
        { day: 'Jour 13-17', title: 'Tawaf Al-Ifadah & Repos à Makkah', description: 'Accomplissement du Tawaf Al-Ifadah et du Saï, repos bien mérité et Tawaf d’adieu.' },
        { day: 'Jour 18', title: 'Retour vers la France', description: 'Transfert à l’aéroport et vol retour avec des souvenirs impérissables.' }
      ],
      en: [
        { day: 'Day 1-5', title: 'Spiritual Days in Madinah', description: 'Rawdah prayer visits, scholarly workshops, and prophetic immersion.' },
        { day: 'Day 6-7', title: 'Makkah & Final Hajj Briefing', description: 'Arrival Tawaf, rest in luxury hotel rooms, and Ihram preparation.' },
        { day: 'Day 8-12', title: 'The Core Hajj Rituals', description: 'Tarwiyah at Mina, standing at Mount Arafat, night under the stars in Muzdalifah, Jamarat stones.' },
        { day: 'Day 13-17', title: 'Tawaf Ifadah & Makkah Devotion', description: 'Tawaf Al-Ifadah, Sai, final days in Makkah and farewell Tawaf.' },
        { day: 'Day 18', title: 'Return Flight', description: 'Comfortable transfer and scheduled return flights home.' }
      ],
      ar: [
        { day: 'الأيام 1-5', title: 'أيام الطمأنينة بالمدينة المنورة', description: 'زيارة الروضة الشريفة، محاضرات توعوية واستعداد إيماني عميق.' },
        { day: 'الأيام 6-7', title: 'مكة المكرمة وطواف القدوم', description: 'طواف القدوم والسعي، الراحة بالفندق وتفويج المشاعر.' },
        { day: 'الأيام 8-12', title: 'أيام الحج العظام', description: 'يوم التروية بمنى، الوقوف بعرفة، الإفاضة إلى مزدلفة، ورمي الجمرات وأيام التشريق.' },
        { day: 'الأيام 13-17', title: 'طواف الإفاضة والراحة بمكة', description: 'طواف الإفاضة، إتمام المناسك وطواف الوداع.' },
        { day: 'اليوم 18', title: 'رحلة العودة المباركة', description: 'التوجه إلى المطار ورحلة العودة بحج مبرور وذنب مغفور بإذن الله.' }
      ]
    },
    included: {
      fr: ['Vols réguliers confirmés', 'Hébergement 5★ Makkah & Médine', 'Campement Mina VIP avec pension complète', 'Guides religieux bilingues et équipe médicale', 'Train des Lieux Saints Mashaer', 'Assurance Hajj et formalités Nusuk'],
      en: ['Confirmed scheduled flights', '5-star hotels in Makkah and Madinah', 'Mina VIP AC camp with full board nutrition', 'Bilingual theological scholars and medical team', 'Mashaer holy train transport', 'Official Hajj visa and insurance'],
      ar: ['تذاكر الطيران على خطوط دولية منتظمة', 'إقامة 5 نجوم بمكة والمدينة', 'مخيمات منى VIP مع إعاشة كاملة', 'مشايخ وأطباء مرافقون على مدار الساعة', 'قطار المشاعر المقدسة', 'تأشيرة الحج الرسمية والتأمين']
    },
    notIncluded: {
      fr: ['Dépenses privées et sacrifices optionnels supplémentaires'],
      en: ['Personal souvenirs and optional additional charity sacrifices'],
      ar: ['المصروفات الشخصية والصدقات الاختيارية']
    }
  },
  {
    id: 'omra-famille-vacances-scolaires',
    category: 'omra',
    featured: false,
    name: {
      fr: 'Omra Famille & Vacances Scolaires',
      en: 'Family Vacation Umrah',
      ar: 'عمرة العائلة والعطلات المدرسية'
    },
    tagline: {
      fr: "Un itinéraire adapté au rythme des enfants et des aînés, avec chambres familiales communicantes et visites enrichissantes.",
      en: 'An itinerary paced for children and elders, featuring connecting family rooms and engaging educational visits.',
      ar: 'رحلة ميسرة تناسب العائلات والأطفال وكبار السن، مع غرف متصلة وبرامج تعليمية هادفة.'
    },
    badge: {
      fr: 'Formule Famille',
      en: 'Family Special',
      ar: 'باقة العائلة'
    },
    duration: {
      fr: '11 Jours / 10 Nuits',
      en: '11 Days / 10 Nights',
      ar: '11 يوماً / 10 ليالٍ'
    },
    period: {
      fr: 'Vacances Scolaires (Février / Octobre)',
      en: 'School Holidays (February / October)',
      ar: 'العطلات المدرسية (فبراير / أكتوبر)'
    },
    price: 1850,
    currency: '€',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqwbaWMlACcysXu6qIsa-EJbY1xMEs8wjZpgxpPxuGNhZMGsSW5EFhAcp-ZledFBoRFlUHcnsUkxm9UeZI2IackNTDwcQiiDSS7-Rg9r07KN28upWg9r0VImwHzFEEdOxQD_EEQBffE_EtRYpoX2E0DDwaGHiBDifeQyiPIpJv6EJzKFhkqq7s4ShAqvrWdZkiYQlJR7wsIWr4jdnaZMujuAzehJy0Q-G87FoNjPFBD48pqGML_-WQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqwbaWMlACcysXu6qIsa-EJbY1xMEs8wjZpgxpPxuGNhZMGsSW5EFhAcp-ZledFBoRFlUHcnsUkxm9UeZI2IackNTDwcQiiDSS7-Rg9r07KN28upWg9r0VImwHzFEEdOxQD_EEQBffE_EtRYpoX2E0DDwaGHiBDifeQyiPIpJv6EJzKFhkqq7s4ShAqvrWdZkiYQlJR7wsIWr4jdnaZMujuAzehJy0Q-G87FoNjPFBD48pqGML_-WQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA'
    ],
    makkahHotel: {
      name: 'Mövenpick Hotel & Residences Hajar Tower 5★',
      stars: 5,
      distance: {
        fr: '30m de la cour du Haram',
        en: '30m from Haram courtyard',
        ar: '30 متراً من ساحة الحرم'
      },
      nights: 6
    },
    medinaHotel: {
      name: 'Anwar Al Madinah Mövenpick 5★',
      stars: 5,
      distance: {
        fr: 'Accès direct esplanade du Prophète ﷺ',
        en: 'Direct access to Prophet’s plaza',
        ar: 'اتصال مباشر بساحات المسجد النبوي'
      },
      nights: 4
    },
    description: {
      fr: "Conçue pour permettre aux parents de vivre leur Omra avec sérénité tout en transmettant l'amour des Lieux Saints à leurs enfants. Chambres spacieuses et encadrement rassurant.",
      en: "Designed to allow parents to experience Umrah peacefully while sharing sacred heritage with their children. Spacious family rooms and gentle pacing.",
      ar: "باقة مخصصة للعائلات مع غرف رحبة وبرامج ميسرة تتيح للأبناء فهم معاني المناسك برفق ومحبة."
    },
    features: {
      fr: [
        'Chambres quadruples familiales ou communicantes',
        'Ateliers ludiques d’initiation à l’histoire des prophètes pour les jeunes',
        'Assistance pour poussettes et déplacements à pied raccourcis',
        'TGV Haramain Première Classe inclus',
        'Petits-déjeuners buffets très complets'
      ],
      en: [
        'Family quadruple rooms or connecting suites available',
        'Engaging prophetic story workshops for youth',
        'Stroller assistance and minimized walking distances',
        '1st Class Haramain fast train included',
        'Extensive daily breakfast buffets'
      ],
      ar: [
        'غرف عائلية رباعية وأجنحة متصلة',
        'أنشطة تعريفية مبسطة للأطفال والناشئة عن السيرة النبوية',
        'تيسير حركة عربات الأطفال وكبار السن',
        'قطار الحرمين السريع درجة أولى',
        'بوفيه إفطار غني ومتنوع'
      ]
    },
    itinerary: {
      fr: [
        { day: 'Jour 1-4', title: 'Médine en Douceur', description: 'Visite de Médine, musée de la Révélation et découverte de la Rawdah.' },
        { day: 'Jour 5', title: 'Train vers La Mecque', description: 'Voyage reposant en TGV et première vision émouvante de la Kaaba.' },
        { day: 'Jour 6-10', title: 'Vie spirituelle à Makkah', description: 'Tawafs en famille aux heures douces et visites historiques.' },
        { day: 'Jour 11', title: 'Retour en famille', description: 'Transfert à Djeddah et retour serein.' }
      ],
      en: [
        { day: 'Day 1-4', title: 'Gentle Days in Madinah', description: 'Prophet’s Mosque, historical revelation museum, and Rawdah.' },
        { day: 'Day 5', title: 'Express Rail to Makkah', description: 'Comfortable rail journey and uplifting family Umrah.' },
        { day: 'Day 6-10', title: 'Makkah Moments', description: 'Family prayers, guided visits of Cave Hira viewpoints, and Tawaf.' },
        { day: 'Day 11', title: 'Return Journey', description: 'Airport transfer and flight back home.' }
      ],
      ar: [
        { day: 'الأيام 1-4', title: 'أيام بهيجة بالمدينة', description: 'المسجد النبوي، معرض السيرة النبوية والروضة الشريفة.' },
        { day: 'اليوم 5', title: 'قطار الحرمين إلى مكة', description: 'رحلة قطار مريحة وأداء مناسك العمرة في طمأنينة.' },
        { day: 'الأيام 6-10', title: 'أيام الإيمان بمكة المكرمة', description: 'الصلوات بجوار الكعبة وزيارة جبل النور ومعالم مكة.' },
        { day: 'اليوم 11', title: 'العودة بسلامة الله', description: 'التوصيل لمطار جدة والعودة للديار.' }
      ]
    },
    included: {
      fr: ['Vols A/R directs réguliers', 'Hôtels 5★ avec petit-déjeuner', 'Billet TGV Haramain 1ère classe', 'Visas et assurances inclus', 'Kit famille OmraPlan'],
      en: ['Return direct flights', '5-star hotels with breakfast', '1st class Haramain train ticket', 'Visas and full medical insurance', 'Family gift kit'],
      ar: ['طيران مباشر ذهاب وإياب', 'فنادق 5 نجوم شاملة الإفطار', 'تذكرة قطار الحرمين درجة أولى', 'التأشيرات والتأمين الطبي', 'هدية العائلة الخاصة']
    },
    notIncluded: {
      fr: ['Repas hors petits-déjeuners', 'Achats personnels'],
      en: ['Meals other than breakfasts', 'Personal shopping'],
      ar: ['الوجبات الإضافية', 'المشتريات الشخصية']
    }
  }
];
