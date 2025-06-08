import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Rocket, Eye } from 'lucide-react';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 opacity-80"></div>
      
      <div className="absolute top-20 left-10 animate-floating">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-40 right-20 animate-floating" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-floating" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* title and subtitle */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
            La Collection Ultime de Logos de Football
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Plus de <span className="font-bold text-blue-600">8600 logos</span> en haute qualité • 
            Clubs du monde entier • Équipes nationales • Compétitions internationales
          </p>

          {/* image section with badge and dialog */}
          <div className="mb-12 relative">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png" 
                alt="Collection de logos de football"
                className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto border-4 border-white/20"
                style={{ maxHeight: '400px' }}
              />
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse shadow-lg">
                🔥 Offre Spéciale
              </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="mt-6 px-12 py-6 text-lg font-semibold bg-white/80 hover:bg-white border-2 border-blue-300 hover:border-blue-500 text-blue-700 hover:text-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Eye className="mr-3 h-6 w-6" />
                  Descriptif du ZIP
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-auto">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Aperçu du contenu du pack
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-gray-800">Structure des dossiers</h4>
                      <img 
                        src="/lovable-uploads/473f7b51-aeab-46c6-8dae-ae1850e2f111.png" 
                        alt="Structure des dossiers par pays"
                        className="rounded-lg shadow-md w-full"
                      />
                      <p className="text-sm text-gray-600">
                        Organisation claire par pays et compétitions
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-gray-800">Exemples de logos</h4>
                      <img 
                        src="/lovable-uploads/741e3db9-8eff-4573-958f-1c6ddb91066a.png" 
                        alt="Exemples de logos de clubs"
                        className="rounded-lg shadow-md w-full"
                      />
                      <p className="text-sm text-gray-600">
                        Logos haute qualité en format PNG transparent
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* CTA button and features section */}
          <div className="mb-12">
            <Button 
              onClick={onScrollToPayment}
              size="lg"
              className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              <Rocket className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">Achat rapide - 29,90€</span>
            </Button>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Pourquoi choisir notre collection ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Collection Complète</h3>
                <p className="text-gray-600">
                  Plus de 8600 logos organisés par pays et compétitions
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Accès Immédiat</h3>
                <p className="text-gray-600">
                  Téléchargement instantané après achat via Google Drive
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Qualité Premium</h3>
                <p className="text-gray-600">
                  Fichiers PNG haute résolution avec fond transparent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
