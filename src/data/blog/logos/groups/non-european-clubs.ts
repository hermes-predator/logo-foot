
import { BlogPost } from '../../../../types/blog';

// Import non-European club logo posts
import { interMiamiLogoPost } from '../inter-miami-logo';
import { losAngelesGalaxyLogoPost } from '../los-angeles-galaxy-logo';
import { africanClubsPost } from '../african-clubs';
import { asianClubsPost } from '../asian-clubs';
import { brazilianClubsPost } from '../brazilian-clubs';
import { southAmericanClubsPost } from '../south-american-clubs';
import { mlsLogoPost } from '../mls-logos';
import { flamengoLogoPost } from '../flamengo-logo';
import { alNassrLogoPost } from '../al-nassr-logo';

// Group non-European club logo posts
export const nonEuropeanClubPosts: BlogPost[] = [
  alNassrLogoPost,
  flamengoLogoPost,
  interMiamiLogoPost,
  losAngelesGalaxyLogoPost,
  africanClubsPost,
  asianClubsPost,
  brazilianClubsPost,
  southAmericanClubsPost,
  mlsLogoPost
];
