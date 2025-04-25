
import { BlogPost } from '../../../../types/blog';
import { flamengoLogoPost } from '../flamengo-logo';
import { palmeirasLogoPost } from '../palmeiras-logo';
// Removing this import since it's already included directly in logos/index.ts
// import { brazilianClubsPost } from '../brazilian-clubs';
import { saoPauloLogoPost } from '../sao-paulo-logo';
import { corinthiansLogoPost } from '../corinthians-logo';
import { botafogoLogoPost } from '../botafogo-logo';
import { fluminenseLogoPost } from '../fluminense-logo';
import { gremioLogoPost } from '../gremio-logo';
import { fortalezaLogoPost } from '../fortaleza-logo';
import { vascoLogoPost } from '../vasco-da-gama-logo';
import { chapecoenseLogoPost } from '../chapecoense-logo';
import { coritibaLogoPost } from '../coritiba-logo';

// Group all Brazilian club logo posts - removing the brazilianClubsPost to avoid duplication
export const brazilianClubPosts: BlogPost[] = [
  flamengoLogoPost,
  palmeirasLogoPost,
  // brazilianClubsPost, - removed to avoid duplication
  saoPauloLogoPost,
  corinthiansLogoPost,
  botafogoLogoPost,
  fluminenseLogoPost,
  gremioLogoPost,
  fortalezaLogoPost,
  vascoLogoPost,
  chapecoenseLogoPost,
  coritibaLogoPost
];
