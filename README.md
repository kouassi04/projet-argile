# DocuWood - Gestion & Génération de Documents Intelligents

## 📋 Description

DocuWood est une application Angular moderne de gestion et génération de documents intelligents avec un design élégant inspiré du bois et de la nature. L'application combine la robustesse du bois avec la puissance de l'intelligence artificielle pour offrir une expérience documentaire unique.

## 🎨 Design & Thème

- **Palette de couleurs** : Thème bois chaleureux avec orange `#eb9947` comme couleur primaire
- **Font** : Manrope (élégant et moderne)
- **Icons** : Material Symbols Outlined
- **Style** : Glassmorphism, backdrop blur, animations fluides
- **Responsive** : Desktop / Mobile / Tablette
- **Dark Mode** : Support complet

## 🚀 Fonctionnalités

### ✅ Pages Implémentées
- **Login** : Connexion avec design bois élégant
- **Dashboard** : Vue d'ensemble avec statistiques
- **Documents** : Liste, création, édition, suppression
- **Dossiers** : Organisation par dossiers
- **Analyse IA** : Interface d'analyse intelligente
- **Recherche** : Recherche avancée avec filtres
- **Profil** : Gestion du profil utilisateur

### 🧩 Composants Réutilisables
- **DocumentCard** : Affichage des documents
- **FolderCard** : Affichage des dossiers
- **SearchBar** : Barre de recherche avec filtres
- **StatsCard** : Cartes de statistiques

### 🛠️ Architecture
- **Framework** : Angular 21.1.0 avec Standalone Components
- **Styling** : Tailwind CSS avec configuration personnalisée
- **Routing** : Angular Router avec lazy loading
- **State Management** : Services avec Observables
- **Mock Data** : Données simulées pour démonstration

## 📁 Structure du Projet

```
src/app/
├── core/                    # Services core
├── shared/
│   └── layout/             # Layout principal
├── pages/
│   ├── auth/               # Authentification
│   ├── dashboard/          # Tableau de bord
│   ├── documents/          # Gestion documents
│   ├── folders/            # Gestion dossiers
│   ├── analyze/            # Analyse IA
│   ├── search/             # Recherche
│   └── profile/            # Profil utilisateur
├── components/             # Composants réutilisables
│   ├── document-card/
│   ├── folder-card/
│   ├── search-bar/
│   └── stats-card/
├── services/
│   └── mock/               # Services mock
├── models/                 # Interfaces TypeScript
└── utils/                  # Utilitaires
```

## 🎯 Démarrage Rapide

### Prérequis
- Node.js 24.13.0+
- Angular CLI 21.1.0+
- npm ou yarn

### Installation
```bash
npm install
```

### Démarrage du Serveur
```bash
ng serve --port=50892
```

L'application sera disponible sur : **http://localhost:50892/**

### Connexion Demo
- **Email** : `user@example.com`
- **Mot de passe** : `password`

## 🎨 Personnalisation

### Couleurs
```css
--primary: #eb9947;          /* Orange bois */
--accent-yellow: #facc15;    /* Jaune accent */
--background-light: #fcfaf8; /* Beige clair */
--background-dark: #211911;   /* Brun foncé */
--warm-beige: #f3ede7;        /* Beige doux */
--wood-brown: #1b140e;       /* Brun bois */
--soft-brown: #97734e;       /* Brun doux */
```

### Fonts
- **Manrope** : Police principale (200-800 weight)
- **Material Symbols Outlined** : Icônes

## 📊 Données Mock

L'application utilise des données simulées pour démonstration :

### Documents (5 exemples)
- Rapport Annuel 2024
- Plan Marketing Q1
- Contrat Client ABC
- Note de Réunion Projet X
- Documentation Technique API

### Dossiers (4 exemples)
- Rapports (Bleu)
- Marketing (Vert)
- Légal (Rouge)
- Technique (Orange)

## 🔧 Technologies Utilisées

- **Frontend** : Angular 21.1.0
- **Styling** : Tailwind CSS
- **Icons** : Material Symbols
- **Build** : Angular CLI
- **Testing** : Vitest
- **Language** : TypeScript

## 📱 Responsive Design

L'application est entièrement responsive :
- **Desktop** : Layout complet avec sidebar
- **Tablette** : Adaptation automatique
- **Mobile** : Sidebar collapsible, navigation optimisée

## 🌟 Points Forts

1. **Design Unique** : Thème bois élégant et moderne
2. **Architecture Scalable** : Structure modulaire et maintenable
3. **Performance** : Lazy loading, optimisations
4. **UX/UX** : Animations fluides, interactions intuitives
5. **Code Quality** : TypeScript strict, composants réutilisables

## 🚀 Déploiement

### Build Production
```bash
ng build --configuration production
```

### Preview
```bash
ng serve --configuration production
```

## 📝 Notes de Développement

- Utilisation de Standalone Components (Angular 17+)
- Services avec Observables pour la gestion des données
- Mock services pour simulation backend
- Design system cohérent avec variables CSS
- Support Dark Mode complet

## 🤝 Contribuer

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push vers la branche
5. Créer une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 📞 Support

Pour toute question ou support technique :
- Email : support@docuwood.com
- Documentation : Voir l'aide intégrée

---

**DocuWood** - La robustesse du bois pour vos documents intelligents 🪵✨
