
export type BlogCategory = 'logos' | 'history' | 'technical' | 'analysis' | 'pixel-art' | 'players';

export interface BlogSubCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords?: string;
  category: BlogCategory;
  subCategory?: string; // Référence au slug de la sous-catégorie
  galleryImageId?: number; // ID correspondant à l'image dans la galerie
}

export interface BlogCategoryInfo {
  name: string;
  description: string;
  subCategories: BlogSubCategory[];
}

export const BLOG_CATEGORIES: Record<BlogCategory, BlogCategoryInfo> = {
  logos: {
    name: "Logos & Design",
    description: "Collection et analyses des logos du football",
    subCategories: [
      {
        id: "club-logos",
        name: "Logos de Clubs",
        description: "Analyses des logos des clubs professionnels",
        slug: "club-logos"
      },
      {
        id: "national-logos",
        name: "Logos des Équipes Nationales",
        description: "Histoire des écussons des sélections nationales",
        slug: "national-logos"
      },
      {
        id: "competition-logos",
        name: "Logos des Compétitions",
        description: "Analyse des logos des grandes compétitions de football",
        slug: "competition-logos"
      }
    ]
  },
  history: {
    name: "Histoire",
    description: "L'histoire des identités visuelles du football",
    subCategories: [
      {
        id: "evolution",
        name: "Évolution des Logos",
        description: "L'évolution des logos à travers le temps",
        slug: "evolution"
      },
      {
        id: "iconic-designs",
        name: "Designs Iconiques",
        description: "Les logos qui ont marqué l'histoire",
        slug: "iconic-designs"
      }
    ]
  },
  technical: {
    name: "Technique",
    description: "Aspects techniques des logos de football",
    subCategories: [
      {
        id: "design-guidelines",
        name: "Guidelines",
        description: "Guides et bonnes pratiques de design",
        slug: "design-guidelines"
      },
      {
        id: "file-formats",
        name: "Formats de Fichiers",
        description: "Tout sur les formats de logos",
        slug: "file-formats"
      }
    ]
  },
  analysis: {
    name: "Analyses",
    description: "Analyses tactiques et statistiques du football",
    subCategories: [
      {
        id: "trends",
        name: "Tendances",
        description: "Les tendances actuelles du football",
        slug: "trends"
      },
      {
        id: "case-studies",
        name: "Études de Cas",
        description: "Analyses détaillées de tactiques et performances",
        slug: "case-studies"
      }
    ]
  },
  "players": {
    name: "Joueurs",
    description: "Analyses et portraits de joueurs de football",
    subCategories: [
      {
        id: "stars",
        name: "Stars",
        description: "Portraits des grandes stars du football",
        slug: "stars"
      },
      {
        id: "rising-talents",
        name: "Talents Émergents",
        description: "Analyses des jeunes talents prometteurs",
        slug: "rising-talents"
      }
    ]
  },
  "pixel-art": {
    name: "Pixel Art",
    description: "Création et design de pixel art sur le thème du football",
    subCategories: [
      {
        id: "team-pixel-art",
        name: "Équipes en Pixel Art",
        description: "Représentations pixel art des équipes de football",
        slug: "team-pixel-art"
      },
      {
        id: "pixel-art-tutorials",
        name: "Tutoriels Pixel Art",
        description: "Guides et tutoriels pour créer votre propre pixel art de football",
        slug: "pixel-art-tutorials"
      },
      {
        id: "pixel-art-collections",
        name: "Collections Pixel Art",
        description: "Collections thématiques de pixel art footballistique",
        slug: "pixel-art-collections"
      }
    ]
  }
};
