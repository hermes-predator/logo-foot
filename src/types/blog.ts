
// Adding the featuredImage property to the BlogPost interface

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  category: string;
  subCategory?: string;
  author?: string;
  tags?: string[];
  featuredImage?: string;
  galleryImageId?: string;
}

export const BLOG_CATEGORIES = {
  'logos': {
    name: 'Logos',
    description: 'Articles sur les logos de football',
    icon: 'Image',
  },
  'history': {
    name: 'Histoire',
    description: 'Histoire des logos et clubs de football',
    icon: 'History',
  },
  'technical': {
    name: 'Technique',
    description: 'Guides techniques sur les logos',
    icon: 'Settings',
  },
  'analysis': {
    name: 'Analyses',
    description: 'Analyses de logos et de design',
    icon: 'BarChart',
  },
  'pixel-art': {
    name: 'Pixel Art',
    description: 'Logos en pixel art',
    icon: 'Grid',
  },
  'competition-logos': {
    name: 'Compétitions',
    description: 'Logos des compétitions de football',
    icon: 'Trophy',
  },
  'legacy': {
    name: 'Archive',
    description: 'Articles archivés',
    icon: 'Archive',
  },
};
