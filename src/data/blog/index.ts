
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';
import { pixelArtPosts } from './pixel-art';

// Optimized function to check for duplicates and resolve them
const ensureUniqueIds = (posts: BlogPost[]): BlogPost[] => {
  console.time('ensureUniqueIds');
  
  // Map pour stocker les posts par ID 
  const idMap = new Map<number, BlogPost[]>();
  
  // Regrouper les posts par ID pour détecter les doublons de manière plus efficace
  posts.forEach(post => {
    if (!idMap.has(post.id)) {
      idMap.set(post.id, []);
    }
    idMap.get(post.id)?.push(post);
  });
  
  // Logging explicite des doublons pour faciliter le débogage
  const duplicatePosts: BlogPost[] = [];
  idMap.forEach((postsWithSameId, id) => {
    if (postsWithSameId.length > 1) {
      console.warn(`🚨 DOUBLON DÉTECTÉ - ID ${id}`);
      postsWithSameId.forEach(post => {
        console.warn(`  • "${post.title}"`);
        duplicatePosts.push(post);
      });
    }
  });

  if (duplicatePosts.length > 0) {
    console.log(`📊 Nombre total de doublons : ${duplicatePosts.length}`);
  }
  
  // Trouver l'ID maximum actuel
  let maxId = Math.max(...posts.map(post => post.id));
  const uniquePosts: BlogPost[] = [];
  let duplicatesFound = 0;
  
  // Traiter chaque groupe d'ID de manière plus efficace
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
  
  if (duplicatesFound > 0) {
    console.log(`Total d'articles avec IDs uniques: ${uniquePosts.length}/${posts.length}`);
    console.log(`Nombre de doublons résolus: ${duplicatesFound}`);
  }
  
  console.timeEnd('ensureUniqueIds');
  return uniquePosts;
};

// Fonction optimisée pour vérifier les doublons de titre
const findDuplicateTitles = (posts: BlogPost[]) => {
  console.time('findDuplicateTitles');
  
  const titleMap = new Map<string, BlogPost[]>();
  
  posts.forEach(post => {
    if (!post.title) return; // Skip invalid posts
    
    const normalizedTitle = post.title.toLowerCase().trim();
    if (!titleMap.has(normalizedTitle)) {
      titleMap.set(normalizedTitle, []);
    }
    titleMap.get(normalizedTitle)?.push(post);
  });
  
  let titleDuplicatesFound = false;
  
  titleMap.forEach((postsWithSameTitle, title) => {
    if (postsWithSameTitle.length > 1) {
      titleDuplicatesFound = true;
      console.warn(`🔴 Titres similaires détectés: "${title}"`);
      postsWithSameTitle.forEach(post => {
        console.warn(`   - ID ${post.id}: "${post.title}" (Catégorie: ${post.category})`);
      });
    }
  });
  
  if (!titleDuplicatesFound && import.meta.env.DEV) {
    console.log('✅ Aucun titre en doublon détecté');
  }
  
  console.timeEnd('findDuplicateTitles');
};

// Optimized blog post processing
const processBlogPosts = () => {
  console.time('processBlogPosts');
  
  // Combiner tous les articles
  const allPosts = [...logoPosts, ...historyPosts, ...technicalPosts, ...analysisPosts, ...pixelArtPosts];
  
  if (import.meta.env.DEV) {
    console.log(`Nombre total d'articles avant traitement: ${allPosts.length}`);
    console.log(`- logoPosts: ${logoPosts.length}`);
    console.log(`- historyPosts: ${historyPosts.length}`);
    console.log(`- technicalPosts: ${technicalPosts.length}`);
    console.log(`- analysisPosts: ${analysisPosts.length}`);
    console.log(`- pixelArtPosts: ${pixelArtPosts.length}`);

    // Vérifier les doublons de titre uniquement en mode développement
    findDuplicateTitles(allPosts);
  }

  // Explicitement filtrer l'article 9134 avant d'appliquer la fonction ensureUniqueIds
  const filteredPosts = allPosts.filter(post => post.id !== 9134);
  const uniquePosts = ensureUniqueIds(filteredPosts);
  
  // Trier les articles par date (du plus récent au plus ancien)
  uniquePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  if (import.meta.env.DEV) {
    console.log(`Nombre total d'articles après traitement des doublons: ${uniquePosts.length}`);
    
    // Statistiques des articles par catégorie
    const countByCategory = {
      logos: logoPosts.length,
      history: historyPosts.length,
      technical: technicalPosts.length,
      analysis: analysisPosts.length,
      pixelArt: pixelArtPosts.length
    };
    
    // Afficher un message plus visible dans la console
    console.log('%c 📚 STATISTIQUES DU BLOG 📚', 'background: #3498db; color: white; font-size: 16px; padding: 5px;');
    console.log('%c Nombre total d\'articles: ' + uniquePosts.length, 'font-size: 14px; font-weight: bold;');
    console.log('%c Répartition par catégorie:', 'font-size: 14px;');
    console.table(countByCategory);
  }
  
  console.timeEnd('processBlogPosts');
  return uniquePosts;
};

// Export final des articles de blog avec traitement optimisé
export const blogPosts = processBlogPosts();
