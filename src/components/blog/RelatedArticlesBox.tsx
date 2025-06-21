
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { generatePostUrl } from '../../utils/slugUtils';
import { BookOpen, ExternalLink } from 'lucide-react';

interface RelatedArticlesBoxProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  title?: string;
  icon?: React.ComponentType<any>;
  maxArticles?: number;
  filterBy?: 'category' | 'country' | 'league' | 'color' | 'club';
  filterValue?: string;
}

const RelatedArticlesBox = ({ 
  currentPost, 
  allPosts, 
  title = "📖 À lire aussi :",
  icon: Icon = BookOpen,
  maxArticles = 3,
  filterBy = 'category',
  filterValue
}: RelatedArticlesBoxProps) => {
  
  // Logique intelligente pour trouver des articles connexes
  const getRelatedArticles = (): BlogPost[] => {
    const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
    let relatedPosts: BlogPost[] = [];
    
    // Stratégies de sélection selon le filtre
    switch (filterBy) {
      case 'category':
        // Articles de même catégorie
        relatedPosts = otherPosts.filter(post => 
          post.category === (filterValue || currentPost.category)
        );
        break;
        
      case 'country':
        // Articles du même pays (basé sur le titre/keywords)
        const country = filterValue || extractCountryFromPost(currentPost);
        relatedPosts = otherPosts.filter(post => 
          post.keywords?.toLowerCase().includes(country.toLowerCase()) ||
          post.title.toLowerCase().includes(country.toLowerCase())
        );
        break;
        
      case 'league':
        // Articles de même ligue
        const league = filterValue || extractLeagueFromPost(currentPost);
        relatedPosts = otherPosts.filter(post => 
          post.keywords?.toLowerCase().includes(league.toLowerCase()) ||
          post.title.toLowerCase().includes(league.toLowerCase())
        );
        break;
        
      case 'color':
        // Articles avec couleurs similaires (rouge, bleu, etc.)
        const colors = ['rouge', 'bleu', 'vert', 'jaune', 'blanc', 'noir'];
        const postColors = colors.filter(color => 
          currentPost.content.toLowerCase().includes(color) ||
          currentPost.title.toLowerCase().includes(color)
        );
        relatedPosts = otherPosts.filter(post => 
          postColors.some(color => 
            post.content.toLowerCase().includes(color) ||
            post.title.toLowerCase().includes(color)
          )
        );
        break;
        
      case 'club':
        // Articles de clubs similaires ou rivaux
        relatedPosts = otherPosts.filter(post => 
          post.category === 'logos' && 
          post.subCategory === 'club-logos'
        );
        break;
        
      default:
        relatedPosts = otherPosts.filter(post => 
          post.category === currentPost.category
        );
    }
    
    // Si pas assez d'articles, compléter avec d'autres articles populaires
    if (relatedPosts.length < maxArticles) {
      const additionalPosts = otherPosts
        .filter(post => !relatedPosts.find(rp => rp.id === post.id))
        .slice(0, maxArticles - relatedPosts.length);
      relatedPosts = [...relatedPosts, ...additionalPosts];
    }
    
    // Mélanger et limiter
    return shuffleArray(relatedPosts).slice(0, maxArticles);
  };
  
  // Fonction utilitaire pour extraire le pays d'un article
  const extractCountryFromPost = (post: BlogPost): string => {
    const countries = ['france', 'espagne', 'italie', 'allemagne', 'angleterre', 'portugal', 'bresil', 'argentine'];
    return countries.find(country => 
      post.title.toLowerCase().includes(country) ||
      post.keywords?.toLowerCase().includes(country)
    ) || '';
  };
  
  // Fonction utilitaire pour extraire la ligue d'un article
  const extractLeagueFromPost = (post: BlogPost): string => {
    const leagues = ['ligue 1', 'liga', 'serie a', 'bundesliga', 'premier league', 'championnat'];
    return leagues.find(league => 
      post.title.toLowerCase().includes(league) ||
      post.keywords?.toLowerCase().includes(league)
    ) || '';
  };
  
  // Fonction pour mélanger un tableau
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  const relatedArticles = getRelatedArticles();
  
  if (relatedArticles.length === 0) {
    return null;
  }
  
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {relatedArticles.map(article => (
          <Link 
            key={article.id}
            to={generatePostUrl(article.id, article.title)}
            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-all duration-200 border border-transparent hover:border-blue-200"
          >
            <ExternalLink className="w-4 h-4 text-blue-500 mt-1 opacity-60 group-hover:opacity-100" />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                {article.title.replace(/\*\*/g, '')}
              </h4>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {article.excerpt.replace(/\*\*/g, '')}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-blue-200">
        <p className="text-xs text-gray-500 italic">
          Articles sélectionnés automatiquement selon vos centres d'intérêt
        </p>
      </div>
    </div>
  );
};

export default RelatedArticlesBox;
