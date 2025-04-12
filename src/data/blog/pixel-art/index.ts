
import { BlogPost } from '../../../types/blog';

// Import pixel art related posts
import { pixelArtFootPost } from '../logos/pixel-art-foot';
import { pixelArtFootGeneralPost } from './pixel-art-foot';
import { pixelArtPsgLogoPost } from '../logos/pixel-art-psg-logo';
import { manchesterCityPixelArtLogoPost } from './manchester-city-pixel-art-logo';

// Exporting all pixel art related posts
export const pixelArtPosts: BlogPost[] = [
  pixelArtFootPost,
  pixelArtFootGeneralPost,
  pixelArtPsgLogoPost,
  manchesterCityPixelArtLogoPost
];

// For easier access to statistics
export const pixelArtPostCount = pixelArtPosts.length;

// Log the count for verification
console.log(`Number of Pixel Art posts: ${pixelArtPostCount}`);
