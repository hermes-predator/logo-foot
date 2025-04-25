
import { BlogPost } from '../../../../types/blog';
import { flamengoLogoPost } from '../flamengo-logo';
import { palmeirasLogoPost } from '../palmeiras-logo';
import { saoPauloLogoPost } from '../sao-paulo-logo';
import { corinthiansLogoPost } from '../corinthians-logo';
import { botafogoLogoPost } from '../botafogo-logo';
import { fluminenseLogoPost } from '../fluminense-logo';
import { gremioLogoPost } from '../gremio-logo';
import { fortalezaLogoPost } from '../fortaleza-logo';
import { vascoLogoPost } from '../vasco-da-gama-logo';
import { chapecoenseLogoPost } from '../chapecoense-logo';
import { coritibaLogoPost } from '../coritiba-logo';
// Remove the import of the general Brazilian clubs post to avoid duplication
// import { brazilianClubsPost } from '../brazilian-clubs';

// Group all Brazilian club logo posts
export const brazilianClubPosts: BlogPost[] = [
  flamengoLogoPost,
  palmeirasLogoPost,
  saoPauloLogoPost,
  corinthiansLogoPost,
  botafogoLogoPost,
  fluminenseLogoPost,
  gremioLogoPost,
  fortalezaLogoPost,
  vascoLogoPost,
  chapecoenseLogoPost,
  coritibaLogoPost
  // Remove it from here as well if it was included
  // brazilianClubsPost
];
