
import { BlogPost } from '../../../../types/blog';

// Import non-European club logo posts
import { interMiamiLogoPost } from '../inter-miami-logo';
import { africanClubsPost } from '../african-clubs';
import { asianClubsPost } from '../asian-clubs';
import { brazilianClubsPost } from '../brazilian-clubs';
import { southAmericanClubsPost } from '../south-american-clubs';
import { mlsLogoPost } from '../mls-logos';

// Group non-European club logo posts
export const nonEuropeanClubPosts: BlogPost[] = [
  interMiamiLogoPost,
  africanClubsPost,
  asianClubsPost,
  brazilianClubsPost,
  southAmericanClubsPost,
  mlsLogoPost
];
