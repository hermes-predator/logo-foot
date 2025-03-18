
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
const galatasarayArticle = logoPosts.find(post => post.title.toLowerCase().includes('galatasaray'));

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

console.log('Article Galatasaray:', galatasarayArticle ? {
  id: galatasarayArticle.id,
  title: galatasarayArticle.title,
  category: galatasarayArticle.category
} : 'Non trouvé dans logoPosts');

// Gather all blog posts from different categories
const allPosts = [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts];

// Check for duplicate IDs and fix them
const idCounts: Record<number, number> = {};
const duplicateIds: number[] = [];

allPosts.forEach(post => {
  const id = post.id;
  idCounts[id] = (idCounts[id] || 0) + 1;
  if (idCounts[id] > 1 && !duplicateIds.includes(id)) {
    duplicateIds.push(id);
  }
});

console.log('\nDuplicate IDs found:', duplicateIds.length > 0 ? duplicateIds.join(', ') : 'None');
duplicateIds.forEach(id => {
  const duplicates = allPosts.filter(post => post.id === id);
  console.log(`ID ${id} appears ${idCounts[id]} times in categories:`, 
    duplicates.map(p => p.category).join(', '));
});

// Create a list of posts with unique IDs
const uniquePosts: BlogPost[] = [];
const seenIds = new Set<number>();
let nextId = Math.max(...allPosts.map(post => post.id), 0) + 1;

allPosts.forEach(post => {
  if (!seenIds.has(post.id)) {
    // If ID hasn't been seen yet, add the article as is
    uniquePosts.push({...post});
    seenIds.add(post.id);
  } else {
    // If ID is a duplicate, create a copy with a modified ID
    const newPost = { ...post, id: nextId++ };
    uniquePosts.push(newPost);
    console.log(`Fixed duplicate ID: Article "${post.title}" had ID ${post.id}, now has ID ${newPost.id}`);
  }
});

// Sort by descending date
export const blogPosts: BlogPost[] = uniquePosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Final verification
console.log('\nFinal unique posts count:', blogPosts.length);
console.log('Total posts (with duplicates):', allPosts.length);
console.log('Specific articles present in final list:',
  blogPosts.some(post => post.title.toLowerCase().includes('chelsea')) ? 'Chelsea ✓' : 'Chelsea ✗',
  blogPosts.some(post => post.title.toLowerCase().includes('juventus')) ? 'Juventus ✓' : 'Juventus ✗',
  blogPosts.some(post => post.title.toLowerCase().includes('galatasaray')) ? 'Galatasaray ✓' : 'Galatasaray ✗'
);
console.log('Final posts IDs count:', new Set(blogPosts.map(post => post.id)).size);
console.log('************************************************\n');
