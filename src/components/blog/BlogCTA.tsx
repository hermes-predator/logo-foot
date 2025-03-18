import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Star, Folder, Check, Sparkle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogCTA = () => {
  return (
    <section className="w-full py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-3">Prêt à recevoir tous les logos foot ?</h2>
          <p className="text-gray-500 text-base max-w-3xl mx-auto whitespace-nowrap overflow-hidden text-overflow-ellipsis">8 600+ logos de football réunie dans un fichier ZIP unique</p>
        </div>
        
      <div className="relative hover:-translate-y-2 transition-transform duration-300">
        {/* Additional sparkle effects with varied animations */}
        <div className="absolute -top-8 right-12 text-blue-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute -top-4 left-1/4 text-purple-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute -top-6 left-1/2 text-pink-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '2.8s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="absolute top-1/2 -left-8 text-amber-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '3.5s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute bottom-0 right-1/4 text-purple-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-1/3 -right-6 text-blue-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '2.5s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute bottom-1/4 -left-4 text-amber-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '4.5s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-1/4 left-0 text-indigo-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '3.2s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="absolute bottom-1/3 right-0 text-rose-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '3.8s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-7 w-7" />
        </div>
        <div className="absolute -bottom-6 right-1/3 text-cyan-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '3.3s', animationIterationCount: 'infinite' }}>
          <Sparkles className="h-6 w-6" />
        </div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 animate-pulse pointer-events-none" 
             style={{
               background: 'radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
               filter: 'blur(40px)',
             }}></div>
        
        {/* Decorative elements with animation */}
        <div className="absolute -top-4 -right-4 text-blue-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}>
          <Sparkle className="h-12 w-12" />
        </div>
        <div className="absolute -bottom-4 -left-4 text-blue-400 opacity-20 animate-ping pointer-events-none" 
             style={{ animationDuration: '4s', animationIterationCount: 'infinite', animationDelay: '1s' }}>
          <Sparkle className="h-12 w-12" />
        </div>
        
        {/* Main card component */}
        <Card className="overflow-hidden border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl border-2 border-gray-50 relative">
          {/* Gold shine effect with pointer-events-none */}
          <div className="gold-shine absolute inset-0 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/40 pointer-events-none"></div>
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-5 md:p-7 md:w-2/3 relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-800 mb-4 border border-gray-200 shadow-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium">Collection Premium</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className="font-mono bg-clip-text text-black">⦗FRONT-CLOUD⦘</span>
                  <span className="text-black">~ Football.zip</span>
                </h3>
                
                <p className="text-gray-600 text-sm mb-5">
                  Découvrez ce pack exclusif de plus de <span className="font-bold text-gray-700">8 600 logos de football</span> en haute qualité, parfaitement organisés.
                </p>
                
                <ul className="space-y-3 mb-5 text-sm">
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
                    <span className="font-medium">Fichier consultable</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shadow-sm">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">Téléchargement instantané</span>
                  </li>
                </ul>
                
                {/* Buttons with improved click interactions */}
                <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                  <Button 
                    asChild 
                    className="bg-blue-600 hover:bg-blue-700 shadow-sm w-full sm:w-auto"
                  >
                    <Link to="/" className="flex items-center justify-center gap-1.5 w-full">
                      <span className="inline-flex items-center justify-center">
                        <Download className="h-4 w-4 animate-bounce" />
                      </span>
                      <span>Démarrer</span>
                    </Link>
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
                  src="/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png"
                  alt="Collection de logos de clubs de football" 
                  className="h-full w-full object-cover object-center min-h-[220px]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-blue-900/30 pointer-events-none"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogCTA;
