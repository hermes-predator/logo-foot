
export interface CountryChampionship {
  [key: string]: string;
}

export interface CountryAdjective {
  [key: string]: string;
}

export type CountryName = string;

export type BlogCategory = 
  | "logos"
  | "french-logo"
  | "english-logo"
  | "history"
  | "technical"
  | "analysis"
  | "pixel-art"
  | "players";  // Ajout de la catégorie "players"

// À jour : ajout des deux nouvelles catégories
export const BLOG_CATEGORIES: Record<BlogCategory, { name: string; description: string }> = {
  logos: {
    name: "Logos mixtes",
    description: "Tous nos articles sur les logos de clubs et sélections, partout dans le monde"
  },
  "french-logo": {
    name: "Clubs Français",
    description: "Tous les articles sur les logos des clubs français (Ligue 1, Ligue 2, National, etc.)"
  },
  "english-logo": {
    name: "Clubs Anglais",
    description: "Tous les articles sur les logos des clubs anglais, du Big Six à la League Two"
  },
  history: {
    name: "Histoire",
    description: "Découvertes et récits sur l'évolution historique des logos d'équipes de football"
  },
  technical: {
    name: "Technique & Création",
    description: "Guides pratiques et techniques, conseils créatifs"
  },
  analysis: {
    name: "Analyses de joueurs",
    description: "Analyses sur les joueurs de foot et leur impact sur l'identité du club"
  },
  "pixel-art": {
    name: "Pixel Art",
    description: "Univers du logo version pixel art. Inspirations, réalisations et guides"
  },
  "players": {
    name: "Joueurs",
    description: "Articles dédiés aux joueurs de football, leur carrière et leurs performances"
  }
};

// Interface BlogPost avec readingTime ajouté
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords?: string;
  category: BlogCategory;
  subCategory?: string;
  galleryImageId?: number | null;
  previousPostId?: number;
  nextPostId?: number;
  readingTime?: number;
}
