
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
  
  // Nouveau log pour montrer explicitement les doublons
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

  console.log(`📊 Nombre total de doublons : ${duplicatePosts.length}`);
  
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

// Statistiques des articles par catégorie (pour vérification)
const countByCategory = {
  'club-logos': logoPosts.filter(post => post.category === 'club-logos').length,
  'national-logos': logoPosts.filter(post => post.category === 'national-logos').length,
  legacy: historyPosts.length,
  technical: technicalPosts.length,
  analysis: analysisPosts.length,
  pixelArt: pixelArtPosts.length
};

// Vérifier aussi les doublons de titre pour aider à la détection
const findDuplicateTitles = (posts: BlogPost[]) => {
  const titleMap = new Map<string, BlogPost[]>();
  
  posts.forEach(post => {
    const normalizedTitle = post.title.toLowerCase().trim();
    if (!titleMap.has(normalizedTitle)) {
      titleMap.set(normalizedTitle, []);
    }
    titleMap.get(normalizedTitle)?.push(post);
  });
  
  console.log('🔍 Vérification des titres similaires:');
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
  
  if (!titleDuplicatesFound) {
    console.log('✅ Aucun titre en doublon détecté');
  }
};

// Combiner tous les articles et assurer des IDs uniques
const allPosts = [...logoPosts, ...historyPosts, ...technicalPosts, ...analysisPosts, ...pixelArtPosts];
console.log(`Nombre total d'articles avant traitement: ${allPosts.length}`);
console.log(`- logoPosts: ${logoPosts.length}`);
console.log(`  - club-logos: ${logoPosts.filter(post => post.category === 'club-logos').length}`);
console.log(`  - national-logos: ${logoPosts.filter(post => post.category === 'national-logos').length}`);
console.log(`- historyPosts: ${historyPosts.length}`);
console.log(`- technicalPosts: ${technicalPosts.length}`);
console.log(`- analysisPosts: ${analysisPosts.length}`);
console.log(`- pixelArtPosts: ${pixelArtPosts.length}`);

// Vérifier les doublons de titre avant de traiter les IDs
findDuplicateTitles(allPosts);

// Explicitement filtrer l'article 9134 avant d'appliquer la fonction ensureUniqueIds
const filteredPosts = allPosts.filter(post => post.id !== 9134);
export const blogPosts = ensureUniqueIds(filteredPosts);

// Trier les articles par date (du plus récent au plus ancien)
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Log pour débogage
console.log(`Nombre total d'articles après traitement des doublons: ${blogPosts.length}`);

// Afficher un message plus visible dans la console
console.log('%c 📚 STATISTIQUES DU BLOG 📚', 'background: #3498db; color: white; font-size: 16px; padding: 5px;');
console.log('%c Nombre total d\'articles: ' + blogPosts.length, 'font-size: 14px; font-weight: bold;');
console.log('%c Répartition par catégorie:', 'font-size: 14px;');
console.table(countByCategory);
