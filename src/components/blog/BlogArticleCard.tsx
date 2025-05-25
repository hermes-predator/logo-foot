
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import BlogImage from './BlogImage';
import { generatePostUrl } from '../../utils/slugUtils';
import { formatDate } from '../../utils/dateUtils';

interface BlogArticleCardProps {
  post: BlogPost;
}

const BlogArticleCard = ({ post }: BlogArticleCardProps) => {
  const postUrl = generatePostUrl(post.id, post.title);

  return (
    <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]">
      <Link to={postUrl} className="block">
        <div className="relative overflow-hidden">
          <BlogImage 
            src={post.coverImage || '/placeholder.svg'}
            alt={post.title}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            {post.date && (
              <time dateTime={post.date} className="group-hover:text-gray-700 transition-colors duration-200">
                {formatDate(post.date)}
              </time>
            )}
            
            <span className="text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
              Lire la suite →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogArticleCard;
