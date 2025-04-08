
import { BlogPost } from '../../../types/blog';

// Import analyses with proper import names - these files use Post suffix for exports
import { colorTheoryPost } from './color-theory';
import { championsLeagueAnalysis } from './champions-league';
import { bundesligaAnalysis } from './bundesliga';
import { laligaAnalysis } from './laliga';
import { serieAAnalysis } from './serie-a';
import { premierLeagueAnalysis } from './premier-league';
import { ligue1Analysis } from './ligue-1';
import { psgTransferts } from './psg-transferts';

// Player analyses with correct export names
import { mbappePost } from './kylian-mbappe';
import { messiPost } from './lionel-messi';
import { neymarPost } from './neymar';
import { haalandPost } from './erling-haaland';
import { fodenPost } from './phil-foden';
import { mbappeSonPost } from './mbappe-et-son-fils';
import { lamineYamalPost } from './lamine-yamal';
import { lamineYamal2Post } from './lamine-yamal-2';
import { jamalMusialaPost } from './jamal-musiala';
import { florianWirtzPost } from './florian-wirtz';
import { joaoNevesPost } from './joao-neves';
import { rayanCherkiPost } from './rayan-cherki';
import { barcolaPost } from './bradley-barcola';
import { gulerPost } from './arda-guler';
import { garnachoPost } from './alejandro-garnacho';
import { vitinhaPost } from './vitinha';
import { martinelliPost } from './gabriel-martinelli';
import { seskoPost } from './benjamin-sesko';
import { olisePost } from './michael-olise';
import { pachoPost } from './william-pacho';
import { salibaPost } from './william-saliba';
import { douePost } from './desire-doue';
import { simonsPost } from './xavi-simons';
import { viniJrPost } from './vinicius-junior';
import { osimhenPost } from './victor-osimhen';
import { yildizPost } from './kenan-yildiz';
import { luisEnriquePost } from './luis-enrique';
import { hakimiPost } from './achraf-hakimi';
import { kyivLogoPost } from './dynamo-kiev-logo';

// Group all analysis posts
export const analysisPost: BlogPost[] = [
  psgTransferts,
  ligue1Analysis,
  championsLeagueAnalysis,
  bundesligaAnalysis,
  laligaAnalysis,
  serieAAnalysis,
  premierLeagueAnalysis,
  colorTheoryPost,
  mbappePost,
  messiPost,
  neymarPost,
  haalandPost,
  fodenPost,
  mbappeSonPost,
  lamineYamalPost,
  lamineYamal2Post,
  jamalMusialaPost,
  florianWirtzPost,
  joaoNevesPost,
  rayanCherkiPost,
  barcolaPost,
  gulerPost,
  garnachoPost,
  vitinhaPost,
  martinelliPost,
  seskoPost,
  olisePost,
  pachoPost,
  salibaPost,
  douePost,
  simonsPost,
  viniJrPost,
  osimhenPost,
  yildizPost,
  luisEnriquePost,
  hakimiPost,
  kyivLogoPost
];

// Add an alias for compatibility with other code using analysisPosts
export { analysisPost as analysisPosts };
