
import React, { useState } from 'react';
import { Eye, Folder, AlertTriangle, ArrowRight, BadgeCheck } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { generateGalleryItems } from '@/utils/galleryData';
import { Link } from 'react-router-dom';
import JudgeMeBadge from './JudgeMeBadge';

const BlogHeader = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const carouselItems = [{
    id: 1,
    imageUrl: '/lovable-uploads/5401e79e-0c75-471c-b89c-5f146818720b.png',
    videoUrl: '/public/videos/video1.mov',
    title: 'Collection des logos des équipes de foot 1.',
    altText: 'Collection des logos des équipes de foot 1'
  }, {
    id: 2,
    imageUrl: '/lovable-uploads/da6c4256-9645-4187-9378-9036eb2bea01.png',
    videoUrl: '/public/videos/video2.mov',
    title: 'Collection des logos des équipes de foot 2.',
    altText: 'Collection des logos des équipes de foot 2'
  }, {
    id: 3,
    imageUrl: '/lovable-uploads/741e3db9-8eff-4573-958f-1c6ddb91066a.png',
    videoUrl: '/public/videos/video3.mov',
    title: 'Collection des logos des équipes de foot 3.',
    altText: 'Collection des logos des équipes de foot 3'
  }, {
    id: 4,
    imageUrl: '/lovable-uploads/f36f0c41-aced-4ca4-afc3-39bfe2fd0951.png',
    videoUrl: '/public/videos/video4.mov',
    title: 'Collection des logos des équipes de foot 4.',
    altText: 'Collection des logos des équipes de foot 4'
  }, {
    id: 5,
    imageUrl: '/lovable-uploads/d7ac2a17-35fe-4ad2-be4d-bf8607f9647a.png',
    videoUrl: '/public/videos/video5.mov',
    title: 'Collection des logos des équipes de foot 5.',
    altText: 'Collection des logos des équipes de foot 5'
  }, {
    id: 6,
    imageUrl: '/lovable-uploads/ea858c6e-3a24-4219-864a-efa1334d6c7a.png',
    videoUrl: '/public/videos/video6.mov',
    title: 'Collection des logos des équipes de foot 6.',
    altText: 'Collection des logos des équipes de foot 6'
  }];

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }
    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);
    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // Effet pour la transition automatique très lente avec retour au début
  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const autoPlay = setInterval(() => {
      // Si on est à la dernière image, revenir au début
      if (carouselApi.selectedScrollSnap() === carouselApi.scrollSnapList().length - 1) {
        carouselApi.scrollTo(0);
      } else {
        carouselApi.scrollNext();
      }
    }, 7000); // 7 secondes entre chaque transition

    return () => clearInterval(autoPlay);
  }, [carouselApi]);

  return <div className="bg-white p-8 mb-4 shadow-sm overflow-visible">
    <div className="max-w-6xl mx-auto overflow-visible">
      {/* En-tête avec titre et description */}
      <div className="text-center mb-8 pt-4 overflow-visible">
        {/* Box d'appel à l'action avec couleurs similaires */}
        <div className="relative bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 border-b-0 p-6 -mb-8 max-w-5xl mx-auto flex items-center justify-between shadow-md before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shine overflow-visible z-20 rounded-t-lg" style={{
        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))'
      }}>
          
          {/* Bulle d'attention dans le coin supérieur gauche - forme parfaitement épousée */}
          <div className="absolute top-0 left-0 z-10">
            <div className="p-3" style={{
            backgroundColor: 'rgb(251, 234, 168)',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '16px'
          }}>
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>
          </div>
          
          <div className="text-left flex-1 pt-6 pl-12 pr-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight">
              Vous cherchez tous les logos de foot ?
            </h2>
            <div className="space-y-2 mb-4">
              <p className="text-base text-orange-600 leading-relaxed font-semibold">
                Téléchargez <span className="font-bold text-orange-600 underline decoration-2 decoration-orange-600">+ de 8 600 LOGOS de Clubs de Football</span> organisés par pays.
              </p>
              <p className="text-sm text-orange-600 font-medium">
                Obtenez toutes les ressources dans un fichier ZIP complet.
              </p>
            </div>
            
            {/* Badge Google Drive avec Tooltip Radix UI et couche invisible */}
            <div className="mb-4 flex justify-start">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-200 rounded-md">
                      <BadgeCheck className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium text-sm whitespace-nowrap">Fichier stockable sur votre</span>
                      <img 
                        src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
                        alt="Google Drive" 
                        className="h-6 w-auto object-contain flex-shrink-0"
                        loading="lazy"
                        width="60"
                        height="24"
                      />
                    </div>
                    {/* Couche invisible pour corriger le comportement de survol */}
                    <div className="absolute inset-0 bg-transparent z-10 pointer-events-none"></div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-white border border-gray-200/50 p-3 rounded-lg shadow-lg max-w-xs">
                  <p className="text-sm"><strong>Utilisation immédiate</strong> : Ce fichier est parfaitement organisé et immédiatement utilisable. Vous pouvez le stocker directement sur votre Google Drive, votre ordinateur, votre disque dur et l'utiliser tel quel, sans aucune autre modification.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          
          <div className="mr-5 flex flex-col items-center gap-3">
            <div className="mt-10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/" className="relative overflow-hidden inline-flex items-center gap-4 px-8 py-5 text-lg font-normal text-white whitespace-nowrap transition-all duration-200 group shadow-lg hover:shadow-xl" style={{
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
                  borderTop: '2px solid #fbbf24',
                  borderLeft: '2px solid #fbbf24',
                  borderRight: '2px solid #dc2626',
                  borderBottom: '2px solid #dc2626',
                  boxShadow: '0 6px 12px -2px rgba(251, 146, 60, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                    {/* Effet de brillance sur le bouton - plus clair au survol */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"></div>
                    
                    <Folder className="h-6 w-6 relative z-10 drop-shadow-sm" />
                    <span className="relative z-10 font-semibold">Voir le fichier</span>
                    <ArrowRight className="h-6 w-6 relative z-10 transition-transform duration-200 group-hover:translate-x-1 drop-shadow-sm" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-white border border-gray-200/50 p-0 rounded-lg shadow-lg max-w-xs overflow-hidden">
                  <div className="bg-gray-100 text-gray-900 px-3 py-2 text-center font-semibold border-b border-gray-200">
                    <Link to="/" className="hover:text-gray-700 transition-colors">
                      ⦗FRONT-CLOUD⦘~ Football.zip
                    </Link>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium text-center">
                        1 fichier ZIP
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium text-center">
                        66 collections
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium text-center">
                        8 774 logos
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium text-center">
                        Format PNG
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            
            {/* Micro composant Judge.me placé en dessous du bouton */}
            <JudgeMeBadge />
          </div>
        </div>
      </div>

      {/* Nouvelle boîte jaune ambrée pour l'aperçu et le carrousel - sans bordures */}
      <div className="relative bg-gradient-to-r from-yellow-50 to-amber-50 p-8 max-w-5xl mx-auto before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shine overflow-hidden z-10 rounded-b-lg">
        {/* Titre de l'aperçu avec mise en valeur subtile */}
        <h3 className="font-semibold text-gray-700 mb-6 text-center text-sm">
          Aperçu de quelques collections :{' '}
          <Link to="/" className="font-bold text-orange-600 bg-orange-50 px-1 py-0.5 rounded border border-orange-200 hover:bg-orange-100 hover:text-orange-700 transition-colors">
            ⦗FRONT-CLOUD⦘~ Football.zip
          </Link>
        </h3>
        
        {/* Carrousel d'aperçu */}
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto" setApi={setCarouselApi}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselItems.map(item => <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2">
                  <Link to="/" className="block">
                    <div className="relative aspect-square overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <img src={item.imageUrl} alt={item.altText} className="w-full h-full object-cover rounded-xl" loading="lazy" />
                    </div>
                  </Link>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          {/* Indicateurs de navigation premium avec effets visuels avancés */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: count }, (_, index) => (
              <button 
                key={index} 
                className={`relative transition-all duration-500 ease-out rounded-full overflow-hidden group ${
                  index + 1 === current 
                    ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-200' 
                    : 'w-3 h-3 bg-orange-300 hover:bg-orange-400 hover:scale-110 shadow-md hover:shadow-lg hover:shadow-orange-100'
                }`}
                onClick={() => carouselApi?.scrollTo(index)} 
                aria-label={`Aller à la diapositive ${index + 1}`}
              >
                {/* Effet de brillance pour l'indicateur actif */}
                {index + 1 === current && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                )}
                
                {/* Effet de pulsation pour les indicateurs inactifs au hover */}
                <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                  index + 1 !== current ? 'opacity-0 group-hover:opacity-100 bg-orange-400/50 animate-ping' : ''
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Badge de qualité */}
      <div className="text-center mt-2">
          
      </div>
    </div>
  </div>;
};

export default BlogHeader;
