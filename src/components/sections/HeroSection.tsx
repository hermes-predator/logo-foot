import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
          La Collection Ultime de Logos de Football
        </h1>

        {/* Sous-titre accrocheur */}
        <p className="text-lg md:text-xl text-center text-gray-700 mb-8">
          Accédez à plus de 8600 logos de clubs et d'équipes nationales, parfaitement organisés et prêts à l'emploi.
        </p>

        {/* Image mise en avant */}
        <div className="relative mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl max-w-4xl">
          <img
            src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
            alt="Collection de logos de football"
            className="w-full object-cover aspect-video"
          />
          {/* Badge promotionnel */}
          <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-full shadow-md">
            🔥 Offre Spéciale
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Voir un exemple
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Exemple de logo</AlertDialogTitle>
                <AlertDialogDescription>
                  Voici un aperçu de la qualité et de l'organisation de nos logos.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <img
                    src="/lovable-uploads/0399f94b-9568-476d-89aa-19f959c74906.png"
                    alt="Logo 1"
                    className="rounded-md"
                  />
                  <img
                    src="/lovable-uploads/18975471-575a-4ea5-a949-596494a56607.png"
                    alt="Logo 2"
                    className="rounded-md"
                  />
                </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Fermer</AlertDialogCancel>
                <AlertDialogAction>Télécharger</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button 
            onClick={onScrollToPayment}
            size="lg"
            className="w-full sm:w-auto px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-50 group-hover:animate-shine"></div>
            <span className="relative z-10 text-white">Achat rapide (9€)</span>
            <Rocket className="ml-2 h-6 w-6 relative z-10" />
          </Button>
        </div>

        {/* Proposition de valeur unique */}
        <div className="mt-12 py-6 border-t border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Pourquoi choisir notre collection ?
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li>✅ Plus de 8600 logos de football en haute qualité</li>
            <li>✅ Clubs de Ligue 1, Premier League, Liga, Serie A, Bundesliga et équipes nationales</li>
            <li>✅ Fichiers organisés par pays pour une navigation facile</li>
            <li>✅ Mises à jour régulières pour inclure les derniers logos</li>
            <li>✅ Licence commerciale incluse</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
