
import { BlogPost } from '../../../types/blog';
import { africanaClubPosts } from './groups/african-clubs';
import { asianClubPosts } from './groups/asian-clubs';
import { brazilianClubPosts } from './groups/brazilian-clubs';
import { competitionPosts } from './groups/competitions';
import { englishClubPosts } from './groups/english-clubs';
import { frenchClubPosts } from './groups/french-clubs';
import { generalContentPosts } from './groups/general-content';
import { germanClubPosts } from './groups/german-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { nationalTeamPosts } from './groups/national-teams';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { portugueseClubPosts } from './groups/portuguese-clubs';
import { southAmericanClubPosts } from './groups/south-american-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
// Removed import for creerLogoFootPost

export const logoPosts: BlogPost[] = [
  ...africanaClubPosts,
  ...asianClubPosts,
  ...brazilianClubPosts,
  ...competitionPosts,
  ...englishClubPosts,
  ...frenchClubPosts,
  ...generalContentPosts,
  ...germanClubPosts,
  ...italianClubPosts,
  ...nationalTeamPosts,
  ...nonEuropeanClubPosts,
  ...otherEuropeanClubPosts,
  ...portugueseClubPosts,
  ...southAmericanClubPosts,
  ...spanishClubPosts,
  // Removed creerLogoFootPost from this array
];
