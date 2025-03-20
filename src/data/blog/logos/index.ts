
import { BlogPost } from '../../../types/blog';

// Individual Logo Post Imports
import { ajaxLogoPost } from './ajax-logo';
import { angersLogoPost } from './angers-logo';
import { argentinaLogoPost } from './argentina-logo';
import { arsenalLogoPost } from './arsenal-logo';
import { asRomaLogoPost } from './as-roma-logo';
import { asianClubsPost } from './asian-clubs';
import { astonVillaLogoPost } from './aston-villa-logo';
import { atalantaLogoPost } from './atalanta-logo';
import { atleticoMadridLogoPost } from './atletico-madrid-logo';
import { austriaLogoPost } from './austria-logo';
import { auxerreLogoPost } from './auxerre-logo';
import { barcelonaLogoPost } from './barcelona-logo';
import { bayernMunichLogoPost } from './bayern-munich-logo';
import { belgianClubsPost } from './belgian-clubs';
import { belgiumLogoPost } from './belgium-logo';
import { benficaLogoPost } from './benfica-logo';
import { besiktasLogoPost } from './besiktas-logo';
import { bordeauxLogoPost } from './bordeaux-logo'; // Added import for Bordeaux logo post
import { bournemouthLogoPost } from './bournemouth-logo';
import { brazilLogoPost } from './brazil-logo';
import { brazilianClubsPost } from './brazilian-clubs';
import { brestLogoPost } from './brest-logo';
import { bundesligaLogoPost } from './bundesliga-brand';
import { celticGlasgowLogoPost } from './celtic-glasgow-logo';
import { championsLeagueLogoPost } from './champions-league-logo';
import { chelseaLogoPost } from './chelsea-logo';
import { clermontFootLogoPost } from './clermont-foot-logo';
import { clubHistoryPost } from './club-history';
import { crystalPalaceLogoPost } from './crystal-palace-logo';
import { dortmundLogoPost } from './dortmund-logo';
import { englandLogoPost } from './england-logo';
import { eredivisieLogoPost } from './eredivisie-logo';
import { europaLeagueLogoPost } from './europa-league-logo';
import { evertonLogoPost } from './everton-logo';
import { fenerbahceLogoPost } from './fenerbahce-logo';
import { feyenoordLogoPost } from './feyenoord-logo'; // Added import for Feyenoord logo post
import { fiorentinaLogoPost } from './fiorentina-logo';
import { franceLogoPost } from './france-logo';
import { frenchClubsPost } from './french-clubs';
// Remove or comment out the non-existent import
// import { frenchLeaguesSchemaPost } from './french-leagues-schema';
import { frontCloudPost } from './front-cloud';
import { galatasarayLogoPost } from './galatasaray-logo';
import { germanClubsPost } from './german-clubs';
import { germanyLogoPost } from './germany-logo';
import { glasgowRangersLogoPost } from './glasgow-rangers-logo';
import { interMiamiLogoPost } from './inter-miami-logo';
import { interMilanLogoPost } from './inter-milan-logo';
// Remove or comment out the non-existent import
// import { italianSerieAPost } from './italian-serie-a';
import { italyLogoPost } from './italy-logo';
import { juventusLogoPost } from './juventus-logo';
import { laLigaLogoPost } from './la-liga-logo';
import { lazioLogoPost } from './lazio-logo';
import { lensLogoPost } from './lens-logo';
import { leverkusenLogoPost } from './leverkusen-logo';
import { ligue1LogoPost } from './ligue1-logo';
import { ligue2LogoPost } from './ligue2-logo';
import { lillLogoPost } from './lille-logo'; // Changed from lilleLogoPost to lillLogoPost
import { liverpoolLogoPost } from './liverpool-logo';
import { lorientLogoPost } from './lorient-logo';
import { lyonLogoPost } from './lyon-logo';
import { manchesterCityLogoPost } from './manchester-city-logo';
import { manchesterUnitedLogoPost } from './manchester-united-logo';
import { metzLogoPost } from './metz-logo';
import { milanLogoPost } from './milan-logo';
import { mlsLogoPost } from './mls-logos'; // Changed from mlsLogosPost to mlsLogoPost
import { monacoLogoPost } from './monaco-logo';
import { montpellierLogoPost } from './montpellier-logo';
import { nantesLogoPost } from './nantes-logo';
import { napoliLogoPost } from './napoli-logo';
import { nationalTeamsPost } from './national-teams';
import { netherlandsLogoPost } from './netherlands-logo';
import { newcastleLogoPost } from './newcastle-logo';
import { niceLogoPost } from './nice-logo';
import { omLogoPost } from './om-logo';
import { parisFCLogoPost } from './paris-fc-logo'; // Changed from parisFcLogoPost to parisFCLogoPost
import { portoLogoPost } from './porto-logo';
import { portugueseLogosPost } from './portuguese-clubs'; // Changed from portugueseClubsPost to portugueseLogosPost
import { premierLeagueLogoPost } from './premier-league-design'; // Changed from premierLeagueDesignPost to premierLeagueLogoPost
import { psgLogoPost } from './psg-logo';
import { rbLeipzigLogoPost } from './rb-leipzig-logo';
import { realMadridLogoPost } from './real-madrid-logo';
import { reimsLogoPost } from './reims-logo';
import { rennesLogoPost } from './rennes-logo';
import { saintEtienneLogoPost } from './saint-etienne-logo';
import { serieALogoPost } from './serie-a-logo';
import { southAmericanClubsPost } from './south-american-clubs';
import { spainLogoPost } from './spain-logo';
import { sportingLogoPost } from './sporting-logo';
import { stadeRennaisLogoPost } from './stade-rennais-logo';
import { strasbourgLogoPost } from './strasbourg-logo';
import { tottenhamLogoPost } from './tottenham-logo';
import { toulouseFCLogoPost } from './toulouse-fc-logo'; // Changed from toulouseFcLogoPost to toulouseFCLogoPost
import { toulouseLogoPost } from './toulouse-logo';
import { westHamLogoPost } from './west-ham-logo';
import { winamaxLogoPost } from './winamax-logo';
// Remove or comment out the non-existent import
// import { worldCupPost } from './world-cup';
import { africanClubsPost } from './african-clubs';

// Aggregating all logo posts
export const logoPosts: BlogPost[] = [
  ajaxLogoPost,
  angersLogoPost,
  argentinaLogoPost,
  arsenalLogoPost,
  asRomaLogoPost,
  asianClubsPost,
  astonVillaLogoPost,
  atalantaLogoPost,
  atleticoMadridLogoPost,
  austriaLogoPost,
  auxerreLogoPost,
  barcelonaLogoPost,
  bayernMunichLogoPost,
  belgianClubsPost,
  belgiumLogoPost,
  benficaLogoPost,
  besiktasLogoPost,
  bordeauxLogoPost, // Added Bordeaux logo post to the array
  bournemouthLogoPost,
  brazilLogoPost,
  brazilianClubsPost,
  brestLogoPost,
  bundesligaLogoPost,
  celticGlasgowLogoPost,
  championsLeagueLogoPost,
  chelseaLogoPost,
  clermontFootLogoPost,
  clubHistoryPost,
  crystalPalaceLogoPost,
  dortmundLogoPost,
  englandLogoPost,
  eredivisieLogoPost,
  europaLeagueLogoPost,
  evertonLogoPost,
  fenerbahceLogoPost,
  feyenoordLogoPost, // Added Feyenoord logo post to the array
  fiorentinaLogoPost,
  franceLogoPost,
  frenchClubsPost,
  // Removed frenchLeaguesSchemaPost from array
  frontCloudPost,
  galatasarayLogoPost,
  germanClubsPost,
  germanyLogoPost,
  glasgowRangersLogoPost,
  interMiamiLogoPost,
  interMilanLogoPost,
  // Removed italianSerieAPost from array
  italyLogoPost,
  juventusLogoPost,
  laLigaLogoPost,
  lazioLogoPost,
  lensLogoPost,
  leverkusenLogoPost,
  ligue1LogoPost,
  ligue2LogoPost,
  lillLogoPost, // Changed from lilleLogoPost to lillLogoPost
  liverpoolLogoPost,
  lorientLogoPost,
  lyonLogoPost,
  manchesterCityLogoPost,
  manchesterUnitedLogoPost,
  metzLogoPost,
  milanLogoPost,
  mlsLogoPost, // Changed from mlsLogosPost to mlsLogoPost
  monacoLogoPost,
  montpellierLogoPost,
  nantesLogoPost,
  napoliLogoPost,
  nationalTeamsPost,
  netherlandsLogoPost,
  newcastleLogoPost,
  niceLogoPost,
  omLogoPost,
  parisFCLogoPost, // Changed from parisFcLogoPost to parisFCLogoPost
  portoLogoPost,
  portugueseLogosPost, // Changed from portugueseClubsPost to portugueseLogosPost
  premierLeagueLogoPost, // Changed from premierLeagueDesignPost to premierLeagueLogoPost
  psgLogoPost,
  rbLeipzigLogoPost,
  realMadridLogoPost,
  reimsLogoPost,
  rennesLogoPost,
  saintEtienneLogoPost,
  serieALogoPost,
  southAmericanClubsPost,
  spainLogoPost,
  sportingLogoPost,
  stadeRennaisLogoPost,
  strasbourgLogoPost,
  tottenhamLogoPost,
  toulouseFCLogoPost, // Changed from toulouseFcLogoPost to toulouseFCLogoPost
  toulouseLogoPost,
  westHamLogoPost,
  winamaxLogoPost,
  // Removed worldCupPost from array
  africanClubsPost
];
