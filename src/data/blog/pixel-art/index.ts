
import { BlogPost } from '../../../types/blog';

// Import pixel art related posts
import { pixelArtFootPost } from '../logos/pixel-art-foot';
import { pixelArtFootGeneralPost } from './pixel-art-foot';
// Remove pixelArtPsgLogoPost from here since it's already in logoPosts
// import { pixelArtPsgLogoPost } from '../logos/pixel-art-psg-logo';
import { manchesterCityPixelArtLogoPost } from './manchester-city-pixel-art-logo';
import { pixelArtRealMadridLogoPost } from './pixel-art-real-madrid-logo';
import { pixelArtOMLogoPost } from './pixel-art-om-logo';

// Exporting all pixel art related posts, explicitly filtering out article 9134
export const pixelArtPosts: BlogPost[] = [
  pixelArtFootPost,
  pixelArtFootGeneralPost,
  // pixelArtPsgLogoPost, - Remove this to avoid duplication
  manchesterCityPixelArtLogoPost,
  pixelArtRealMadridLogoPost,
  pixelArtOMLogoPost
].filter(post => post.id !== 9134);

// For easier access to statistics
export const pixelArtPostCount = pixelArtPosts.length;

// Log the count for verification
console.log(`Number of Pixel Art posts: ${pixelArtPostCount}`);
