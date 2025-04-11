
import { BlogPost } from '../../../types/blog';

// Import des articles
import { kylianMbappePost } from './kylian-mbappe';
import { lionelMessiPost } from './lionel-messi';
import { erlingHaalandPost } from './erling-haaland';
import { viniciusJuniorPost } from './vinicius-junior';
import { neymarPost } from './neymar';
import { lamineYamalPost } from './lamine-yamal';
import { lamineYamal2Post } from './lamine-yamal-2';
import { philFodenPost } from './phil-foden';
import { jamalMusialaPost } from './jamal-musiala';
import { florianWirtzPost } from './florian-wirtz';
import { xaviSimonsPost } from './xavi-simons';
import { desireDouePost } from './desire-doue';
import { rayanCherkiPost } from './rayan-cherki';
import { joaoNevesPost } from './joao-neves';
import { michaelOlisePost } from './michael-olise';
import { gabrielMartinelliPost } from './gabriel-martinelli';
import { benjaminSeskoPost } from './benjamin-sesko';
import { bradleyBarcolaPost } from './bradley-barcola';
import { kenanYildizPost } from './kenan-yildiz';
import { ardaGulerPost } from './arda-guler';
import { victorOsimhenPost } from './victor-osimhen';
import { achrafHakimiPost } from './achraf-hakimi';
import { vitinhaPost } from './vitinha';
import { williamPachoPost } from './william-pacho';
import { alejandroGarnachoPost } from './alejandro-garnacho';
import { luisEnriquePost } from './luis-enrique';
import { premierLeagueAnalysis } from './premier-league';
import { ligue1Analysis } from './ligue-1';
import { laligaAnalysis } from './laliga';
import { serieAAnalysis } from './serie-a';
import { bundesligaAnalysis } from './bundesliga';
import { championsLeagueAnalysis } from './champions-league';
import { colorTheoryPost } from './color-theory';
import { williamSalibaPost } from './william-saliba';
import { dynamoKievLogoPost } from './dynamo-kiev-logo';
import { mbappeEtSonFilsPost } from './mbappe-et-son-fils';
import { psgRumeursTransfertPost } from './psg-rumeurs-transfert';
import { bukayoSakaPost } from './bukayo-saka';
import { mathysTelPost } from './mathys-tel';
import { judeBellinghamPost } from './jude-bellingham';
import { cristianoRonaldoPost } from '../history/cristiano-ronaldo';

// Définir la liste des articles d'analyse
export const analysisPosts: BlogPost[] = [
  kylianMbappePost,
  lionelMessiPost,
  erlingHaalandPost,
  viniciusJuniorPost,
  neymarPost,
  lamineYamalPost,
  lamineYamal2Post,
  philFodenPost,
  jamalMusialaPost,
  florianWirtzPost,
  xaviSimonsPost,
  desireDouePost,
  rayanCherkiPost,
  joaoNevesPost,
  michaelOlisePost,
  gabrielMartinelliPost,
  benjaminSeskoPost,
  bradleyBarcolaPost,
  kenanYildizPost,
  ardaGulerPost,
  victorOsimhenPost,
  achrafHakimiPost,
  vitinhaPost,
  williamPachoPost,
  alejandroGarnachoPost,
  luisEnriquePost,
  premierLeagueAnalysis,
  ligue1Analysis,
  laligaAnalysis,
  serieAAnalysis,
  bundesligaAnalysis,
  championsLeagueAnalysis,
  colorTheoryPost,
  williamSalibaPost,
  dynamoKievLogoPost,
  mbappeEtSonFilsPost,
  psgRumeursTransfertPost,
  bukayoSakaPost,
  mathysTelPost,
  judeBellinghamPost,
  cristianoRonaldoPost
];

// Liste des joueurs de football (identifiés par leur article dédié)
export const footballPlayers = [
  kylianMbappePost,
  lionelMessiPost,
  erlingHaalandPost,
  viniciusJuniorPost,
  neymarPost,
  lamineYamalPost,
  philFodenPost,
  jamalMusialaPost,
  florianWirtzPost,
  xaviSimonsPost,
  desireDouePost,
  rayanCherkiPost,
  joaoNevesPost,
  michaelOlisePost,
  gabrielMartinelliPost,
  benjaminSeskoPost,
  bradleyBarcolaPost,
  kenanYildizPost,
  ardaGulerPost,
  victorOsimhenPost,
  achrafHakimiPost,
  vitinhaPost,
  williamPachoPost,
  alejandroGarnachoPost,
  williamSalibaPost,
  bukayoSakaPost,
  mathysTelPost,
  judeBellinghamPost,
  cristianoRonaldoPost
];

// Nombre de joueurs de football dans notre base de données
export const footballPlayerCount = footballPlayers.length;

// Afficher le nombre de joueurs dans la console pour vérification
console.log(`Nombre de joueurs de football dans notre base de données : ${footballPlayerCount}`);
