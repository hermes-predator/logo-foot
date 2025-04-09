
import { BlogPost } from '../../../../types/blog';
import { championsLeagueLogoPost } from '../champions-league-logo';
import { europaLeagueLogoPost } from '../europa-league-logo';
import { premierLeagueLogoPost } from '../premier-league-design';
import { serieALogoPost } from '../serie-a-logo';
import { laLigaLogoPost } from '../la-liga-logo';
import { ligue1LogoPost } from '../ligue1-logo';
import { ligue2LogoPost } from '../ligue2-logo';
import { bundesligaLogoPost } from '../bundesliga-brand';
import { faCupLogoPost } from '../fa-cup-logo';
import { coppaItaliaLogoPost } from '../coppa-italia-logo';
import { canLogoPost } from '../can-logo';
import { worldCupLogoPost } from '../world-cup-logo';
import { worldCupPost } from '../world-cup';
import { nationsLeagueLogoPost } from '../nations-league-logo';
import { tropheeDesChampionsLogoPost } from '../trophee-des-champions-logo';
// Le fichier coupe-france-logo n'existe pas dans le dossier logos mais dans history
// Supprimons cette ligne d'import et l'entrée correspondante dans le tableau
// import { coupeFranceLogoPost } from '../coupe-france-logo';
import { championshipLogoPost } from '../championship-logo';
import { mlsLogoPost } from '../mls-logos';
import { chineseSuperLeagueLogoPost } from '../chinese-super-league-logo';
import { saudiProLeagueLogoPost } from '../saudi-pro-league-logo';
import { eredivisieLogoPost } from '../eredivisie-logo';
import { primeiraLigaLogoPost } from '../primeira-liga-championship';
import { frenchLeaguesSchemaPost } from '../french-leagues-schema';
import { d1ArkemaLogoPost } from '../d1-arkema-logo';

// Articles sur les logos des compétitions de football
export const competitionsLogos: BlogPost[] = [
  championsLeagueLogoPost,
  europaLeagueLogoPost,
  premierLeagueLogoPost,
  serieALogoPost,
  laLigaLogoPost,
  ligue1LogoPost,
  ligue2LogoPost,
  bundesligaLogoPost,
  faCupLogoPost,
  coppaItaliaLogoPost,
  canLogoPost,
  worldCupLogoPost,
  worldCupPost,
  nationsLeagueLogoPost,
  tropheeDesChampionsLogoPost,
  // coupeFranceLogoPost, // Supprimé car le fichier n'existe pas dans ce dossier
  championshipLogoPost,
  mlsLogoPost,
  chineseSuperLeagueLogoPost,
  saudiProLeagueLogoPost,
  eredivisieLogoPost,
  primeiraLigaLogoPost,
  frenchLeaguesSchemaPost,
  d1ArkemaLogoPost
];

// Log pour vérification
console.log(`Nombre d'articles sur les logos de compétitions: ${competitionsLogos.length}`);
