
import { BlogPost } from '../../../types/blog';
import { achrafHakimiPost } from './achraf-hakimi';
import { bundesligaAnalysis } from './bundesliga';
import { championsLeagueAnalysis } from './champions-league';
import { colorTheoryPost } from './color-theory';
import { erlingHaalandPost } from './erling-haaland';
import { florianWirtzPost } from './florian-wirtz';
import { joaoNevesPost } from './joao-neves';
import { kylianMbappePost } from './kylian-mbappe';
import { laligaAnalysis } from './laliga';
import { ligue1Analysis } from './ligue-1';
import { lionelMessiPost } from './lionel-messi';
import { neymarPost } from './neymar';
import { premierLeagueAnalysis } from './premier-league';
import { serieAAnalysis } from './serie-a';
import { victorOsimhenPost } from './victor-osimhen';
import { bradleyBarcolaPost } from './bradley-barcola';
import { williamPachoPost } from './william-pacho';

// Combine all analysis posts into a single array
export const analysisPosts: BlogPost[] = [
  achrafHakimiPost,
  bundesligaAnalysis,
  bradleyBarcolaPost,
  championsLeagueAnalysis,
  colorTheoryPost,
  erlingHaalandPost,
  florianWirtzPost,
  joaoNevesPost,
  kylianMbappePost,
  laligaAnalysis,
  ligue1Analysis,
  lionelMessiPost,
  neymarPost,
  premierLeagueAnalysis,
  serieAAnalysis,
  victorOsimhenPost,
  williamPachoPost
];
