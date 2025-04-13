
import { BlogPost } from "../../../../types/blog";

// Import des articles existants de clubs sud-américains
import { bocaJuniorsLogoPost } from '../boca-juniors-logo';
import { riverPlateLogoPost } from '../river-plate-logo';
import { southAmericanClubsPost } from '../south-american-clubs';
import { saoPauloLogoPost } from '../sao-paulo-logo';
import { corinthiansLogoPost } from '../corinthians-logo';

// Regroupement des posts de clubs sud-américains
export const southAmericanClubPosts: BlogPost[] = [
  bocaJuniorsLogoPost,
  riverPlateLogoPost,
  southAmericanClubsPost,
  saoPauloLogoPost,
  corinthiansLogoPost
];
