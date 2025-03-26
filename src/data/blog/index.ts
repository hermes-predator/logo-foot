
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

// Combiner tous les articles dans un seul tableau pour analyse
const allPostsForAnalysis = [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts];
console.log('\nTotal combined posts before deduplication:', allPostsForAnalysis.length);

// Vérifier les doublons d'ID
const idCounts = allPostsForAnalysis.reduce((acc, post) => {
  acc[post.id] = (acc[post.id] || 0) + 1;
  return acc;
}, {} as Record<number, number>);

const duplicateIds = Object.entries(idCounts)
  .filter(([_, count]) => count > 1)
  .map(([id]) => Number(id));

console.log('\nDuplicate IDs found:', duplicateIds.length > 0 ? duplicateIds.join(', ') : 'None');
duplicateIds.forEach(id => {
  const duplicates = allPostsForAnalysis.filter(post => post.id === id);
  console.log(`ID ${id} appears ${duplicates.length} times in categories:`, 
    duplicates.map(p => `${p.category} (${p.title})`).join(', '));
});

// Préserver TOUS les articles en assurant l'unicité des IDs
// Au lieu d'utiliser un Map qui pourrait écraser des articles,
// nous traitons chaque catégorie séparément pour garantir que tous les articles sont inclus
const seenIds = new Set<number>();
const finalPosts: BlogPost[] = [];

// Function to add a post with a unique ID
const addPostWithUniqueId = (post: BlogPost) => {
  if (!seenIds.has(post.id)) {
    // If ID is not yet seen, add as is
    finalPosts.push(post);
    seenIds.add(post.id);
  } else {
    // If ID is already used, find a new unique ID
    let newId = Math.max(...Array.from(seenIds)) + 1;
    const newPost = { ...post, id: newId };
    finalPosts.push(newPost);
    seenIds.add(newId);
    console.log(`Fixed duplicate ID: Article "${post.title}" had ID ${post.id}, now has ID ${newId}`);
  }
};

// Process all categories separately to ensure all articles are included
// Logos first, as they're most important
logoPosts.forEach(post => addPostWithUniqueId(post));
technicalPosts.forEach(post => addPostWithUniqueId(post));
historyPosts.forEach(post => addPostWithUniqueId(post));
analysisPosts.forEach(post => addPostWithUniqueId(post));

// Tri par date décroissante (plus récent en premier)
export const blogPosts: BlogPost[] = finalPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Vérification finale
console.log('\nFinal unique posts count:', blogPosts.length);
console.log('Breakdown by category:');
console.log('- Logos:', blogPosts.filter(p => p.category === 'logos').length);
console.log('- Technical:', blogPosts.filter(p => p.category === 'technical').length);
console.log('- History:', blogPosts.filter(p => p.category === 'history').length);
console.log('- Analysis:', blogPosts.filter(p => p.category === 'analysis').length);

console.log('Les articles Chelsea et Juventus sont-ils dans la liste finale:',
  blogPosts.some(post => post.title.toLowerCase().includes('chelsea')),
  blogPosts.some(post => post.title.toLowerCase().includes('juventus'))
);
console.log('Final posts IDs:', blogPosts.map(post => post.id).sort((a, b) => a - b).join(', '));
console.log('************************************************\n');
