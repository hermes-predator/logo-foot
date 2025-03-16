
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

// Logs détaillés pour debug
console.log('Logo posts:', logoPosts.length, logoPosts.map(post => post.title));
console.log('Technical posts:', technicalPosts.length, technicalPosts.map(post => post.title));
console.log('History posts:', historyPosts.length, historyPosts.map(post => post.title));
console.log('Analysis posts:', analysisPosts.length, analysisPosts.map(post => post.title));

export const blogPosts: BlogPost[] = [
  ...logoPosts,           
  ...technicalPosts,      
  ...historyPosts,        
  ...analysisPosts        
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Vérification des IDs uniques et logging détaillé
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
console.log('All blog posts:', blogPosts.map(post => ({id: post.id, title: post.title})));
