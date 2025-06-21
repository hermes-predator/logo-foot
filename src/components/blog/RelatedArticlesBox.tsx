
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { generatePostUrl } from '../../utils/slugUtils';
import { ExternalLink } from 'lucide-react';

interface RelatedArticlesBoxProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  title?: string;
  maxArticles?: number;
  filterBy?: 'category' | 'country' | 'league' | 'color' | 'club';
  filterValue?: string;
}

const RelatedArticlesBox = ({ 
  currentPost, 
  allPosts, 
  title = "À lire aussi",
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
        // Articles avec couleurs similaires (rouge, bleu, vert, jaune, etc.)
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
  
  // Fonctions utilitaires pour extraire le pays et la ligue d'un article
  const extractCountryFromPost = (post: BlogPost): string => {
    const countries = ['france', 'espagne', 'italie', 'allemagne', 'angleterre', 'portugal', 'bresil', 'argentine'];
    return countries.find(country => 
      post.title.toLowerCase().includes(country) ||
      post.keywords?.toLowerCase().includes(country)
    ) || '';
  };
  
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
    <div className="my-8 p-3 bg-gray-25/40 border-l-2 border-gray-200/40 rounded-r-md relative">
      <div className="mb-2">
        <h3 className="text-xs font-normal text-gray-500 uppercase tracking-wide">{title}</h3>
      </div>
      
      <div className="space-y-1">
        {relatedArticles.map(article => (
          <Link 
            key={article.id}
            to={generatePostUrl(article.id, article.title)}
            className="group flex items-start p-1 rounded transition-colors"
          >
            <div className="flex-1">
              <h4 className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-1 leading-relaxed inline">
                {article.title.replace(/\*\*/g, '')}
                <ExternalLink className="w-3 h-3 text-gray-500 opacity-80 group-hover:opacity-100 group-hover:text-gray-900 transition-all inline ml-1" />
              </h4>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Bordure horizontale dans le coin inférieur */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-200/40"></div>
    </div>
  );
};

export default RelatedArticlesBox;
