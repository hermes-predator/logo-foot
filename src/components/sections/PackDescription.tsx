import React from 'react';
import { ShoppingCart, ArrowRight, Folder, Globe, Cloud, RefreshCw, Star, Shield, Trophy, Flag, Image, Coins, Download, Users, Check, Package, FileArchive, BadgeDollarSign, Circle, Sparkles, HelpCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FolderCard from './folders/FolderCard';
import { useToast } from "@/hooks/use-toast";
import { DialogClose } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
const PackDescription = () => {
  const {
    toast
  } = useToast();
  const handlePayment = () => {
    toast({
      title: "Paiement sécurisé",
      description: "Ouverture du module de paiement",
    });
    const url = new URL(window.location.href);
    url.searchParams.set('pay', '1');
    window.history.pushState({}, '', url.toString());
    window.dispatchEvent(new CustomEvent('open-payment-modal'));
  };
  return <div className="space-y-0.5 mt-1">
      {/* Removed the title section completely */}
      
      {/* Section des dossiers avec leurs descriptions */}
      <div className="mb-6 relative">
        <FolderCard title="𝐅.𝟎𝟏 – Logos des clubs de football" colorScheme="gray" items={[{
        label: "Format",
        value: "PNG (fond transparent)"
      }, {
        label: "Dimensions",
        value: "120px"
      }, {
        label: "Sous-groupes",
        value: "60 collections"
      }, {
        label: "Quantité totale",
        value: "8 062 ressources"
      }]} collections="Default (20) • Albanie (70) • Allemagne (450) • Angleterre (450) • Arabie Saoudite (80) • Argentine (200) • Arménie (40) • Australie (80) • Autriche (120) • Azerbaïdjan (50) • Belgique (160) • Biélorussie (100) • Bosnie-Herzégovine (80) • Brésil (300) • Bulgarie (100) • Chypre (40) • Croatie (120) • Danemark (150) • Écosse (120) • Espagne (450) • Estonie (40) • États-Unis (300) • Finlande (100) • France (450) • Géorgie (40) • Gibraltar (12) • Grèce (150) • Hongrie (120) • Iles Féroés (20) • Irlande (100) • Irlande du Nord (60) • Islande (80) • Israël (80) • Italie (400) • Kazakhstan (40) • Kosovo (40) • Lettonie (40) • Lituanie (40) • Luxembourg (80) • Macédoine du Nord (40) • Malte (60) • Moldavie (50) • Monténégro (40) • Norvège (150) • Pays-Bas (300) • Pays de Galles (80) • Pologne (150) • Portugal (200) • Qatar (20) • République Tchèque (150) • Roumanie (150) • Russie (150) • Serbie (120) • Slovaquie (120) • Slovénie (80) • Suède (150) • Suisse (150) • Turquie (200) • Ukraine (100) • Sélections nationales de football (240)" isFirst={true} decorativeIcon={<Shield />} />
        
        <FolderCard title="𝐅.𝟎𝟐 – Logos des compétitions de football" colorScheme="gray" items={[{
        label: "Format",
        value: "PNG (fond transparent)"
      }, {
        label: "Dimensions",
        value: "200px"
      }, {
        label: "Sous-groupes",
        value: "1 collection"
      }, {
        label: "Quantité totale",
        value: "100 ressources"
      }]} decorativeIcon={<Trophy />} />

        <FolderCard title="𝐅.𝟎𝟑 – Logos des drapeaux mondiaux" colorScheme="gray" items={[{
        label: "Format",
        value: "PNG (fond transparent)"
      }, {
        label: "Dimensions",
        value: "200px"
      }, {
        label: "Sous-groupes",
        value: "1 collection"
      }, {
        label: "Quantité totale",
        value: "270 ressources"
      }]} decorativeIcon={<Flag />} />

        <FolderCard title="𝐅.𝟎𝟒 – Couvertures - Instruments de football" colorScheme="gray" items={[{
        label: "Format",
        value: "PNG (fond transparent)"
      }, {
        label: "Dimensions",
        value: "150px"
      }, {
        label: "Sous-groupes",
        value: "3 collections"
      }, {
        label: "Quantité totale",
        value: "220 ressources"
      }]} decorativeIcon={<Image />} />

        <FolderCard title="𝐅.𝟎𝟓 – Logos des bookmakers" colorScheme="gray" items={[{
        label: "Format",
        value: "PNG (fond transparent)"
      }, {
        label: "Dimensions",
        value: "200px"
      }, {
        label: "Sous-groupes",
        value: "1 collection"
      }, {
        label: "Quantité totale",
        value: "50 ressources"
      }]} isLast={true} decorativeIcon={<Coins />} />
      </div>
      
      <div className="space-y-4 pt-5 mt-5">
        <h4 className="text-sm font-extrabold text-gray-800 mb-3">
          AVANTAGES DU FICHIER
        </h4>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm group hover:shadow-md transition-all duration-300 hover:border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <Globe className="h-3.5 w-3.5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Couverture totale du football</span>
            </div>
            <p className="text-xs text-gray-600 ml-10">Gagnez en confiance et temps en obtenant toutes les ressources liés au football.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm group hover:shadow-md transition-all duration-300 hover:border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <Folder className="h-3.5 w-3.5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Fichier parfaitement organisé</span>
            </div>
            <p className="text-xs text-gray-600 ml-10">Logos recadrés, uniformes, nommés et triés pour un usage fiable et immédiat.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm group hover:shadow-md transition-all duration-300 hover:border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <Cloud className="h-3.5 w-3.5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Stockage flexible</span>
            </div>
            <p className="text-xs text-gray-600 ml-10">Compatible avec tout système de stockage : ordinateur local ou cloud privé - Google Drive.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm group hover:shadow-md transition-all duration-300 hover:border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <RefreshCw className="h-3.5 w-3.5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Mise à jour régulière</span>
            </div>
            <p className="text-xs text-gray-600 ml-10">Nos clients adorent ce fichier, cela nous motive à le rendre meilleur en continu.</p>
          </div>
        </div>
        
        {/* Zone d'achat améliorée */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/60 shadow-sm transition-all duration-300 hover:shadow-md mt-8 relative overflow-hidden">
          {/* Ajout d'un effet de brillance au fond */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-[shine_4s_ease-in-out_infinite] z-0"></div>
          
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-green-600 text-white px-3 py-1.5 rounded-tr-xl rounded-bl-xl font-semibold text-xs flex items-center gap-1 shadow-md">
              <Folder className="h-3 w-3 text-white" />
              <span>Valeur de 100€</span>
            </div>
          </div>
          
          <div className="text-center mb-4 relative z-10">
            <h3 className="text-xl font-bold text-black mb-1">Prêt à recevoir ce fichier ZIP ?</h3>
          </div>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogClose asChild>
                <Button onClick={handlePayment} className="w-full md:w-4/5 mx-auto block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-3 rounded-lg shadow-md border-b-[3px] border-blue-800 hover:shadow-lg transition-all duration-300 active:border-b-0 active:translate-y-0.5 active:scale-[0.99] group h-20 relative overflow-hidden z-10">
                  {/* Effet de brillance amélioré sur le bouton */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2.5s_ease-in-out_infinite] z-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent animate-[shine_3.5s_ease-in-out_infinite_1s] z-0"></div>
                  </div>
                  
                  <div className="flex items-center justify-center w-full gap-4 relative z-10">
                    <ShoppingCart className="h-10 w-10 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
                    <div className="flex flex-col items-center">
                      <span className="text-center font-semibold text-2xl">Télécharger (5€)</span>
                    </div>
                    <ArrowRight className="h-9 w-9 transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-2" />
                  </div>
                </Button>
              </DialogClose>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-blue-800 text-white">
              <p className="font-semibold">Accès immédiat en page d'après-paiement</p>
            </TooltipContent>
          </Tooltip>
          
          <p className="text-xs text-center text-blue-600 mt-3 relative z-10">
            Paiement via SumUp • Satisfaction garantie • Téléchargement instantané
          </p>
          
          <Separator className="mt-6 mb-3 bg-blue-100" />
          
          <div className="py-0 relative z-10">
            <div className="flex items-center justify-center">
              <p className="text-sm font-semibold text-blue-600 flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 relative">
                  <div className="absolute inset-0 bg-blue-100/80 rounded-full"></div>
                  <Users className="h-4 w-4 text-blue-600 relative z-20" />
                </div>
                25 000+ clients nous font confiance
              </p>
            </div>
          </div>
          
          <Separator className="mt-3 mb-4 bg-blue-100" />
          
          {/* Redesigned payment trust indicators section */}
          <div className="mt-4 relative z-10">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Paiement sécurisé via</span>
                  <img src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" alt="SumUp" className="h-5 object-contain" />
                </div>
                
                <div className="flex items-center gap-3 ml-auto">
                  <img src="/lovable-uploads/170059cc-f820-48d2-9a57-93c93a1ce8a7.png" alt="Moyens de paiement acceptés: Visa, Mastercard, American Express, Apple Pay, Google Pay" className="h-11 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer légal */}
        <div className="mt-8 p-4 border border-amber-200 bg-amber-50 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-800">
              <p className="font-semibold mb-1">Disclaimer :</p>
              <p>
                Ce fichier est un produit numérique destiné à un usage personnel, créatif ou éducatif. 
                Il ne contient aucun fichier affilié à des marques officielles. 
                Aucune ressource n'est hébergée ou distribuée en tant que fichier propriétaire sous licence. 
                ⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante.
              </p>
            </div>
          </div>
        </div>
        
        {/* Support contact simple - changed from blue to black */}
        <div className="text-center text-sm text-gray-800 mt-5">
          <p>Support : Assistance par email 7j/7 : <a href="mailto:contact@logo-foot.com" className="font-semibold hover:underline">contact@logo-foot.com</a></p>
        </div>
      </div>
    </div>;
};
export default PackDescription;