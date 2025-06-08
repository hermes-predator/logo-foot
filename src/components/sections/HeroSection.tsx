import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import PackDescription from './PackDescription';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FileArchive } from 'lucide-react';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-6 md:mb-8">
          La plus grande collection de logos de football en haute qualité
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-center text-gray-700 mb-8 md:mb-12">
          Accédez à plus de 8600 logos de clubs et d'équipes nationales, parfaitement organisés et prêts à l'emploi.
        </p>

        {/* Illustration principale */}
        <div className="relative mb-8 md:mb-12">
          <img
            src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
            alt="Collection de logos de football"
            className="w-full rounded-2xl shadow-lg"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
        </div>

        {/* Badge Google Drive */}
        <div className="flex items-center justify-center mb-6">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <GoogleDriveBadge cursorHelp={true} alwaysEnlarged={true} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-gradient-to-b from-gray-50 to-white border border-blue-100/40 p-3 max-w-[350px] rounded-lg shadow-lg" side="bottom" align="center" sideOffset={5}>
                <p className="text-gray-700 font-bold text-sm mb-1">Utilisation immédiate</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ce fichier est parfaitement organisé et immédiatement utilisable. Vous pouvez le stocker directement sur votre Google Drive, votre ordinateur, votre disque dur et l'utiliser tel quel, sans aucune autre modification.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-gradient-to-r from-gray-50 to-white border-gray-200/80 hover:border-gray-300 hover:shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 opacity-80"></div>
                <span className="relative z-10 text-gray-800">Descriptif du ZIP</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
              <DialogHeader className="pb-0">
                <div className="flex flex-col mb-0">
                  <DialogTitle className="text-2xl font-bold text-black text-left mb-0">
                    Descriptif du ZIP
                  </DialogTitle>
                  
                  <div className="relative mt-1 mb-1">
                    <span className="text-sm font-mono tracking-tight bg-gray-800 px-3 py-1 rounded text-gray-100 inline-block relative shadow-sm">
                      ⦗FRONT-CLOUD⦘~ Football.zip
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="mt-4">
                    <GoogleDriveBadge />
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button onClick={() => {
                    const returnUrl = `${window.location.origin}/payment-success`;
                    window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
                  }} className="h-8 px-4 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 rounded text-xs font-medium flex items-center gap-1.5 mt-4">
                        <FileArchive className="h-3.5 w-3.5" />
                        <span>Télécharger ce fichier (9€)</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="end" className="max-w-[180px] text-center">
                      <p className="text-xs">Accès immédiat après paiement</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                <DialogDescription className="text-left pt-0 mt-0">
                  <PackDescription />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button 
            onClick={onScrollToPayment}
            size="lg"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 text-white">Achat rapide (9€)</span>
          </Button>
        </div>

        {/* Proposition de valeur unique */}
        <div className="bg-blue-50 rounded-2xl shadow-md p-6 md:p-8 mt-10">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="text-blue-600 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold text-blue-800">Pourquoi choisir notre collection ?</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Qualité supérieure : Logos haute résolution, adaptés à tous vos projets.</li>
            <li>Organisation impeccable : Fichiers classés par pays et par club pour une navigation facile.</li>
            <li>Gain de temps : Accédez instantanément à la plus grande base de données de logos de football.</li>
            <li>Mises à jour régulières : Collection constamment enrichie avec les derniers logos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
