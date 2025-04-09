
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Star, Folder, Check, Sparkle, Sparkles, Badge, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge as UIBadge } from '@/components/ui/badge';

const BlogCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="w-full py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-2">Prêt à recevoir tous les logos foot ?</h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto mb-2">8 600+ logos de football réunis dans un fichier ZIP unique</p>
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            <UIBadge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
              Format PNG
            </UIBadge>
            <UIBadge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
              Haute Qualité
            </UIBadge>
            <UIBadge variant="outline" className="bg-green-50 border-green-200 text-green-700">
              Accès Immédiat
            </UIBadge>
          </div>
        </div>
        
        <div 
          className="relative transition-all duration-300 transform hover:-translate-y-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Additional sparkle effects with different animation durations and positions */}
          <div className="absolute -top-8 -left-10 text-amber-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '3.2s', animationIterationCount: 'infinite', animationDelay: '0.4s' }}>
            <Sparkle className="h-10 w-10" />
          </div>
          <div className="absolute -top-10 left-1/3 text-purple-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '4.1s', animationIterationCount: 'infinite', animationDelay: '0.7s' }}>
            <Sparkle className="h-12 w-12" />
          </div>
          
          {/* Main card component */}
          <Card className="overflow-hidden border-gray-100 bg-white shadow-md hover:shadow-xl transition-all duration-500 rounded-xl border-2 border-gray-50 relative">
            {/* Gold shine effect with pointer-events-none */}
            <div className="gold-shine absolute inset-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/40 pointer-events-none"></div>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-5 md:p-7 md:w-2/3 relative">
                  {/* Nouveau badge "Offre Spéciale" */}
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md transform rotate-3 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-300 text-yellow-300" />
                      OFFRE SPÉCIALE
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 mb-4 border border-purple-200 shadow-sm">
                    <div className="flex">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400 -ml-1" />
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400 -ml-1" />
                    </div>
                    <span className="text-xs font-medium">Collection Premium</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <span className="font-mono bg-clip-text text-black">⦗FRONT-CLOUD⦘</span>
                    <span className="text-black">~ Football.zip</span>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    Découvrez ce pack exclusif de plus de <span className="font-bold text-gray-700">8 600 logos de football</span> en haute qualité, parfaitement organisés pour vos projets.
                  </p>
                  
                  <ul className="space-y-2.5 mb-5 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shadow-sm">
                        <Folder className="h-3 w-3" />
                      </div>
                      <span className="font-medium">8600+ logos PNG de haute qualité</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shadow-sm">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="font-medium">Arborescence claire et organisée</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shadow-sm">
                        <Download className="h-3 w-3" />
                      </div>
                      <span className="font-medium">Téléchargement instantané</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 shadow-sm">
                        <ShieldCheck className="h-3 w-3" />
                      </div>
                      <span className="font-medium">Paiement sécurisé SumUp</span>
                    </li>
                  </ul>
                  
                  {/* Prix avec réduction */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-400 line-through text-sm">49.90€</span>
                    <span className="text-2xl font-bold text-purple-600">9.00€</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded">-82%</span>
                  </div>
                  
                  {/* Buttons with improved click interactions */}
                  <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                    <Button 
                      asChild 
                      className={`bg-purple-600 hover:bg-purple-700 shadow-sm w-full sm:w-auto ${
                        isHovered ? 'animate-pulse' : ''
                      }`}
                      onClick={() => {
                        const returnUrl = `${window.location.origin}/payment-success`;
                        window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
                      }}
                    >
                      <div className="flex items-center justify-center gap-1.5 w-full">
                        <span className="inline-flex items-center justify-center">
                          <Download className="h-4 w-4" />
                        </span>
                        <span>Télécharger maintenant</span>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild 
                      className="border-gray-200 hover:border-gray-300 hover:bg-gray-50 w-full sm:w-auto"
                    >
                      <Link to="/" className="flex items-center justify-center gap-1.5 w-full">
                        <span>En savoir plus</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative overflow-hidden md:w-1/3">
                  <img 
                    src="/lovable-uploads/81f57759-cc4e-457d-a95d-251dfa7958de.png"
                    alt="Collection de logos de clubs de football" 
                    className="h-full w-full object-cover object-center min-h-[220px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-blue-900/30 pointer-events-none"></div>
                  
                  {/* Badge sur l'image */}
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-purple-800 shadow-lg flex items-center gap-1.5">
                      <Badge className="h-3 w-3" />
                      <span>Livraison immédiate</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
