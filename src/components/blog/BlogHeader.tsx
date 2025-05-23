import React, { useState } from 'react';
import { Eye, Folder, AlertTriangle, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { generateGalleryItems } from '@/utils/galleryData';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Images pour le carrousel dans l'ordre fourni par l'utilisateur
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

  return <div className="bg-white p-8 mb-4 shadow-sm overflow-visible">
    <div className="max-w-6xl mx-auto overflow-visible">
      {/* En-tête avec titre et description */}
      <div className="text-center mb-8 pt-4 overflow-visible">
        {/* Box d'appel à l'action avec couleurs similaires */}
        <div className="relative bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 border-b-0 p-4 -mb-8 max-w-5xl mx-auto flex items-center justify-between shadow-md hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shine overflow-visible z-20" style={{
        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))'
      }}>
          {/* Badge Google Drive positionné en haut au centre */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
            <GoogleDriveBadge cursorHelp={true} />
          </div>
          
          {/* Bulle d'attention dans le coin supérieur gauche - forme parfaitement épousée */}
          <div className="absolute top-0 left-0 z-10">
            <div className="p-3" style={{
            backgroundColor: 'rgb(251, 234, 168)',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '16px'
          }}>
              <AlertTriangle className="h-5 w-5" style={{
              color: 'rgb(204, 124, 46)'
            }} />
            </div>
          </div>
          
          <div className="text-left flex-1 pt-6 pl-12">
            <h2 className="text-xl md:text-2xl font-bold text-orange-800 mb-1">
              Vous cherchez tous les logos de club de foot ?
            </h2>
            <p className="text-base text-orange-700 leading-relaxed mb-3 font-semibold">
              Téléchargez <span className="font-bold underline text-orange-700">+ de 8600 LOGOS de Clubs de Football</span> organisés par pays.<br />
              Obtenez toutes les ressources dans un fichier ZIP complet.
            </p>
          </div>
          
          <div className="ml-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/" className="relative overflow-hidden inline-flex items-center gap-4 px-8 py-5 text-lg font-normal text-white whitespace-nowrap transition-all duration-200 group" style={{
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                borderTop: '2px solid #fde047',
                borderLeft: '2px solid #fde047',
                borderRight: '2px solid #a16207',
                borderBottom: '2px solid #a16207',
                boxShadow: '0 4px 8px -2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                  {/* Effet de brillance sur le bouton */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"></div>
                  
                  <Folder className="h-6 w-6 relative z-10 drop-shadow-sm" />
                  <span className="relative z-10 font-semibold">Voir le fichier</span>
                  <ArrowRight className="h-6 w-6 relative z-10 transition-transform duration-200 group-hover:translate-x-1 drop-shadow-sm" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Accédez au pack complet de logos de football</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Nouvelle boîte jaune ambrée pour l'aperçu et le carrousel */}
      <div className="relative bg-gradient-to-r from-yellow-50 to-amber-50 p-8 max-w-5xl mx-auto before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shine overflow-hidden z-10">
        {/* Titre de l'aperçu */}
        <h3 className="font-semibold text-orange-800 mb-4 text-center text-sm">
          Aperçu de quelques collections de ⦗FRONT-CLOUD⦘~ Football.zip
        </h3>
        
        {/* Carrousel d'aperçu */}
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto" setApi={setCarouselApi}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselItems.map(item => <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2">
                  <div className="relative aspect-square overflow-hidden bg-white border border-gray-200/60 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl" onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)}>
                    <img src={item.imageUrl} alt={item.altText} className="w-full h-full object-contain p-2" loading="lazy" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          {/* Indicateurs de navigation modernes plus grands */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {Array.from({
            length: count
          }, (_, index) => <button key={index} className={`h-3 transition-all duration-300 ${index + 1 === current ? 'bg-orange-600 w-12 h-3' : 'bg-orange-300 hover:bg-orange-400 w-3'}`} onClick={() => carouselApi?.scrollTo(index)} aria-label={`Aller à la diapositive ${index + 1}`} />)}
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
