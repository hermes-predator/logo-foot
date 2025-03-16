
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

// Detailed logs for each category
console.log('Logo posts:', logoPosts.length, 'articles:', logoPosts.map(post => ({id: post.id, title: post.title})));
console.log('Technical posts:', technicalPosts.length, 'articles:', technicalPosts.map(post => ({id: post.id, title: post.title})));
console.log('History posts:', historyPosts.length, 'articles:', historyPosts.map(post => ({id: post.id, title: post.title})));
console.log('Analysis posts:', analysisPosts.length, 'articles:', analysisPosts.map(post => ({id: post.id, title: post.title})));

// Check for duplicate IDs
const allPosts = [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts];
const uniqueIds = new Set(allPosts.map(post => post.id));
console.log('Total posts:', allPosts.length);
console.log('Unique post IDs:', uniqueIds.size);
if (allPosts.length !== uniqueIds.size) {
  console.warn('Warning: Duplicate post IDs found!');
  const duplicates = allPosts.filter((post, index) => 
    allPosts.findIndex(p => p.id === post.id) !== index
  );
  console.log('Duplicate posts:', duplicates.map(post => ({id: post.id, title: post.title})));
}

// Remove any duplicates before sorting
const uniquePosts = Array.from(
  allPosts.reduce((map, post) => map.set(post.id, post), new Map()).values()
);

export const blogPosts: BlogPost[] = uniquePosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Final validation of exported posts
console.log('Final blogPosts array:', blogPosts.map(post => ({id: post.id, title: post.title, date: post.date})));

