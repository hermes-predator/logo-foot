
import React from 'react';
import { Folder, List, Cloud, Sparkles, RefreshCw, Play, ArrowRight, ShoppingCart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const PackDescription = () => {
  const scrollToPayment = () => {
    const paymentSection = document.querySelector('#payment-section');
    paymentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0.5 mt-6">
      <div className="space-y-0.5">
        
        <div className="space-y-3 p-4 bg-gradient-to-br from-gray-100/90 to-gray-100/50 border border-gray-200/80 transition-all duration-200 hover:shadow-md rounded-t-md">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-3">
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
            <p className="font-semibold text-gray-900 mb-1.5 flex items-center gap-3">
              <List className="h-4 w-4 text-gray-600" />
              Collections incluses :
            </p>
            <p className="text-xs leading-relaxed text-gray-700 bg-white/50 rounded-lg p-3">
              Default (20) • Albanie (70) • Allemagne (450) • Angleterre (450) • Arabie Saoudite (80) • Argentine (200) • Arménie (40) • Australie (80) • Autriche (120) • Azerbaïdjan (50) • Belgique (160) • Biélorussie (100) • Bosnie-Herzégovine (80) • Brésil (300) • Bulgarie (100) • Chypre (40) • Croatie (120) • Danemark (150) • Écosse (120) • Espagne (450) • Estonie (40) • États-Unis (300) • Finlande (100) • France (450) • Géorgie (40) • Gibraltar (12) • Grèce (150) • Hongrie (120) • Iles Féroés (20) • Irlande (100) • Irlande du Nord (60) • Islande (80) • Israël (80) • Italie (400) • Kazakhstan (40) • Kosovo (40) • Lettonie (40) • Lituanie (40) • Luxembourg (80) • Macédoine du Nord (40) • Malte (60) • Moldavie (50) • Monténégro (40) • Norvège (150) • Pays-Bas (300) • Pays de Galles (80) • Pologne (150) • Portugal (200) • Qatar (20) • République Tchèque (150) • Roumanie (150) • Russie (150) • Serbie (120) • Slovaquie (120) • Slovénie (80) • Suède (150) • Suisse (150) • Turquie (200) • Ukraine (100) • Sélections nationales de football (240)
            </p>
          </div>
        </div>

        <div className="space-y-3 p-4 bg-gradient-to-br from-blue-50/80 to-blue-50/30 border border-blue-100/80 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-bold text-blue-900 flex items-center gap-3">
            <Folder className="h-4 w-4 text-blue-600" />
            𝐅.𝟎𝟐 – Logos des compétitions de football
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
          <h3 className="text-lg font-bold text-green-900 flex items-center gap-3">
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
          <h3 className="text-lg font-bold text-yellow-900 flex items-center gap-3">
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
          <h3 className="text-lg font-bold text-red-900 flex items-center gap-3">
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
              <p className="text-red-700 text-xs">40 ressources</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-4 bg-red-100/50" />

        {/* Redesigned advantages section with call-to-action integrated */}
        <div className="space-y-4 pt-10 mt-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            AVANTAGES DU FICHIER
          </h4>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Folder className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Fichier parfaitement organisé</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Logos recadrés, uniformes, nommés et triés pour un usage fiable et immédiat</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Globe className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Couverture totale du football</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Tous les ressources nécessaires pour vos projets web liés au football</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Cloud className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Stockage flexible</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Compatible avec tout système de stockage : ordinateur local ou cloud privé (Google Drive...)</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <RefreshCw className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Mise à jour régulière</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Nouvelles ressources ajoutées lors des mises à jour saisonnières</p>
            </div>
          </div>
          
          {/* Call to Action placed after the 4 arguments */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/60 shadow-sm transition-all duration-300 hover:shadow-md mt-6">
            <div className="text-center mb-5">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Prêt à recevoir ce fichier ZIP unique ?</h3>
            </div>
            
            <Button 
              onClick={scrollToPayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98] group"
            >
              <ShoppingCart className="h-5 w-5 mr-2 transition-all duration-300 group-hover:rotate-[-8deg]" />
              Obtenez-le pour seulement 10€
              <ArrowRight className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </Button>
            
            <p className="text-xs text-center text-blue-600 mt-3">
              Paiement sécurisé via SumUp • Téléchargement instantané • Satisfaction garantie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackDescription;
