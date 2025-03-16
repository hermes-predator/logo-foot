
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

// Vérifions que tous les articles sont bien exportés
console.log('Total des articles dans blogPosts:', blogPosts.length);
console.log('Articles dans blogPosts:', blogPosts.map(post => ({id: post.id, title: post.title})));
