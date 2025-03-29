
import { BlogPost } from '../../../types/blog';

// Import logo posts
import { footballLogosHistoryPost } from './football-logos-history';
import { allFootballLogosPost } from './all-football-logos';

// Import logo post groups
import { competitionPosts } from './groups/competitions';
import { englishClubPosts } from './groups/english-clubs';
import { frenchClubPosts } from './groups/french-clubs';
import { germanClubPosts } from './groups/german-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { nationalTeamPosts } from './groups/national-teams';

// Combine all logo posts into a single array
export const logoPosts: BlogPost[] = [
  allFootballLogosPost,
  footballLogosHistoryPost,
  ...competitionPosts,
  ...englishClubPosts,
  ...frenchClubPosts,
  ...germanClubPosts,
  ...italianClubPosts,
  ...spanishClubPosts,
  ...otherEuropeanClubPosts,
  ...nonEuropeanClubPosts,
  ...nationalTeamPosts
];
