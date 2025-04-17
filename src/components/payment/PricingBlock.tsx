
import React from 'react';
import { RefreshCcw, Mail } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingBlock = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 mb-6 rounded-xl bg-white border border-border shadow-md relative overflow-hidden -mt-4 z-30">
      {/* Effet de verre simplifié avec positionnement légèrement plus haut */}
      <div className="absolute inset-0 -top-2 bg-gradient-to-r from-primary/5 to-white/90"></div>
      
      <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0 pl-2 md:pl-4 relative z-40">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div>
            {/* Prix normal barré avec meilleur contraste */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-500 text-2xl line-through font-medium">50,00€</span>
              <span className="bg-error/10 text-error px-2 py-0.5 rounded-md text-xs font-semibold border border-error/20 shadow-sm">Valeur réelle</span>
            </div>
            
            {/* Nouveau prix avec meilleur contraste */}
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-extrabold text-text-primary">9€</span>
              <div className="flex flex-col items-start ml-2">
                <span className="text-success text-sm font-bold whitespace-nowrap">82% de réduction</span>
                <span className="text-text-secondary text-sm whitespace-nowrap">TVA incluse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-3 relative z-50">
        <div className="group">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-success/10 to-success/20 hover:from-success/20 hover:to-success/30 hover:shadow-sm transition-all duration-300 transform hover:translate-y-[-1px] border border-success/20">
                <RefreshCcw className="h-4 w-4 text-success group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-sm whitespace-nowrap text-success font-medium">
                  Satisfait ou Remboursé
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="z-[9999] max-w-[300px] p-4 space-y-2 text-sm bg-white border border-gray-200/70 shadow-md rounded-lg">
              <p className="font-semibold text-success">Votre satisfaction est garantie.</p>
              <div className="space-y-2 text-gray-700">
                <p>Si vous êtes insatisfait, contactez-nous dans les 14 jours suivant votre achat.</p>
                <p>Veuillez noter qu'en matière de produits digitaux, nous n'avons pas d'obligations à proposer un retour.</p>
                <p>Cependant, si vous considérez que le produit ne vous convient pas, nous pouvons émettre un ordre de remboursement intégral sur demande.</p>
                <div className="mt-4 text-gray-600">
                  <p className="text-sm text-gray-500 mb-2">Pour cela, contactez-nous par email en incluant :</p>
                  <ul className="list-disc ml-4 mt-2 space-y-2 text-gray-500 text-sm">
                    <li>Votre nom et prénom</li>
                    <li>La date et l'heure d'achat</li>
                    <li>Votre preuve d'achat (reçu)</li>
                  </ul>
                  <div className="flex items-center gap-1.5 mt-3 text-gray-600 font-medium">
                    <Mail className="h-4 w-4" />
                    <a 
                      href="mailto:contact@logo-foot.com" 
                      className="text-primary hover:underline hover:text-primary-dark transition-colors"
                    >
                      contact@logo-foot.com
                    </a>
                  </div>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default PricingBlock;
