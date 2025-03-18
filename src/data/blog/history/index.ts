
import { BlogPost } from '../../../types/blog';
import { premierLeagueHistory } from './premier-league';
import { evolutionHistory } from './evolution';
import { clubHistoryPost } from '../logos/club-history';

export const historyPosts: BlogPost[] = [
  evolutionHistory,
  premierLeagueHistory,
  clubHistoryPost
];
