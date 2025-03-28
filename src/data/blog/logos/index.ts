
import { BlogPost } from '../../../types/blog';
import { arsenalLogoPost } from './arsenal-logo';
import { barceLonaClubPost } from './barcelona-logo';
import { bayernMunichLogoPost } from './bayern-munich-logo';
import { bundesliga2LogoPost } from './bundesliga-2-brand';
import { bundesligaLogoPost } from './bundesliga-brand';
import { chelseaLogoPost } from './chelsea-logo';
import { dortmundLogoPost } from './dortmund-logo';
import { eintrachtFrankfurtLogoPost } from './eintracht-frankfurt-logo';
import { frenchLeagueSchemaPost } from './french-leagues-schema';
import { frontCloudLogoPost } from './front-cloud';
import { germanClubsPost } from './german-clubs';
import { interMilanLogoPost } from './inter-milan-logo';
import { juventusLogoPost } from './juventus-logo';
import { leedsLogoPost } from './leeds-united-logo';
import { liverpoolLogoPost } from './liverpool-logo';
import { manchesterUnitedLogoPost } from './manchester-united-logo';
import { marseilleLogoPost } from './om-logo';
import { newcastleLogoPost } from './newcastle-logo';
import { parisLogoPost } from './psg-logo';
import { premierLeagueDesignPost } from './premier-league-design';
import { realMadridLogoPost } from './real-madrid-logo';
import { spursLogoPost } from './tottenham-logo';
import { westHamLogoPost } from './west-ham-logo';
import { worldCupPost } from './world-cup';

// Import collections
import { germanClubPosts } from './groups/german-clubs';

// Group all logo posts
export const logoPosts: BlogPost[] = [
  arsenalLogoPost,
  barceLonaClubPost,
  bayernMunichLogoPost,
  bundesliga2LogoPost,
  bundesligaLogoPost,
  chelseaLogoPost,
  dortmundLogoPost,
  eintrachtFrankfurtLogoPost,
  frenchLeagueSchemaPost,
  frontCloudLogoPost,
  germanClubsPost,
  interMilanLogoPost,
  juventusLogoPost,
  leedsLogoPost,
  liverpoolLogoPost,
  manchesterUnitedLogoPost,
  marseilleLogoPost,
  newcastleLogoPost,
  parisLogoPost,
  premierLeagueDesignPost,
  realMadridLogoPost,
  spursLogoPost,
  westHamLogoPost,
  worldCupPost,
  ...germanClubPosts
];
