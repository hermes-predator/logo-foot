
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
    subCategories: [
      { id: 'club-logos', name: 'Logos de Clubs' },
      { id: 'national-team-logos', name: 'Logos d\'Équipes Nationales' }
    ]
  },
  players: {
    name: 'Joueurs',
    subCategories: []
  },
  history: {
    name: 'Histoire du Football',
    subCategories: []
  },
  technical: {
    name: 'Techniques de Design',
    subCategories: []
  },
  'pixel-art': {
    name: 'Pixel Art Football',
    subCategories: []
  }
};
