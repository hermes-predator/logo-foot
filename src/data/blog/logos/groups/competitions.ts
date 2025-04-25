
import { BlogPost } from '../../../../types/blog';
import { championsLeagueLogoPost } from '../champions-league-logo';
// Remove imports for files that don't exist
// import { europeanCupLogoPost } from '../european-cup-logo';
// import { euroLogoPost } from '../euro-logo';
// import { fifaLogoPost } from '../fifa-logo';
// import { ligue1LogoPost } from '../ligue-1-logo';
// import { olympiqueLyonnaisLogoPost } from '../olympique-lyonnais-logo';
import { psgLogoPost } from '../psg-logo';
import { realMadridLogoPost } from '../real-madrid-logo';
import { worldCupLogoPost } from '../world-cup-logo';
import { allsvenskanLogoPost } from '../allsvenskan-logo';

export const competitionPosts: BlogPost[] = [
  championsLeagueLogoPost,
  // Remove references to files that don't exist
  // europeanCupLogoPost,
  // euroLogoPost,
  // fifaLogoPost,
  // ligue1LogoPost,
  // olympiqueLyonnaisLogoPost,
  psgLogoPost,
  realMadridLogoPost,
  worldCupLogoPost,
  allsvenskanLogoPost,
];
