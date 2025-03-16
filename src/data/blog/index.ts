
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

export const blogPosts: BlogPost[] = [
  ...logoPosts,           // 7 articles
  ...technicalPosts,      // 1 article
  ...historyPosts,        // 2 articles
  ...analysisPosts        // 5 articles
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
