import { BlogPost } from '../../types/blog';
import { logosPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';

export const blogPosts: BlogPost[] = [
  ...logosPosts,
  ...historyPosts,
  ...technicalPosts,
  ...analysisPosts
];

blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
