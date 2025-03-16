
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

// Combine all blog posts and sort by date (most recent first)
export const blogPosts: BlogPost[] = [
  ...logoPosts,
  ...technicalPosts,
  ...historyPosts,
  ...analysisPosts
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
