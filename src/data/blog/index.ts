
import { BlogPost } from '../../types/blog';
import { logoPosts } from './logos';
import { historyPosts } from './history';
import { technicalPosts } from './technical';
import { analysisPosts } from './analysis';

// Fonction pour vérifier et éliminer les doublons d'ID
const removeDuplicateIds = (posts: BlogPost[]): BlogPost[] => {
  const seen = new Set();
  const uniquePosts = posts.filter(post => {
    const isDuplicate = seen.has(post.id);
    seen.add(post.id);
    if (isDuplicate) {
      console.warn(`Doublon détecté: Article avec ID ${post.id} (${post.title}) ignoré`);
    }
    return !isDuplicate;
  });
  
  return uniquePosts;
};

// Combiner tous les articles et éliminer les doublons
const allPosts = [...logoPosts, ...historyPosts, ...technicalPosts, ...analysisPosts];
export const blogPosts = removeDuplicateIds(allPosts);

// Trier les articles par date (du plus récent au plus ancien)
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Log pour débogage
console.log(`Total d'articles après suppression des doublons: ${blogPosts.length}`);
