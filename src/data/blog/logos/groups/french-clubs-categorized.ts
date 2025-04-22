
import { BlogPost } from '../../../../types/blog';

// Import French club logo posts
import { lillLogoPost } from '../lille-logo';
import { omLogoPost } from '../om-logo';
import { psgUltrasPost } from '../psg-ultras';
import { omUltrasPost } from '../om-ultras';
import { rouenLogoPost } from '../rouen-logo';
import { usBoulogneLogoPost } from '../us-boulogne-logo';
import { stadeBriochinLogoPost } from '../stade-briochin-logo';
import { avranchesLogoPost } from '../avranches-logo';
import { valenciennesLogoPost } from '../valenciennes-logo';
import { brestLogoPost } from '../brest-logo';
import { metzLogoPost } from '../metz-logo';
import { grenobleLogoPost } from '../grenoble-logo';
import { rodezLogoPost } from '../rodez-logo';
import { dijonLogoPost } from '../dijon-logo';
import { niortLogoPost } from '../niort-logo';
import { martiguesLogoPost } from '../martigues-logo';
import { stadeMayennaisLogoPost } from '../stade-mayennais-logo';
import { limonestLogoPost } from '../limonest-logo';
import { saintPriestLogoPost } from '../saint-priest-logo';
import { pixelArtPsgLogoPost } from '../pixel-art-psg-logo';

// Group French club logo posts
export const frenchCategorizedPosts: BlogPost[] = [
  lillLogoPost,
  omLogoPost,
  psgUltrasPost,
  omUltrasPost,
  rouenLogoPost,
  usBoulogneLogoPost,
  stadeBriochinLogoPost,
  avranchesLogoPost,
  valenciennesLogoPost,
  brestLogoPost,
  metzLogoPost,
  grenobleLogoPost,
  rodezLogoPost,
  dijonLogoPost,
  niortLogoPost,
  martiguesLogoPost,
  stadeMayennaisLogoPost,
  limonestLogoPost,
  saintPriestLogoPost,
  pixelArtPsgLogoPost
];

// Export as single post for categorized views
export const franceCategoryPost: BlogPost = {
  id: 2600,
  title: "Football Français : Logos, Emblèmes et Histoire des Clubs [2024]",
  excerpt: "Découvrez notre collection complète dédiée au football français : logos des clubs de Ligue 1, Ligue 2 et divisions inférieures, histoire des emblèmes et analyses des identités visuelles françaises.",
  date: "2025-04-20",
  content: "",
  keywords: "football français, logos clubs français, emblèmes ligue 1, écussons ligue 2, histoire clubs français, identité visuelle football france",
  category: 'logos',
  subCategory: 'france-football',
  galleryImageId: null
};
