
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DisclaimerDialog = () => (
  <Dialog>
    <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
      <AlertTriangle className="w-4 h-4" />
      Disclaimer
    </DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-amber-800">Disclaimer</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <div className="mt-4 p-6 border-2 border-amber-200/50 bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-xl shadow-inner">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div className="text-sm leading-relaxed text-amber-900/90 space-y-6">
              <p>
                Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives.
              </p>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-amber-600 before:font-bold before:text-lg">
                  <span className="font-semibold text-amber-800">⦗FRONT-CLOUD⦘~ Football.zip</span>
                  <p className="mt-1 text-amber-900/80">
                    • Une ressource indépendante, compilée et organisée à des fins d'archivage, de culture visuelle et de création.
                    
                    <br /><br />
                    • Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200/30" />

        <div className="mt-4 p-6 border-2 border-white/20 bg-white rounded-xl shadow-inner">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
            <div className="text-sm leading-relaxed text-gray-800/90 space-y-6">
              <p>
                Ce fichier a pour objectif de faire gagner du temps aux internautes en regroupant, organisant et rendant accessibles des ressources éparses à des fins de consultation, d'inspiration ou de création personnelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default DisclaimerDialog;
