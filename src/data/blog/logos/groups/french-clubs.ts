
import { BlogPost } from '../../../../types/blog';

// Import des articles sur les logos des clubs français
import { amiensLogoPost } from '../amiens-logo';
import { angersLogoPost } from '../angers-logo';
import { auxerreLogoPost } from '../auxerre-logo';
import { bordeauxLogoPost } from '../bordeaux-logo';
import { brestLogoPost } from '../brest-logo';
import { caenLogoPost } from '../caen-logo';
import { dijonLogoPost } from '../dijon-logo';
import { guingampLogoPost } from '../guingamp-logo';
import { lensLogoPost } from '../lens-logo';
import { lillLogoPost } from '../lille-logo';
import { lorientLogoPost } from '../lorient-logo';
import { lyonLogoPost } from '../lyon-logo';
// Suppression de l'import marseilleLogoPost car il semble que le fichier n'existe pas
import { metzLogoPost } from '../metz-logo';
import { monacoLogoPost } from '../monaco-logo';
import { montpellierLogoPost } from '../montpellier-logo';
import { nantesLogoPost } from '../nantes-logo';
import { niceLogoPost } from '../nice-logo';
import { nimesLogoPost } from '../nimes-logo';
import { psgLogoPost } from '../psg-logo';
import { reimsLogoPost } from '../reims-logo';
import { rennesLogoPost } from '../rennes-logo';
import { saintEtienneLogoPost } from '../saint-etienne-logo';
import { strasbourgLogoPost } from '../strasbourg-logo';
import { toulouseLogoPost } from '../toulouse-logo';
import { troyesLogoPost } from '../troyes-logo';
import { ancienLogoOmPost } from '../ancien-logo-om';
import { lavalLogoPost } from '../laval-logo';
// Suppression des imports problématiques pour tours-logo et sedan-logo
import { bastiaLogoPost } from '../bastia-logo';
import { valenciennesLogoPost } from '../valenciennes-logo';
import { rouenLogoPost } from '../rouen-logo';
import { usBoulogneLogoPost } from '../us-boulogne-logo';
import { stadeBriochinLogoPost } from '../stade-briochin-logo';
import { avranchesLogoPost } from '../avranches-logo';

export const frenchClubPosts: BlogPost[] = [
  amiensLogoPost,
  angersLogoPost,
  auxerreLogoPost,
  bordeauxLogoPost,
  brestLogoPost,
  caenLogoPost,
  dijonLogoPost,
  guingampLogoPost,
  lensLogoPost,
  lillLogoPost,
  lorientLogoPost,
  lyonLogoPost,
  // Suppression de marseilleLogoPost de la liste
  metzLogoPost,
  monacoLogoPost,
  montpellierLogoPost,
  nantesLogoPost,
  niceLogoPost,
  nimesLogoPost,
  psgLogoPost,
  reimsLogoPost,
  rennesLogoPost,
  saintEtienneLogoPost,
  strasbourgLogoPost,
  toulouseLogoPost,
  troyesLogoPost,
  ancienLogoOmPost,
  lavalLogoPost,
  // Suppression de toursLogoPost et sedanLogoPost de la liste
  bastiaLogoPost,
  valenciennesLogoPost,
  rouenLogoPost,
  usBoulogneLogoPost,
  stadeBriochinLogoPost,
  avranchesLogoPost
].map(post => ({ ...post, category: 'french-logo' }));
