import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const DisclaimerDialog = () => {
  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger className={isMobile 
        ? "flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-all px-4 py-3 rounded-md text-left w-full"
        : "hover:text-gray-900 transition-colors"
      }>
        {isMobile && <AlertTriangle className="w-4 h-4" />}
        <span>Disclaimer</span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Disclaimer</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-sm">
          <p>
            Ce site web est un projet personnel réalisé par un passionné de football et de graphisme.
            Il est conçu à des fins de divertissement et d'information uniquement.
          </p>
          <p>
            Les logos de clubs de football présentés sur ce site sont la propriété de leurs détenteurs respectifs.
            Nous ne revendiquons aucun droit de propriété sur ces marques.
          </p>
          <p>
            Nous nous efforçons de fournir des informations exactes et à jour, mais nous ne pouvons garantir l'absence d'erreurs ou d'omissions.
            En conséquence, nous déclinons toute responsabilité quant à l'utilisation que vous pourriez faire des informations contenues sur ce site.
          </p>
          <p>
            Ce site peut contenir des liens vers d'autres sites web. Nous ne sommes pas responsables du contenu de ces sites et nous vous encourageons à consulter leurs propres mentions légales et politiques de confidentialité.
          </p>
          <p>
            En utilisant ce site, vous acceptez les termes de ce disclaimer.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog;
