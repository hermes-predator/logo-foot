
import { BlogPost } from '../../types/blog';
import { evolutionPost } from './evolution';
import { premierLeaguePost } from './premier-league';
import { coupeFranceLogoPost } from './coupe-france-logo';
import { cristianoRonaldoPost } from './cristiano-ronaldo';

// Group all history posts into a single array
export const historyPosts: BlogPost[] = [
  evolutionPost,
  premierLeaguePost,
  coupeFranceLogoPost,
  cristianoRonaldoPost
];
