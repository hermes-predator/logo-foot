
import { BlogPost } from '../../../types/blog';
import { premierLeagueAnalysis } from './premier-league';
import { bundesligaAnalysis } from './bundesliga';
import { serieAAnalysis } from './serie-a';
import { ligue1Analysis } from './ligue-1';
import { laligaAnalysis } from './laliga';
import { championsLeagueAnalysis } from './champions-league';
import { colorTheoryPost } from './color-theory';

export const analysisPosts: BlogPost[] = [
  premierLeagueAnalysis,
  bundesligaAnalysis,
  serieAAnalysis,
  ligue1Analysis,
  laligaAnalysis,
  championsLeagueAnalysis,
  colorTheoryPost
];
