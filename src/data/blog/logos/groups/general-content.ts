
import { BlogPost } from '../../../../types/blog';
import { pixelArtFootPost } from '../../pixel-art/pixel-art-foot';
import { creerLogoFootPost } from '../creer-logo-foot';
import { commentCreerLogoFootballPost } from '../comment-creer-logo-football';
import { ecussonsFootballPost } from '../ecussons-football';
import { logoMaillotFootPost } from '../logo-maillot-foot';
import { front1001LogosFootPdfPost } from '../1001-logos-foot-pdf';

export const generalContentPosts: BlogPost[] = [
  pixelArtFootPost,
  creerLogoFootPost,
  commentCreerLogoFootballPost,
  ecussonsFootballPost,
  logoMaillotFootPost,
  front1001LogosFootPdfPost
  // ecussonsClubFootEuropeenPost has been moved to technicalPosts and removed from here
];
