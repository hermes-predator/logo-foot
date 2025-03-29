
import { BlogPost } from '../../../types/blog';
import { bundesligaAnalysis } from './bundesliga';
import { championsLeagueAnalysis } from './champions-league';
import { colorTheoryPost } from './color-theory';
import { erlingHaalandPost } from './erling-haaland';
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
import { joaoNevesPost } from './joao-neves';

// Combine all analysis posts into a single array
export const analysisPosts: BlogPost[] = [
  bundesligaAnalysis,
  championsLeagueAnalysis,
  colorTheoryPost,
  erlingHaalandPost,
  joaoNevesPost,
  kylianMbappePost,
  laligaAnalysis,
  ligue1Analysis,
  lionelMessiPost,
  neymarPost,
  premierLeagueAnalysis,
  serieAAnalysis,
  victorOsimhenPost,
  bradleyBarcolaPost,
  williamPachoPost
];
