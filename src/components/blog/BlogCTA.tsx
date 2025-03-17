
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogCTA = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-50/30 to-purple-50/30">
      <Card className="max-w-4xl mx-auto overflow-hidden border-purple-100 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:p-8 md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                La Plus Grande Collection de Logos de Football
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez notre pack exclusif de plus de 8 600 logos de football en haute qualité, 
                parfaitement organisés et prêts à l'emploi pour tous vos projets.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span> 
                  Logos PNG avec fond transparent
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span> 
                  8 600+ ressources de haute qualité
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span> 
                  Accès immédiat après achat
                </li>
              </ul>
              <div className="flex gap-4">
                <Button asChild className="gap-2">
                  <Link to="/">
                    <Download className="h-4 w-4" />
                    Découvrir l'offre
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/" className="gap-1">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden md:w-1/3">
              <div 
                className="h-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('/blog-images/260.png')",
                  minHeight: "200px"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-900/20"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BlogCTA;
