
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Info, Check, Folder } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const DisclaimerDialog = () => {
  const isMobile = useIsMobile();
  
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
        <AlertTriangle className="w-4 h-4" />
        Disclaimer
      </DialogTrigger>
      <DialogContent className={`max-w-2xl ${isMobile ? 'max-h-[90vh] px-4' : 'max-h-[80vh]'} overflow-y-auto bg-gradient-to-b from-white to-gray-50 shadow-xl border-0`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            Disclaimer
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="mt-4 p-5 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="bg-transparent p-3 rounded-md border border-gray-200 shadow-sm flex-shrink-0 group-hover:bg-blue-100/30 transition-colors">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
              </div>
              <div className="text-sm leading-relaxed text-gray-700 space-y-6">
                <p>
                  Ce fichier a pour but de faire gagner du temps aux internautes en regroupant, organisant et rendant accessibles des ressources éparses à des fins de consultation, d'inspiration ou de création personnelle.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-5 border border-gray-200/50 bg-gradient-to-br from-gray-50 to-slate-50/50 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="bg-transparent p-3 rounded-md border border-gray-200 shadow-sm flex-shrink-0 group-hover:bg-blue-100/30 transition-colors">
                <Folder className="w-6 h-6 text-blue-600 flex-shrink-0" />
              </div>
              <div className="text-sm leading-relaxed text-gray-800 space-y-6">
                <p>
                  Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives.
                </p>

                <div className="bg-gradient-to-r from-slate-100 to-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-800">⦗FRONT-CLOUD⦘~ Football.zip</span>
                  <p className="mt-2 text-gray-700 text-xs sm:text-sm">
                    <div className="flex items-start gap-2 mb-3 group hover:bg-white/80 rounded-md p-2 transition-colors">
                      <div className="bg-transparent p-1.5 rounded-md border border-gray-200 shadow-sm group-hover:bg-blue-100/30 transition-colors">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                      </div>
                      <span>Une ressource indépendante, compilée et organisée.</span>
                    </div>
                    
                    <div className="flex items-start gap-2 group hover:bg-white/80 rounded-md p-2 transition-colors">
                      <div className="bg-transparent p-1.5 rounded-md border border-gray-200 shadow-sm group-hover:bg-blue-100/30 transition-colors">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                      </div>
                      <span>Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog;
