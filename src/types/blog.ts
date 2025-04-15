
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
  readingTime?: number
}

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

export const BLOG_CATEGORIES = {
  logos: {
    name: 'Logos de Football',
    description: 'Découvrez notre collection de logos de football des plus grands clubs et équipes nationales.',
    subCategories: [
      { id: 'club-logos', name: 'Logos de Clubs' },
      { id: 'national-team-logos', name: 'Logos d\'Équipes Nationales' }
    ]
  },
  players: {
    name: 'Joueurs',
    description: 'Analyses et actualités sur les plus grands joueurs de football du monde entier.',
    subCategories: []
  },
  history: {
    name: 'Histoire du Football',
    description: 'Plongez dans l\'histoire fascinante du football et de ses logos emblématiques à travers les époques.',
    subCategories: []
  },
  technical: {
    name: 'Techniques de Design',
    description: 'Guides et astuces pour comprendre et maîtriser les techniques de design de logos de football.',
    subCategories: []
  },
  'pixel-art': {
    name: 'Pixel Art Football',
    description: 'Découvrez l\'art du pixel appliqué aux logos et emblèmes de football.',
    subCategories: []
  }
};
