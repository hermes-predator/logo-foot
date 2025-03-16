
import { BlogPost } from '../../../types/blog';
import { integrationGuide } from './integration-guide';
import { designPrinciples } from './design-principles';
import { motionDesignGuide } from './motion-design';
import { minimalDesignGuide } from './minimal-design';
import { typographyGuide } from './typography-guide';

export const technicalPosts: BlogPost[] = [
  integrationGuide,
  designPrinciples,
  motionDesignGuide,
  minimalDesignGuide,
  typographyGuide
];

console.log('Verifying technical posts:', technicalPosts.map(post => post.title));
