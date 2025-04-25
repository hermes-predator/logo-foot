
import { borussiaMgladbachLogoPost } from './borussia-mgladbach-logo';
import { bayernMunichLogoPost } from './bayern-munich-logo';
import { dortmundLogoPost } from './dortmund-logo';
import { schalke04LogoPost } from './schalke-04-logo';
import { werderBremenLogoPost } from './werder-bremen-logo';
import { hambourgSVLogoPost } from './hambourg-sv-logo';
import { stuttgartLogoPost } from './stuttgart-logo';

import { algeriaLogoPost } from './algeria-logo';
import { canLogoPost } from './can-logo';

import { almereCityLogoPost } from './almere-city-logo';
import { ajaxLogoPost } from './ajax-logo';
import { cercleBrugesLogoPost } from './cercle-bruges-logo';
import { lausanneSportLogoPost } from './lausanne-sport-logo';

import { ligue1LogoPost } from './ligue1-logo';
import { italianSerieALogoPost } from './italian-serie-a';
import { jupilerProLeagueLogoPost } from './jupiler-pro-league-logo';
import { knvbBekerLogoPost } from './knvb-beker-logo';
import { lilleLogoPost } from './lille-logo';
import { mechelenLogoPost } from './mechelen-logo';
import { moroccoLogoPost } from './morocco-logo';
import { netherlandsLogoPost } from './netherlands-logo';
import { neuchatelXamaxLogoPost } from './neuchatel-xamax-logo';
import { newcastleLogoPost } from './newcastle-logo';
import { newEnglandRevolutionLogoPost } from './new-england-revolution-logo';
import { newYorkCityFcLogoPost } from './new-york-city-fc-logo';
import { newYorkRedBullsLogoPost } from './new-york-red-bulls-logo';
import { niceLogoPost } from './nice-logo';
import { nigeriaLogoPost } from './nigeria-logo';
import { nimesLogoPost } from './nimes-logo';
import { niortLogoPost } from './niort-logo';

// Collection de tous les logos
export const allLogos = [
  // German Clubs
  borussiaMgladbachLogoPost,
  bayernMunichLogoPost,
  dortmundLogoPost,
  schalke04LogoPost,
  werderBremenLogoPost,
  hambourgSVLogoPost,
  stuttgartLogoPost,

  // National Teams
  algeriaLogoPost,
  canLogoPost,
  moroccoLogoPost,
  netherlandsLogoPost,
  nigeriaLogoPost,

  // International Clubs
  almereCityLogoPost,
  ajaxLogoPost,
  cercleBrugesLogoPost,
  lausanneSportLogoPost,
  lilleLogoPost,
  mechelenLogoPost,
  neuchatelXamaxLogoPost,
  newcastleLogoPost,
  newEnglandRevolutionLogoPost,
  newYorkCityFcLogoPost,
  newYorkRedBullsLogoPost,
  niceLogoPost,
  nimesLogoPost,
  niortLogoPost,

  // Competitions
  ligue1LogoPost,
  italianSerieALogoPost,
  jupilerProLeagueLogoPost,
  knvbBekerLogoPost
];

// Export tous les logos sous forme d'une collection (pour résoudre l'erreur d'importation)
export const logoPosts = allLogos;

// Export les groupes de logos spécifiques
export * from './groups/german-clubs';
export * from './groups/french-clubs';
export * from './groups/national-teams';
export * from './groups/other-european-clubs';
export * from './groups/spanish-clubs';
export * from './groups/non-european-clubs';
