
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';
import { pixelArtPosts } from './pixel-art';

// Import des articles à modifier
import { laligaAnalysis } from './analysis/laliga';
import { championsLeagueAnalysis } from './analysis/champions-league';
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

// IDs des articles qui ont été déplacés vers competition-logos
const competitionArticleIds = competitionArticles.map(article => article.id);

// Fonction améliorée pour détecter et résoudre les doublons d'ID
const ensureUniqueIds = (posts: BlogPost[]): BlogPost[] => {
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
  let duplicatesResolved = 0;
  
  // Traiter chaque groupe d'ID
  idMap.forEach((postsWithSameId, id) => {
    if (postsWithSameId.length === 1) {
      // ID unique, on garde tel quel
      uniquePosts.push(postsWithSameId[0]);
    } else {
      // Doublons détectés - garder le premier et réattribuer des IDs aux autres
      console.warn(`🔴 DOUBLON RÉSOLU - ID ${id} (${postsWithSameId.length} articles)`);
      
      // Garder le premier post avec l'ID d'origine
      uniquePosts.push(postsWithSameId[0]);
      console.log(`✅ Gardé: "${postsWithSameId[0].title}" avec ID ${id}`);
      
      // Réattribuer de nouveaux IDs aux doublons
      for (let i = 1; i < postsWithSameId.length; i++) {
        maxId++;
        const newPost = {
          ...postsWithSameId[i],
          id: maxId
        };
        
        console.log(`🔧 Réattribué: "${postsWithSameId[i].title}" - Ancien ID: ${id} → Nouveau ID: ${maxId}`);
        uniquePosts.push(newPost);
        duplicatesResolved++;
      }
    }
  });
  
  console.log(`📊 Résolution des doublons terminée:`);
  console.log(`   • Total d'articles: ${uniquePosts.length}`);
  console.log(`   • Doublons résolus: ${duplicatesResolved}`);
  console.log(`   • Nouvel ID maximum: ${maxId}`);
  
  return uniquePosts;
};

// Assemblage final avec filtres spécifiques pour éviter les doublons connus
const allPosts = [
  ...logoPosts.filter(post => 
    // Filtrer les doublons connus
    post.id !== 306 && // Ancien blasonsEquipesFootballPost
    post.id !== 9134 && // Ancien doublon
    !(post.id === 257 && post.title.includes("Logo Maillot de Foot")) // Doublon logoMaillotFoot
  ),
  ...historyPosts,
  ...technicalPosts,
  // Filtrer les analysisPosts en excluant ceux qui ont été déplacés vers competition-logos
  ...analysisPosts.filter(post => !competitionArticleIds.includes(post.id)),
  ...competitionArticles,
  ...pixelArtPosts
];

// Application de la fonction de résolution des doublons
export const blogPosts = ensureUniqueIds(allPosts);

// Tri par date décroissante
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Statistiques finales - suppression de la catégorie 'analysis' qui n'existe plus
const categoryStats = {
  logos: blogPosts.filter(p => p.category === 'logos').length,
  history: blogPosts.filter(p => p.category === 'legacy').length,
  technical: blogPosts.filter(p => p.category === 'technical').length,
  players: blogPosts.filter(p => p.category === 'players').length,
  'pixel-art': blogPosts.filter(p => p.category === 'pixel-art').length,
  'competition-logos': blogPosts.filter(p => p.category === 'competition-logos').length
};

console.log('%c 🎯 BLOG OPTIMISÉ POUR LE SEO 🎯', 'background: #22c55e; color: white; font-size: 16px; padding: 8px; border-radius: 4px;');
console.log(`📈 Total d'articles uniques: ${blogPosts.length}`);
console.table(categoryStats);
