
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

// Vérification complète des doublons
console.log('%c 🔍 VÉRIFICATION COMPLÈTE DES DOUBLONS 🔍', 'background: #3b82f6; color: white; font-size: 16px; padding: 8px; border-radius: 4px;');

// Vérification des IDs en double
const idCounts = new Map<number, number>();
const titleCounts = new Map<string, number>();
const duplicatesByTitle: { [key: string]: BlogPost[] } = {};

blogPosts.forEach(post => {
  // Compter les IDs
  idCounts.set(post.id, (idCounts.get(post.id) || 0) + 1);
  
  // Compter les titres
  titleCounts.set(post.title, (titleCounts.get(post.title) || 0) + 1);
  
  // Grouper les doublons par titre
  if (!duplicatesByTitle[post.title]) {
    duplicatesByTitle[post.title] = [];
  }
  duplicatesByTitle[post.title].push(post);
});

// Afficher les IDs en double
const duplicateIds = Array.from(idCounts.entries()).filter(([id, count]) => count > 1);
if (duplicateIds.length > 0) {
  console.error('🔴 IDs EN DOUBLE DÉTECTÉS:', duplicateIds);
  duplicateIds.forEach(([id, count]) => {
    const postsWithId = blogPosts.filter(post => post.id === id);
    console.error(`ID ${id} (${count} fois):`, postsWithId.map(p => ({ title: p.title, category: p.category })));
  });
} else {
  console.log('✅ Tous les IDs sont uniques');
}

// Afficher les titres en double
const duplicateTitles = Array.from(titleCounts.entries()).filter(([title, count]) => count > 1);
if (duplicateTitles.length > 0) {
  console.error('🔴 TITRES EN DOUBLE DÉTECTÉS:', duplicateTitles);
  duplicateTitles.forEach(([title, count]) => {
    console.error(`Titre "${title}" (${count} fois):`, duplicatesByTitle[title].map(p => ({ id: p.id, category: p.category })));
  });
} else {
  console.log('✅ Tous les titres sont uniques');
}

// Statistiques par catégorie
const categoryStats = {
  logos: blogPosts.filter(p => p.category === 'logos').length,
  history: blogPosts.filter(p => p.category === 'legacy').length,
  technical: blogPosts.filter(p => p.category === 'technical').length,
  players: blogPosts.filter(p => p.category === 'players').length,
  'pixel-art': blogPosts.filter(p => p.category === 'pixel-art').length,
  'competition-logos': blogPosts.filter(p => p.category === 'competition-logos').length,
  'national-logos': blogPosts.filter(p => p.category === 'national-logos').length
};

console.log(`📊 Total d'articles: ${blogPosts.length}`);
console.table(categoryStats);

// Vérifier les articles spécifiques mentionnés
const specificArticles = [
  { id: 116, title: "Blasons Équipe de Foot" },
  { id: 223, title: "Écussons Club de Foot Européen" },
  { title: "Copa Sudamericana" }
];

console.log('%c 🎯 VÉRIFICATION DES ARTICLES SPÉCIFIQUES 🎯', 'background: #f59e0b; color: white; font-size: 14px; padding: 6px; border-radius: 4px;');

specificArticles.forEach(({ id, title }) => {
  if (id) {
    const matches = blogPosts.filter(post => post.id === id);
    console.log(`ID ${id} (${title}): ${matches.length} occurrence(s)`, matches.map(p => p.title));
  } else {
    const matches = blogPosts.filter(post => post.title.includes(title));
    console.log(`Titre contenant "${title}": ${matches.length} occurrence(s)`, matches.map(p => ({ id: p.id, title: p.title })));
  }
});
