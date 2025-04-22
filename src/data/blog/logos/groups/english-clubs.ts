
import { BlogPost } from '../../../../types/blog';

// Import des articles sur les logos des clubs anglais
import { arsenalLogoPost } from '../arsenal-logo';
import { astonVillaLogoPost } from '../aston-villa-logo';
import { barnsleyLogoPost } from '../barnsley-logo';
import { birminghamCityLogoPost } from '../birmingham-city-logo';
import { boltonWanderersLogoPost } from '../bolton-wanderers-logo';
import { bournemouthLogoPost } from '../bournemouth-logo';
import { brentfordLogoPost } from '../brentford-logo';
import { brightonLogoPost } from '../brighton-logo';
import { burnleyLogoPost } from '../burnley-logo';
import { charltonAthleticLogoPost } from '../charlton-athletic-logo';
import { chelseaLogoPost } from '../chelsea-logo';
import { crystalPalaceLogoPost } from '../crystal-palace-logo';
import { evertonLogoPost } from '../everton-logo';
// import { fulhamLogoPost } from '../fulham-logo';
import { huddersfieldTownLogoPost } from '../huddersfield-town-logo';
import { leedsUnitedLogoPost } from '../leeds-united-logo';
import { leicesterLogoPost } from '../leicester-logo';
import { liverpoolLogoPost } from '../liverpool-logo';
import { manchesterCityLogoPost } from '../manchester-city-logo';
import { manchesterUnitedLogoPost } from '../manchester-united-logo';
import { newcastleLogoPost } from '../newcastle-logo';
// import { nottinghamForestLogoPost } from '../nottingham-forest-logo';
import { norwichLogoPost } from '../norwich-logo';
import { queensParkRangersLogoPost } from '../queens-park-rangers-logo';
import { readingFcLogoPost } from '../reading-fc-logo';
import { rotherhamUnitedLogoPost } from '../rotherham-united-logo';
import { stockportCountyLogoPost } from '../stockport-county-logo';
import { southamptonLogoPost } from '../southampton-logo';
import { tottenhamLogoPost } from '../tottenham-logo';
import { westHamLogoPost } from '../west-ham-logo';
import { westBromwichLogoPost } from '../west-bromwich-logo';
import { wiganAthleticLogoPost } from '../wigan-athletic-logo';
import { wolverhamptonLogoPost } from '../wolverhampton-logo';
// Suppression de l'import du watfordLogoPost pour éviter les doublons
// import { watfordLogoPost } from '../watford-logo';
import { sheffieldUnitedLogoPost } from '../sheffield-united-logo';
import { lutonTownLogoPost } from '../luton-town-logo';
import { ipswichTownLogoPost } from '../ipswich-town-logo';
import { portsmouthLogoPost } from '../portsmouth-logo';
import { millwallLogoPost } from '../millwall-logo';
import { blackburnRoversLogoPost } from '../blackburn-rovers-logo';
import { derbyCountyLogoPost } from '../derby-county-logo';
import { middlesbroughLogoPost } from '../middlesbrough-logo';
import { bristolCityLogoPost } from '../bristol-city-logo';
import { coventryCityLogoPost } from '../coventry-city-logo';
import { cardiffCityLogoPost } from '../cardiff-city-logo';
import { swanseaCityLogoPost } from '../swansea-city-logo';
import { hullCityLogoPost } from '../hull-city-logo';
import { stokeCityLogoPost } from '../stoke-city-logo';
import { sunderlandLogoPost } from '../sunderland-logo';
import { oxfordUnitedLogoPost } from '../oxford-united-logo';
import { prestonNorthEndLogoPost } from '../preston-north-end-logo';
import { wycombeWanderersLogoPost } from '../wycombe-wanderers-logo';
import { wrexhamLogoPost } from '../wrexham-logo';
// Remove any duplicate import for queensParkRangersLogoPost if it exists
import { stevenageLogoPost } from '../stevenage-logo';
// Supprimé l'import en doublon de burnleyLogoPost
// Add import for Burton Albion logo
import { burtonAlbionLogoPost } from '../burton-albion-logo';
import { cambridgeUnitedLogoPost } from '../cambridge-united-logo';
import { morecambeLogoPost } from '../morecambe-logo';
import { fleetwoodTownLogoPost } from '../fleetwood-town-logo';
import { portValeLogoPost } from '../port-vale-logo';
import { colchesterUnitedLogoPost } from '../colchester-united-logo';
import { tranmereRoversLogoPost } from '../tranmere-rovers-logo';
import { doncasterRoversLogoPost } from '../doncaster-rovers-logo';
import { crawleyTownLogoPost } from '../crawley-town-logo';
import { harrogateTownLogoPost } from '../harrogate-town-logo';

import { walsallLogoPost } from '../walsall-logo';
import { torquayUnitedLogoPost } from '../torquay-united-logo';

export const englishClubPosts: BlogPost[] = [
  arsenalLogoPost,
  astonVillaLogoPost,
  barnsleyLogoPost,
  birminghamCityLogoPost,
  boltonWanderersLogoPost,
  bournemouthLogoPost,
  brentfordLogoPost,
  brightonLogoPost,
  burnleyLogoPost,
  charltonAthleticLogoPost,
  chelseaLogoPost,
  crystalPalaceLogoPost,
  evertonLogoPost,
  huddersfieldTownLogoPost,
  leedsUnitedLogoPost,
  leicesterLogoPost,
  liverpoolLogoPost,
  manchesterCityLogoPost,
  manchesterUnitedLogoPost,
  newcastleLogoPost,
  norwichLogoPost,
  queensParkRangersLogoPost,
  readingFcLogoPost,
  rotherhamUnitedLogoPost,
  stockportCountyLogoPost,
  southamptonLogoPost,
  tottenhamLogoPost,
  westHamLogoPost,
  westBromwichLogoPost,
  wiganAthleticLogoPost,
  wolverhamptonLogoPost,
  // Suppression du watfordLogoPost de cette liste pour éviter les doublons
  sheffieldUnitedLogoPost,
  lutonTownLogoPost,
  ipswichTownLogoPost,
  portsmouthLogoPost,
  millwallLogoPost,
  blackburnRoversLogoPost,
  derbyCountyLogoPost,
  middlesbroughLogoPost,
  bristolCityLogoPost,
  coventryCityLogoPost,
  cardiffCityLogoPost,
  swanseaCityLogoPost,
  hullCityLogoPost,
  stokeCityLogoPost,
  sunderlandLogoPost,
  oxfordUnitedLogoPost,
  prestonNorthEndLogoPost,
  wycombeWanderersLogoPost,
  wrexhamLogoPost,
  stevenageLogoPost,
  cambridgeUnitedLogoPost,
  morecambeLogoPost,
  burtonAlbionLogoPost,
  fleetwoodTownLogoPost,
  portValeLogoPost,
  colchesterUnitedLogoPost,
  doncasterRoversLogoPost,
  tranmereRoversLogoPost,
  crawleyTownLogoPost,
  harrogateTownLogoPost,
  walsallLogoPost,
  torquayUnitedLogoPost
];
