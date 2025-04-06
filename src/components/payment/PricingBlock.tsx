
import React from 'react';
import { RefreshCcw, Users } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingBlock = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 mb-6 rounded-xl bg-gradient-to-r from-blue-50 via-blue-50/90 to-sky-50 border border-blue-200 shadow-inner relative overflow-hidden">
      {/* Effet de brillance renforcé */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
      
      <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div>
            {/* Prix normal barré - Modifié pour un meilleur contraste */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-500 text-lg line-through font-medium">50,00€</span>
              <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-md text-xs font-semibold border border-red-200">Valeur réelle</span>
            </div>
            
            {/* Nouveau prix mis en valeur avec meilleur contraste */}
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-sm">8€</span>
              <div className="flex flex-col items-start ml-2">
                <span className="text-green-700 text-sm font-semibold whitespace-nowrap">84% de réduction</span>
                <span className="text-gray-500 text-sm whitespace-nowrap">TVA incluse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-100 hover:bg-green-200 hover:shadow-md transition-all duration-300 transform hover:translate-y-[-1px] mb-2">
              <RefreshCcw className="h-4 w-4 text-emerald-600 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm whitespace-nowrap text-emerald-700 font-medium">
                Satisfait ou remboursé
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-[300px] p-4 space-y-2 text-sm bg-white border border-gray-100 shadow-lg rounded-lg">
            <p className="font-semibold text-emerald-700">Votre satisfaction est importante.</p>
            <div className="space-y-2 text-gray-600">
              <p>Si vous n'êtes pas satisfait, contactez-nous dans les 14 jours suivant votre achat.</p>
              <p>Veuillez noter qu'en matière de produits digitaux, nous n'avons pas d'obligations à vous proposer un retour.</p>
              <p>Cependant, si vous considérez que le produit ne vous convient pas, nous pouvons émettre un ordre de remboursement intégral sur demande.</p>
              <p className="mt-4 text-gray-500 text-[13px]">
                Pour cela, contactez-nous par email "contact@logo-foot.com" en mentionnant :
                <ul className="list-disc ml-4 mt-1 space-y-1">
                  <li>Votre nom et prénom</li>
                  <li>La date et l'heure d'achat</li>
                  <li>Une preuve d'achat</li>
                </ul>
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
        
        {/* Nouvelle mention des utilisateurs satisfaits */}
        <div className="flex items-center gap-1.5 text-sm text-gray-600">
          <Users className="h-3.5 w-3.5 text-blue-600" />
          <span>Plus de 25 000 utilisateurs satisfaits</span>
        </div>
      </div>
    </div>
  );
};

export default PricingBlock;
