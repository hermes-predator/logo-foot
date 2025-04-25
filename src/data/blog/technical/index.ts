
import { BlogPost } from '../../../types/blog';
// Removing the import for clubHistoryPost as it's already imported in logos/index.ts
// import { clubHistoryPost } from '../logos/club-history';
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
import { colorTheoryPost } from '../analysis/color-theory';

export const technicalPosts: BlogPost[] = [
  // Removing clubHistoryPost to avoid duplication
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
  colorTheoryPost
];
