
import React from 'react';
import { Sparkles, Trophy, Shield, Star } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import BlogHeaderCarousel from './BlogHeaderCarousel';
import JudgeMeBadge from './JudgeMeBadge';

const BlogHeader = () => {
  return (
    <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <FloatingParticles />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Football <span className="text-yellow-400">Logos</span>
            </h1>
            <Shield className="w-8 h-8 text-yellow-400" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Découvrez la plus grande collection de logos de football au monde
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-lg font-semibold">+10,000 logos HD</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-semibold">Format PNG transparent</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Trophy className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold">Clubs du monde entier</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous cherchez tous les logos de foot ?
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Notre collection comprend les logos de tous les grands championnats : Premier League, La Liga, Serie A, Bundesliga, Ligue 1, et bien plus encore !
            </p>
            
            <JudgeMeBadge />
          </div>
        </div>

        <BlogHeaderCarousel />
      </div>
    </div>
  );
};

export default BlogHeader;
