import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Folder, ShoppingCart } from 'lucide-react';

const HeroSection = ({ onScrollToPayment }: { onScrollToPayment: () => void }) => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          La Collection Ultime de Logos de Football
        </h1>

        {/* Sous-titre accrocheur */}
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Accédez à plus de 8600 logos de clubs et d'équipes nationales, parfaitement organisés et prêts à l'emploi.
        </p>

        {/* Image mise en avant */}
        <div className="relative w-full max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
            alt="Aperçu de la collection de logos de football"
            className="w-full object-cover object-center"
            width={1200}
            height={600}
          />
        </div>

        {/* CTA buttons - Spacing amélioré */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="group flex items-center gap-3 px-8 py-8 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200/80 hover:border-gray-300 transition-all duration-300 hover:shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 opacity-80"></div>
                <Folder size={28} className="mr-2 text-gray-800 transition-colors duration-300" />
                <span className="relative z-10 font-bold text-[22px] text-gray-800 transition-colors duration-300">Descriptif du ZIP</span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-gray-900">
                  Détails de la Collection de Logos
                </DialogTitle>
                <DialogDescription className="text-gray-700">
                  Explorez le contenu de notre pack exclusif de logos de football.
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ce que vous obtiendrez :
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <span className="font-semibold">Plus de 8600 logos</span> de clubs et d'équipes nationales.
                  </li>
                  <li>
                    <span className="font-semibold">Fichiers PNG haute résolution</span> avec transparence pour une utilisation facile.
                  </li>
                  <li>
                    <span className="font-semibold">Organisation impeccable</span> par pays et par ligue pour une navigation intuitive.
                  </li>
                  <li>
                    <span className="font-semibold">Mises à jour régulières</span> pour intégrer les derniers logos et changements de clubs.
                  </li>
                  <li>
                    <span className="font-semibold">Licence commerciale incluse</span> pour une utilisation sur vos projets personnels et professionnels.
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-3">
                  Aperçu des Catégories :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                    <h4 className="font-semibold text-gray-700">
                      Ligues Européennes
                    </h4>
                    <p className="text-sm text-gray-600">
                      Logos de la Premier League, Liga, Serie A, Bundesliga, Ligue 1, et bien d'autres.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                    <h4 className="font-semibold text-gray-700">
                      Équipes Nationales
                    </h4>
                    <p className="text-sm text-gray-600">
                      Logos de toutes les équipes nationales participant aux compétitions internationales.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                    <h4 className="font-semibold text-gray-700">
                      Clubs Américains
                    </h4>
                    <p className="text-sm text-gray-600">
                      Logos des clubs de la MLS et d'autres ligues nord-américaines.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                    <h4 className="font-semibold text-gray-700">
                      Autres Ligues Mondiales
                    </h4>
                    <p className="text-sm text-gray-600">
                      Logos des ligues d'Asie, d'Afrique, d'Océanie et d'Amérique du Sud.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const returnUrl = `${window.location.origin}/payment-success`;
                  window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
                }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-[22px] gap-5 hover:-translate-y-0.5 px-8 py-8 h-auto relative group overflow-hidden"
              >
                {/* Outer glow animation - Améliorée */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-yellow-300/30 to-amber-400/30 rounded-md blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ animation: 'pulse 2s ease-in-out infinite' }}></div>

                <div className="relative">
                  <ShoppingCart 
                    style={{
                      color: "#FFE082",
                      filter: 'drop-shadow(0 0 4px rgba(255, 224, 130, 0.8))',
                      animation: 'cartMove 1.5s ease-in-out infinite',
                      width: '26px',
                      height: '26px',
                      transform: 'scale(1.1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                
                <span className="relative z-10 font-bold tracking-wide">
                  Achat rapide ~ 9€
                </span>
                
                {/* Shine effect - Amélioré */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-50 group-hover:animate-shine" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Paiement sécurisé via SumUp</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
