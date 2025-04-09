
import { BlogPost } from '../../types/blog';
import { logosClubs } from './groups/french-clubs';
import { nationalTeams } from './groups/national-teams';
import { competitionsLogos } from './groups/competitions';
import { englishClubs } from './groups/english-clubs';
import { spanishClubs } from './groups/spanish-clubs';
import { italianClubs } from './groups/italian-clubs';
import { germanClubs } from './groups/german-clubs';
import { portugueseClubs } from './groups/portuguese-clubs';
import { otherEuropeanClubs } from './groups/other-european-clubs';
import { southAmericanClubs } from './groups/south-american-clubs';
import { nonEuropeanClubs } from './groups/non-european-clubs';
import { africanClubs } from './groups/african-clubs';
import { asianClubs } from './groups/asian-clubs';
import { generalContent } from './groups/general-content';
import { d1ArkemaLogoPost } from './d1-arkema-logo';

// Combiner tous les articles sur les logos
export const logoPosts: BlogPost[] = [
  ...logosClubs,
  ...nationalTeams,
  ...competitionsLogos,
  ...englishClubs,
  ...spanishClubs,
  ...italianClubs,
  ...germanClubs,
  ...portugueseClubs,
  ...otherEuropeanClubs,
  ...southAmericanClubs,
  ...nonEuropeanClubs,
  ...africanClubs,
  ...asianClubs,
  ...generalContent,
  d1ArkemaLogoPost
];

// Afficher le nombre total d'articles sur les logos
console.log(`Nombre total d'articles sur les logos: ${logoPosts.length}`);
