
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';

export const blogPosts: BlogPost[] = [
  ...logoPosts,
  ...historyPosts,
  ...technicalPosts,
  ...analysisPosts
];

blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
