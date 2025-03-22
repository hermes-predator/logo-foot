
import React from 'react';
import { FileArchive, Inbox, FileText, Dices, Target, Check, Folder, List, Info, Package, Sparkles, Shield } from "lucide-react";

const PackDescription = () => {
  return (
    <div className="space-y-0.5">
      <div className="p-3.5 bg-[#452A2A] border border-red-900/30 shadow-md rounded-t-md">
        <div className="flex items-start space-x-2.5">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-1.5">
              <Info className="h-3.5 w-3.5 text-red-200/80" />
              <span className="text-xs font-medium text-red-200/80">Information importante</span>
            </div>
            <div className="leading-tight text-sm font-info italic text-red-200/80 font-medium">
              <p>Le ⦗FRONT-CLOUD⦘~ Football.zip est un fichier précieux à ajouter à votre patrimoine digital.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-0.5">
        
        <div className="space-y-3 p-4 bg-gradient-to-br from-gray-100/90 to-gray-100/50 border border-gray-200/80 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
            <Folder className="h-4 w-4 text-gray-600" />
            𝐅.𝟎𝟏 – Logos de clubs de football
          </h3>
          <div className="grid grid-cols-2 gap-3 bg-white/50 rounded-lg p-3">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Format :</p>
              <p className="text-gray-700 text-xs">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Dimensions :</p>
              <p className="text-gray-700 text-xs">120px</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Sous-groupes :</p>
              <p className="text-gray-700 text-xs">60 collections</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Quantité totale :</p>
              <p className="text-gray-700 text-xs">8 062 ressources</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="font-semibold text-gray-900 mb-1.5 flex items-center gap-1.5">
              <List className="h-4 w-4 text-gray-600" />
              Collections incluses :
            </p>
            <p className="text-xs leading-relaxed text-gray-700 bg-white/50 rounded-lg p-3">
              Default (20) • Albanie (70) • Allemagne (450) • Angleterre (450) • Arabie Saoudite (80) • Argentine (200) • Arménie (40) • Australie (80) • Autriche (120) • Azerbaïdjan (50) • Belgique (160) • Biélorussie (100) • Bosnie-Herzégovine (80) • Brésil (300) • Bulgarie (100) • Chypre (40) • Croatie (120) • Danemark (150) • Écosse (120) • Espagne (450) • Estonie (40) • États-Unis (300) • Finlande (100) • France (450) • Géorgie (40) • Gibraltar (12) • Grèce (150) • Hongrie (120) • Iles Féroés (20) • Irlande (100) • Irlande du Nord (60) • Islande (80) • Israël (80) • Italie (400) • Kazakhstan (40) • Kosovo (40) • Lettonie (40) • Lituanie (40) • Luxembourg (80) • Macédoine du Nord (40) • Malte (60) • Moldavie (50) • Monténégro (40) • Norvège (150) • Pays-Bas (300) • Pays de Galles (80) • Pologne (150) • Portugal (200) • Qatar (20) • République Tchèque (150) • Roumanie (150) • Russie (150) • Serbie (120) • Slovaquie (120) • Slovénie (80) • Suède (150) • Suisse (150) • Turquie (200) • Ukraine (100) • Sélections nationales de football (240)
            </p>
          </div>
        </div>

        <div className="space-y-3 p-4 bg-gradient-to-br from-blue-50/80 to-blue-50/30 border border-blue-100/80 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-bold text-blue-900 flex items-center gap-1.5">
            <Folder className="h-4 w-4 text-blue-600" />
            𝐅.𝟎𝟐 – Compétitions de football
          </h3>
          <div className="grid grid-cols-2 gap-3 bg-white/50 rounded-lg p-3">
            <div>
              <p className="font-semibold text-blue-900 text-sm">Format :</p>
              <p className="text-blue-700 text-xs">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 text-sm">Dimensions :</p>
              <p className="text-blue-700 text-xs">200px</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 text-sm">Sous-groupes :</p>
              <p className="text-blue-700 text-xs">1 collection</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 text-sm">Quantité totale :</p>
              <p className="text-blue-700 text-xs">100 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 p-4 bg-gradient-to-br from-green-50/80 to-green-50/30 border border-green-100/80 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-bold text-green-900 flex items-center gap-1.5">
            <Folder className="h-4 w-4 text-green-600" />
            𝐅.𝟎𝟑 – Drapeaux mondiaux
          </h3>
          <div className="grid grid-cols-2 gap-3 bg-white/50 rounded-lg p-3">
            <div>
              <p className="font-semibold text-green-900 text-sm">Format :</p>
              <p className="text-green-700 text-xs">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-green-900 text-sm">Dimensions :</p>
              <p className="text-green-700 text-xs">200px</p>
            </div>
            <div>
              <p className="font-semibold text-green-900 text-sm">Sous-groupes :</p>
              <p className="text-green-700 text-xs">1 collection</p>
            </div>
            <div>
              <p className="font-semibold text-green-900 text-sm">Quantité totale :</p>
              <p className="text-green-700 text-xs">270 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 p-4 bg-gradient-to-br from-yellow-50/80 to-yellow-50/30 border border-yellow-100/80 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-bold text-yellow-900 flex items-center gap-1.5">
            <Folder className="h-4 w-4 text-yellow-600" />
            𝐅.𝟎𝟒 – Couvertures - Instruments de football
          </h3>
          <div className="grid grid-cols-2 gap-3 bg-white/50 rounded-lg p-3">
            <div>
              <p className="font-semibold text-yellow-900 text-sm">Format :</p>
              <p className="text-yellow-700 text-xs">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-900 text-sm">Dimensions :</p>
              <p className="text-yellow-700 text-xs">150px</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-900 text-sm">Sous-groupes :</p>
              <p className="text-yellow-700 text-xs">3 collections</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-900 text-sm">Quantité totale :</p>
              <p className="text-yellow-700 text-xs">220 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 p-4 bg-gradient-to-br from-red-50/80 to-red-50/30 border border-red-100/80 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-bold text-red-900 flex items-center gap-1.5">
            <Folder className="h-4 w-4 text-red-600" />
            𝐅.𝟎𝟓 – Logos des bookmakers
          </h3>
          <div className="grid grid-cols-2 gap-3 bg-white/50 rounded-lg p-3">
            <div>
              <p className="font-semibold text-red-900 text-sm">Format :</p>
              <p className="text-red-700 text-xs">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-red-900 text-sm">Dimensions :</p>
              <p className="text-red-700 text-xs">200px</p>
            </div>
            <div>
              <p className="font-semibold text-red-900 text-sm">Sous-groupes :</p>
              <p className="text-red-700 text-xs">1 collection</p>
            </div>
            <div>
              <p className="font-semibold text-red-900 text-sm">Quantité totale :</p>
              <p className="text-red-700 text-xs">20 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-0 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2.5 text-[#403E43] p-1 hover:bg-gray-50/50 transition-colors group bg-white/80">
            <div className="p-1.5 rounded-full bg-[#4D3535] group-hover:bg-[#5D4545] transition-colors">
              <Check className="h-3.5 w-3.5 text-red-200/90 shrink-0" aria-hidden="true" />
            </div>
            <span className="text-sm font-medium">Nos ressources sont cadrées, uniformes, nommées et déjà triées</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#403E43] p-1 hover:bg-gray-50/50 transition-colors group bg-white/80">
            <div className="p-1.5 rounded-full bg-[#4D3535] group-hover:bg-[#5D4545] transition-colors">
              <Check className="h-3.5 w-3.5 text-red-200/90 shrink-0" aria-hidden="true" />
            </div>
            <span className="text-sm font-medium">Couverture totale du football pour vos projets WEB</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#403E43] p-1 hover:bg-gray-50/50 transition-colors group bg-white/80">
            <div className="p-1.5 rounded-full bg-[#4D3535] group-hover:bg-[#5D4545] transition-colors">
              <Check className="h-3.5 w-3.5 text-red-200/90 shrink-0" aria-hidden="true" />
            </div>
            <span className="text-sm font-medium">Directement stockable sur ordinateur ou cloud privé</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackDescription;
