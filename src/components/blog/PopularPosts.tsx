
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface PopularPostsProps {
  posts: BlogPost[];
  maxPosts?: number;
}

const PopularPosts = ({ posts, maxPosts = 4 }: PopularPostsProps) => {
  // Simuler un algorithme de popularité basé sur la date (les plus récents en premier pour cette démo)
  // En production, vous pourriez utiliser des métriques réelles comme les vues ou les partages
  const popularPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxPosts);
  
  if (!popularPosts.length) return null;
  
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-bold text-gray-800">Articles populaires</h3>
      </div>
      
      <div className="space-y-4">
        {popularPosts.map((post, index) => (
          <Link 
            key={post.id}
            to={`/blog/${post.id}`}
            className="group flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 rounded-md p-2 -mx-2 transition-colors"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-xs">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-gray-700 transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-gray-500">
                  {post.subCategory || post.category}
                </span>
                <span className="text-gray-600 text-xs flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-3 w-3 ml-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link 
          to="/blog" 
          className="text-sm text-gray-600 hover:text-gray-800 transition-colors inline-flex items-center gap-1"
        >
          Voir tous les articles
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default PopularPosts;
