
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
const uniqueIds = new Set(allPosts.map(post => post.id));

console.log('Détails pagination:');
console.log('- Total articles (avec potentiels doublons):', allPosts.length);
console.log('- Nombre d\'IDs uniques:', uniqueIds.size);

// Vérification des doublons spécifiques
const duplicates = allPosts.filter((post, index) => 
  allPosts.findIndex(p => p.id === post.id) !== index
);

if (duplicates.length > 0) {
  console.log('Articles dupliqués trouvés:', duplicates.map(post => ({
    id: post.id,
    title: post.title
  })));
}

// Export des articles uniques et triés
export const blogPosts: BlogPost[] = Array.from(
  allPosts.reduce((map, post) => map.set(post.id, post), new Map()).values()
)
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Log final pour vérification
console.log('************ ARTICLES FINAUX ************');
console.log('Nombre total d\'articles après déduplication:', blogPosts.length);
console.log('Liste des articles par date:', blogPosts.map(post => ({
  id: post.id,
  title: post.title,
  date: post.date
})));
console.log('******************************************');
