
export type BlogCategory = 'logos' | 'history' | 'technical' | 'analysis';

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
    description: "Analyses des tendances et styles",
    subCategories: [
      {
        id: "trends",
        name: "Tendances",
        description: "Les tendances actuelles du design de logo",
        slug: "trends"
      },
      {
        id: "case-studies",
        name: "Études de Cas",
        description: "Analyses détaillées de rebranding",
        slug: "case-studies"
      }
    ]
  }
};

