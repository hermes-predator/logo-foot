
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

console.log('Logo posts:', logoPosts.length);
console.log('Technical posts:', technicalPosts.length);
console.log('History posts:', historyPosts.length);
console.log('Analysis posts:', analysisPosts.length);

export const blogPosts: BlogPost[] = [
  ...logoPosts,           // 7 articles
  ...technicalPosts,      // 1 article
  ...historyPosts,        // 2 articles
  ...analysisPosts        // 5 articles
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Vérification des IDs uniques
const ids = new Set();
const duplicateIds = blogPosts.filter(post => {
  if (ids.has(post.id)) {
    console.warn('Duplicate ID found:', post.id, post.title);
    return true;
  }
  ids.add(post.id);
  return false;
});

console.log('Total unique posts:', blogPosts.length);
console.log('Duplicate IDs:', duplicateIds.length);

