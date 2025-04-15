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
  logos: {
    name: 'Logos',
    description: 'Découvrez notre collection de logos de football des plus grands clubs et équipes nationales.',
    subCategories: [
      { id: 'club-logos', name: 'Logos de Clubs' },
      { id: 'national-team-logos', name: 'Logos d\'Équipes Nationales' },
      { id: 'competition-logos', name: 'Logos de Compétitions' },
      { id: 'historical-logos', name: 'Logos Historiques' },
      { id: 'regional-logos', name: 'Logos par Région' }
    ]
  },
  players: {
    name: 'Joueurs',
    description: 'Analyses et actualités sur les plus grands joueurs de football du monde entier.',
    subCategories: [
      { id: 'player-profiles', name: 'Profils de Joueurs' },
      { id: 'player-stats', name: 'Statistiques' },
      { id: 'player-transfers', name: 'Transferts' }
    ]
  },
  history: {
    name: 'Histoire',
    description: 'Plongez dans l\'histoire fascinante du football et de ses logos emblématiques à travers les époques.',
    subCategories: [
      { id: 'club-history', name: 'Histoire des Clubs' },
      { id: 'competition-history', name: 'Histoire des Compétitions' },
      { id: 'vintage-logos', name: 'Logos Vintage' }
    ]
  },
  technical: {
    name: 'Techniques de Design',
    description: 'Guides et astuces pour comprendre et maîtriser les techniques de design de logos de football.',
    subCategories: [
      { id: 'design-tutorials', name: 'Tutoriels de Design' },
      { id: 'software-guides', name: 'Guides Logiciels' },
      { id: 'design-principles', name: 'Principes de Design' }
    ]
  },
  'pixel-art': {
    name: 'Pixel Art',
    description: 'Découvrez l\'art du pixel appliqué aux logos et emblèmes de football.',
    subCategories: [
      { id: 'pixel-tutorials', name: 'Tutoriels Pixel Art' },
      { id: 'pixel-club-logos', name: 'Logos de Clubs en Pixel' },
      { id: 'pixel-jerseys', name: 'Maillots en Pixel Art' }
    ]
  }
};
