
import { BlogPost } from '../../../types/blog';
import { arsenalLogoPost } from './arsenal-logo';
import { barcelonaLogoPost } from './barcelona-logo';
import { bayernMunichLogoPost } from './bayern-munich-logo';
import { bundesliga2LogoPost } from './bundesliga-2-brand';
import { bundesligaLogoPost } from './bundesliga-brand';
import { chelseaLogoPost } from './chelsea-logo';
import { dortmundLogoPost } from './dortmund-logo';
import { eintrachtFrankfurtLogoPost } from './eintracht-frankfurt-logo';
import { frenchLeaguesSchemaPost } from './french-leagues-schema';
import { frontCloudPost } from './front-cloud';
import { germanClubsPost } from './german-clubs';
import { interMilanLogoPost } from './inter-milan-logo';
import { juventusLogoPost } from './juventus-logo';
import { leedsUnitedLogoPost } from './leeds-united-logo';
import { liverpoolLogoPost } from './liverpool-logo';
import { manchesterUnitedLogoPost } from './manchester-united-logo';
import { marseilleLogoPost } from './om-logo';
import { newcastleLogoPost } from './newcastle-logo';
import { psgLogoPost } from './psg-logo';
import { premierLeagueLogoPost } from './premier-league-design';
import { realMadridLogoPost } from './real-madrid-logo';
import { spursLogoPost } from './tottenham-logo';
import { westHamLogoPost } from './west-ham-logo';
import { worldCupPost } from './world-cup';

// Import collections
import { germanClubPosts } from './groups/german-clubs';

// Group all logo posts
export const logoPosts: BlogPost[] = [
  arsenalLogoPost,
  barcelonaLogoPost,
  bayernMunichLogoPost,
  bundesliga2LogoPost,
  bundesligaLogoPost,
  chelseaLogoPost,
  dortmundLogoPost,
  eintrachtFrankfurtLogoPost,
  frenchLeaguesSchemaPost,
  frontCloudPost,
  germanClubsPost,
  interMilanLogoPost,
  juventusLogoPost,
  leedsUnitedLogoPost,
  liverpoolLogoPost,
  manchesterUnitedLogoPost,
  marseilleLogoPost,
  newcastleLogoPost,
  psgLogoPost,
  premierLeagueLogoPost,
  realMadridLogoPost,
  spursLogoPost,
  westHamLogoPost,
  worldCupPost,
  ...germanClubPosts
];
