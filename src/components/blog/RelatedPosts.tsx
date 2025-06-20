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
  
  // Improved algorithm for better variety and SEO
  let relatedPosts: BlogPost[] = [];
  
  // 1. First priority: same subcategory (if exists) - maximum 1 post
  if (post.subCategory) {
    const sameSubCategory = otherPosts.filter(p => 
      p.category === post.category && p.subCategory === post.subCategory
    ).slice(0, 1);
    relatedPosts = [...relatedPosts, ...sameSubCategory];
  }
  
  // 2. Second priority: same category but different subcategory - maximum 1 post
  if (relatedPosts.length < maxPosts) {
    const sameCategoryDifferentSub = otherPosts.filter(p => 
      p.category === post.category && 
      (!post.subCategory || p.subCategory !== post.subCategory) &&
      !relatedPosts.find(rp => rp.id === p.id)
    ).slice(0, 1);
    relatedPosts = [...relatedPosts, ...sameCategoryDifferentSub];
  }
  
  // 3. Third priority: different categories for variety - prioritize recent posts
  if (relatedPosts.length < maxPosts) {
    const differentCategories = otherPosts
      .filter(p => 
        p.category !== post.category &&
        !relatedPosts.find(rp => rp.id === p.id)
      )
      .sort((a, b) => {
        // Mix recent posts with those having gallery images for better engagement
        const aScore = (a.galleryImageId ? 2 : 0) + (new Date(a.date).getTime() / 1000000000);
        const bScore = (b.galleryImageId ? 2 : 0) + (new Date(b.date).getTime() / 1000000000);
        return bScore - aScore;
      })
      .slice(0, maxPosts - relatedPosts.length);
    
    relatedPosts = [...relatedPosts, ...differentCategories];
  }
  
  // 4. Fallback: if still not enough, add more from any category
  if (relatedPosts.length < maxPosts) {
    const remainingPosts = otherPosts
      .filter(p => !relatedPosts.find(rp => rp.id === p.id))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, maxPosts - relatedPosts.length);
    
    relatedPosts = [...relatedPosts, ...remainingPosts];
  }
  
  // Fix navigation logic: find actual previous and next posts in chronological order
  const sortedPosts = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentIndex = sortedPosts.findIndex(p => p.id === post.id);
  
  // Previous post is newer (comes before in sorted array)
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  
  // Next post is older (comes after in sorted array)
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-12 pt-6 border-t border-gray-200 mb-16">
      <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.slice(0, maxPosts).map(relatedPost => (
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
