
import { BlogPost } from '../../../types/blog';
import { frontCloudPost } from './front-cloud';
import { clubHistoryPost } from './club-history';
import { nationalTeamsPost } from './national-teams';
import { worldCupLogos } from './world-cup';
import { serieAPost } from './italian-serie-a';
import { portugueseLogosPost } from './portuguese-clubs';
import { frenchClubsPost } from './french-clubs';
import { southAmericanClubsPost } from './south-american-clubs';
import { africanClubsPost } from './african-clubs';

export const logoPosts: BlogPost[] = [
  frenchClubsPost,
  worldCupLogos,
  frontCloudPost,
  clubHistoryPost, 
  nationalTeamsPost,
  serieAPost,
  portugueseLogosPost,
  southAmericanClubsPost,
  africanClubsPost
];
