import { BlogPost } from '../../../types/blog';
import { africanaClubPosts } from './groups/african-clubs';
import { asianClubPosts } from './groups/asian-clubs';
import { brazilianClubPosts } from './groups/brazilian-clubs';
import { competitionPosts } from './groups/competitions';
import { englishClubPosts } from './groups/english-clubs';
import { frenchClubPosts } from './groups/french-clubs';
import { generalContentPosts } from './groups/general-content';
import { germanClubPosts } from './groups/german-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { nationalTeamPosts } from './groups/national-teams';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { portugueseClubPosts } from './groups/portuguese-clubs';
import { southAmericanClubPosts } from './groups/south-american-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
import { etoileRougeBelgradeLogoPost } from './etoile-rouge-belgrade-logo';
import { psgUltrasPost } from './psg-ultras';
import { omUltrasPost } from './om-ultras';
// Remove the direct import and comment it out
// import { ancienLogoOmPost } from './ancien-logo-om';
import { omLogoPost } from './om-logo';
import { westHamLogoPost } from './west-ham-logo';
import { westBromwichLogoPost } from './west-bromwich-logo';
import { wolfsburgLogoPost } from './wolfsburg-logo';
import { villarrealCfLogoPost } from './villarreal-cf-logo';
import { valenciennesLogoPost } from './valenciennes-logo';
import { watfordLogoPost } from './watford-logo';
import { wiganAthleticLogoPost } from './wigan-athletic-logo';
import { wolverhamptonLogoPost } from './wolverhampton-logo';
import { realMadridLogoPost } from './real-madrid-logo';
import { cesenaLogoPost } from './cesena-logo';
import { cosenzaLogoPost } from './cosenza-logo';
import { cittadellaLogoPost } from './cittadella-logo';
import { reggianaLogoPost } from './reggiana-logo';
import { saudiFootballClubLogosPost } from './saudi-football-club-logos';
import { ligaMxLogoPost } from './liga-mx-logo';
import { hajdukSplitLogoPost } from './hajduk-split-logo';
// Removing direct import of tacaDePortugalLogoPost since it's already in competitionPosts
// import { tacaDePortugalLogoPost } from './taca-de-portugal-logo';
// Suppression de l'import direct de cadizLogoPost car il est déjà inclus via spanishClubPosts
import { pixelArtPsgLogoPost } from './pixel-art-psg-logo';
import { dinamoTbilisiLogoPost } from './dinamo-tbilisi-logo';
import { maccabiTelAvivLogoPost } from './maccabi-tel-aviv-logo';
import { rouenLogoPost } from './rouen-logo';
import { usBoulogneLogoPost } from './us-boulogne-logo';
import { stadeBriochinLogoPost } from './stade-briochin-logo';
import { commentCreerLogoFootballPost } from './comment-creer-logo-football';
import { avranchesLogoPost } from './avranches-logo';
import { footballLogosHistoryPost } from './football-logos-history';
import { middlesbroughLogoPost } from './middlesbrough-logo';
import { blackburnRoversLogoPost } from './blackburn-rovers-logo';
import { derbyCountyLogoPost } from './derby-county-logo';
import { millwallLogoPost } from './millwall-logo';
import { boltonWanderersLogoPost } from './bolton-wanderers-logo';
import { wycombeWanderersLogoPost } from './wycombe-wanderers-logo';
import { tigresUanlLogoPost } from './tigres-uanl-logo';
import { ballonDorLogoPost } from './ballon-dor-logo';
import { louisvilleCityLogoPost } from './louisville-city-logo';
// Remove the direct import of sacramentoRepublicLogoPost since it's already in nonEuropeanClubPosts
// import { sacramentoRepublicLogoPost } from './sacramento-republic-logo';
// Remove the direct import of alEttifaqLogoPost since it's already included in asianClubPosts
// import { alEttifaqLogoPost } from './al-ettifaq-logo';
// Remove the direct import of botafogoLogoPost since it's already included in brazilianClubPosts
// import { botafogoLogoPost } from './botafogo-logo';
// Suppression de l'import direct de burtonAlbionLogoPost pour éviter la duplication
// import { burtonAlbionLogoPost } from './burton-albion-logo';
import { newEnglandRevolutionLogoPost } from './new-england-revolution-logo';
import { fcDallasLogoPost } from './fc-dallas-logo';
import { austinFcLogoPost } from './austin-fc-logo';
// Remove direct import of houstonDynamoLogoPost since it's already in nonEuropeanClubPosts
// import { houstonDynamoLogoPost } from './houston-dynamo-logo';
import { pecZwolleLogoPost } from './pec-zwolle-logo';
import { rkcWaalwijkLogoPost } from './rkc-waalwijk-logo';
import { nacBredaLogoPost } from './nac-breda-logo';
import { willemIiLogoPost } from './willem-ii-logo';
import { almereCityLogoPost } from './almere-city-logo';
import { westerloLogoPost } from './westerlo-logo';

export const logoPosts: BlogPost[] = [
  ...africanaClubPosts,
  ...asianClubPosts,
  ...brazilianClubPosts,
  ...competitionPosts,
  ...englishClubPosts,
  ...frenchClubPosts,
  ...generalContentPosts,
  ...germanClubPosts,
  ...italianClubPosts,
  ...nationalTeamPosts,
  ...nonEuropeanClubPosts,
  ...otherEuropeanClubPosts,
  ...portugueseClubPosts,
  ...southAmericanClubPosts,
  ...spanishClubPosts,
  etoileRougeBelgradeLogoPost,
  psgUltrasPost,
  omUltrasPost,
  // Remove direct post reference
  // ancienLogoOmPost,
  omLogoPost,
  westHamLogoPost,
  westBromwichLogoPost,
  wolfsburgLogoPost,
  villarrealCfLogoPost,
  valenciennesLogoPost,
  watfordLogoPost,
  wiganAthleticLogoPost,
  wolverhamptonLogoPost,
  realMadridLogoPost,
  cesenaLogoPost,
  cosenzaLogoPost,
  cittadellaLogoPost,
  reggianaLogoPost,
  saudiFootballClubLogosPost,
  ligaMxLogoPost,
  hajdukSplitLogoPost,
  // Removed direct reference to tacaDePortugalLogoPost since it's included in competitionPosts
  ballonDorLogoPost,
  // Suppression de cadizLogoPost qui est déjà inclus via spanishClubPosts
  pixelArtPsgLogoPost, // Keep this as it's the primary location for this post
  dinamoTbilisiLogoPost,
  maccabiTelAvivLogoPost,
  rouenLogoPost,
  usBoulogneLogoPost,
  stadeBriochinLogoPost,
  commentCreerLogoFootballPost,
  avranchesLogoPost,
  footballLogosHistoryPost,
  middlesbroughLogoPost,
  blackburnRoversLogoPost,
  derbyCountyLogoPost,
  millwallLogoPost,
  boltonWanderersLogoPost,
  wycombeWanderersLogoPost,
  tigresUanlLogoPost,
  louisvilleCityLogoPost,
  // Remove sacramentoRepublicLogoPost from direct inclusion since it's already in nonEuropeanClubPosts
  // sacramentoRepublicLogoPost
  // Remove alEttifaqLogoPost from direct inclusion since it's already in asianClubPosts
  // alEttifaqLogoPost
  // Remove botafogoLogoPost from direct inclusion since it's already in brazilianClubPosts
  // botafogoLogoPost
  // Suppression de burtonAlbionLogoPost de l'inclusion directe car il est déjà inclus via englishClubPosts
  // burtonAlbionLogoPost
  newEnglandRevolutionLogoPost,
  fcDallasLogoPost,
  austinFcLogoPost,
  // Remove direct inclusion of houstonDynamoLogoPost since it's already in nonEuropeanClubPosts
  // houstonDynamoLogoPost
  pecZwolleLogoPost,
  rkcWaalwijkLogoPost,
  nacBredaLogoPost,
  willemIiLogoPost,
  almereCityLogoPost,
  westerloLogoPost,
];
