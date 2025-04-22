import { BlogPost } from '../../../../types/blog';

// Import competition logo posts
import { ballonDorLogoPost } from '../ballon-dor-logo';

// Add D1 Arkema logo post to competitions
import { d1ArkemaLogoPost } from '../d1-arkema-logo';

// Group competition logo posts
export const competitionPosts: BlogPost[] = [
  ballonDorLogoPost,
  d1ArkemaLogoPost,
];

// Export as single post for categorized views
export const competitionPost: BlogPost = {
  id: 2400,
  title: "Logos des Compétitions de Football: Ligue des Champions, Coupe du Monde et Plus [2024]",
  excerpt: "Découvrez notre collection complète des logos des compétitions de football du monde entier. Téléchargez les emblèmes officiels des tournois internationaux et nationaux.",
  date: "2025-04-13",
  content: "",
  keywords: "logos compétitions football, emblèmes tournois foot, logos ligue des champions, logos coupe du monde, logos championnats européens",
  category: 'logos',
  subCategory: 'competition-logos',
  galleryImageId: null
};
