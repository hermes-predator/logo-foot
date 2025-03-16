
import { BlogPost } from '../../../types/blog';
import { frontCloudPost } from './front-cloud';
import { clubHistoryPost } from './club-history';
import { nationalTeamsPost } from './national-teams';
import { worldCupLogos } from './world-cup';
import { serieAPost } from './italian-serie-a';
import { portugueseLogosPost } from './portuguese-clubs';

export const logoPosts: BlogPost[] = [
  frontCloudPost,
  clubHistoryPost,
  nationalTeamsPost,
  worldCupLogos,
  serieAPost,
  portugueseLogosPost
];
