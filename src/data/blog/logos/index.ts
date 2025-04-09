
import { BlogPost } from '../../../types/blog';
import { frenchClubPosts } from './groups/french-clubs';
import { nationalTeamPosts } from './groups/national-teams';
import { competitionsLogos } from './groups/competitions';
import { englishClubPosts } from './groups/english-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { germanClubPosts } from './groups/german-clubs';
import { portugueseClubPosts } from './groups/portuguese-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { southAmericanClubPosts } from './groups/south-american-clubs';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { africanClubPosts } from './groups/african-clubs';
import { asianClubPosts } from './groups/asian-clubs';
import { generalContentPosts } from './groups/general-content';

// Combiner tous les articles sur les logos
export const logoPosts: BlogPost[] = [
  ...frenchClubPosts,
  ...nationalTeamPosts,
  ...competitionsLogos,
  ...englishClubPosts,
  ...spanishClubPosts,
  ...italianClubPosts,
  ...germanClubPosts,
  ...portugueseClubPosts,
  ...otherEuropeanClubPosts,
  ...southAmericanClubPosts,
  ...nonEuropeanClubPosts,
  ...africanClubPosts,
  ...asianClubPosts,
  ...generalContentPosts
];

// Afficher le nombre total d'articles sur les logos
console.log(`Nombre total d'articles sur les logos: ${logoPosts.length}`);
