
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';
import { pixelArtPosts } from './pixel-art';

// Import des articles à modifier
import { laligaAnalysis } from './analysis/laliga';
import { championsLeagueAnalysis } from './analysis/champions-league';
// Fixing the import path - using ligue-1 with a hyphen instead of ligue1
import { ligue1Analysis } from './analysis/ligue-1';
import { bundesligaAnalysis } from './analysis/bundesliga';
import { serieAAnalysis } from './analysis/serie-a';
import { premierLeagueAnalysis } from './analysis/premier-league';

// Modification des articles pour la catégorie competition-logos
const competitionArticles: BlogPost[] = [
  { ...laligaAnalysis, category: 'competition-logos', subCategory: 'competition-logos' },
  { ...championsLeagueAnalysis, category: 'competition-logos', subCategory: 'competition-logos' },
  { ...ligue1Analysis, category: 'competition-logos', subCategory: 'competition-logos' },
  { ...bundesligaAnalysis, category: 'competition-logos', subCategory: 'competition-logos' },
  { ...serieAAnalysis, category: 'competition-logos', subCategory: 'competition-logos' },
  { ...premierLeagueAnalysis, category: 'competition-logos', subCategory: 'competition-logos' }
];

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

// Statistiques des articles par catégorie
const countByCategory = {
  logos: logoPosts.length,
  history: historyPosts.length,
  technical: technicalPosts.length,
  analysis: analysisPosts.length,
  'pixel-art': pixelArtPosts.length,
  'competition-logos': competitionArticles.length
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

// Filtre explicite avant de traiter les IDs
const allPosts = [
  ...logoPosts.filter(post => post.id !== 306), // Filter out the blasonsEquipesFootballPost from logoPosts
  ...historyPosts,
  ...technicalPosts,
  ...analysisPosts.filter(post => !competitionArticles.find(ca => ca.id === post.id)),
  ...competitionArticles,
  ...pixelArtPosts
];

// Explicitement filtrer l'article 9134 et l'article avec ID 257 (logoMaillotFoot) avant d'appliquer la fonction ensureUniqueIds
// Cela évite les doublons de l'article "Logo Maillot de Foot"
const filteredPosts = allPosts.filter(post => post.id !== 9134 && !(post.id === 257 && post.title.includes("Logo Maillot de Foot")));
export const blogPosts = ensureUniqueIds(filteredPosts);

// Trier les articles par date
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Log pour débogage
console.log(`Nombre total d'articles après traitement des doublons: ${blogPosts.length}`);

// Afficher un message plus visible dans la console
console.log('%c 📚 STATISTIQUES DU BLOG 📚', 'background: #3498db; color: white; font-size: 16px; padding: 5px;');
console.log('%c Nombre total d\'articles: ' + blogPosts.length, 'font-size: 14px; font-weight: bold;');
console.log('%c Répartition par catégorie:', 'font-size: 14px;');
console.table(countByCategory);
