
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

export const getAllPosts = (): BlogPost[] => {
  return [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.category === category);
};

export const blogPosts = getAllPosts();
