
import { BlogPost } from '../../../types/blog';
import { evolutionHistory as evolutionPost } from './evolution';
import { premierLeagueHistory as premierLeaguePost } from './premier-league';
import { coupeFranceLogoPost } from './coupe-france-logo';

// Group all history posts into a single array
export const historyPosts: BlogPost[] = [
  evolutionPost,
  premierLeaguePost,
  coupeFranceLogoPost
];
