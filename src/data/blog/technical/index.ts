
import { BlogPost } from '../../../types/blog';
import { integrationGuide } from './integration-guide';
import { designPrinciples } from './design-principles';
import { motionDesignGuide } from './motion-design';
import { minimalDesignGuide } from './minimal-design';

export const technicalPosts: BlogPost[] = [
  integrationGuide,
  designPrinciples,
  motionDesignGuide,
  minimalDesignGuide
];

console.log('Verifying technical posts:', technicalPosts.map(post => post.title));
