
import { BlogPost } from '../../../../types/blog';

// Import general content posts
import { clubHistoryPost } from '../club-history';
import { belgianClubsPost } from '../belgian-clubs';
import { frenchClubsPost as frenchClubsOverviewPost } from '../french-clubs';
import { germanClubsPost as germanClubsOverviewPost } from '../german-clubs';
import { portugueseLogosPost } from '../portuguese-clubs';
import { winamaxLogoPost } from '../winamax-logo';
import { unibetLogoPost } from '../unibet-logo';
import { bwinLogoPost } from '../bwin-logo';
// Remove footballLogosHistoryPost from this file
import { logosFootPdfPost } from '../1001-logos-foot-pdf';
// Supprimé l'import de logoMaillotFootPost car il est maintenant dans le répertoire technique
import { ecussonsFootballPost } from '../ecussons-football';
import { ecussonsClubFootEuropeenPost } from '../ecussons-club-foot-europeen';
import { blasonsEquipesFootballPost } from '../blasons-equipes-football';

// Group all general content posts
export const generalContentPosts: BlogPost[] = [
  clubHistoryPost,
  belgianClubsPost,
  frenchClubsOverviewPost, 
  germanClubsOverviewPost,
  portugueseLogosPost,
  winamaxLogoPost,
  unibetLogoPost,
  bwinLogoPost,
  // Remove footballLogosHistoryPost from this array
  logosFootPdfPost,
  // Supprimé logoMaillotFootPost de cet array
  ecussonsFootballPost,
  ecussonsClubFootEuropeenPost,
  blasonsEquipesFootballPost
];
