
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogCTA = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-blue-50 to-blue-100/50">
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <Card className="overflow-hidden border-blue-100 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 mb-4">
                  <Star className="h-4 w-4 text-blue-500 fill-blue-400" />
                  <span className="text-sm font-medium">Collection Premium</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                  La Plus Grande Collection de Logos de Football
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Découvrez notre pack exclusif de plus de <span className="font-semibold text-blue-700">8 600 logos</span> de football en haute qualité, 
                  parfaitement organisés et prêts à l'emploi pour tous vos projets.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium">Logos PNG avec fond transparent</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium">8 600+ ressources de haute qualité</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600">
                      <Zap className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium">Accès immédiat après achat</span>
                  </li>
                </ul>
                
                <div className="flex gap-4">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link to="/">
                      <Download className="h-4 w-4" />
                      Découvrir l'offre
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    className="border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  >
                    <Link to="/" className="gap-1">
                      En savoir plus
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden md:w-1/3">
                <div 
                  className="h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-500" 
                  style={{ 
                    backgroundImage: "url('/blog-images/260.png')",
                    minHeight: "250px"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-blue-900/30"></div>
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
