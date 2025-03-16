
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

// Log détaillé de tous les articles avant déduplication
console.log('\nListe complète des articles avant déduplication:');
allPosts.forEach(post => {
  console.log(`ID: ${post.id} - Title: ${post.title} - Category: ${post.category}`);
});

const uniqueIds = new Set(allPosts.map(post => post.id));

console.log('\nDétails pagination:');
console.log('- Total articles (avec potentiels doublons):', allPosts.length);
console.log('- Nombre d\'IDs uniques:', uniqueIds.size);
console.log('- Nombre de doublons:', allPosts.length - uniqueIds.size);

// Analyse détaillée des doublons
const duplicatesAnalysis = allPosts.reduce((acc, post) => {
  if (!acc[post.id]) {
    acc[post.id] = [];
  }
  acc[post.id].push({
    title: post.title,
    category: post.category
  });
  return acc;
}, {} as Record<number, Array<{title: string, category: string}>>);

console.log('\nAnalyse détaillée des doublons:');
Object.entries(duplicatesAnalysis)
  .filter(([_, occurrences]) => occurrences.length > 1)
  .forEach(([id, occurrences]) => {
    console.log(`\nID ${id} apparaît ${occurrences.length} fois:`);
    occurrences.forEach((occurrence, index) => {
      console.log(`  ${index + 1}. "${occurrence.title}" dans la catégorie "${occurrence.category}"`);
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
