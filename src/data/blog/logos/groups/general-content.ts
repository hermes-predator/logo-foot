
import { BlogPost } from '../../../../types/blog';

// Import general content posts
import { clubHistoryPost } from '../club-history';
import { coloriageLogoFootPost } from '../coloriage-logo-foot'; // Import the new post
import { footballLogosHistoryPost } from '../football-logos-history';
import { frenchLeaguesSchemaPost } from '../french-leagues-schema';
import { frontCloudPost } from '../front-cloud';
import { logosEquipesFootPost } from '../logos-equipes-foot';

// Group all general content posts
export const generalContentPosts: BlogPost[] = [
  clubHistoryPost,
  coloriageLogoFootPost, // Add the new post to the array
  footballLogosHistoryPost,
  frenchLeaguesSchemaPost,
  frontCloudPost,
  logosEquipesFootPost
];
