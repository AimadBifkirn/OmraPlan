import { Language } from '../context/LanguageContext';

export interface TestimonialItem {
  id: string;
  author: string;
  city: Record<Language, string>;
  tripType: Record<Language, string>;
  rating: number;
  quote: Record<Language, string>;
  avatarInitials: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    author: 'El-Hadj Brahim M.',
    city: {
      fr: 'Paris, France',
      en: 'Paris, France',
      ar: 'باريس، فرنسا'
    },
    tripType: {
      fr: 'Omra Confort en Famille • Décembre 2024',
      en: 'Family Comfort Umrah • December 2024',
      ar: 'عمرة عائلية متميزة • ديسمبر 2024'
    },
    rating: 5,
    quote: {
      fr: "Une organisation sans faille pour notre première Omra en famille. La proximité absolue des hôtels avec nos parents âgés et nos deux enfants a totalement métamorphosé le séjour. Qu'Allah bénisse toute l'équipe d'OmraPlan pour leur bienveillance.",
      en: "Flawless organization for our first family Umrah. The direct proximity of the hotels for our elderly parents and two young children made the entire pilgrimage deeply enjoyable. May Allah bless the OmraPlan team.",
      ar: "تنظيم لا تشوبه شائبة لعمرتنا الأولى مع العائلة. القرب الشديد للفنادق من ساحات الحرم وفر على والديّ المسنين مشقة المشي، ويسر علينا أداء جميع الصلوات في أوقاتها. بارك الله في فريق عمرة بلان."
    },
    avatarInitials: 'BM'
  },
  {
    id: 't2',
    author: 'Samira & Youssef K.',
    city: {
      fr: 'Lyon, France',
      en: 'Lyon, France',
      ar: 'ليون، فرنسا'
    },
    tripType: {
      fr: 'Omra Ramadan : 10 Dernières Nuits',
      en: 'Ramadan Umrah: Last 10 Nights',
      ar: 'عمرة العشر الأواخر من رمضان'
    },
    rating: 5,
    quote: {
      fr: "Le guide spirituel a donné un sens profond à chaque étape du rite. Mention spéciale pour le transfert en TGV Haramain entre Médine et Makkah : rapide, reposant et d'une propreté exemplaire. Une agence digne de confiance.",
      en: "Our scholarly guide imparted profound spiritual meaning to every ritual. Special praise for the Haramain high-speed train: swift, quiet, and spotless. A truly reliable and trustworthy agency.",
      ar: "كان للإرشاد الشرعي المرافق أثر عميق في فهم أبعاد المناسك وحكمها. نشيد برحلة قطار الحرمين السريع بين المدينة ومكة؛ كانت مريحة وهادئة ونظيفة للغاية. وكالة تستحق كامل الثقة."
    },
    avatarInitials: 'SK'
  },
  {
    id: 't3',
    author: 'Dr. Tariq B.',
    city: {
      fr: 'Marseille, France',
      en: 'Marseille, France',
      ar: 'مارسيليا، فرنسا'
    },
    tripType: {
      fr: 'Hajj Confort & Sérénité',
      en: 'Hajj Comfort & Serenity',
      ar: 'حج التميز والسكينة'
    },
    rating: 5,
    quote: {
      fr: "Honnêteté, transparence totale sur les tarifs et gentillesse infinie de l'équipe OmraPlan sur place. Aucune mauvaise surprise, tout ce qui a été convenu a été rigoureusement respecté avec un très haut niveau de courtoisie.",
      en: "Absolute honesty, complete pricing clarity, and genuine kindness from the on-ground OmraPlan team. Not a single hidden surprise; every promise was delivered with supreme hospitality.",
      ar: "أمانة ووضوح تام في التكاليف ولطف فائق من فريق العمل بالمشاعر المقدسة. لم نجد أي مفاجآت غير متوقعة، وتم الوفاء بجميع البنود المتفق عليها بكل أدب ومهنية رفيعة."
    },
    avatarInitials: 'TB'
  }
];
