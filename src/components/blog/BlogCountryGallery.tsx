
import React from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { countries } from '@/constants/countryData';
import { Image, GalleryHorizontal } from 'lucide-react';

interface BlogCountryGalleryProps {
  className?: string;
}

const BlogCountryGallery = ({ className }: BlogCountryGalleryProps) => {
  // Sélectionner quelques pays pour la galerie
  const featuredCountries = ['France', 'Angleterre', 'Espagne', 'Italie', 'Allemagne', 'Brésil'];
  
  return (
    <div className={`my-6 ${className}`}>
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <GalleryHorizontal className="h-5 w-5 text-blue-500" />
          <h3 className="text-lg font-medium text-gray-900">Aperçu de la collection par pays</h3>
        </div>
        <p className="text-sm text-gray-600">Découvrez un échantillon des logos organisés par pays</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
        <div className="relative aspect-video rounded-md overflow-hidden shadow-sm border border-gray-200 bg-white">
          <OptimizedImage 
            src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png"
            alt="Organisation des logos par pays" 
            className="object-contain" 
            width={400}
            height={225}
            priority={true}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 flex items-center justify-center">
            <Image className="h-3 w-3 mr-1" />
            <span>Vue d'ensemble</span>
          </div>
        </div>
        
        <div className="relative aspect-video rounded-md overflow-hidden shadow-sm border border-gray-200 bg-white">
          <OptimizedImage 
            src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
            alt="Collection détaillée des logos par pays" 
            className="object-contain" 
            width={400}
            height={225}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 flex items-center justify-center">
            <Image className="h-3 w-3 mr-1" />
            <span>Vue détaillée</span>
          </div>
        </div>
        
        {/* Compléter avec des exemples de pays */}
        {featuredCountries.map((country) => (
          <div key={country} className="relative aspect-video rounded-md overflow-hidden shadow-sm border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-2 flex flex-col items-center justify-center">
            <div className="text-sm font-medium text-gray-800">{country}</div>
            <div className="text-xs text-gray-500 mt-1">Collection complète</div>
            <div className="absolute bottom-1 right-1 bg-amber-100 text-amber-800 text-xs px-1 rounded">
              {Math.floor(Math.random() * 300) + 50} logos
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-2">
        <p className="text-xs text-gray-500 italic">Toutes les images sont organisées par dossier et facilement accessibles</p>
      </div>
    </div>
  );
};

export default BlogCountryGallery;
