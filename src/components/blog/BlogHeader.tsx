import React from 'react';
import { Link } from 'react-router-dom';
import { BlogImage } from '@/components/blog/BlogImage';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { categories, coursesData } from '@/constants/countryData';
import { Badge } from '../ui/badge';

interface BlogHeaderProps {
  hideThirdImage?: boolean;
}

const BlogHeader = ({ hideThirdImage = false }: BlogHeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Logo Foot</h1>
        <p className="text-lg text-gray-600 mb-6">
          Découvrez l'histoire et la signification des logos des plus grands clubs de football
        </p>
        
        {/* Featured images */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
          <div>
            <OptimizedImage 
              src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png"
              alt="Logo de football"
              priority={true}
            />
          </div>
          <div>
            <OptimizedImage 
              src="/lovable-uploads/e4fdc9fa-6ed2-476a-bf78-ff7c416da34d.png"
              alt="Écusson de club de foot"
              priority={true}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <OptimizedImage 
              src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
              alt="Logo de foot design"
              hidden={hideThirdImage}
            />
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-800 mb-3">Catégories populaires:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 5).map((category, index) => (
              <Link to={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <Badge variant="secondary" className="hover:bg-gray-200 transition-colors cursor-pointer">
                  {category}
                </Badge>
              </Link>
            ))}
            <Link to="/blog">
              <Badge variant="outline" className="hover:bg-gray-100 transition-colors cursor-pointer">
                Tout voir
              </Badge>
            </Link>
          </div>
        </div>
        
        {/* Search bar will be added later */}
        {/* <div className="mb-8">
          <Input placeholder="Rechercher un article..." className="w-full md:w-1/2" />
        </div> */}
        
        {/* Call to action */}
        <div className="flex flex-wrap gap-2 items-center">
          <Button asChild>
            <Link to="/">Explorer nos logos</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
