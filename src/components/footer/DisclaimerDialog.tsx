import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DisclaimerDialog = () => (
  <Dialog>
    <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
      <AlertTriangle className="w-4 h-4" />
      Disclaimer
    </DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
      <div className="mt-4 p-6 border-2 border-amber-200/50 bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-xl shadow-inner">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div className="text-sm leading-relaxed text-amber-900/90 space-y-6">
            <p>
              Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives.
            </p>

            <p>
              ⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante, compilée et organisée à des fins d'archivage, de culture visuelle et de création.
            </p>

            <p>
              Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.
            </p>

            <p>
              Nous ne revendiquons aucune affiliation, partenariat ou validation de la part des clubs, compétitions ou organisations citées ou représentées.
            </p>

            <Separator className="my-6 bg-amber-200/30" />

            <div className="bg-amber-100/50 backdrop-blur-sm p-4 rounded-lg border border-amber-200/50 shadow-sm -ml-10 -mr-1">
              <p className="flex items-start gap-4 -ml-10 -mr-1">
                <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <span className="font-medium">
                  Notre fichier a pour objectif de faire gagner du temps aux internautes en regroupant, organisant et rendant accessibles des ressources éparses à des fins de consultation, d'inspiration ou de création personnelle.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default DisclaimerDialog;
