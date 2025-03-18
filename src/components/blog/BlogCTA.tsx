
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Star, Folder, Check, Sparkle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogCTA = () => {
  return (
    <section className="w-full py-12 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-purple-50/30 to-amber-50/40 animate-gradient-x"></div>
      
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-violet-100 text-blue-800 rounded-full mb-3 border border-blue-200/50 shadow-sm">
            Collection Premium
          </span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-3">
            Prêt à recevoir tous les logos foot ?
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            8 600+ logos de football réunie dans un fichier ZIP unique
          </p>
        </div>
        
        <div className="relative hover:-translate-y-2 transition-transform duration-300">
          {/* Enhanced sparkle effects with more variety */}
          {/* Top area sparkles */}
          <div className="absolute -top-8 -left-10 text-amber-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '3.2s', animationIterationCount: 'infinite', animationDelay: '0.4s' }}>
            <Sparkle className="h-10 w-10" />
          </div>
          <div className="absolute -top-16 left-1/5 text-blue-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '5.1s', animationIterationCount: 'infinite', animationDelay: '0.2s' }}>
            <Sparkle className="h-16 w-16" />
          </div>
          <div className="absolute -top-10 left-1/3 text-purple-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '4.1s', animationIterationCount: 'infinite', animationDelay: '0.7s' }}>
            <Sparkle className="h-12 w-12" />
          </div>
          <div className="absolute -top-12 right-1/4 text-blue-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '3.7s', animationIterationCount: 'infinite', animationDelay: '1.2s' }}>
            <Sparkle className="h-8 w-8" />
          </div>
          <div className="absolute -top-14 right-1/6 text-pink-500 opacity-20 animate-ping pointer-events-none" 
               style={{ animationDuration: '3.9s', animationIterationCount: 'infinite', animationDelay: '1.7s' }}>
            <Sparkle className="h-14 w-14" />
          </div>
          <div className="absolute -top-6 -right-14 text-teal-500 opacity-20 animate-ping pointer-events-none" 
               style={{ animationDuration: '4.8s', animationIterationCount: 'infinite', animationDelay: '0.9s' }}>
            <Sparkle className="h-12 w-12" />
          </div>
          
          {/* Bottom area sparkles */}
          <div className="absolute -bottom-10 -right-6 text-amber-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '4.3s', animationIterationCount: 'infinite', animationDelay: '0.3s' }}>
            <Sparkle className="h-10 w-10" />
          </div>
          <div className="absolute -bottom-8 left-1/4 text-purple-500 opacity-30 animate-ping pointer-events-none" 
               style={{ animationDuration: '3.5s', animationIterationCount: 'infinite', animationDelay: '1.5s' }}>
            <Sparkle className="h-8 w-8" />
          </div>
          <div className="absolute -bottom-16 left-1/2 text-indigo-500 opacity-25 animate-ping pointer-events-none" 
               style={{ animationDuration: '5.2s', animationIterationCount: 'infinite', animationDelay: '0.8s' }}>
            <Sparkle className="h-16 w-16" />
          </div>
          <div className="absolute -bottom-12 right-1/3 text-green-500 opacity-20 animate-ping pointer-events-none" 
               style={{ animationDuration: '4.7s', animationIterationCount: 'infinite', animationDelay: '1.1s' }}>
            <Sparkle className="h-14 w-14" />
          </div>
          
          {/* Sparkle clusters */}
          <div className="absolute -top-8 right-12 text-blue-400 opacity-20 animate-ping pointer-events-none" 
               style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}>
            <Sparkles className="h-8 w-8" />
          </div>
          <div className="absolute -top-4 left-1/4 text-purple-400 opacity-20 animate-ping pointer-events-none" 
               style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}>
            <Sparkles className="h-8 w-8" />
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
          <div className="absolute top-1/4 left-1/3 text-cyan-400 opacity-15 animate-ping pointer-events-none" 
               style={{ animationDuration: '3.3s', animationIterationCount: 'infinite', animationDelay: '1.3s' }}>
            <Sparkles className="h-10 w-10" />
          </div>
          <div className="absolute bottom-1/3 right-1/5 text-emerald-400 opacity-15 animate-ping pointer-events-none" 
               style={{ animationDuration: '3.8s', animationIterationCount: 'infinite', animationDelay: '0.6s' }}>
            <Sparkles className="h-10 w-10" />
          </div>
          
          {/* Extra large sparkles at corners */}
          <div className="absolute -top-16 -left-16 text-amber-300 opacity-20 animate-ping pointer-events-none" 
               style={{ animationDuration: '5s', animationIterationCount: 'infinite', animationDelay: '1s' }}>
            <Sparkles className="h-16 w-16" />
          </div>
          <div className="absolute -bottom-16 -right-16 text-blue-300 opacity-20 animate-ping pointer-events-none" 
               style={{ animationDuration: '5.5s', animationIterationCount: 'infinite', animationDelay: '0.5s' }}>
            <Sparkles className="h-16 w-16" />
          </div>
          <div className="absolute -top-20 right-1/4 text-violet-300 opacity-15 animate-ping pointer-events-none" 
               style={{ animationDuration: '6s', animationIterationCount: 'infinite', animationDelay: '1.2s' }}>
            <Sparkles className="h-20 w-20" />
          </div>
          <div className="absolute -bottom-20 left-1/3 text-rose-300 opacity-15 animate-ping pointer-events-none" 
               style={{ animationDuration: '5.8s', animationIterationCount: 'infinite', animationDelay: '0.7s' }}>
            <Sparkles className="h-20 w-20" />
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
          
          {/* Main card component with enhanced styling */}
          <Card className="overflow-hidden border-gray-100 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl border border-blue-100/50 relative">
            {/* Enhanced shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/10 via-white/30 to-purple-50/10 opacity-50 pointer-events-none"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-pink-100/20 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>
            
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-5 md:p-7 md:w-2/3 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 mb-4 border border-amber-200/50 shadow-sm">
                    <div className="flex">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
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
                  
                  {/* Enhanced buttons with improved hover effects */}
                  <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                    <Button 
                      asChild 
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg w-full sm:w-auto transition-all duration-300"
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
                      className="border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 w-full sm:w-auto transition-all duration-300"
                    >
                      <Link to="/" className="flex items-center justify-center gap-1.5 w-full group">
                        <span>En savoir plus</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative overflow-hidden md:w-1/3">
                  <img 
                    src="/lovable-uploads/81f57759-cc4e-457d-a95d-251dfa7958de.png"
                    alt="Collection de logos de clubs de football" 
                    className="h-full w-full object-cover object-center min-h-[220px] transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-blue-900/30 pointer-events-none"></div>
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
