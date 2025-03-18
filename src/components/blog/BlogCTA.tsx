
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Star, Folder, Check, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogCTA = () => {
  return (
    <section className="w-full py-12">
      <div className="container max-w-4xl mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-3">Prêt à recevoir tous les logos de foot ?</h2>
          <p className="text-gray-500 text-base max-w-3xl mx-auto whitespace-nowrap overflow-hidden text-overflow-ellipsis">8 600+ logos de football réunie dans un fichier ZIP unique.</p>
        </div>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 animate-pulse" 
             style={{
               background: 'radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
               filter: 'blur(40px)',
             }}></div>
        
        {/* Decorative elements with animation */}
        <div className="absolute -top-4 -right-4 text-blue-400 opacity-20 animate-ping" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}>
          <Sparkle className="h-12 w-12" />
        </div>
        <div className="absolute -bottom-4 -left-4 text-blue-400 opacity-20 animate-ping" style={{ animationDuration: '4s', animationIterationCount: 'infinite', animationDelay: '1s' }}>
          <Sparkle className="h-12 w-12" />
        </div>
        
        {/* Enhanced card with gold shine effect, animations, shadow and border effects */}
        <Card className="gold-shine overflow-hidden border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl border-2 border-gray-50 hover:border-blue-100 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/40 pointer-events-none"></div>
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-5 md:p-7 md:w-2/3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 mb-4 border border-amber-100 shadow-sm">
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
                  <span className="text-xs font-medium">Collection Premium</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group">
                  <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">⦗FRONT-CLOUD⦘</span>
                  <span className="group-hover:text-blue-600 transition-colors duration-300">~ Football.zip</span>
                </h3>
                
                <p className="text-gray-600 text-sm mb-5">
                  Découvrez notre pack exclusif de plus de <span className="font-bold text-gray-700">8 600 logos de football</span> en haute qualité, parfaitement organisés.
                </p>
                
                <ul className="space-y-3 mb-5 text-sm">
                  <li className="flex items-center gap-2 text-gray-700 hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shadow-sm">
                      <Folder className="h-3 w-3" />
                    </div>
                    <span className="font-medium">8600+ logos PNG de haute qualité</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shadow-sm">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">Fichier consultable</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shadow-sm">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">Téléchargement instantané</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    asChild 
                    size="default"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto relative overflow-hidden group"
                  >
                    <Link to="/">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                      <Download className="h-4 w-4 mr-0.5 group-hover:animate-bounce" style={{ animationDuration: '1s' }} />
                      Démarrer
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    size="default"
                    className="border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto group"
                  >
                    <Link to="/" className="gap-0.5">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 ml-0.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden md:w-1/3 group cursor-pointer">
                <img 
                  src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png"
                  alt="Dossiers de football avec drapeaux de pays" 
                  className="h-full w-full object-cover object-center min-h-[220px] transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-blue-900/30 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-blue-900/70 rounded-full backdrop-blur-sm">Aperçu</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogCTA;
