
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

// Combiner tous les articles dans un seul tableau
const allPosts = [...logoPosts, ...technicalPosts, ...historyPosts, ...analysisPosts];

// Vérifier les doublons d'ID
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

// Préserver tous les articles en utilisant un Map pour garantir l'unicité des IDs
// Cette méthode conserve le premier article avec un ID donné
const uniquePostsMap = new Map<number, BlogPost>();

// D'abord, ajouter tous les articles de logos car ils sont prioritaires
logoPosts.forEach(post => {
  if (!uniquePostsMap.has(post.id)) {
    uniquePostsMap.set(post.id, post);
  }
});

// Ensuite ajouter les autres catégories, sans écraser les articles existants
[...technicalPosts, ...historyPosts, ...analysisPosts].forEach(post => {
  if (!uniquePostsMap.has(post.id)) {
    uniquePostsMap.set(post.id, post);
  } else {
    // Si un ID est déjà utilisé, trouver un nouvel ID unique
    let newId = Math.max(...Array.from(uniquePostsMap.keys())) + 1;
    const newPost = { ...post, id: newId };
    uniquePostsMap.set(newId, newPost);
    console.log(`Fixed duplicate ID: Article "${post.title}" had ID ${post.id}, now has ID ${newId}`);
  }
});

// Convertir le Map en tableau et trier par date
export const blogPosts: BlogPost[] = Array.from(uniquePostsMap.values())
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Vérifier la présence des articles problématiques
console.log('\nFinal unique posts count:', blogPosts.length);
console.log('Les articles Chelsea et Juventus sont-ils dans la liste finale:',
  blogPosts.some(post => post.title.toLowerCase().includes('chelsea')),
  blogPosts.some(post => post.title.toLowerCase().includes('juventus'))
);
console.log('Final posts IDs:', blogPosts.map(post => post.id).sort((a, b) => a - b).join(', '));
console.log('************************************************\n');
