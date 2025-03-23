
import { BlogPost } from '../../../types/blog';

// Import grouped logo posts
import { englishClubPosts } from './groups/english-clubs';
import { frenchClubPosts } from './groups/french-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
import { germanClubPosts } from './groups/german-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { nationalTeamPosts } from './groups/national-teams';
import { competitionPosts } from './groups/competitions';
import { generalContentPosts } from './groups/general-content';

// Consolidate all logo posts into one array
export const logoPosts: BlogPost[] = [
  ...englishClubPosts,        // Premier League and English clubs
  ...frenchClubPosts,         // Ligue 1 and French clubs
  ...italianClubPosts,        // Serie A and Italian clubs
  ...spanishClubPosts,        // La Liga and Spanish clubs
  ...germanClubPosts,         // Bundesliga and German clubs
  ...otherEuropeanClubPosts,  // Other European clubs
  ...nonEuropeanClubPosts,    // Non-European clubs
  ...nationalTeamPosts,       // National teams
  ...competitionPosts,        // Competitions
  ...generalContentPosts      // General content
];
