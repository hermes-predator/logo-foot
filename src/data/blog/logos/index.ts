
import { BlogPost } from '../../../types/blog';
import { frenchClubPosts } from './groups/french-clubs';
import { germanClubPosts } from './groups/german-clubs';
import { englishClubPosts } from './groups/english-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { generalContentPosts } from './groups/general-content';
import { nationalTeamPosts } from './groups/national-teams';
import { competitionPosts } from './groups/competitions';

// Combine all logo posts into a single array
export const logoPosts: BlogPost[] = [
  ...frenchClubPosts,
  ...germanClubPosts,
  ...englishClubPosts,
  ...spanishClubPosts,
  ...italianClubPosts,
  ...otherEuropeanClubPosts,
  ...nonEuropeanClubPosts,
  ...generalContentPosts,
  ...nationalTeamPosts,
  ...competitionPosts
];
