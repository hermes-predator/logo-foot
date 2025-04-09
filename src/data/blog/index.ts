
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';
import { pixelArtPosts } from './pixel-art';

// Fonction pour vérifier les doublons d'ID et les résoudre en réattribuant des IDs uniques
const ensureUniqueIds = (posts: BlogPost[]): BlogPost[] => {
  // Map pour stocker les posts par ID 
  const idMap = new Map<number, BlogPost[]>();
  
  // Regrouper les posts par ID pour détecter les doublons
  posts.forEach(post => {
    if (!idMap.has(post.id)) {
      idMap.set(post.id, []);
    }
    idMap.get(post.id)?.push(post);
  });
  
  // Trouver l'ID maximum actuel
  let maxId = Math.max(...posts.map(post => post.id));
  const uniquePosts: BlogPost[] = [];
  let duplicatesFound = 0;
  
  // Traiter chaque groupe d'ID
  idMap.forEach((postsWithSameId, id) => {
    if (postsWithSameId.length === 1) {
      // Cas simple: ID unique, on garde tel quel
      uniquePosts.push(postsWithSameId[0]);
    } else {
      // Cas avec doublons
      duplicatesFound += postsWithSameId.length - 1;
      
      // Garder le premier post avec l'ID d'origine
      uniquePosts.push(postsWithSameId[0]);
      
      // Réattribuer de nouveaux IDs aux doublons
      for (let i = 1; i < postsWithSameId.length; i++) {
        maxId++;
        const newPost = {
          ...postsWithSameId[i],
          id: maxId
        };
        
        console.warn(`Doublon résolu: ID ${postsWithSameId[i].id} (${postsWithSameId[i].title}) → nouvel ID ${maxId}`);
        uniquePosts.push(newPost);
      }
    }
  });
  
  console.log(`Total d'articles avec IDs uniques: ${uniquePosts.length}/${posts.length}`);
  console.log(`Nombre de doublons résolus: ${duplicatesFound}`);
  
  return uniquePosts;
};

// Combiner tous les articles et assurer des IDs uniques
const allPosts = [...logoPosts, ...historyPosts, ...technicalPosts, ...analysisPosts, ...pixelArtPosts];
console.log(`Nombre total d'articles avant traitement: ${allPosts.length}`);
console.log(`- logoPosts: ${logoPosts.length}`);
console.log(`- historyPosts: ${historyPosts.length}`);
console.log(`- technicalPosts: ${technicalPosts.length}`);
console.log(`- analysisPosts: ${analysisPosts.length}`);
console.log(`- pixelArtPosts: ${pixelArtPosts.length}`);

export const blogPosts = ensureUniqueIds(allPosts);

// Trier les articles par date (du plus récent au plus ancien)
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Log pour débogage
console.log(`Nombre total d'articles après traitement des doublons: ${blogPosts.length}`);
