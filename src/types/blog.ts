
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords: string;
  category: string;
  subCategory: string;
  galleryImageId: number;
  slug?: string;
}

// Structure de catégories pour le blog
export interface BlogSubCategory {
  id: string;
  name: string;
  description?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description?: string;
  subCategories: BlogSubCategory[];
}

// Définition des catégories et sous-catégories du blog
export const BLOG_CATEGORIES: Record<string, BlogCategory> = {
  'logos': {
    id: 'logos',
    name: 'Logos',
    description: 'Analyses et actualités sur les logos de football',
    subCategories: [
      { id: 'club-logos', name: 'Logos de Clubs' },
      { id: 'national-logos', name: 'Logos de Sélections' },
      { id: 'competition-logos', name: 'Logos de Compétitions' }
    ]
  },
  'players': {
    id: 'players',
    name: 'Joueurs',
    description: 'Analyses et actualités sur les joueurs de football',
    subCategories: [
      { id: 'player', name: 'Joueur' },
      { id: 'transfer', name: 'Transfert' },
      { id: 'statistics', name: 'Statistiques' }
    ]
  },
  'teams': {
    id: 'teams',
    name: 'Équipes',
    description: 'Analyses et actualités sur les équipes de football',
    subCategories: [
      { id: 'club', name: 'Club' },
      { id: 'national', name: 'Sélection nationale' },
      { id: 'history', name: 'Histoire' }
    ]
  },
  'competitions': {
    id: 'competitions',
    name: 'Compétitions',
    description: 'Analyses et actualités sur les compétitions de football',
    subCategories: [
      { id: 'league', name: 'Championnat' },
      { id: 'cup', name: 'Coupe' },
      { id: 'international', name: 'International' }
    ]
  }
};
