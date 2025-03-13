
import React from 'react';
import { FileArchive, Inbox, FileText, Dices, Target, CheckCircle2, FolderArchive, List } from "lucide-react";

const PackDescription = () => {
  return (
    <div className="space-y-6">
      <p className="text-lg font-medium text-gray-800">
        Le ⦗FRONT-CLOUD⦘~ Football.zip est un fichier précieux à ajouter à votre patrimoine numérique. Il vous apportera beaucoup de valeurs dans vos projets personnels.
      </p>

      <div className="space-y-8">
        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-gray-100/90 to-gray-100/50 border border-gray-200/80">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FolderArchive className="h-5 w-5 text-gray-600" />
            𝐅.𝟎𝟏 – Logos de clubs de football
          </h3>
          <div className="grid grid-cols-2 gap-4 bg-white/50 rounded-lg p-4">
            <div>
              <p className="font-semibold text-gray-900">Format :</p>
              <p className="text-gray-700">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Dimensions :</p>
              <p className="text-gray-700">120px</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Sous-groupes :</p>
              <p className="text-gray-700">60 collections</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Quantité totale :</p>
              <p className="text-gray-700">8 062 ressources</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <List className="h-5 w-5 text-gray-600" />
              Collections incluses :
            </p>
            <p className="text-sm leading-relaxed text-gray-700 bg-white/50 rounded-lg p-4">
              Default (20) • Albanie (70) • Allemagne (450) • Angleterre (450) • Arabie Saoudite (80) • Argentine (200) • Arménie (40) • Australie (80) • Autriche (120) • Azerbaïdjan (50) • Belgique (160) • Biélorussie (100) • Bosnie-Herzégovine (80) • Brésil (300) • Bulgarie (100) • Chypre (40) • Croatie (120) • Danemark (150) • Écosse (120) • Espagne (450) • Estonie (40) • États-Unis (300) • Finlande (100) • France (450) • Géorgie (40) • Gibraltar (12) • Grèce (150) • Hongrie (120) • Iles Féroés (20) • Irlande (100) • Irlande du Nord (60) • Islande (80) • Israël (80) • Italie (400) • Kazakhstan (40) • Kosovo (40) • Lettonie (40) • Lituanie (40) • Luxembourg (80) • Macédoine du Nord (40) • Malte (60) • Moldavie (50) • Monténégro (40) • Norvège (150) • Pays-Bas (300) • Pays de Galles (80) • Pologne (150) • Portugal (200) • Qatar (20) • République Tchèque (150) • Roumanie (150) • Russie (150) • Serbie (120) • Slovaquie (120) • Slovénie (80) • Suède (150) • Suisse (150) • Turquie (200) • Ukraine (100) • Sélections nationales de football (240)
            </p>
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-blue-50/80 to-blue-50/30 border border-blue-100/80">
          <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <FolderArchive className="h-5 w-5 text-blue-600" />
            𝐅.𝟎𝟐 – Compétitions de football
          </h3>
          <div className="grid grid-cols-2 gap-4 bg-white/50 rounded-lg p-4">
            <div>
              <p className="font-semibold text-blue-900">Format :</p>
              <p className="text-blue-700">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900">Dimensions :</p>
              <p className="text-blue-700">200px</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900">Sous-groupes :</p>
              <p className="text-blue-700">1 collection</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900">Quantité totale :</p>
              <p className="text-blue-700">100 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-green-50/80 to-green-50/30 border border-green-100/80">
          <h3 className="text-xl font-bold text-green-900 flex items-center gap-2">
            <FolderArchive className="h-5 w-5 text-green-600" />
            𝐅.𝟎𝟑 – Drapeaux mondiaux
          </h3>
          <div className="grid grid-cols-2 gap-4 bg-white/50 rounded-lg p-4">
            <div>
              <p className="font-semibold text-green-900">Format :</p>
              <p className="text-green-700">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-green-900">Dimensions :</p>
              <p className="text-green-700">256px</p>
            </div>
            <div>
              <p className="font-semibold text-green-900">Sous-groupes :</p>
              <p className="text-green-700">1 collection</p>
            </div>
            <div>
              <p className="font-semibold text-green-900">Quantité totale :</p>
              <p className="text-green-700">270 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-yellow-50/80 to-yellow-50/30 border border-yellow-100/80">
          <h3 className="text-xl font-bold text-yellow-900 flex items-center gap-2">
            <FolderArchive className="h-5 w-5 text-yellow-600" />
            𝐅.𝟎𝟒 – Couvertures - Instruments de football
          </h3>
          <div className="grid grid-cols-2 gap-4 bg-white/50 rounded-lg p-4">
            <div>
              <p className="font-semibold text-yellow-900">Format :</p>
              <p className="text-yellow-700">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-900">Dimensions :</p>
              <p className="text-yellow-700">150px</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-900">Sous-groupes :</p>
              <p className="text-yellow-700">3 collections</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-900">Quantité totale :</p>
              <p className="text-yellow-700">220 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-red-50/80 to-red-50/30 border border-red-100/80">
          <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
            <FolderArchive className="h-5 w-5 text-red-600" />
            𝐅.𝟎𝟓 – Logos des bookmakers
          </h3>
          <div className="grid grid-cols-2 gap-4 bg-white/50 rounded-lg p-4">
            <div>
              <p className="font-semibold text-red-900">Format :</p>
              <p className="text-red-700">PNG (fond transparent)</p>
            </div>
            <div>
              <p className="font-semibold text-red-900">Dimensions :</p>
              <p className="text-red-700">200px</p>
            </div>
            <div>
              <p className="font-semibold text-red-900">Sous-groupes :</p>
              <p className="text-red-700">1 collection</p>
            </div>
            <div>
              <p className="font-semibold text-red-900">Quantité totale :</p>
              <p className="text-red-700">20 ressources</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-6 border-t">
          <div className="flex items-center gap-2 text-[#403E43]">
            <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
            <span>Ressources cadrées, uniformes, nommées et déjà triées</span>
          </div>
          <div className="flex items-center gap-2 text-[#403E43]">
            <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
            <span>Couverture totale du football pour vos projets WEB</span>
          </div>
          <div className="flex items-center gap-2 text-[#403E43]">
            <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
            <span>Directement stockable sur ordinateur ou cloud privé</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackDescription;
