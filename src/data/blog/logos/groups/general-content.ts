
import { BlogPost } from '../../../../types/blog';

// Import general content posts
import { clubHistoryPost } from '../club-history';
import { footballLogosHistoryPost } from '../football-logos-history';
import { frenchLeaguesSchemaPost } from '../french-leagues-schema';
import { frontCloudPost } from '../front-cloud';
import { logosEquipesFootPost } from '../logos-equipes-foot'; // Add import for the new post

// Group all general content posts
export const generalContentPosts: BlogPost[] = [
  clubHistoryPost,
  footballLogosHistoryPost,
  frenchLeaguesSchemaPost,
  frontCloudPost,
  logosEquipesFootPost  // Add the new post to the array
];
