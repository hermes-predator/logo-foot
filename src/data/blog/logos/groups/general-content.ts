
import { BlogPost } from '../../../../types/blog';

// Import uniquement les contenus disponibles
import { frenchClubsPost as frenchClubsOverviewPost } from '../french-clubs';
import { germanClubsPost as germanClubsOverviewPost } from '../german-clubs';
import { winamaxLogoPost } from '../winamax-logo';
import { unibetLogoPost } from '../unibet-logo';
import { bwinLogoPost } from '../bwin-logo';
import { creerLogoFootPost } from '../creer-logo-foot';

// Suppression des imports qui causent des erreurs
// clubHistoryPost, frontCloudPost, belgianClubsPost, portugueseLogosPost,
// footballLogosHistoryPost, footballEmblemsPost, logosFootPdfPost,
// logoMaillotFootPost, ecussonsFootballPost, ecussonsClubFootEuropeenPost,
// blasonsEquipesFootballPost

// Group all general content posts
export const generalContentPosts: BlogPost[] = [
  // clubHistoryPost,
  // frontCloudPost,
  // belgianClubsPost,
  frenchClubsOverviewPost, 
  germanClubsOverviewPost,
  // portugueseLogosPost,
  winamaxLogoPost,
  unibetLogoPost,
  bwinLogoPost,
  // footballLogosHistoryPost,
  // footballEmblemsPost,
  creerLogoFootPost
  // logosFootPdfPost,
  // logoMaillotFootPost - correction de l'erreur d'export
  // ecussonsFootballPost,
  // ecussonsClubFootEuropeenPost,
  // blasonsEquipesFootballPost
];
