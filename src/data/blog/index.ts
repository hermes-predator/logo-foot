
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

// Logs pour debug
console.log('Logo posts:', logoPosts.length);          // devrait être 12
console.log('Technical posts:', technicalPosts.length); // devrait être 4
console.log('History posts:', historyPosts.length);    // devrait être 2
console.log('Analysis posts:', analysisPosts.length);  // devrait être 6

export const blogPosts: BlogPost[] = [
  ...logoPosts,           
  ...technicalPosts,      
  ...historyPosts,        
  ...analysisPosts        
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
