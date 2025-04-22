
import { BlogPost } from '../../../types/blog';
import { psgRumeursTransfertPost } from './psg-rumeurs-transfert';
import { premierLeagueAnalysis } from './premier-league';
import { serieAAnalysis } from './serie-a';
import { bundesligaAnalysis } from './bundesliga';
import { laligaAnalysis } from './laliga';
import { ligue1Analysis } from './ligue-1';
import { championsLeagueAnalysis } from './champions-league';
import { kylianMbappePost } from './kylian-mbappe';
// Remove the import for mbappeEtSonFilsPost
import { victorOsimhenPost } from './victor-osimhen';
import { dynamoKievLogoPost } from './dynamo-kiev-logo';
import { philFodenPost } from './phil-foden';
import { neymarPost } from './neymar';
import { lionelMessiPost } from './lionel-messi';
import { bukayoSakaPost } from './bukayo-saka';
import { viniciusJuniorPost } from './vinicius-junior';
import { erlingHaalandPost } from './erling-haaland';
import { judeBellinghamPost } from './jude-bellingham';
import { hugoEkitikePost } from './hugo-ekitike';
import { williamSalibaPost } from './william-saliba';
import { williamPachoPost } from './william-pacho';
import { florianWirtzPost } from './florian-wirtz';
import { jamalMusialaPost } from './jamal-musiala';
import { lamineYamalPost } from './lamine-yamal';
import { lamineYamal2Post } from './lamine-yamal-2';
import { mathysTelPost } from './mathys-tel';
import { achrafHakimiPost } from './achraf-hakimi';
import { desireDouePost } from './desire-doue';
import { rayanCherkiPost } from './rayan-cherki';
import { michaelOlisePost } from './michael-olise';
import { bradleyBarcolaPost } from './bradley-barcola';
import { gabrielMartinelliPost } from './gabriel-martinelli';
import { vitinhaPost } from './vitinha';
import { luisEnriquePost } from './luis-enrique';
import { joaoNevesPost } from './joao-neves';
import { kenanYildizPost } from './kenan-yildiz';
import { ardaGulerPost } from './arda-guler';
import { xaviSimonsPost } from './xavi-simons';
import { benjaminSeskoPost } from './benjamin-sesko';
import { alejandroGarnachoPost } from './alejandro-garnacho';
import { colorTheoryPost } from './color-theory';

// Group all posts into a single array, excluding mbappeEtSonFilsPost
export const analysisPosts: BlogPost[] = [
  psgRumeursTransfertPost,
  premierLeagueAnalysis,
  serieAAnalysis, 
  bundesligaAnalysis,
  laligaAnalysis,
  ligue1Analysis,
  championsLeagueAnalysis,
  kylianMbappePost,
  victorOsimhenPost,
  dynamoKievLogoPost,
  philFodenPost,
  neymarPost,
  lionelMessiPost,
  bukayoSakaPost,
  viniciusJuniorPost,
  erlingHaalandPost,
  judeBellinghamPost,
  hugoEkitikePost,
  williamSalibaPost,
  williamPachoPost,
  florianWirtzPost,
  jamalMusialaPost,
  lamineYamalPost,
  lamineYamal2Post,
  mathysTelPost,
  achrafHakimiPost,
  desireDouePost,
  rayanCherkiPost,
  michaelOlisePost,
  bradleyBarcolaPost,
  gabrielMartinelliPost,
  vitinhaPost,
  luisEnriquePost,
  joaoNevesPost,
  kenanYildizPost,
  ardaGulerPost,
  xaviSimonsPost,
  benjaminSeskoPost,
  alejandroGarnachoPost,
  colorTheoryPost
];
