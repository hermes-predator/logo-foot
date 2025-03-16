
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPost } from '../../data/blogPosts';
import { useReadingTime } from '../../hooks/useReadingTime';

interface BlogArticleCardProps {
  post: BlogPost;
}

const BlogArticleCard = ({ post }: BlogArticleCardProps) => {
  const readingTime = useReadingTime(post.content);
  
  return (
    <article className="group flex flex-col bg-gradient-to-b from-white to-gray-50/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden">
      <div className="p-6 flex-1">
        <time 
          className="text-xs font-medium text-gray-600 px-2 py-1 rounded-full inline-block border border-gray-200 shadow-sm bg-white"
          dateTime={post.date}
        >
          {format(new Date(post.date), 'dd-MM-yyyy')}
        </time>
        <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3 group-hover:text-purple-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      </div>
      
      <Link 
        to={`/blog/${post.id}`} 
        className="p-4 bg-gray-100/80 text-purple-600 font-medium inline-flex items-center justify-center gap-1 transition-colors w-full"
        aria-label={`Lire l'article : ${post.title}`}
      >
        Lire l'article
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </Link>
    </article>
  );
};

export default BlogArticleCard;
