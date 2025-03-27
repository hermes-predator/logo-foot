import { BlogPost } from '../types/blog';
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

// Verification for specific articles
const chelseaArticle = logoPosts.find(post => post.title.toLowerCase().includes('chelsea'));
const juventusArticle = logoPosts.find(post => post.title.toLowerCase().includes('juventus'));
const alNassrArticle = logoPosts.find(post => post.title.toLowerCase().includes('al nassr'));

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

console.log('Article Al Nassr:', alNassrArticle ? {
  id: alNassrArticle.id,
  title: alNassrArticle.title,
  category: alNassrArticle.category
} : 'Non trouvé dans logoPosts');

// Collect all posts first - important for accurate ID resolution
const allPosts = [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts];
console.log('\nTotal posts before deduplication:', allPosts.length);

// Log the IDs to help debugging
const allPostIds = allPosts.map(post => post.id).sort((a, b) => a - b);
console.log('All post IDs before deduplication:', allPostIds.join(', '));

// Check for duplicate IDs
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

// Keep track of posts with modified IDs for debugging
const modifiedPosts: {originalId: number, newId: number, title: string}[] = [];

// Fix duplicate IDs by assigning new unique IDs
const uniquePosts: BlogPost[] = [];
const seenIds = new Set<number>();

allPosts.forEach(post => {
  if (!post.id) {
    console.error('Post without ID found:', post.title);
    return; // Skip posts without IDs
  }
  
  if (!seenIds.has(post.id)) {
    uniquePosts.push(post);
    seenIds.add(post.id);
  } else {
    const maxId = Math.max(...Array.from(seenIds), ...allPosts.map(p => p.id || 0));
    const newId = maxId + 1;
    
    const newPost = { ...post, id: newId };
    uniquePosts.push(newPost);
    seenIds.add(newId);
    
    modifiedPosts.push({
      originalId: post.id, 
      newId: newId, 
      title: post.title
    });
    
    console.log(`Fixed duplicate ID: Article "${post.title}" had ID ${post.id}, now has ID ${newId}`);
  }
});

console.log('\nPosts with modified IDs:', modifiedPosts);

// Sort by descending date
export const blogPosts: BlogPost[] = uniquePosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Verification of final post collection
console.log('\nFinal unique posts count:', blogPosts.length);
console.log('Articles check in final list:',
  {
    Chelsea: blogPosts.some(post => post.title.toLowerCase().includes('chelsea')),
    Juventus: blogPosts.some(post => post.title.toLowerCase().includes('juventus')),
    AlNassr: blogPosts.some(post => post.title.toLowerCase().includes('al nassr'))
  }
);
console.log('Final posts IDs:', blogPosts.map(post => post.id).sort((a, b) => a - b).join(', '));
console.log('************************************************\n');
