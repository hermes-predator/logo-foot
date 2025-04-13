import { BlogPost } from '../../../../types/blog';
import { birminghamCityLogoPost } from '../birmingham-city-logo';
import { arsenalLogoPost } from '../arsenal-logo';
import { astonVillaLogoPost } from '../aston-villa-logo';
import { bournemouthLogoPost } from '../bournemouth-logo';
import { brentfordLogoPost } from '../brentford-logo';
import { brightonLogoPost } from '../brighton-logo';
import { burnleyLogoPost } from '../burnley-logo';
import { chelseaLogoPost } from '../chelsea-logo';
import { crystalPalaceLogoPost } from '../crystal-palace-logo';
import { evertonLogoPost } from '../everton-logo';
import { fulhamLogoPost } from '../fulham-logo';
import { leedsUnitedLogoPost } from '../leeds-united-logo';
import { leicesterLogoPost } from '../leicester-logo';
import { liverpoolLogoPost } from '../liverpool-logo';
import { manchesterCityLogoPost } from '../manchester-city-logo';
import { manchesterUnitedLogoPost } from '../manchester-united-logo';
import { newcastleLogoPost } from '../newcastle-logo';
import { nottinghamForestLogoPost } from '../nottingham-forest-logo';
import { southamptonLogoPost } from '../southampton-logo';
import { tottenhamLogoPost } from '../tottenham-logo';
import { westHamLogoPost } from '../west-ham-logo';
import { wolverhamptonLogoPost } from '../wolverhampton-logo';
import { blackburnRoversLogoPost } from '../blackburn-rovers-logo';
import { derbyCountyLogoPost } from '../derby-county-logo';
import { millwallLogoPost } from '../millwall-logo';
import { middlesbroughLogoPost } from '../middlesbrough-logo';
import { westBromwichLogoPost } from '../west-bromwich-logo';
import { watfordLogoPost } from '../watford-logo';

// Function to ensure all posts have proper category and subCategory
const ensureProperCategories = (posts: BlogPost[]): BlogPost[] => {
  return posts.map(post => ({
    ...post,
    category: 'logos',
    subCategory: post.subCategory || 'club-logos'
  }));
};

// Export the combined array of English club posts
export const englishClubPosts: BlogPost[] = ensureProperCategories([
  arsenalLogoPost,
  astonVillaLogoPost,
  bournemouthLogoPost,
  brentfordLogoPost,
  brightonLogoPost,
  burnleyLogoPost,
  chelseaLogoPost,
  crystalPalaceLogoPost,
  evertonLogoPost,
  fulhamLogoPost,
  leedsUnitedLogoPost,
  leicesterLogoPost,
  liverpoolLogoPost,
  manchesterCityLogoPost,
  manchesterUnitedLogoPost,
  newcastleLogoPost,
  nottinghamForestLogoPost,
  southamptonLogoPost,
  tottenhamLogoPost,
  westHamLogoPost,
  wolverhamptonLogoPost,
  blackburnRoversLogoPost,
  derbyCountyLogoPost,
  millwallLogoPost,
  middlesbroughLogoPost,
  westBromwichLogoPost,
  watfordLogoPost,
  birminghamCityLogoPost,
]);
