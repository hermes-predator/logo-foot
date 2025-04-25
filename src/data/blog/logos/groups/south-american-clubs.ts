
import { BlogPost } from '../../../../types/blog';

// Import des articles existants de clubs sud-américains
import { bocaJuniorsLogoPost } from '../boca-juniors-logo';
import { riverPlateLogoPost } from '../river-plate-logo';
import { velezSarsfieldLogoPost } from '../velez-sarsfield-logo';
import { deportivoCaliLogoPost } from '../deportivo-cali-logo';
import { rosarioCentralLogoPost } from '../rosario-central-logo';
import { racingClubLogoPost } from '../racing-club-logo';
import { argentinosJuniorsLogoPost } from '../argentinos-juniors-logo';
import { godoyCruzLogoPost } from '../godoy-cruz-logo';
// We'll remove this import to avoid duplication - it will be added manually at the end
// import { southAmericanClubsPost } from '../south-american-clubs';

// Regroupement des posts de clubs sud-américains, sans l'article général
export const southAmericanClubPosts: BlogPost[] = [
  bocaJuniorsLogoPost,
  riverPlateLogoPost,
  velezSarsfieldLogoPost,
  deportivoCaliLogoPost,
  rosarioCentralLogoPost,
  racingClubLogoPost,
  argentinosJuniorsLogoPost,
  godoyCruzLogoPost
  // Remove the general article from the group - it will be added separately
  // southAmericanClubsPost
];
