
import { BlogPost } from '../../../types/blog';

// Import analyses
import { ligue1Analysis } from './ligue-1';
import { championsLeagueAnalysis } from './champions-league';
import { bundesligaAnalysis } from './bundesliga';
import { laligaAnalysis } from './laliga';
import { serieAAnalysis } from './serie-a';
import { premierLeagueAnalysis } from './premier-league';
import { colorTheoryAnalysis } from './color-theory';
import { psgTransferts } from './psg-transferts';

// Player analyses
import { mbappeAnalysis } from './kylian-mbappe';
import { messiAnalysis } from './lionel-messi';
import { neymarAnalysis } from './neymar';
import { haalandAnalysis } from './erling-haaland';
import { foden } from './phil-foden';
import { mbappeSon } from './mbappe-et-son-fils';
import { lamineYamal } from './lamine-yamal';
import { lamineYamal2 } from './lamine-yamal-2';
import { jamalMusiala } from './jamal-musiala';
import { florianWirtz } from './florian-wirtz';
import { joaoNeves } from './joao-neves';
import { ryanCherki } from './rayan-cherki';
import { barcola } from './bradley-barcola';
import { guler } from './arda-guler';
import { garnacho } from './alejandro-garnacho';
import { vitinha } from './vitinha';
import { martinelli } from './gabriel-martinelli';
import { sesko } from './benjamin-sesko';
import { olise } from './michael-olise';
import { pacho } from './william-pacho';
import { saliba } from './william-saliba';
import { doue } from './desire-doue';
import { simons } from './xavi-simons';
import { viniJr } from './vinicius-junior';
import { osimhen } from './victor-osimhen';
import { yildiz } from './kenan-yildiz';
import { luisEnrique } from './luis-enrique';
import { hakimi } from './achraf-hakimi';
import { kyivLogo } from './dynamo-kiev-logo';

// Group all logo analyses posts
export const analysisPost: BlogPost[] = [
  psgTransferts,
  ligue1Analysis,
  championsLeagueAnalysis,
  bundesligaAnalysis,
  laligaAnalysis,
  serieAAnalysis,
  premierLeagueAnalysis,
  colorTheoryAnalysis,
  mbappeAnalysis,
  messiAnalysis,
  neymarAnalysis,
  haalandAnalysis,
  foden,
  mbappeSon,
  lamineYamal,
  lamineYamal2,
  jamalMusiala,
  florianWirtz,
  joaoNeves,
  ryanCherki,
  barcola,
  guler,
  garnacho,
  vitinha,
  martinelli,
  sesko,
  olise,
  pacho,
  saliba,
  doue,
  simons,
  viniJr,
  osimhen,
  yildiz,
  luisEnrique,
  hakimi,
  kyivLogo
];
