
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogCTA = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Voulez-vous recevoir tous les logos de foot en un coup ?</h2>
          <p className="text-gray-500 max-w-2xl">Plus de 8 600 logos de football prêts à l'emploi, organisés par pays et compétitions</p>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <Card className="overflow-hidden border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 mb-4 hover:bg-gray-200 transition-colors">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-400" />
                  <span className="text-sm font-medium">Collection Premium</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  <span className="font-mono">⦗FRONT-CLOUD⦘</span>~ Football.zip
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Découvrez notre pack exclusif de plus de <span className="font-semibold text-blue-700">8 600 logos</span> de football en haute qualité, 
                  parfaitement organisés et prêts à l'emploi pour tous vos projets.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700 group cursor-pointer">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="font-medium group-hover:text-blue-700 transition-colors">Logos PNG avec fond transparent</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 group cursor-pointer">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="font-medium group-hover:text-blue-700 transition-colors">8 600+ ressources de haute qualité</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 group cursor-pointer">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="font-medium group-hover:text-blue-700 transition-colors">Accès immédiat après achat</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    <Link to="/">
                      <Download className="h-4 w-4 mr-2" />
                      Découvrir l'offre
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    size="lg"
                    className="border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Link to="/" className="gap-1">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden md:w-1/3">
                <div 
                  className="h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-500 cursor-pointer" 
                  style={{ 
                    backgroundImage: "url('/blog-images/260.png')",
                    minHeight: "300px"
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
