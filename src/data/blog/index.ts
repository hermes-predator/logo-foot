
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
  
  // Afficher explicitement les doublons avec plus de détails
  console.log('========== DÉTECTION DE DOUBLONS ==========');
  let totalDuplicates = 0;
  
  idMap.forEach((postsWithSameId, id) => {
    if (postsWithSameId.length > 1) {
      console.warn(`🚨 DOUBLON DÉTECTÉ - ID ${id}`);
      console.group('Articles avec le même ID:');
      postsWithSameId.forEach((post, index) => {
        console.warn(`  ${index + 1}. [ID: ${post.id}] "${post.title}" (Catégorie: ${post.category} / ${post.subCategory || 'N/A'})`);
        totalDuplicates++;
      });
      console.groupEnd();
    }
  });
  
  if (totalDuplicates > 0) {
    console.warn(`📊 Nombre total d'articles en doublon: ${totalDuplicates}`);
  } else {
    console.log('✅ Aucun doublon détecté');
  }
  
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

// Vérification des doublons potentiels dans chaque collection d'articles
const checkDuplicatesInCollection = (collection: BlogPost[], name: string) => {
  const ids = new Set<number>();
  const duplicates: {id: number, title: string}[] = [];
  
  collection.forEach(post => {
    if (ids.has(post.id)) {
      duplicates.push({id: post.id, title: post.title});
    } else {
      ids.add(post.id);
    }
  });
  
  if (duplicates.length > 0) {
    console.warn(`⚠️ Doublons trouvés dans la collection "${name}" (${duplicates.length}):`);
    duplicates.forEach(dup => {
      console.warn(`   - ID ${dup.id}: "${dup.title}"`);
    });
  } else {
    console.log(`✅ Aucun doublon dans la collection "${name}"`);
  }
  
  return duplicates.length;
};

// Statistiques des articles par catégorie (pour vérification)
const countByCategory = {
  logos: logoPosts.length,
  history: historyPosts.length,
  technical: technicalPosts.length,
  analysis: analysisPosts.length,
  pixelArt: pixelArtPosts.length
};

// Vérifier les doublons dans chaque collection
console.log('---------- VÉRIFICATION DES COLLECTIONS ----------');
checkDuplicatesInCollection(logoPosts, 'logoPosts');
checkDuplicatesInCollection(historyPosts, 'historyPosts');
checkDuplicatesInCollection(technicalPosts, 'technicalPosts');
checkDuplicatesInCollection(analysisPosts, 'analysisPosts');
checkDuplicatesInCollection(pixelArtPosts, 'pixelArtPosts');

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

// Afficher un message plus visible dans la console
console.log('%c 📚 STATISTIQUES DU BLOG 📚', 'background: #3498db; color: white; font-size: 16px; padding: 5px;');
console.log('%c Nombre total d\'articles: ' + blogPosts.length, 'font-size: 14px; font-weight: bold;');
console.log('%c Répartition par catégorie:', 'font-size: 14px;');
console.table(countByCategory);
