
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
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Prêt à recevoir tous les logos de foot ?</h2>
          <p className="text-gray-500 max-w-2xl">Plus de 8 600 logos de football prêts à l'emploi réunie dans un seul fichier arborescent.</p>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <Card className="overflow-hidden border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 mb-4">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-400" />
                  <span className="text-sm font-medium">Collection Premium</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  <span className="font-mono">⦗FRONT-CLOUD⦘</span>~ Football.zip
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Découvrez notre pack exclusif de plus de <span className="font-semibold text-blue-700">8 600 logos</span> de football en haute qualité, 
                  parfaitement organisés. Une mine d'or pour vos projets qui vous apportera beaucoup de confiance.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Logos PNG avec fond transparent</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="font-medium">8 600+ ressources de haute qualité</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Téléchargement instantané</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto py-1.5 h-9"
                  >
                    <Link to="/">
                      <Download className="h-4 w-4 mr-0.5" />
                      Démarrer
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    size="sm"
                    className="border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto py-1.5 h-9"
                  >
                    <Link to="/" className="gap-1">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 ml-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden md:w-1/3">
                {/* Remplacer le div avec background-image par une balise img pour s'assurer que l'image s'affiche */}
                <img 
                  src="/lovable-uploads/a6bda7df-8f91-4102-a645-a9e7d735ffca.png"
                  alt="Exemple de logos de football" 
                  className="h-full w-full object-cover object-center min-h-[300px] transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-blue-900/30"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogCTA;
