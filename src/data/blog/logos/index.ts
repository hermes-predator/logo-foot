
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

// Debug logging
console.log('French clubs:', frenchClubPosts.length);
console.log('German clubs:', germanClubPosts.length);
console.log('English clubs:', englishClubPosts.length);
console.log('Spanish clubs:', spanishClubPosts.length);
console.log('Italian clubs:', italianClubPosts.length);
console.log('Other European clubs:', otherEuropeanClubPosts.length);
console.log('Non-European clubs:', nonEuropeanClubPosts.length);
console.log('General content:', generalContentPosts.length);
console.log('National teams:', nationalTeamPosts.length);
console.log('Competitions:', competitionPosts.length);

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

// Verify total count
console.log('Total logo posts:', logoPosts.length);

// Check for Al Nassr post specifically
const alNassrPost = logoPosts.find(post => post.title.toLowerCase().includes('al nassr'));
console.log('Al Nassr post found in logoPosts:', alNassrPost ? 'Yes' : 'No');
