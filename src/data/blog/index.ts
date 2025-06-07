
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

// Export direct sans correction automatique
export const blogPosts = allPosts;

// Tri par date décroissante
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Statistiques finales
const categoryStats = {
  logos: blogPosts.filter(p => p.category === 'logos').length,
  history: blogPosts.filter(p => p.category === 'legacy').length,
  technical: blogPosts.filter(p => p.category === 'technical').length,
  players: blogPosts.filter(p => p.category === 'players').length,
  'pixel-art': blogPosts.filter(p => p.category === 'pixel-art').length,
  'competition-logos': blogPosts.filter(p => p.category === 'competition-logos').length
};

console.log('%c 🎯 BLOG OPTIMISÉ POUR LE SEO 🎯', 'background: #22c55e; color: white; font-size: 16px; padding: 8px; border-radius: 4px;');
console.log(`📈 Total d'articles: ${blogPosts.length}`);
console.table(categoryStats);
