
import { BlogPost } from '../../../types/blog';
import { bundesligaPost } from './bundesliga';
import { championsLeaguePost } from './champions-league';
import { colorTheoryPost } from './color-theory';
import { laligaPost } from './laliga';
import { ligue1Post } from './ligue-1';
import { premierLeaguePost } from './premier-league';
import { serieAPost } from './serie-a';
import { victorOsimhenPost } from './victor-osimhen';

// Combine all analysis posts into a single array
export const analysisPosts: BlogPost[] = [
  bundesligaPost,
  championsLeaguePost,
  colorTheoryPost,
  laligaPost,
  ligue1Post,
  premierLeaguePost,
  serieAPost,
  victorOsimhenPost
];
