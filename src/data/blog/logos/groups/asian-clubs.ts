
import { BlogPost } from '../../../../types/blog';

// Import Asian club logo posts
import { alEttifaqLogoPost } from '../al-ettifaq-logo';
import { alShababLogoPost } from '../al-shabab-logo';

// Group Asian club logo posts
export const asianClubPosts: BlogPost[] = [
  alEttifaqLogoPost,
  alShababLogoPost
];

// Export as single post for categorized views
export const asianClubsPost: BlogPost = {
  id: 2500,
  title: "Logos des Clubs Asiatiques: Collection Complète des Écussons et Emblèmes [2024]",
  excerpt: "Découvrez notre collection complète des logos des clubs de football asiatiques en haute qualité. Téléchargez les emblèmes officiels des équipes de la J-League, K-League, CSL et Saudi Pro League.",
  date: "2025-04-14",
  content: "",
  keywords: "logos clubs asiatiques, écussons football asie, emblèmes clubs asiatiques, logos football japonais, logos football coréen, logos clubs chinois, logos football saoudien",
  category: 'logos',
  subCategory: 'non-european-clubs',
  galleryImageId: null
};
