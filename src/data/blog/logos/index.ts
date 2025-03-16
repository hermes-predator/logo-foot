
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
import { psgLogoPost } from './psg-logo';
import { omLogoPost } from './om-logo';
import { mlsLogoPost } from './mls-logos';
import { lensLogoPost } from './lens-logo';
import { monacoLogoPost } from './monaco-logo';
import { rennesLogoPost } from './rennes-logo';
import { lillLogoPost } from './lille-logo';
import { lyonLogoPost } from './lyon-logo';
import { niceLogoPost } from './nice-logo';
import { nantesLogoPost } from './nantes-logo';
import { reimsLogoPost } from './reims-logo';
import { brestLogoPost } from './brest-logo';
import { realMadridLogoPost } from './real-madrid-logo';
import { barcelonaLogoPost } from './barcelona-logo';
import { liverpoolLogoPost } from './liverpool-logo';
import { manchesterCityLogoPost } from './manchester-city-logo';
import { bayernMunichLogoPost } from './bayern-munich-logo';
import { dortmundLogoPost } from './dortmund-logo';
import { juventusLogoPost } from './juventus-logo';
import { toulouseLogoPost } from './toulouse-logo';
import { milanLogoPost } from './milan-logo';
import { interMilanLogoPost } from './inter-milan-logo';
import { chelseaLogoPost } from './chelsea-logo';
import { saintEtienneLogoPost } from './saint-etienne-logo';
import { arsenalLogoPost } from './arsenal-logo';
import { newcastleLogoPost } from './newcastle-logo';
import { atalantaLogoPost } from './atalanta-logo';
import { tottenhamLogoPost } from './tottenham-logo';

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
  serieALogoPost,
  psgLogoPost,
  omLogoPost,
  mlsLogoPost,
  lensLogoPost,
  monacoLogoPost,
  rennesLogoPost,
  lillLogoPost,
  lyonLogoPost,
  niceLogoPost,
  nantesLogoPost,
  reimsLogoPost,
  brestLogoPost,
  realMadridLogoPost,
  barcelonaLogoPost,
  liverpoolLogoPost,
  manchesterCityLogoPost,
  bayernMunichLogoPost,
  dortmundLogoPost,
  juventusLogoPost,
  toulouseLogoPost,
  milanLogoPost,
  interMilanLogoPost,
  chelseaLogoPost,
  saintEtienneLogoPost,
  arsenalLogoPost,
  newcastleLogoPost,
  atalantaLogoPost,
  tottenhamLogoPost
];

// Logs détaillés pour le débogage
console.log('************ DEBUG LOGS ARTICLES ************');
console.log('Nombre total d\'articles logos:', logoPosts.length);
console.log('Liste complète des articles:', logoPosts.map((post, index) => ({
  index,
  id: post.id,
  title: post.title,
  date: post.date
})));
console.log('******************************************');
