import { BlogPost } from '../../types/blog';
import { frenchClubPosts } from './groups/french-clubs';
import { germanClubPosts } from './groups/german-clubs';
import { englishClubPosts } from './groups/english-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { generalContentPosts } from './groups/general-content';
import { nationalTeamsPosts } from './groups/national-teams';
import { competitionsPosts } from './groups/competitions';

// Combine all logo posts into a single array
export const logoPosts: BlogPost[] = [
  ...frenchClubPosts,
  ...germanClubPosts,
  ...englishClubPosts,
  ...spanishClubPosts,
  ...italianClubPosts,
  ...otherEuropeanClubPosts,
  ...nonEuropeanClubPosts,
  ...generalContentPosts,
  ...nationalTeamsPosts,
  ...competitionsPosts
];

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

// Au lieu d'utiliser une Map qui écrase les doublons, conservons tous les articles 
// mais assurons-nous que les IDs sont uniques en ajoutant un suffixe aux doublons
const uniquePosts: BlogPost[] = [];
const seenIds = new Set<number>();

allPosts.forEach(post => {
  if (!seenIds.has(post.id)) {
    // Si l'ID n'a pas encore été vu, ajoutez l'article tel quel
    uniquePosts.push(post);
    seenIds.add(post.id);
  } else {
    // Si l'ID est un doublon, créez une copie avec un ID modifié
    // Trouvons le plus grand ID existant pour éviter de nouveaux conflits
    const maxId = Math.max(...Array.from(seenIds), ...allPosts.map(p => p.id));
    const newId = maxId + 1;
    
    // Créons une copie de l'article avec le nouvel ID
    const newPost = { ...post, id: newId };
    uniquePosts.push(newPost);
    seenIds.add(newId);
    
    console.log(`Fixed duplicate ID: Article "${post.title}" had ID ${post.id}, now has ID ${newId}`);
  }
});

// Trier par date décroissante comme avant
export const blogPosts: BlogPost[] = uniquePosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Vérifier que les articles problématiques sont bien présents
console.log('\nFinal unique posts count:', blogPosts.length);
console.log('Les articles Chelsea et Juventus sont-ils dans la liste finale:',
  blogPosts.some(post => post.title.toLowerCase().includes('chelsea')),
  blogPosts.some(post => post.title.toLowerCase().includes('juventus'))
);
console.log('Final posts IDs:', blogPosts.map(post => post.id).sort((a, b) => a - b).join(', '));
console.log('************************************************\n');
