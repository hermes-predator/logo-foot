
import { BlogPost } from '../../../../types/blog';

// Import English club logo posts
import { arsenalLogoPost } from '../arsenal-logo';
import { astonVillaLogoPost } from '../aston-villa-logo';
import { bournemouthLogoPost } from '../bournemouth-logo';
import { brentfordLogoPost } from '../brentford-logo';
import { brightonLogoPost } from '../brighton-logo';
import { bristolCityLogoPost } from '../bristol-city-logo';
import { burnleyLogoPost } from '../burnley-logo';
import { cardiffCityLogoPost } from '../cardiff-city-logo';
import { chelseaLogoPost } from '../chelsea-logo';
import { coventryCityLogoPost } from '../coventry-city-logo';
import { crystalPalaceLogoPost } from '../crystal-palace-logo';
import { evertonLogoPost } from '../everton-logo';
import { hullCityLogoPost } from '../hull-city-logo';
import { ipswichTownLogoPost } from '../ipswich-town-logo';
import { leedsUnitedLogoPost } from '../leeds-united-logo';
import { leicesterLogoPost } from '../leicester-logo';
import { liverpoolLogoPost } from '../liverpool-logo';
import { lutonTownLogoPost } from '../luton-town-logo';
import { manchesterCityLogoPost } from '../manchester-city-logo';
import { manchesterUnitedLogoPost } from '../manchester-united-logo';
import { newcastleLogoPost } from '../newcastle-logo';
import { norwichLogoPost } from '../norwich-logo';
import { sheffieldUnitedLogoPost } from '../sheffield-united-logo';
import { southamptonLogoPost } from '../southampton-logo';
import { stokeCityLogoPost } from '../stoke-city-logo';
import { sunderlandLogoPost } from '../sunderland-logo';
import { swanseaCityLogoPost } from '../swansea-city-logo';
import { tottenhamLogoPost } from '../tottenham-logo';
import { watfordLogoPost } from '../watford-logo';
import { westBromwichLogoPost } from '../west-bromwich-logo';
import { westHamLogoPost } from '../west-ham-logo';
import { wolverhamptonLogoPost } from '../wolverhampton-logo';

// Imports des nouveaux posts (on s'assure qu'ils ne sont pas importés deux fois)
import { middlesbroughLogoPost } from '../middlesbrough-logo';
import { blackburnRoversLogoPost } from '../blackburn-rovers-logo';
import { derbyCountyLogoPost } from '../derby-county-logo';
import { millwallLogoPost } from '../millwall-logo';

// Fonction utilitaire pour vérifier les doublons
const verifyUniqueIds = () => {
  const postIds = new Set<number>();
  const duplicates: {id: number, post: BlogPost}[] = [];
  
  englishClubPosts.forEach(post => {
    if (postIds.has(post.id)) {
      duplicates.push({id: post.id, post});
    } else {
      postIds.add(post.id);
    }
  });
  
  if (duplicates.length > 0) {
    console.warn('⚠️ Doublons détectés dans les clubs anglais:');
    duplicates.forEach(dup => {
      console.warn(` - ID ${dup.id}: "${dup.post.title}"`);
    });
  }
};

export const englishClubPosts: BlogPost[] = [
  arsenalLogoPost,
  astonVillaLogoPost,
  bournemouthLogoPost,
  brentfordLogoPost,
  brightonLogoPost,
  bristolCityLogoPost,
  burnleyLogoPost,
  cardiffCityLogoPost,
  chelseaLogoPost,
  coventryCityLogoPost,
  crystalPalaceLogoPost,
  evertonLogoPost,
  hullCityLogoPost,
  ipswichTownLogoPost,
  leedsUnitedLogoPost,
  leicesterLogoPost,
  liverpoolLogoPost,
  lutonTownLogoPost,
  manchesterCityLogoPost,
  manchesterUnitedLogoPost,
  newcastleLogoPost,
  norwichLogoPost,
  sheffieldUnitedLogoPost,
  southamptonLogoPost,
  stokeCityLogoPost,
  sunderlandLogoPost,
  swanseaCityLogoPost,
  tottenhamLogoPost,
  watfordLogoPost,
  westBromwichLogoPost,
  westHamLogoPost,
  wolverhamptonLogoPost,
  middlesbroughLogoPost,
  blackburnRoversLogoPost,
  derbyCountyLogoPost,
  millwallLogoPost
];

// Vérification des doublons au chargement du module
verifyUniqueIds();
