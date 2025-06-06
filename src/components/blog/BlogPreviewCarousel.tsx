
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { generatePostUrl } from '../../utils/slugUtils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BlogPreviewCarouselProps {
  posts: BlogPost[];
}

const BlogPreviewCarousel = ({ posts }: BlogPreviewCarouselProps) => {
  // Get the first 5 posts for the carousel
  const featuredPosts = posts.slice(0, 5);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Articles à la Une</h3>
        <p className="text-gray-600">Découvrez nos derniers articles sur les logos de football</p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {featuredPosts.map((post) => (
            <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Link 
                  to={generatePostUrl(post.id, post.title)}
                  className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 rounded-lg px-3 py-2">
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                        Lire
                        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border border-gray-200" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white border border-gray-200" />
      </Carousel>
    </div>
  );
};

export default BlogPreviewCarousel;
