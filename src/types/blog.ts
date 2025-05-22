export interface BlogCategory {
  name: string;
  description: string;
}

export interface BlogCategories {
  [key: string]: BlogCategory;
}

export const BLOG_CATEGORIES: BlogCategories = {
  news: {
    name: 'Actualités',
    description: 'Dernières nouvelles et mises à jour sur les logos de football.'
  },
  analysis: {
    name: 'Analyses',
    description: 'Analyses approfondies des logos de football et de leur signification.'
  },
  history: {
    name: 'Histoire',
    description: 'L\'histoire des logos de football à travers le temps.'
  },
  design: {
    name: 'Design',
    description: 'Principes de design et tendances dans les logos de football.'
  },
  interviews: {
    name: 'Interviews',
    description: 'Interviews avec des designers et des experts en logos de football.'
  },
  national_teams: {
    name: 'Équipes Nationales',
    description: 'Logos des équipes nationales de football du monde entier.'
  },
  club_logos: {
    name: 'Logos de Clubs',
    description: 'Logos des clubs de football du monde entier.'
  },
  leagues: {
    name: 'Ligues',
    description: 'Logos des ligues de football du monde entier.'
  },
  retro: {
    name: 'Rétro',
    description: 'Logos de football rétro et classiques.'
  },
  creation: {
    name: 'Création',
    description: 'Comment créer un logo de football efficace.'
  },
  tutorial: {
    name: 'Tutoriel',
    description: 'Tutoriels pour créer des logos de football.'
  },
  ressources: {
    name: 'Ressources',
    description: 'Ressources utiles pour les designers de logos de football.'
  },
  inspiration: {
    name: 'Inspiration',
    description: 'Inspiration pour la création de logos de football.'
  },
  marketing: {
    name: 'Marketing',
    description: 'Marketing et branding dans le football à travers les logos.'
  },
  juridique: {
    name: 'Juridique',
    description: 'Aspects juridiques des logos de football.'
  },
  legacy: {
    name: 'Legacy',
    description: 'Anciens articles de blog'
  },
  national_logos: {
    name: 'Logos Nationaux',
    description: 'Logos des équipes nationales de football.'
  }
};

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  category: string;
  subCategory?: string;
  keywords: string;
  galleryImageId?: number;
  coverImage?: string;
}

export interface FAQSection {
  question: string;
  answer: string;
}
