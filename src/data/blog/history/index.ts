
import { BlogPost } from '../../../types/blog';
import { premierLeagueHistory } from './premier-league';
import { evolutionHistory } from './evolution';
import { coupeFranceLogoPost } from './coupe-france-logo';

export const historyPosts: BlogPost[] = [
  evolutionHistory,
  premierLeagueHistory,
  coupeFranceLogoPost
];
