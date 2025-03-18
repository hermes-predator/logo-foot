
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { useReadingTime } from '../../hooks/useReadingTime';

interface BlogArticleCardProps {
  post: BlogPost;
}

const BlogArticleCard = ({ post }: BlogArticleCardProps) => {
  const readingTime = useReadingTime(post.content);
  
  // Log pour débogage
  console.log(`Rendering BlogArticleCard for post ID ${post.id}: ${post.title}`);
  
  if (!post || !post.id) {
    console.error('Invalid post data:', post);
    return null;
  }
  
  return (
    <article className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden h-full">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <time 
            className="text-xs font-medium text-gray-600 px-2 py-1 rounded-full border border-gray-200 bg-gray-50"
            dateTime={post.date}
          >
            {format(new Date(post.date), 'dd MMM yyyy')}
          </time>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5" />
            <span>{readingTime} min</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 flex-none group-hover:text-purple-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 line-clamp-3 mb-4 flex-1">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
          aria-label={`Lire l'article : ${post.title}`}
        >
          Lire l'article
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
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
        </Link>
      </div>
    </article>
  );
};

export default BlogArticleCard;
