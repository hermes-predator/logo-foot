
import React from 'react';
import { RefreshCcw, Mail } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Footer from "../Footer";

const PricingBlock = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 mb-6 rounded-xl bg-gradient-to-br from-white/98 via-blue-50/70 to-white/98 border border-blue-100/40 shadow-md relative overflow-hidden z-30 hover:shadow-lg transition-shadow duration-300">
        {/* Effet de verre simplifié avec positionnement légèrement plus haut */}
        <div className="absolute inset-0 -top-2 bg-gradient-to-r from-white/90 via-blue-50/20 to-white/90"></div>
        
        {/* Bannière de promotion avec dégradé amélioré et effet lumineux */}
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 py-1.5 text-center rounded-t-xl shadow-sm">
          <div className="flex items-center gap-2 justify-center relative">
            {/* Effet de brillance subtil */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></span>
            <span className="text-blue-900 text-xs font-semibold tracking-wide">Offre promotionnelle</span>
          </div>
        </div>
        
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0 pl-2 md:pl-4 relative z-40 mt-6">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div>
              {/* Prix normal barré avec meilleur contraste */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-500 text-2xl line-through font-medium">50,00€</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-md text-xs font-semibold border border-red-200 shadow-sm">Valeur réelle</span>
              </div>
              
              {/* Nouveau prix avec meilleur contraste */}
              <div className="flex items-center gap-2">
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900">9€</span>
                <div className="flex flex-col items-start ml-2">
                  <span className="text-emerald-600 text-sm font-bold whitespace-nowrap">82% de réduction</span>
                  <span className="text-gray-600 text-sm whitespace-nowrap">TVA incluse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-3 relative z-50">
          <div className="group">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 hover:shadow-sm transition-all duration-300 transform hover:translate-y-[-1px] border border-emerald-200/50 cursor-help">
                  <RefreshCcw className="h-4 w-4 text-emerald-600 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="text-sm whitespace-nowrap text-emerald-800 font-medium">
                    Satisfait ou Remboursé
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="z-[9999] max-w-[300px] p-4 space-y-2 text-sm bg-white border border-gray-200/70 shadow-md rounded-lg">
                <p className="font-semibold text-emerald-700">Votre satisfaction est garantie.</p>
                <div className="space-y-2 text-gray-700">
                  <p>Vous pouvez nous contacter par e-mail dans les 14 jours suivant votre achat.</p>
                  <p>Veuillez noter qu'en matière de produits digitaux, nous n'avons pas d'obligations à proposer un remboursement (CGV).</p>
                  <p>Cependant, si vous estimez que le produit ne vous convient pas, nous pouvons émettre un remboursement intégral, sur simple demande.</p>
                  <div className="mt-4 text-gray-600">
                    <p className="text-sm text-gray-500 mb-2">Pour cela, contactez-nous par e-mail en incluant :</p>
                    <ul className="list-disc ml-4 mt-2 space-y-2 text-gray-500 text-xs">
                      <li>Votre nom et prénom</li>
                      <li>La date et l'heure d'achat</li>
                      <li>Votre preuve d'achat (reçu)</li>
                    </ul>
                    <div className="flex items-center gap-1.5 mt-3 text-gray-600 font-medium justify-center">
                      <Mail className="h-4 w-4" />
                      <a 
                        href="mailto:contact@logo-foot.com" 
                        className="text-blue-600 hover:underline hover:text-blue-700 transition-colors"
                      >
                        contact@logo-foot.com
                      </a>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-[10px] text-gray-400 text-center">
                      Fait référence à l'Article 7 des CGV
                    </p>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingBlock;
