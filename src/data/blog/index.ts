
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';

// Fonction pour vérifier les doublons d'ID et les résoudre en réattribuant des IDs uniques
const ensureUniqueIds = (posts: BlogPost[]): BlogPost[] => {
  // Création d'un Map pour détecter et résoudre les doublons
  const idMap = new Map<number, number>(); // Map<ID, count>
  const processedPosts: BlogPost[] = [];
  let maxId = 0;
  
  // Premier passage pour trouver l'ID maximum et détecter les doublons
  posts.forEach(post => {
    maxId = Math.max(maxId, post.id);
    
    // Compter combien de fois chaque ID apparaît
    idMap.set(post.id, (idMap.get(post.id) || 0) + 1);
  });
  
  // Deuxième passage pour réattribuer des IDs en cas de doublons
  let nextUniqueId = maxId + 1;
  const idRemap = new Map<number, number>(); // Pour suivre les réattributions d'ID
  
  posts.forEach(post => {
    // Si c'est un ID en doublon et qu'il n'a pas encore été remappé
    if (idMap.get(post.id) > 1 && !idRemap.has(post.id)) {
      // Le premier post avec cet ID conserve son ID
      idRemap.set(post.id, post.id);
      processedPosts.push(post);
      
      // On réduit le compteur car un post avec cet ID a été traité
      idMap.set(post.id, idMap.get(post.id) - 1);
    } 
    // Si c'est un ID en doublon déjà rencontré précédemment
    else if (idMap.get(post.id) > 1) {
      // On crée une copie du post avec un nouvel ID unique
      const postWithNewId = {
        ...post,
        id: nextUniqueId
      };
      
      console.warn(`Doublon résolu: ID ${post.id} (${post.title}) → nouvel ID ${nextUniqueId}`);
      nextUniqueId++;
      
      // On réduit le compteur car un post avec cet ID a été traité
      idMap.set(post.id, idMap.get(post.id) - 1);
      
      processedPosts.push(postWithNewId);
    } 
    // Si c'est un ID unique ou la dernière occurrence d'un ID en doublon
    else {
      processedPosts.push(post);
    }
  });
  
  console.log(`Total d'articles avec IDs uniques: ${processedPosts.length}/${posts.length}`);
  return processedPosts;
};

// Combiner tous les articles et assurer des IDs uniques
const allPosts = [...logoPosts, ...historyPosts, ...technicalPosts, ...analysisPosts];
console.log(`Nombre total d'articles avant traitement: ${allPosts.length}`);
console.log(`- logoPosts: ${logoPosts.length}`);
console.log(`- historyPosts: ${historyPosts.length}`);
console.log(`- technicalPosts: ${technicalPosts.length}`);
console.log(`- analysisPosts: ${analysisPosts.length}`);

export const blogPosts = ensureUniqueIds(allPosts);

// Trier les articles par date (du plus récent au plus ancien)
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Log pour débogage
console.log(`Nombre total d'articles après traitement des doublons: ${blogPosts.length}`);
