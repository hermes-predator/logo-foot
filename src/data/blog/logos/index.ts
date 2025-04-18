
import { BlogPost } from '../../types/blog';

// Import each logo category
import { spanishClubPosts } from './groups/spanish-clubs';
import { frenchClubPosts } from './groups/french-clubs';
import { englishClubPosts } from './groups/english-clubs';
import { germanClubPosts } from './groups/german-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { competitionPosts } from './groups/competitions';
import { nationalTeamPosts } from './groups/national-teams';
import { generalContentPosts } from './groups/general-content';
import { portugueseClubPosts } from './groups/portuguese-clubs';

// Import individual posts to ensure they are all available
// Any post not properly imported in its group should be added here
import { frontCloudPost } from './front-cloud';
import { rubinKazanLogoPost } from './rubin-kazan-logo';
import { sandhausenLogoPost } from './sandhausen-logo';
import { saintPriestLogoPost } from './saint-priest-logo';
import { salernitanaLogoPost } from './salernitana-logo';
import { rouenLogoPost } from './rouen-logo';
import { sanJoseEarthquakesLogoPost } from './san-jose-earthquakes-logo';
import { houstonDynamoLogoPost } from './houston-dynamo-logo';
import { austinFcLogoPost } from './austin-fc-logo';
import { fcDallasLogoPost } from './fc-dallas-logo';

// Combine all logo posts into a single array
export const logoPosts: BlogPost[] = [
  ...spanishClubPosts,
  ...frenchClubPosts,
  ...englishClubPosts,
  ...germanClubPosts,
  ...italianClubPosts,
  ...otherEuropeanClubPosts,
  ...nonEuropeanClubPosts,
  ...competitionPosts,
  ...nationalTeamPosts,
  ...generalContentPosts,
  ...portugueseClubPosts,
  // Add any posts that might not be included in the groups
  frontCloudPost,
  rubinKazanLogoPost,
  sandhausenLogoPost,
  saintPriestLogoPost,
  salernitanaLogoPost,
  rouenLogoPost,
  sanJoseEarthquakesLogoPost
  // Any other posts that might not be included in their respective groups
  // should be added here (houstonDynamoLogoPost and austinFcLogoPost are already in nonEuropeanClubPosts)
];
