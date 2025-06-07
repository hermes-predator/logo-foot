
import { BlogPost } from '../../../types/blog';
import { evolutionHistory as evolutionPost } from './evolution';
import { premierLeagueHistory as premierLeaguePost } from './premier-league';
import { coupeFranceLogoPost } from './coupe-france-logo';
import { cristianoRonaldoPost } from './cristiano-ronaldo';

// Group all history (now legacy) posts into a single array
export const historyPosts: BlogPost[] = [
  evolutionPost,
  premierLeaguePost,
  coupeFranceLogoPost
  // Si vous souhaitez inclure cristianoRonaldoPost dans une autre catégorie, faites-le dans l'autre index
];
