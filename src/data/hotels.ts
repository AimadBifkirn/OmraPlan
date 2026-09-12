import { Language } from '../context/LanguageContext';

export interface HotelItem {
  id: string;
  name: string;
  city: 'makkah' | 'medina';
  stars: number;
  badge: Record<Language, string>;
  distance: Record<Language, string>;
  shortDescription: Record<Language, string>;
  fullDescription: Record<Language, string>;
  image: string;
  gallery: string[];
  features: Record<Language, string[]>;
  locationHighlight: Record<Language, string>;
}

export const hotelsData: HotelItem[] = [
  {
    id: 'fairmont-makkah-clock-tower',
    name: 'Makkah Clock Royal Tower, A Fairmont Hotel',
    city: 'makkah',
    stars: 5,
    badge: {
      fr: '5 Étoiles Luxe • Vue Kaaba',
      en: '5-Star Luxury • Kaaba View',
      ar: '5 نجوم فاخر • إطلالة مباشرة على الكعبة'
    },
    distance: {
      fr: '0m Cour du Haram (Ascenseurs directs)',
      en: '0m Haram Courtyard (Express elevators)',
      ar: 'مباشرة على ساحة الحرم (مصاعد خاصة)'
    },
    shortDescription: {
      fr: "Emblème absolu dominant le complexe d'Abraj Al-Bait, offrant une vue frontale inestimable sur la Kaaba et ascenseurs directs vers l'esplanade.",
      en: "The landmark icon dominating Abraj Al-Bait complex, granting breathtaking frontal views over the Kaaba with direct express elevators to prayer plazas.",
      ar: "أيقونة الضيافة الملكية في أبراج البيت، إطلالة استثنائية على صحن المطاف مع مصاعد مباشرة تنزل إلى ساحات الحرم."
    },
    fullDescription: {
      fr: "Le Fairmont Makkah Clock Royal Tower est l'un des hôtels les plus prestigieux au monde. Ses suites spacieuses offrent un confort inégalé pour contempler la Kaaba dans le recueillement le plus complet. La proximité immédiate permet d'accéder aux cinq prières quotidiennes sans stress ni fatigue.",
      en: "The Fairmont Makkah Clock Royal Tower ranks among the most distinguished hotels in the world. Spacious suites deliver quiet contemplation facing the Holy Kaaba, with effortless elevator connections to the prayer halls.",
      ar: "يعد فندق فيرمونت برج ساعة مكة الملكي من أرقى فنادق العالم الإسلامي. يوفر أجنحة رحبة تعين على الخشوع والذكر مع مصاعد مباشرة وسريعة للنزول لأداء الصلوات."
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg'
    ],
    features: {
      fr: ['Vue panoramique sur la Kaaba', 'Ascenseurs privatifs esplanade', 'Service d’étage et conciergerie 24/7', 'Restaurants gastronomiques internationaux', 'WiFi haut débit gratuit'],
      en: ['Panoramic Kaaba view rooms', 'Direct courtyard elevators', '24/7 room service & concierge', 'International fine dining restaurants', 'High-speed fiber WiFi'],
      ar: ['إطلالة بانورامية على الكعبة', 'مصاعد خاصة بالنزلاء لساحة الحرم', 'خدمة غرف واستقبال 24 ساعة', 'مطاعم وبوفيهات عالمية راقية', 'إنترنت فائق السرعة مجاني']
    },
    locationHighlight: {
      fr: 'Abraj Al-Bait Complex, La Mecque',
      en: 'Abraj Al-Bait Complex, Makkah',
      ar: 'مجمع أبراج البيت، مكة المكرمة'
    }
  },
  {
    id: 'swissotel-al-maqam-makkah',
    name: 'Swissôtel Al Maqam Makkah',
    city: 'makkah',
    stars: 5,
    badge: {
      fr: '5 Étoiles Raffiné • Accès Direct',
      en: '5-Star Elegant • Direct Footbridge',
      ar: '5 نجوم أنيق • وصول مباشر'
    },
    distance: {
      fr: '50m de la Kaaba (Tour Abraj Al-Bait)',
      en: '50m from Kaaba (Abraj Al-Bait)',
      ar: '50 متراً من الكعبة المشرفة'
    },
    shortDescription: {
      fr: "Situé au sein d'Abraj Al-Bait avec un accès direct piétonnier via le centre commercial, cet établissement réputé offre un confort optimal pour familles et seniors.",
      en: "Located directly in Abraj Al-Bait with climate-controlled direct access to the Holy Mosque, perfectly tailored for families and elderly pilgrims.",
      ar: "موقع مميز داخل مجمع أبراج البيت مع ممرات مكيفة مباشرة إلى الحرم، مثالي للعائلات وكبار السن."
    },
    fullDescription: {
      fr: "Le Swissôtel Al Maqam allie la tradition de l'hospitalité suisse à la chaleur de l'accueil oriental. Avec ses plus de 1 600 chambres et suites élégamment meublées, son salon de thé et son restaurant Al-Ruha, votre séjour y est d'une grande douceur.",
      en: "Swissôtel Al Maqam pairs world-renowned hospitality standards with sincere Arabian hospitality. Its elegant rooms, dedicated prayer spaces, and gourmet dining make every moment effortless.",
      ar: "يجمع سويس أوتيل المقام بين أعلى المعايير الفندقية العالمية وأصالة الضيافة العربية، موفراً إقامة هانئة تتيح التفرغ التام للعبادة والذكر."
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxSzxFiq5KfveNLpEfqiai3LX9TdKDCcIISM4vgx9S3SdMyStDBJBXeT6Z8jJ822quMQTPq7JZyoLO418ur-OMcEksceX6y5xpko29H6sd0WIBJ0bL3fV34UGfPFnL63wsh1qVNByqtV-0MMjaWy98XpfnrfFQT4zpGyMtasCF60DRjsyXJqA9s-hDLE4ftuBAlS-QrfSWyVr-8Dc0luvB2s9no6pAanSA_9lkvu_5cV-TPKh1I7OMBQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxSzxFiq5KfveNLpEfqiai3LX9TdKDCcIISM4vgx9S3SdMyStDBJBXeT6Z8jJ822quMQTPq7JZyoLO418ur-OMcEksceX6y5xpko29H6sd0WIBJ0bL3fV34UGfPFnL63wsh1qVNByqtV-0MMjaWy98XpfnrfFQT4zpGyMtasCF60DRjsyXJqA9s-hDLE4ftuBAlS-QrfSWyVr-8Dc0luvB2s9no6pAanSA_9lkvu_5cV-TPKh1I7OMBQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBa496doI_zCDJSPaWPiSKvMqANvb8o7joOSU16kTN-oiakiWrurda5LJgQld3zu7RovShz1lSTcwcO-TyOXgqEFJy6TsI5ulFwGVv_296kGqW-iDeqmAZ9gnTKF4oAoovO10YTjUUGzMQWZI2MjiDWNWASBYdbyppzYbgsxbLmAAw8gj2cowpwt6tQeKeAEaWZDHbqNesDGTm6irrhbW6ZK9_ApDE8Jys59LLrbtWaxZ5LV2jYO7PgeA'
    ],
    features: {
      fr: ['Passage intérieur direct vers le Haram', 'Chambres familiales communicantes', 'Buffet petit-déjeuner oriental et occidental', 'Accès PMR et fauteuils roulants'],
      en: ['Enclosed direct walkway into Haram', 'Connecting family rooms available', 'Rich Eastern and Western breakfast spreads', 'Full wheelchair accessibility'],
      ar: ['ممر داخلي مكيف مباشر إلى الحرم', 'غرف عائلية متصلة واسعة', 'بوفيه إفطار متنوع وشهي', 'تجهيزات كاملة لذوي الاحتياجات الخاصة']
    },
    locationHighlight: {
      fr: 'Tour Al Maqam, La Mecque',
      en: 'Al Maqam Tower, Makkah',
      ar: 'برج المقام، مكة المكرمة'
    }
  },
  {
    id: 'the-oberoi-madinah',
    name: 'The Oberoi Madinah',
    city: 'medina',
    stars: 5,
    badge: {
      fr: '5 Étoiles Majestueux • Face Rawdah',
      en: '5-Star Grand Luxury • Facing Rawdah',
      ar: '5 نجوم ملكي • أمام الروضة الشريفة'
    },
    distance: {
      fr: 'Accès direct Bab Al-Salam & Rawdah',
      en: 'Direct access to Bab Al-Salam & Rawdah',
      ar: 'أمام باب السلام والروضة الشريفة'
    },
    shortDescription: {
      fr: "Le sanctuaire de distinction suprême à Médine, adjacent aux portes principales du Masjid An-Nabawi et offrant une intimité totale pour les invocations paisibles.",
      en: "The hallmark of serene refinement in Madinah, immediately bordering the sacred northern plazas of the Prophet's Mosque.",
      ar: "عنوان الفخامة والسكينة بالمدينة المنورة، بملاصقة مباشرة لبوابات المسجد النبوي الشريف."
    },
    fullDescription: {
      fr: "The Oberoi Madinah est reconnu internationalement pour la perfection de son service personnalisé et sa situation géographique sans égale. Depuis ses chambres, la vue sur le Dôme Vert et les minarets du Prophète ﷺ invite à une paix intérieure inoubliable.",
      en: "The Oberoi Madinah is celebrated for unmatched personalized attention and an unbeatable location. Look out upon the Green Dome and graceful minarets in deep, peaceful serenity.",
      ar: "يشتهر فندق أوبروي المدينة بحسن الضيافة ودقة الخدمة، وإطلالته المهيبة على القبة الخضراء والمآذن النبوية الشريفة."
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqwbaWMlACcysXu6qIsa-EJbY1xMEs8wjZpgxpPxuGNhZMGsSW5EFhAcp-ZledFBoRFlUHcnsUkxm9UeZI2IackNTDwcQiiDSS7-Rg9r07KN28upWg9r0VImwHzFEEdOxQD_EEQBffE_EtRYpoX2E0DDwaGHiBDifeQyiPIpJv6EJzKFhkqq7s4ShAqvrWdZkiYQlJR7wsIWr4jdnaZMujuAzehJy0Q-G87FoNjPFBD48pqGML_-WQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqwbaWMlACcysXu6qIsa-EJbY1xMEs8wjZpgxpPxuGNhZMGsSW5EFhAcp-ZledFBoRFlUHcnsUkxm9UeZI2IackNTDwcQiiDSS7-Rg9r07KN28upWg9r0VImwHzFEEdOxQD_EEQBffE_EtRYpoX2E0DDwaGHiBDifeQyiPIpJv6EJzKFhkqq7s4ShAqvrWdZkiYQlJR7wsIWr4jdnaZMujuAzehJy0Q-G87FoNjPFBD48pqGML_-WQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg'
    ],
    features: {
      fr: ['Emplacement n°1 face aux portes sacrées', 'Service majordome et conciergerie d’exception', 'Atmosphère feutrée propice au recueillement', 'Salons de thé et cuisine raffinée'],
      en: ['Prime location facing sacred gates', 'Dedicated butler and concierge attention', 'Tranquil ambiance for contemplation', 'Tea lounges and exquisite dining'],
      ar: ['أفضل موقع مواجه لبوابات الحرم النبوي', 'خدمة فندقية راقية ومساعد شخصي', 'أجواء مفعمة بالهدوء والسكينة', 'مطاعم وصالات شاي متميزة']
    },
    locationHighlight: {
      fr: 'En face du Masjid An-Nabawi, Médine',
      en: 'Directly facing Prophet’s Mosque, Madinah',
      ar: 'أمام المسجد النبوي الشريف مباشرة، المدينة المنورة'
    }
  },
  {
    id: 'dar-al-taqwa-madinah',
    name: 'Dar Al Taqwa Hotel Madinah',
    city: 'medina',
    stars: 5,
    badge: {
      fr: '5 Étoiles Confort • Porte Roi Fahd',
      en: '5-Star Quality • King Fahd Gate',
      ar: '5 نجوم مميز • بوابة الملك فهد'
    },
    distance: {
      fr: 'À 50m des arcades du Masjid An-Nabawi',
      en: '50m from Prophet’s Mosque porticos',
      ar: '50 متراً من أروقة المسجد النبوي'
    },
    shortDescription: {
      fr: "Un havre de paix situé directement en face de la porte du Roi Fahd. Idéal pour les femmes avec un accès rapide aux sections de prières réservées.",
      en: "A peaceful sanctuary located right before King Fahd Gate, offering direct fast access to the ladies prayer courtyards.",
      ar: "واحة من الهدوء قبالة بوابة الملك فهد، مع سهولة تامة لوصول السيدات لمصلياتهن."
    },
    fullDescription: {
      fr: "Dar Al Taqwa Hotel est apprécié pour son ambiance chaleureuse, son personnel attentionné et sa proximité immédiate avec les portes réservées aux femmes et aux hommes. Ses chambres sont équipées de toutes les commodités modernes.",
      en: "Dar Al Taqwa Hotel is cherished by our pilgrims for warm hospitality and immediate proximity to the mosque gates, ensuring seamless prayer attendance morning and evening.",
      ar: "يحظى دار التقوى بمكانة رفيعة لدى حجاجنا ومعتمرينا نظراً لموقعه الاستراتيجي وقربه الشديد من بوابات دخول الرجال والنساء وخدمته الودودة."
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDdqyQHc4HiNacEEzId4F1iU40XwqGr2Ufsbdf_HG4PulCDp583tHba31yFzliajv7wPsbtFgjZBX9EysBOBrBBhg1wQrcv626FvfftkXPURz65VvxvDqwSB4k_A0nm-pzbWIBWZKWB7P7uYqQ6KDiFlBTPLUGA4yyU3Xtaqu73QHtG7P0BDZZAl5JJDmKM01sJPz6Bs8CnrNEHxEG5PMnFvwc-APcLdOaL1F-MUC0Zu16Q43ISQvwg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqwbaWMlACcysXu6qIsa-EJbY1xMEs8wjZpgxpPxuGNhZMGsSW5EFhAcp-ZledFBoRFlUHcnsUkxm9UeZI2IackNTDwcQiiDSS7-Rg9r07KN28upWg9r0VImwHzFEEdOxQD_EEQBffE_EtRYpoX2E0DDwaGHiBDifeQyiPIpJv6EJzKFhkqq7s4ShAqvrWdZkiYQlJR7wsIWr4jdnaZMujuAzehJy0Q-G87FoNjPFBD48pqGML_-WQ'
    ],
    features: {
      fr: ['Moins de 2 minutes de marche pour prier', 'Chambres calmes insonorisées', 'Restaurant Al Marwa avec vue', 'Service bagages et conciergerie'],
      en: ['Under 2 minutes walking to prayer', 'Quiet, soundproofed rooms', 'Al Marwa panoramic dining', 'Luggage care & concierge'],
      ar: ['أقل من دقيقتين سيراً على الأقدام للحرم', 'غرف هادئة معزولة الصوت', 'مطعم المروة بإطلالة ساحرة', 'خدمة أمتعة واستقبال راقية']
    },
    locationHighlight: {
      fr: 'Boutique King Fahd, Médine',
      en: 'King Fahd Plaza, Madinah',
      ar: 'ساحة الملك فهد، المدينة المنورة'
    }
  }
];
