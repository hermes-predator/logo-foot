
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { technicalPosts } from './technical';
import { historyPosts } from './history';
import { analysisPosts } from './analysis';

// Logs détaillés pour chaque catégorie avec comptage
console.log('************ DEBUG LOGS CATEGORIES ************');
console.log('Logo posts:', logoPosts.length, 'articles');
console.log('Technical posts:', technicalPosts.length, 'articles');
console.log('History posts:', historyPosts.length, 'articles');
console.log('Analysis posts:', analysisPosts.length, 'articles');

// Vérification des doublons
const allPosts = [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts];

// Log détaillé des IDs de chaque catégorie
console.log('\nIDs par catégorie:');
console.log('Logo posts IDs:', logoPosts.map(post => post.id).sort((a, b) => a - b));
console.log('Technical posts IDs:', technicalPosts.map(post => post.id).sort((a, b) => a - b));
console.log('History posts IDs:', historyPosts.map(post => post.id).sort((a, b) => a - b));
console.log('Analysis posts IDs:', analysisPosts.map(post => post.id).sort((a, b) => a - b));

// Analyse des doublons
const idCount = allPosts.reduce((acc, post) => {
  acc[post.id] = (acc[post.id] || 0) + 1;
  return acc;
}, {} as Record<number, number>);

console.log('\nArticles dupliqués :');
Object.entries(idCount)
  .filter(([_, count]) => count > 1)
  .forEach(([id, count]) => {
    const duplicates = allPosts.filter(post => post.id === Number(id));
    console.log(`\nID ${id} apparaît ${count} fois :`);
    duplicates.forEach(post => {
      console.log(`- "${post.title}" dans la catégorie "${post.category}"`);
    });
  });

// Export des articles uniques et triés
export const blogPosts: BlogPost[] = Array.from(
  allPosts.reduce((map, post) => map.set(post.id, post), new Map()).values()
)
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Log final pour vérification
console.log('\n************ ARTICLES FINAUX ************');
console.log('Nombre total d\'articles après déduplication:', blogPosts.length);
console.log('******************************************');
