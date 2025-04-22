
import { BlogPost } from '../../../../types/blog';

// Import des articles existants de clubs sud-américains
import { bocaJuniorsLogoPost } from '../boca-juniors-logo';
import { riverPlateLogoPost } from '../river-plate-logo';
import { southAmericanClubsPost } from '../south-american-clubs';
import { velezSarsfieldLogoPost } from '../velez-sarsfield-logo';
import { deportivoCaliLogoPost } from '../deportivo-cali-logo';
import { rosarioCentralLogoPost } from '../rosario-central-logo';
import { racingClubLogoPost } from '../racing-club-logo';
import { argentinosJuniorsLogoPost } from '../argentinos-juniors-logo';
import { godoyCruzLogoPost } from '../godoy-cruz-logo';

// Regroupement des posts de clubs sud-américains
export const southAmericanClubPosts: BlogPost[] = [
  bocaJuniorsLogoPost,
  riverPlateLogoPost,
  southAmericanClubsPost,
  velezSarsfieldLogoPost,
  deportivoCaliLogoPost,
  rosarioCentralLogoPost,
  racingClubLogoPost,
  argentinosJuniorsLogoPost,
  godoyCruzLogoPost
];
