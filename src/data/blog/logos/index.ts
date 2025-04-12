
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
import { ancienLogoOmPost } from './ancien-logo-om';
import { omLogoPost } from './om-logo';
import { westHamLogoPost } from './west-ham-logo';
import { westBromwichLogoPost } from './west-bromwich-logo';
import { wolfsburgLogoPost } from './wolfsburg-logo';
import { villarrealCfLogoPost } from './villarreal-cf-logo';
import { valenciennesLogoPost } from './valenciennes-logo';
import { watfordLogoPost } from './watford-logo';
import { wolverhamptonLogoPost } from './wolverhampton-logo';
import { realMadridLogoPost } from './real-madrid-logo';
import { cesenaLogoPost } from './cesena-logo';
import { cosenzaLogoPost } from './cosenza-logo';
import { cittadellaLogoPost } from './cittadella-logo';
import { reggianaLogoPost } from './reggiana-logo';
import { saudiFootballClubLogosPost } from './saudi-football-club-logos';
import { ligaMxLogoPost } from './liga-mx-logo';
import { hajdukSplitLogoPost } from './hajduk-split-logo';
import { tacaDePortugalLogoPost } from './taca-de-portugal-logo';
import { ballonDorLogoPost } from './ballon-dor-logo';
import { cadizLogoPost } from './cadiz-logo';
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

// Fonction utilitaire pour vérifier les doublons dans la liste des articles
const checkForDuplicates = (posts: BlogPost[]) => {
  const seenIds = new Set<number>();
  const duplicates: number[] = [];
  
  posts.forEach(post => {
    if (seenIds.has(post.id)) {
      duplicates.push(post.id);
    } else {
      seenIds.add(post.id);
    }
  });
  
  if (duplicates.length > 0) {
    console.warn(`⚠️ Dans logoPosts, ${duplicates.length} doublons détectés: IDs ${duplicates.join(', ')}`);
  }
  
  return duplicates.length === 0;
};

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
  ancienLogoOmPost,
  omLogoPost,
  realMadridLogoPost,
  cesenaLogoPost,
  cosenzaLogoPost,
  cittadellaLogoPost,
  reggianaLogoPost,
  saudiFootballClubLogosPost,
  ligaMxLogoPost,
  hajdukSplitLogoPost,
  tacaDePortugalLogoPost,
  ballonDorLogoPost,
  cadizLogoPost,
  pixelArtPsgLogoPost,
  dinamoTbilisiLogoPost,
  maccabiTelAvivLogoPost,
  rouenLogoPost,
  usBoulogneLogoPost,
  stadeBriochinLogoPost,
  commentCreerLogoFootballPost,
  avranchesLogoPost,
  footballLogosHistoryPost
  // REMARQUE: Les logo posts spécifiques des clubs anglais sont déjà inclus via englishClubPosts
  // Éviter d'ajouter ici westHamLogoPost, westBromwichLogoPost, watfordLogoPost, wolverhamptonLogoPost
  // middlesbroughLogoPost, blackburnRoversLogoPost, derbyCountyLogoPost, millwallLogoPost
];

// Vérifier les doublons
checkForDuplicates(logoPosts);
