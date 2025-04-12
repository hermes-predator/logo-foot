
import React from 'react';
import { RefreshCcw } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingBlock = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 mb-6 rounded-xl bg-white border border-blue-200/60 shadow-md relative overflow-hidden -mt-4">
      {/* Effet de verre simplifié avec positionnement légèrement plus haut */}
      <div className="absolute inset-0 -top-2 bg-gradient-to-r from-blue-50/40 to-white/90"></div>
      
      <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0 pl-2 md:pl-4 relative z-10">
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
      
      <div className="flex flex-col md:flex-row items-center gap-3 relative z-10">
        <div className="group">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 hover:shadow-sm transition-all duration-300 transform hover:translate-y-[-1px] border border-emerald-200/50">
                <RefreshCcw className="h-4 w-4 text-emerald-600 group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-sm whitespace-nowrap text-emerald-800 font-medium">
                  Satisfait ou remboursé
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-[300px] p-4 space-y-2 text-sm bg-white border border-gray-200/70 shadow-md rounded-lg">
              <p className="font-semibold text-emerald-700">Votre satisfaction est notre engagement.</p>
              <div className="space-y-2 text-gray-700">
                <p>14 jours pour vous convaincre. Si notre collection ne répond pas à vos attentes, nous vous remboursons intégralement.</p>
                <p>🔒 Processus simple et transparent.</p>
                <p>💡 Parce que votre confiance est notre priorité absolue.</p>
                <div className="mt-4 text-gray-600 text-[13px] border-t border-gray-100 pt-2">
                  <p className="font-semibold mb-1">Pour un remboursement :</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Contactez contact@logo-foot.com</li>
                    <li>Incluez votre nom et date d'achat</li>
                    <li>Joignez votre preuve d'achat</li>
                  </ul>
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
