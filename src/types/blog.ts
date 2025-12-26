
export interface BlogPost {
  id: number,
  slug?: string,  // URL manuelle (ex: "gremio-logo") - si absent, généré depuis le titre
  title: string,
  excerpt: string,
  date: string,
  content: string,
  keywords?: string,
  category: BlogCategory,
  subCategory?: string,
  galleryImageId?: number,
  readingTime?: number,
  previousPostId?: number,
  nextPostId?: number,
  coverImage?: string
}

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

export const BLOG_CATEGORIES = {
  'logos': {
    name: 'Logos de Club',
    description: 'Découvrez notre collection de logos de football des plus grands clubs et équipes nationales.'
  },
  'national-logos': {
    name: 'Logos de Nation', // Updated category name
    description: 'Explorez notre collection des logos et emblèmes des équipes nationales de football.'
  },
  'competition-logos': {
    name: 'Logos de Compétition', // Updated category name
    description: 'Découvrez les logos officiels des plus grandes compétitions de football mondiales.'
  },
  players: {
    name: 'Joueurs',
    description: 'Analyses et actualités sur les plus grands joueurs de football du monde entier.'
  },
  legacy: {
    name: 'Histoire du football',
    description: 'Articles historiques sur les logos et compétitions emblématiques du football à travers les époques.'
  },
  technical: {
    name: 'Techniques',
    description: 'Guides et astuces pour comprendre et maîtriser les techniques de design de logos de football.'
  },
  'pixel-art': {
    name: 'Pixel Art',
    description: 'Découvrez l\'art du pixel appliqué aux logos et emblèmes de football.'
  }
};

