
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

// Assemblage final - tous les articles avec IDs uniques maintenant
const allPosts = [
  ...logoPosts,
  ...historyPosts,
  ...technicalPosts,
  // Filtrer les analysisPosts en excluant ceux qui ont été déplacés vers competition-logos
  ...analysisPosts.filter(post => !competitionArticleIds.includes(post.id)),
  ...competitionArticles,
  ...pixelArtPosts
];

// Export direct - plus besoin de filtres car tous les IDs sont uniques
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

// Vérification des IDs uniques
const idCounts = new Map<number, number>();
blogPosts.forEach(post => {
  idCounts.set(post.id, (idCounts.get(post.id) || 0) + 1);
});

const duplicateIds = Array.from(idCounts.entries()).filter(([id, count]) => count > 1);

console.log('%c 🎯 BLOG AVEC IDS UNIQUES 🎯', 'background: #22c55e; color: white; font-size: 16px; padding: 8px; border-radius: 4px;');
console.log(`📈 Total d'articles: ${blogPosts.length}`);
console.log(`🔑 IDs uniques: ${duplicateIds.length === 0 ? '✅ Tous uniques' : '❌ Doublons détectés'}`);
if (duplicateIds.length > 0) {
  console.warn('🔴 IDs en doublon:', duplicateIds);
}
console.table(categoryStats);
