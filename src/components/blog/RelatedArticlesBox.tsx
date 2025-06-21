
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
  maxArticles = 2,
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
    <div className="my-6 p-4 bg-gray-50/80 border border-gray-200/60 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-gray-600" />
        <h3 className="text-base font-medium text-gray-700">{title}</h3>
      </div>
      
      <div className="space-y-2">
        {relatedArticles.map(article => (
          <Link 
            key={article.id}
            to={generatePostUrl(article.id, article.title)}
            className="group flex items-start gap-2 p-2 rounded hover:bg-white/80 transition-all duration-200"
          >
            <ExternalLink className="w-3 h-3 text-gray-400 mt-1 opacity-60 group-hover:opacity-100" />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {article.title.replace(/\*\*/g, '')}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticlesBox;
