
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { useReadingTime } from '../../hooks/useReadingTime';

interface BlogArticleCardProps {
  post: BlogPost;
}

// Utiliser memo pour éviter les re-renders inutiles
const BlogArticleCard = memo(({ post }: BlogArticleCardProps) => {
  // Cette valeur est calculée une seule fois par post
  const readingTime = useReadingTime(post.content);
  
  return (
    <Link 
      to={`/blog/${post.id}`}
      className="block h-full"
      aria-label={`Lire l'article : ${post.title}`}
    >
      <article className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden h-full">
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <time 
              className="text-xs font-medium text-gray-600 px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50"
              dateTime={post.date}
            >
              {format(new Date(post.date), 'dd MMM yyyy')}
            </time>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              <span>{readingTime} min</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 flex-none">
            {post.title}
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-3 mb-3 flex-1">
            {post.excerpt}
          </p>
          
          <div 
            className="inline-flex items-center gap-1.5 text-purple-600 font-medium text-sm"
          >
            Lire l'article
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
});

// Ajouter un displayName pour faciliter le débogage dans React DevTools
BlogArticleCard.displayName = 'BlogArticleCard';

export default BlogArticleCard;
