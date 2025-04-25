
import { BlogPost } from '../../../types/blog';
import { designPrinciples } from './design-principles';
import { integrationGuide } from './integration-guide';
import { minimalDesignGuide } from './minimal-design';
import { motionDesignGuide } from './motion-design';
import { typographyGuide } from './typography-guide';
import { soccerGuidePost } from './soccer-guide';
import { soccerBallGuide } from './soccer-ball-guide';
import { howToDrawSoccerBall } from './how-to-draw-soccer-ball';
import { coloringFootballLogos } from './coloring-football-logos';
import { footballDesignGuide } from './football-design-guide';
import { commentCreerLogoFootballPost } from '../logos/comment-creer-logo-football';
import { creerLogoFootPost } from '../logos/creer-logo-foot';
import { frontCloudPost } from '../logos/front-cloud';
import { colorTheoryPost } from '../analysis/color-theory';

export const technicalPosts: BlogPost[] = [
  designPrinciples,
  integrationGuide,
  minimalDesignGuide,
  motionDesignGuide,
  typographyGuide,
  soccerGuidePost,
  soccerBallGuide,
  howToDrawSoccerBall,
  coloringFootballLogos,
  footballDesignGuide,
  commentCreerLogoFootballPost,
  creerLogoFootPost,
  frontCloudPost,  // Adding frontCloudPost to technical posts
  colorTheoryPost
];
