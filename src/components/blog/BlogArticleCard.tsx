
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
  
  const { imageSrc } = useContextualImage({
    customSrc: post.coverImage,
    imageId: post.galleryImageId || undefined,
    context: 'blog'
  });

  return (
    <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-black">
      <Link to={postUrl} className="flex flex-row items-stretch">
        {/* Miniature */}
        <div className="relative overflow-hidden flex-shrink-0 w-28 sm:w-36">
          <BlogImage 
            src={imageSrc}
            alt={post.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            aspectRatio={1}
            width={150}
            height={150}
          />
        </div>
        
        {/* Contenu */}
        <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-[10px] font-medium px-1.5 py-0.5">
                <Folder className="w-2.5 h-2.5 mr-0.5" />
                {categoryInfo.name}
              </Badge>
            </div>
            
            <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-black transition-colors leading-snug mb-1">
              {post.title}
            </h3>
            
            <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed hidden sm:block">
              {post.excerpt}
            </p>
          </div>
          
          <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2">
            <div className="flex items-center gap-2">
              {post.date && (
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              )}
              <div className="flex items-center gap-0.5">
                <Clock className="w-2.5 h-2.5" />
                <span>{readingTime} min</span>
              </div>
            </div>
            
            <span className="text-gray-600 font-medium group-hover:text-black transition-colors">
              Lire →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogArticleCard;
