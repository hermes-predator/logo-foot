
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
  'club-logos': {
    name: 'Logos de clubs',
    description: 'Découvrez notre collection de logos de football des plus grands clubs du monde entier.'
  },
  'national-logos': {
    name: 'Logos de Nations',
    description: 'Explorez les emblèmes des équipes nationales de football et leur symbolisme.'
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
