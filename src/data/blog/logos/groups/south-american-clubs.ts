
import { BlogPost } from "../../../../types/blog";

// Import des articles existants de clubs sud-américains
import { flamengoLogoPost } from '../flamengo-logo';
import { bocaJuniorsLogoPost } from '../boca-juniors-logo';
import { southAmericanClubsPost } from '../south-american-clubs';

// Regroupement des posts de clubs sud-américains
export const southAmericanClubPosts: BlogPost[] = [
  bocaJuniorsLogoPost,
  flamengoLogoPost,
  southAmericanClubsPost
];
