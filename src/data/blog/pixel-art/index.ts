
import { BlogPost } from '../../../types/blog';

// Imports des articles pixel art
import { pixelArtFootGeneralPost } from './pixel-art-foot';
import { pixelArtPsgLogoPost } from '../logos/pixel-art-psg-logo';
import { manchesterCityPixelArtLogoPost } from './manchester-city-pixel-art-logo';
import { pixelArtRealMadridLogoPost } from './pixel-art-real-madrid-logo';
import { pixelArtOMLogoPost } from './pixel-art-om-logo';

// Exportation de tous les articles pixel art
export const pixelArtPosts: BlogPost[] = [
  pixelArtFootGeneralPost,
  pixelArtPsgLogoPost,
  manchesterCityPixelArtLogoPost,
  pixelArtRealMadridLogoPost,
  pixelArtOMLogoPost
];

export const pixelArtPostCount = pixelArtPosts.length;

console.log(`Nombre d'articles Pixel Art : ${pixelArtPostCount}`);
