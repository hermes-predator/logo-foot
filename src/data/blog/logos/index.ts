
import { BlogPost } from '../../../types/blog';
import { frontCloudPost } from './front-cloud';
import { clubHistoryPost } from './club-history';
import { nationalTeamsPost } from './national-teams';
import { worldCupLogos } from './world-cup';
import { serieAPost } from './italian-serie-a';
import { portugueseLogosPost } from './portuguese-clubs';
import { frenchClubsPost } from './french-clubs';
import { southAmericanClubsPost } from './south-american-clubs';
import { africanClubsPost } from './african-clubs';
import { germanClubsPost } from './german-clubs';
import { brazilianClubsPost } from './brazilian-clubs';
import { belgianClubsPost } from './belgian-clubs';
import { asianClubsPost } from './asian-clubs';
import { ligue1LogoPost } from './ligue1-logo';
import { premierLeagueLogoPost } from './premier-league-design';
import { bundesligaLogoPost } from './bundesliga-brand';
import { serieALogoPost } from './serie-a-logo';

export const logoPosts: BlogPost[] = [
  frontCloudPost,
  clubHistoryPost,
  nationalTeamsPost,
  worldCupLogos,
  serieAPost,
  portugueseLogosPost,
  frenchClubsPost,
  southAmericanClubsPost,
  africanClubsPost,
  germanClubsPost,
  brazilianClubsPost,
  belgianClubsPost,
  asianClubsPost,
  ligue1LogoPost,
  premierLeagueLogoPost,
  bundesligaLogoPost,
  serieALogoPost
];

// Ajout de logs détaillés pour vérifier que tous les articles sont bien chargés
console.log('Nombre total d\'articles logos:', logoPosts.length);
console.log('Articles logos chargés:', logoPosts.map(post => post.title));
