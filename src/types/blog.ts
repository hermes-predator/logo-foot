
export interface BlogPost {
  id: number,
  title: string,
  excerpt: string,
  date: string,
  content: string,
  keywords?: string,
  category: BlogCategory,
  subCategory?: string, // Adding this back as optional to maintain backward compatibility
  galleryImageId?: number,
  readingTime?: number,
  previousPostId?: number,
  nextPostId?: number
}

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

export const BLOG_CATEGORIES = {
  logos: {
    name: 'Logos',
    description: 'Découvrez notre collection de logos de football des plus grands clubs et équipes nationales.'
  },
  players: {
    name: 'Joueurs',
    description: 'Analyses et actualités sur les plus grands joueurs de football du monde entier.'
  },
  history: {
    name: 'Histoire',
    description: 'Plongez dans l\'histoire fascinante du football et de ses logos emblématiques à travers les époques.'
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
