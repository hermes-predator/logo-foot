
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import BlogImage from './BlogImage';
import { generatePostUrl } from '../../utils/slugUtils';
import { formatDate } from '../../utils/dateUtils';
import { useReadingTime } from '../../hooks/useReadingTime';
import { useContextualImage } from '../../hooks/useContextualImage';
import { BLOG_CATEGORIES } from '../../types/blog';
import { Badge } from '../ui/badge';
import { Clock, Folder } from 'lucide-react';

interface BlogArticleCardProps {
  post: BlogPost;
}

const BlogArticleCard = ({ post }: BlogArticleCardProps) => {
  const postUrl = generatePostUrl(post.id, post.title, post.slug);
  const readingTime = useReadingTime(post.content);
  const categoryInfo = BLOG_CATEGORIES[post.category];
  
  // Utiliser le hook pour gérer les deux types d'images
  const { imageSrc } = useContextualImage({
    customSrc: post.coverImage,
    imageId: post.galleryImageId || undefined,
    context: 'blog'
  });

  return (
    <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 active:scale-[0.98] hover:border-black">
      <Link to={postUrl} className="block">
        <div className="relative overflow-hidden">
          <BlogImage 
            src={imageSrc}
            alt={post.title}
            className="w-full object-cover transition-all duration-500 group-hover:scale-102 group-hover:brightness-110"
            aspectRatio={1}
            width={400}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Badge catégorie superposé */}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 shadow-sm">
              <Folder className="w-3 h-3 mr-1" />
              {categoryInfo.name}
            </Badge>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-black transition-colors duration-300 leading-tight">
            {post.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              {post.date && (
                <time dateTime={post.date} className="group-hover:text-gray-700 transition-colors duration-200 flex items-center gap-1">
                  {formatDate(post.date)}
                </time>
              )}
              
              <div className="flex items-center gap-1 group-hover:text-gray-700 transition-colors duration-200">
                <Clock className="w-3 h-3" />
                <span>{readingTime} min</span>
              </div>
            </div>
            
            <span className="text-gray-700 font-medium transition-all duration-300 group-hover:text-black flex items-center gap-1">
              Lire la suite →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogArticleCard;
