
import React from 'react';
import { ShoppingCart, ArrowRight, Folder, Globe, Cloud, RefreshCw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FolderCard from './folders/FolderCard';
import { useToast } from "@/hooks/use-toast";
import { DialogClose } from "@/components/ui/dialog";

const PackDescription = () => {
  const { toast } = useToast();
  
  const handlePayment = () => {
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers notre page de paiement sécurisée.",
    });
    const returnUrl = `${window.location.origin}/payment-success`;
    // Utilisation du lien SumUp direct
    window.location.href = `https://pay.sumup.com/b2c/QWBH42Z8?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="space-y-0.5 mt-6">
      
        <FolderCard
          title="𝐅.𝟎𝟏 – Logos des clubs de football"
          colorScheme="gray"
          items={[
            { label: "Format", value: "PNG (fond transparent)" },
            { label: "Dimensions", value: "120px" },
            { label: "Sous-groupes", value: "60 collections" },
            { label: "Quantité totale", value: "8 062 ressources" }
          ]}
          collections="Default (20) • Albanie (70) • Allemagne (450) • Angleterre (450) • Arabie Saoudite (80) • Argentine (200) • Arménie (40) • Australie (80) • Autriche (120) • Azerbaïdjan (50) • Belgique (160) • Biélorussie (100) • Bosnie-Herzégovine (80) • Brésil (300) • Bulgarie (100) • Chypre (40) • Croatie (120) • Danemark (150) • Écosse (120) • Espagne (450) • Estonie (40) • États-Unis (300) • Finlande (100) • France (450) • Géorgie (40) • Gibraltar (12) • Grèce (150) • Hongrie (120) • Iles Féroés (20) • Irlande (100) • Irlande du Nord (60) • Islande (80) • Israël (80) • Italie (400) • Kazakhstan (40) • Kosovo (40) • Lettonie (40) • Lituanie (40) • Luxembourg (80) • Macédoine du Nord (40) • Malte (60) • Moldavie (50) • Monténégro (40) • Norvège (150) • Pays-Bas (300) • Pays de Galles (80) • Pologne (150) • Portugal (200) • Qatar (20) • République Tchèque (150) • Roumanie (150) • Russie (150) • Serbie (120) • Slovaquie (120) • Slovénie (80) • Suède (150) • Suisse (150) • Turquie (200) • Ukraine (100) • Sélections nationales de football (240)"
          isFirst={true} // Set this to true for the first card
        />
        
        <FolderCard
          title="𝐅.𝟎𝟐 – Logos des compétitions de football"
          colorScheme="blue"
          items={[
            { label: "Format", value: "PNG (fond transparent)" },
            { label: "Dimensions", value: "200px" },
            { label: "Sous-groupes", value: "1 collection" },
            { label: "Quantité totale", value: "100 ressources" }
          ]}
        />

        <FolderCard
          title="𝐅.𝟎𝟑 – Logos des drapeaux mondiaux"
          colorScheme="green"
          items={[
            { label: "Format", value: "PNG (fond transparent)" },
            { label: "Dimensions", value: "200px" },
            { label: "Sous-groupes", value: "1 collection" },
            { label: "Quantité totale", value: "270 ressources" }
          ]}
        />

        <FolderCard
          title="𝐅.𝟎𝟒 – Couvertures - Instruments de football"
          colorScheme="yellow"
          items={[
            { label: "Format", value: "PNG (fond transparent)" },
            { label: "Dimensions", value: "150px" },
            { label: "Sous-groupes", value: "3 collections" },
            { label: "Quantité totale", value: "220 ressources" }
          ]}
        />

        <FolderCard
          title="𝐅.𝟎𝟓 – Logos des bookmakers"
          colorScheme="red"
          items={[
            { label: "Format", value: "PNG (fond transparent)" },
            { label: "Dimensions", value: "200px" },
            { label: "Sous-groupes", value: "1 collection" },
            { label: "Quantité totale", value: "50 ressources" }
          ]}
        />
        
      <Separator className="my-4 bg-red-100/50" />

      {/* Redesigned advantages section with call-to-action integrated */}
      <div className="space-y-4 pt-10 mt-6">
        <h4 className="text-sm font-semibold text-gray-800 mb-4">
          AVANTAGES DU FICHIER
        </h4>
        
        <div className="grid gap-4 md:grid-cols-2">
          
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Folder className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Fichier parfaitement organisé</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Logos recadrés, uniformes, nommés et triés pour un usage fiable et immédiat.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Globe className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Couverture totale du football</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Tous les ressources nécessaires pour vos projets web liés au football.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Cloud className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Stockage flexible</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Compatible avec tout système de stockage : ordinateur local ou cloud privé - Google Drive.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <RefreshCw className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-gray-800">Mise à jour régulière</span>
              </div>
              <p className="text-xs text-gray-600 ml-10">Nouvelles ressources ajoutées lors des mises à jour saisonnières.</p>
            </div>
          
        </div>
        
        {/* Call to Action placed after the 4 arguments */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/60 shadow-sm transition-all duration-300 hover:shadow-md mt-6 relative">
          {/* Decorative element in the top right corner - updated with filled star */}
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-tr-xl rounded-bl-xl font-semibold text-xs flex items-center gap-1 shadow-sm">
              <Star className="h-3 w-3 text-yellow-300" fill="currentColor" />
              RARE
            </div>
          </div>
          
          <div className="text-center mb-5">
            <h3 className="text-xl font-bold text-black mb-2">Prêt à recevoir ce fichier ZIP unique ?</h3>
          </div>
          
          <DialogClose asChild>
            <Button 
              onClick={handlePayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98] group"
            >
              <ShoppingCart className="h-5 w-5 mr-2 transition-all duration-300 group-hover:rotate-[-8deg]" />
              Obtenez-le pour seulement 10€
              <ArrowRight className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </Button>
          </DialogClose>
          
          <p className="text-xs text-center text-blue-600 mt-3">
            Paiement sécurisé via SumUp • Satisfaction garantie • Téléchargement instantané
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackDescription;
