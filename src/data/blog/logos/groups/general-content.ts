
import { BlogPost } from '../../../../types/blog';
import { pixelArtFootGeneralPost } from '../../pixel-art/pixel-art-foot';
import { creerLogoFootPost } from '../creer-logo-foot';
import { commentCreerLogoFootballPost } from '../comment-creer-logo-football';
import { ecussonsFootballPost } from '../ecussons-football';
import { logoMaillotFootPost } from '../logo-maillot-foot';
import { logosFootPdfPost } from '../1001-logos-foot-pdf';

export const generalContentPosts: BlogPost[] = [
  pixelArtFootGeneralPost,
  creerLogoFootPost,
  commentCreerLogoFootballPost,
  ecussonsFootballPost,
  logoMaillotFootPost,
  logosFootPdfPost
  // ecussonsClubFootEuropeenPost has been moved to technicalPosts and removed from here
];
