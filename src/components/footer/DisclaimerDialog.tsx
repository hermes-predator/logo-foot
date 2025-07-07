
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
          <DialogDescription>
            Clause de non-responsabilité concernant les ressources proposées dans notre collection.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="mt-4 p-5 border border-gray-200/50 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="bg-gradient-to-r from-slate-100 to-gray-50 rounded-md p-4 shadow-lg shadow-gray-200/30 flex items-center gap-2 backdrop-blur-sm border border-gray-200/50 flex-shrink-0">
                <Folder className="w-6 h-6 text-gray-700 drop-shadow-sm" />
              </div>
              <div className="text-sm leading-relaxed text-gray-800 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
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
                <p>
                  Ce fichier a pour but de faire gagner du temps aux internautes en regroupant, organisant et rendant accessibles des ressources éparses à des fins de consultation, d'inspiration ou de création personnelle.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2 group hover:bg-white/80 rounded-md p-2 transition-colors">
              <div className="bg-transparent p-1.5 rounded-md border border-gray-200 shadow-sm group-hover:bg-blue-100/30 transition-colors">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 group-hover:text-green-600 transition-colors" />
              </div>
              <span className="text-sm text-gray-700">Une ressource indépendante, compilée et organisée.</span>
            </div>
            
            <div className="flex items-start gap-2 group hover:bg-white/80 rounded-md p-2 transition-colors">
              <div className="bg-transparent p-1.5 rounded-md border border-gray-200 shadow-sm group-hover:bg-blue-100/30 transition-colors">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 group-hover:text-green-600 transition-colors" />
              </div>
              <span className="text-sm text-gray-700">Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};

export default DisclaimerDialog;
