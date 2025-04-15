
import { BlogPost } from "../../../../types/blog";

// Import des articles existants de clubs sud-américains
import { bocaJuniorsLogoPost } from '../boca-juniors-logo';
import { riverPlateLogoPost } from '../river-plate-logo';
import { southAmericanClubsPost } from '../south-american-clubs';
import { velezSarsfieldLogoPost } from '../velez-sarsfield-logo';
import { deportivoCaliLogoPost } from '../deportivo-cali-logo';

// Regroupement des posts de clubs sud-américains
export const southAmericanClubPosts: BlogPost[] = [
  bocaJuniorsLogoPost,
  riverPlateLogoPost,
  southAmericanClubsPost,
  velezSarsfieldLogoPost,
  deportivoCaliLogoPost
];

