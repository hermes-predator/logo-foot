
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

const DisclaimerDialog = () => (
  <Dialog>
    <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
      <AlertTriangle className="w-4 h-4" />
      Disclaimer
    </DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
      <div className="mt-4 p-4 border border-amber-200 bg-amber-50 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-800 space-y-6">
            <p>
              Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives.

              ⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante, compilée et organisée à des fins d'archivage, de culture visuelle et de création.

              Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.

              Nous ne revendiquons aucune affiliation, partenariat ou validation de la part des clubs, compétitions ou organisations citées ou représentées.

              ➔ Notre offre a pour objectif de faire gagner du temps aux internautes en regroupant, organisant et rendant accessibles des ressources éparses à des fins de consultation, d'inspiration ou de création personnelle.
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default DisclaimerDialog;
