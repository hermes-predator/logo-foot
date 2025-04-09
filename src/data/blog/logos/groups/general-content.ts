
import { BlogPost } from '../../../../types/blog';

// Import general content posts
import { clubHistoryPost } from '../club-history';
import { frontCloudPost } from '../front-cloud';
import { belgianClubsPost } from '../belgian-clubs';
import { frenchClubsPost as frenchClubsOverviewPost } from '../french-clubs';
import { germanClubsPost as germanClubsOverviewPost } from '../german-clubs';
import { portugueseLogosPost } from '../portuguese-clubs';
import { winamaxLogoPost } from '../winamax-logo';
import { unibetLogoPost } from '../unibet-logo';
import { bwinLogoPost } from '../bwin-logo';
import { footballLogosHistoryPost } from '../football-logos-history';
import { footballEmblemsPost } from '../football-emblems';
import { creerLogoFootPost } from '../creer-logo-foot';
import { logosFootPdfPost } from '../1001-logos-foot-pdf';
import { logoMaillotFootPost } from '../logo-maillot-foot';
import { d1ArkemaPixelArtPost } from '../d1-arkema-pixel-art';

// Group all general content posts
export const generalContentPosts: BlogPost[] = [
  clubHistoryPost,
  frontCloudPost,
  belgianClubsPost,
  frenchClubsOverviewPost, 
  germanClubsOverviewPost,
  portugueseLogosPost,
  winamaxLogoPost,
  unibetLogoPost,
  bwinLogoPost,
  footballLogosHistoryPost,
  footballEmblemsPost,
  creerLogoFootPost,
  logosFootPdfPost,
  logoMaillotFootPost,
  d1ArkemaPixelArtPost
];
