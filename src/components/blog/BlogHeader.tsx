import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight, Download, Star, Users, Shield, Trophy, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import JudgeMeBadge from './JudgeMeBadge';
import ReassuranceBadge from './ReassuranceBadge';
import { useLazyLoading } from '@/hooks/useLazyLoading';

const BlogHeader = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const slides = [
    {
      title: "8 600+ logos de clubs de foot",
      description: "Le plus grand fichier de logos de football au monde",
      imageUrl: "/lovable-uploads/01995b4a-f609-4992-a93f-e5908c604451.webp",
      link: "/"
    },
    {
      title: "Logos des compétitions",
      description: "Tous les logos des compétitions nationales et internationales",
      imageUrl: "/lovable-uploads/69649591-6761-465e-8961-455a923a424d.webp",
      link: "/"
    },
    {
      title: "Drapeaux du monde entier",
      description: "Les drapeaux de tous les pays du monde",
      imageUrl: "/lovable-uploads/49689567-9461-497f-9501-a99403f42d99.webp",
      link: "/"
    },
    {
      title: "Couvertures de football",
      description: "Des couvertures de football pour tous vos projets",
      imageUrl: "/lovable-uploads/68999995-6961-4969-8499-144999956969.webp",
      link: "/"
    },
    {
      title: "Logos des bookmakers",
      description: "Les logos des principaux bookmakers",
      imageUrl: "/lovable-uploads/50015678-5678-4567-a123-1234567890ab.webp",
      link: "/"
    }
  ];

  const { ref: lazyLoadingRef, isVisible: lazyLoadingVisible } = useLazyLoading();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsIntersecting(lazyLoadingVisible);
  }, [lazyLoadingVisible]);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);

      setHasAnimated(true);

      return () => clearInterval(intervalId);
    }
  }, [isIntersecting, slides.length, hasAnimated]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 via-orange-100/80 to-yellow-50 border border-orange-200/60 shadow-sm overflow-hidden relative"
         style={{
           clipPath: 'polygon(0 0, calc(100% - 3rem) 0, 100% 2rem, 100% 100%, 2rem 100%, 0 calc(100% - 1rem))'
         }}>
      {/* Barre d'alerte en haut */}
      <div className="bg-orange-100 border-b border-orange-200/70 text-orange-700 text-sm py-2 px-4 flex items-center justify-center gap-2">
        <Globe className="w-4 h-4" />
        <span>
          Nous livrons dans le monde entier.
        </span>
      </div>
      
      {/* Section principale avec forme unique */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4 sm:mb-6">
          Bienvenue sur le blog de <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">⦗FRONT-CLOUD⦘</span>
        </h1>
        
        {/* Description du blog */}
        <p className="text-gray-700 text-center text-base sm:text-lg mb-5 sm:mb-7 max-w-2xl mx-auto">
          Ici, on parle surtout de logos de football, mais pas que...
        </p>
        
        {/* Section des badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <GoogleDriveBadge />
          <JudgeMeBadge />
          <ReassuranceBadge />
        </div>
        
        {/* Carrousel d'images */}
        <div className="relative rounded-lg overflow-hidden shadow-md max-w-2xl mx-auto" ref={lazyLoadingRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Link to={slide.link}>
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-48 sm:h-64 object-cover object-center rounded-lg"
                />
              </Link>
            </div>
          ))}
          
          {/* Boutons de contrôle du carrousel */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center px-3">
            <button
              onClick={goToPreviousSlide}
              className="bg-gray-800/50 hover:bg-gray-800/70 text-white p-2 rounded-full transition-colors duration-300"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNextSlide}
              className="bg-gray-800/50 hover:bg-gray-800/70 text-white p-2 rounded-full transition-colors duration-300"
              aria-label="Slide suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
