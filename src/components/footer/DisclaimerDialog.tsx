import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Info, Check, Folder } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const DisclaimerDialog = () => {
  const isMobile = useIsMobile();
  return <Dialog>
      <DialogTrigger className={`flex items-center gap-2 transition-colors ${isMobile ? 'px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md text-left w-full' : 'hover:text-gray-900'}`}>
        <AlertTriangle className="w-4 h-4" />
        <span>Disclaimer</span>
      </DialogTrigger>
      <DialogContent className={`max-w-2xl ${isMobile ? 'max-h-[90vh] px-4' : 'max-h-[80vh]'} overflow-y-auto bg-gradient-to-b from-white to-gray-50 shadow-xl border-0`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800" style={{
          letterSpacing: '-0.01em'
        }}>
            Disclaimer
          </DialogTitle>
          <DialogDescription>A propos du service fourni par Logo-foot.com</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="mt-4 p-5 border border-gray-200/50 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="bg-gradient-to-r from-slate-100 to-gray-50 rounded-md p-4 shadow-lg shadow-gray-200/30 flex items-center gap-2 backdrop-blur-sm border border-gray-200/50 flex-shrink-0">
                <Folder className="w-6 h-6 text-gray-700 drop-shadow-sm" />
              </div>
              <div className="text-sm leading-relaxed text-gray-800 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  ⦗FRONT-CLOUD⦘~ Football.zip
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-4 p-5 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="bg-gradient-to-r from-slate-100 to-gray-50 rounded-md p-4 shadow-lg shadow-gray-200/30 flex items-center gap-2 backdrop-blur-sm border border-gray-200/50 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-gray-700 drop-shadow-sm" />
              </div>
              <div className="text-sm leading-relaxed text-gray-700 space-y-6">
                <p className="text-sm leading-relaxed text-gray-700">
                  Notre fichier permet une aide aux internautes en regroupant, organisant et rendant accessibles des ressources éparses du football à des fins de consultation ou de création personnelle.
                </p>
                
                <div className="space-y-3 pt-4 border-t border-gray-200/50">
                  <div className="flex items-center gap-4 p-2">
                    <div className="bg-white p-1.5 rounded-lg border border-gray-100">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    </div>
                    <span className="text-sm text-gray-600 italic font-light">Ce fichier est une ressource indépendante, compilée et organisée.</span>
                  </div>
                  
                  <div className="flex items-start gap-4 p-2">
                    <div className="bg-white p-1.5 rounded-lg border border-gray-100">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    </div>
                    <span className="text-sm text-gray-600 italic font-light">Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4">
          <p className="text-xs text-gray-500 text-center">
            © 2025 Logo-foot.com - Tous droits réservés
          </p>
        </div>
      </DialogContent>
    </Dialog>;
};
export default DisclaimerDialog;