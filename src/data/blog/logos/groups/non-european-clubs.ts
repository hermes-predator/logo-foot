
import { BlogPost } from '../../../../types/blog';

// Import non-European club logo posts
import { alNassrLogoPost } from '../al-nassr-logo';
// Add additional imports for other non-European clubs if they exist
// Example:
// import { flamengLogoPost } from '../flamengo-logo';
// import { interMiamiLogoPost } from '../inter-miami-logo';
// import { losAngelesGalaxyLogoPost } from '../los-angeles-galaxy-logo';

// Group all non-European club logo posts
export const nonEuropeanClubPosts: BlogPost[] = [
  alNassrLogoPost,
  // Add other non-European club logo posts here as they become available
  // Example:
  // flamengoLogoPost,
  // interMiamiLogoPost,
  // losAngelesGalaxyLogoPost,
];

// Check if necessary club logo posts exist in the codebase, uncomment if they do
try {
  const flamengoLogoPost = require('../flamengo-logo').flamengoLogoPost;
  if (flamengoLogoPost) nonEuropeanClubPosts.push(flamengoLogoPost);
} catch (e) {
  // Post doesn't exist, that's fine
}

try {
  const interMiamiLogoPost = require('../inter-miami-logo').interMiamiLogoPost;
  if (interMiamiLogoPost) nonEuropeanClubPosts.push(interMiamiLogoPost);
} catch (e) {
  // Post doesn't exist, that's fine
}

try {
  const losAngelesGalaxyLogoPost = require('../los-angeles-galaxy-logo').losAngelesGalaxyLogoPost;
  if (losAngelesGalaxyLogoPost) nonEuropeanClubPosts.push(losAngelesGalaxyLogoPost);
} catch (e) {
  // Post doesn't exist, that's fine
}
