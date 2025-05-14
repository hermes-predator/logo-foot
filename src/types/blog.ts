
export interface BlogPost {
  id: number,
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
  nextPostId?: number
}

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

export const BLOG_CATEGORIES = {
  'logos': {
    name: 'Logos de Club',
    description: 'Découvrez notre collection de logos de football des plus grands clubs et équipes nationales.'
  },
  'history': {
    name: 'Histoire',
    description: 'Plongez dans l\'histoire fascinante des logos et emblèmes de football à travers les époques.'
  },
  'national-logos': {
    name: 'Logos de Nation',
    description: 'Explorez notre collection des logos et emblèmes des équipes nationales de football.'
  },
  'competition-logos': {
    name: 'Logos de Compétition',
    description: 'Découvrez les logos officiels des plus grandes compétitions de football mondiales.'
  },
  'analysis': {
    name: 'Analyses',
    description: 'Analyses détaillées et actualités sur les joueurs et clubs de football.'
  },
  'players': {
    name: 'Joueurs',
    description: 'Analyses et actualités sur les plus grands joueurs de football du monde entier.'
  },
  'legacy': {
    name: 'Histoire du football',
    description: 'Articles historiques sur les logos et compétitions emblématiques du football à travers les époques.'
  },
  'technical': {
    name: 'Techniques',
    description: 'Guides et astuces pour comprendre et maîtriser les techniques de design de logos de football.'
  },
  'pixel-art': {
    name: 'Pixel Art',
    description: 'Découvrez l\'art du pixel appliqué aux logos et emblèmes de football.'
  }
};
