
import { BlogPost } from '../../../types/blog';
import { bundesligaAnalysis } from './bundesliga';
import { championsLeagueAnalysis } from './champions-league';
import { colorTheoryPost } from './color-theory';
import { kylianMbappePost } from './kylian-mbappe';
import { laligaAnalysis } from './laliga';
import { ligue1Analysis } from './ligue-1';
import { neymarPost } from './neymar';
import { premierLeagueAnalysis } from './premier-league';
import { serieAAnalysis } from './serie-a';
import { victorOsimhenPost } from './victor-osimhen';

// Combine all analysis posts into a single array
export const analysisPosts: BlogPost[] = [
  bundesligaAnalysis,
  championsLeagueAnalysis,
  colorTheoryPost,
  kylianMbappePost,
  laligaAnalysis,
  ligue1Analysis,
  neymarPost,
  premierLeagueAnalysis,
  serieAAnalysis,
  victorOsimhenPost
];

