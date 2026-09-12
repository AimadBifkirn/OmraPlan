# OmraPlan — Site Web d'Agence de Pèlerinage Hajj & Omra

Bienvenue sur le projet **OmraPlan**, un site web vitrine moderne, haut de gamme et entièrement réactif dédié à une agence de voyages pour le Hajj et la Omra.

Ce site est 100% statique (sans base de données ni système de connexion obligatoire), conçu avec **React 18 / 19**, **Vite**, **Tailwind CSS**, **React Router DOM**, et un système multilingue fluide supportant le **Français**, l'**Anglais** et l'**Arabe** avec prise en charge complète du mode **RTL** (Right-to-Left).

---

## 1. Démarrage Rapide

### Prérequis
- Node.js version 18 ou supérieure
- Gestionnaire de paquets npm

### Installation et Lancement
```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement local
npm run dev

# 3. Compiler pour la production
npm run build
```

Le site est accessible en local sur `http://localhost:3000`.

---

## 2. Comment modifier le Numéro WhatsApp pour les Devis ?

Le flux principal de conversion et de demande de devis s'effectue directement via WhatsApp, pré-remplissant toutes les données sélectionnées par le pèlerin (nom, téléphone, formule, nombre de pèlerins, dates, type de chambre, notes).

Pour changer le numéro de réception de l'agence :
1. Ouvrez le fichier : `src/components/WhatsAppForm.tsx`
2. Modifiez la constante tout en haut du fichier :
   ```typescript
   export const AGENCY_PHONE_NUMBER = '33700900000'; // Remplacez par votre numéro international sans '+' ni espaces
   ```
   *Exemple pour le Maroc : `'212600000000'`*  
   *Exemple pour la France : `'33612345678'`*

---

## 3. Comment ajouter ou modifier un Forfait (Package) ?

Tous les forfaits sont définis dans le fichier :
📁 `src/data/packages.ts`

Chaque forfait est un objet contenant :
- `id` : identifiant unique dans l'URL (ex: `omra-confort-printemps`)
- `category` : `'omra'` | `'hajj'` | `'ramadan'` (utilisé pour les filtres)
- `name` : nom traduit en français (`fr`), anglais (`en`), et arabe (`ar`)
- `price` : prix d'appel en euros
- `duration` : durée du séjour (ex: 10 Jours / 9 Nuits)
- `mainImage` & `gallery` : liens d'images distantes (Unsplash ou Google Cloud)
- `makkahHotel` & `medinaHotel` : noms, étoiles et distances du Haram
- `itinerary` : étapes jour par jour traduites
- `included` / `notIncluded` : prestations incluses et non incluses

Il suffit de dupliquer un bloc existant dans `packagesData` pour ajouter un nouveau forfait instantanément.

---

## 4. Comment ajouter ou modifier un Hôtel ?

Tous les hôtels partenaires sont centralisés dans :
📁 `src/data/hotels.ts`

Chaque hôtel contient :
- `id` : identifiant de l'établissement
- `name` : nom officiel de l'hôtel (ex: `Swissôtel Al Maqam Makkah`)
- `city` : `'makkah'` ou `'medina'`
- `stars` : nombre d'étoiles (ex: `5`)
- `distance` : distance à pied de la Kaaba ou du Masjid An-Nabawi
- `image` : URL distante de la photo
- `features` : liste des prestations clés

---

## 5. Comment ajouter ou modifier un Témoignage ?

Les avis clients et retours de pèlerins se trouvent dans :
📁 `src/data/testimonials.ts`

Ajoutez simplement un nouvel élément avec :
- `author` : nom du pèlerin (ex: *El-Hadj Brahim M.*)
- `city` : ville et pays traduits
- `tripType` : voyage effectué (ex: *Omra Ramadan*)
- `rating` : note sur 5
- `quote` : citation du témoignage dans chaque langue
- `avatarInitials` : initiales pour le badge circulaire

---

## 6. Comment éditer ou ajouter des Textes Multilingues (FR / EN / AR) ?

Toutes les chaînes de caractères de l'interface sont séparées du code et rangées dans le dossier :
📁 `src/i18n/`
- `fr.json` : Français (langue par défaut)
- `en.json` : Anglais
- `ar.json` : Arabe

Quand l'utilisateur sélectionne **AR**, le site passe automatiquement en mode `dir="rtl"`, inverse les marges et alignements, et adopte la typographie arabe optimisée (**Cairo**).

Pour modifier un libellé (par exemple un bouton, un titre ou une section), ouvrez simplement le fichier correspondant et mettez à jour la valeur associée à la clé.

---

## 7. Architecture du Projet

```
/src
  /components
    BrandLogo.tsx          # Logo officiel OmraPlan avec icône vectorielle
    Footer.tsx             # Pied de page complet (agences, contact, légal)
    HotelCard.tsx          # Carte d'hôtel 5 étoiles avec distance au Haram
    LanguageSwitcher.tsx   # Sélecteur tactile FR / AR / EN avec RTL
    Navbar.tsx             # Barre de navigation fixe & menu mobile
    PackageCard.tsx        # Carte de présentation des forfaits
    StatBlock.tsx          # Blocs de statistiques clés
    TestimonialCard.tsx    # Cartes de témoignages pèlerins
    WhatsAppForm.tsx       # Composant formulaire de devis WhatsApp
  /context
    LanguageContext.tsx    # Gestionnaire d'état linguistique et sens RTL
  /data
    hotels.ts              # Données des hôtels 5 étoiles
    packages.ts            # Données des forfaits Omra & Hajj
    testimonials.ts        # Témoignages vérifiés
  /i18n
    ar.json                # Fichier de traduction Arabe
    en.json                # Fichier de traduction Anglais
    fr.json                # Fichier de traduction Français
  /pages
    About.tsx              # Page À Propos (Histoire, 3 piliers, engagements)
    Contact.tsx            # Page Contact (Formulaire WhatsApp + Agences + Google Maps)
    Home.tsx               # Page d'accueil complète
    Hotels.tsx             # Page du catalogue hôtelier 5★
    PackageDetails.tsx     # Fiche détaillée avec galerie et itinéraire
    Packages.tsx           # Catalogue filtrable des forfaits
  App.tsx                  # Déclaration des routes React Router
  main.tsx                 # Point d'entrée React
  index.css                # Configuration Tailwind CSS v4 & styles RTL
```

---

## 8. Licence & Crédits

- Conception & Design pour **OmraPlan - Voyages & Pèlerinages**
- Photos d'illustration : Licences Unsplash & Google Cloud Assets
- Icônes : **Lucide React**
