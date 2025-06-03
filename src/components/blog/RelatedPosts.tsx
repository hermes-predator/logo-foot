import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { BLOG_CATEGORIES } from '../../types/blog';
import { formatDate } from '../../utils/dateUtils';
import { TrendingUp, ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

interface RelatedPostsProps {
  post: BlogPost;
  allPosts: BlogPost[];
  maxPosts?: number;
}

const RelatedPosts = ({ post, allPosts, maxPosts = 3 }: RelatedPostsProps) => {
  const otherPosts = allPosts.filter(p => p.id !== post.id);
  
  let similarPosts = otherPosts.filter(p => 
    p.category === post.category && 
    (post.subCategory && p.subCategory ? p.subCategory === post.subCategory : true)
  );
  
  if (similarPosts.length < maxPosts) {
    const additionalPosts = otherPosts
      .filter(p => p.category === post.category)
      .filter(p => !similarPosts.find(sp => sp.id === p.id))
      .slice(0, maxPosts - similarPosts.length);
    
    similarPosts = [...similarPosts, ...additionalPosts];
  }
  
  if (similarPosts.length < maxPosts) {
    const popularPosts = otherPosts
      .filter(p => !similarPosts.find(sp => sp.id === p.id))
      .sort((a, b) => {
        if (a.galleryImageId && !b.galleryImageId) return -1;
        if (!a.galleryImageId && b.galleryImageId) return 1;
        
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .slice(0, maxPosts - similarPosts.length);
    
    similarPosts = [...similarPosts, ...popularPosts];
  }
  
  const prevPost = post.previousPostId 
    ? allPosts.find(p => p.id === post.previousPostId)
    : similarPosts[0];
    
  const nextPost = post.nextPostId 
    ? allPosts.find(p => p.id === post.nextPostId) 
    : similarPosts[1];
  
  if (similarPosts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-12 pt-6 border-t border-gray-200 mb-16">
      <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarPosts.slice(0, maxPosts).map(relatedPost => (
          <Link 
            key={relatedPost.id} 
            to={`/blog/${relatedPost.id}`} 
            className="group"
          >
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-4 h-full flex flex-col">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {BLOG_CATEGORIES[relatedPost.category].name}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(relatedPost.date)}
                </span>
              </div>
              
              <h3 className="font-semibold text-base text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                {relatedPost.title.replace(/\*\*/g, '')}
              </h3>
              
              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                {relatedPost.excerpt.replace(/\*\*/g, '')}
              </p>
              
              <div className="mt-auto pt-3 text-xs text-gray-500 flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span>Article populaire</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
        {prevPost && (
          <Link to={`/blog/${prevPost.id}`} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="mt-1">
              <ArrowLeft className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <span className="text-xs text-gray-500 block mb-1">Article précédent</span>
              <h4 className="font-medium text-sm">{prevPost.title.replace(/\*\*/g, '')}</h4>
            </div>
          </Link>
        )}
        
        {nextPost && (
          <Link to={`/blog/${nextPost.id}`} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="mt-1">
              <ArrowRight className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <span className="text-xs text-gray-500 block mb-1">Article suivant</span>
              <h4 className="font-medium text-sm">{nextPost.title.replace(/\*\*/g, '')}</h4>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RelatedPosts;
