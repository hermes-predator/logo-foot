
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Star, ShieldCheck, Zap, Folder, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogCTA = () => {
  return (
    <section className="w-full py-8">
      <div className="container max-w-4xl mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Prêt à recevoir tous les logos de foot ?</h2>
          <p className="text-gray-500 text-base max-w-3xl mx-auto whitespace-nowrap overflow-hidden text-overflow-ellipsis">Plus de 8 600 logos de football prêts à l'emploi réunie dans un fichier arborescent.</p>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <Card className="overflow-hidden border-gray-100 bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-5 md:p-7 md:w-2/3">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 mb-4">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-400" />
                  <span className="text-xs font-medium">Collection Premium</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className="font-mono">⦗FRONT-CLOUD⦘</span>~ Football.zip
                </h3>
                
                <p className="text-gray-600 text-sm mb-5">
                  Découvrez notre pack exclusif de plus de <span className="font-semibold text-blue-700">8 600 logos</span> de football en haute qualité, 
                  parfaitement organisés. Une mine d'or pour vos projets qui vous apportera beaucoup de confiance.
                </p>
                
                <ul className="space-y-3 mb-5 text-sm">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">Logos PNG avec fond transparent</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">8 600+ ressources de haute qualité</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">Fichier consultable</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">Téléchargement instantané</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    asChild 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto py-1 h-8 text-xs"
                  >
                    <Link to="/">
                      <Download className="h-3.5 w-3.5 mr-0.5" />
                      Démarrer
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    size="sm"
                    className="border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto py-1 h-8 text-xs"
                  >
                    <Link to="/" className="gap-1">
                      En savoir plus
                      <ArrowRight className="h-3.5 w-3.5 ml-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden md:w-1/3">
                <img 
                  src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png"
                  alt="Dossiers de football avec drapeaux de pays" 
                  className="h-full w-full object-cover object-center min-h-[220px] transform hover:scale-105 transition-transform duration-500 cursor-pointer"
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
