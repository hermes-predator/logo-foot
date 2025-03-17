
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

// Detailed logging for article counts per category
console.log('\n************ DETAILED BLOG POST ANALYSIS ************');
console.log('Logo posts:', logoPosts.length, 'articles');
console.log('Logo posts IDs:', logoPosts.map(post => post.id).join(', '));

console.log('\nTechnical posts:', technicalPosts.length, 'articles');
console.log('Technical posts IDs:', technicalPosts.map(post => post.id).join(', '));

console.log('\nHistory posts:', historyPosts.length, 'articles');
console.log('History posts IDs:', historyPosts.map(post => post.id).join(', '));

console.log('\nAnalysis posts:', analysisPosts.length, 'articles');
console.log('Analysis posts IDs:', analysisPosts.map(post => post.id).join(', '));

// Vérification spécifique pour les articles Chelsea et Juventus
const chelseaArticle = logoPosts.find(post => post.title.toLowerCase().includes('chelsea'));
const juventusArticle = logoPosts.find(post => post.title.toLowerCase().includes('juventus'));

console.log('\nArticle Chelsea:', chelseaArticle ? {
  id: chelseaArticle.id,
  title: chelseaArticle.title, 
  category: chelseaArticle.category
} : 'Non trouvé dans logoPosts');

console.log('Article Juventus:', juventusArticle ? {
  id: juventusArticle.id,
  title: juventusArticle.title,
  category: juventusArticle.category
} : 'Non trouvé dans logoPosts');

// Check for duplicate IDs
const allPosts = [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts];
const idCounts = allPosts.reduce((acc, post) => {
  acc[post.id] = (acc[post.id] || 0) + 1;
  return acc;
}, {} as Record<number, number>);

console.log('\nDuplicate IDs found:');
Object.entries(idCounts)
  .filter(([_, count]) => count > 1)
  .forEach(([id, count]) => {
    const duplicates = allPosts.filter(post => post.id === Number(id));
    console.log(`ID ${id} appears ${count} times in categories:`, 
      duplicates.map(p => p.category).join(', '));
  });

// Ensure unique IDs in final array
export const blogPosts: BlogPost[] = Array.from(
  allPosts.reduce((map, post) => map.set(post.id, post), new Map()).values()
)
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

console.log('\nFinal unique posts count:', blogPosts.length);
console.log('Les articles Chelsea et Juventus sont-ils dans la liste finale:',
  blogPosts.some(post => post.title.toLowerCase().includes('chelsea')),
  blogPosts.some(post => post.title.toLowerCase().includes('juventus'))
);
console.log('Final posts IDs:', blogPosts.map(post => post.id).sort((a, b) => a - b).join(', '));
console.log('************************************************\n');
