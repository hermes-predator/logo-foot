
import React from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Logos des clubs de football et bien plus
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-700">
              ⦗FRONT-CLOUD⦘~ Football.zip
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              La plus grande collection de logos de clubs de foot en haute qualité et uniforme. Plus de 8600 logos de clubs internationaux, les logos des compétitions etc... en format PNG transparent.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="gap-2">
                  <Info className="h-4 w-4" />
                  Plus d'informations
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold mb-4">Contenu du pack</DialogTitle>
                  <DialogDescription className="text-left space-y-6">
                    <p className="text-base font-medium">
                      Le ⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~ 𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩 est un fichier précieux à ajouter à votre patrimoine numérique.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold mb-2">𝐅.𝟎𝟏 – Logos de clubs de football</h3>
                        <p>Format : PNG (fond transparent)</p>
                        <p>Dimensions : 120px</p>
                        <p>Sous-groupes : 60 collections</p>
                        <p>Quantité totale : 8 062 ressources</p>
                        
                        <div className="mt-2">
                          <p className="font-medium mb-1">Ref. sous-collections (quantité) :</p>
                          <p className="text-sm leading-relaxed">
                            Default (20) ; Albanie (70) ; Allemagne (450) ; Angleterre (450) ; Arabie Saoudite (80) ; Argentine (200) ; Arménie (40) ; Australie (80) ; Autriche (120) ; Azerbaïdjan (50) ; Belgique (160) ; Biélorussie (100) ; Bosnie-Herzégovine (80) ; Brésil (300) ; Bulgarie (100) ; Chypre (40) ; Croatie (120) ; Danemark (150) ; Écosse (120) ; Espagne (450) ; Estonie (40) ; États-Unis (300) ; Finlande (100) ; France (450) ; Géorgie (40) ; Gibraltar (12) ; Grèce (150) ; Hongrie (120) ; Iles Féroés (20) ; Irlande (100) ; Irlande du Nord (60) ; Islande (80) ; Israël (80) ; Italie (400) ; Kazakhstan (40) ; Kosovo (40) ; Lettonie (40) ; Lituanie (40) ; Luxembourg (80) ; Macédoine du Nord (40) ; Malte (60) ; Moldavie (50) ; Monténégro (40) ; Norvège (150) ; Pays-Bas (300) ; Pays de Galles (80) ; Pologne (150) ; Portugal (200) ; Qatar (20) ; République Tchèque (150) ; Roumanie (150) ; Russie (150) ; Serbie (120) ; Slovaquie (120) ; Slovénie (80) ; Suède (150) ; Suisse (150) ; Turquie (200) ; Ukraine (100) ; Sélections nationales de football (240).
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">𝐅.𝟎𝟐 – Compétitions de football</h3>
                        <p>Format : PNG (fond transparent)</p>
                        <p>Dimensions : 200px</p>
                        <p>Sous-groupes : 1 collection</p>
                        <p>Quantité totale : 100 ressources</p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">𝐅.𝟎𝟑 – Drapeaux mondiaux</h3>
                        <p>Format : PNG (fond transparent)</p>
                        <p>Dimensions : 256px</p>
                        <p>Sous-groupes : 1 collection</p>
                        <p>Quantité totale : 269 ressources</p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">𝐅.𝟎𝟒 – Couvertures - Instruments de football - wallet.Type</h3>
                        <p>Format : PNG (fond transparent)</p>
                        <p>Dimensions : 150px</p>
                        <p>Sous-groupes : 3 collections</p>
                        <p>Quantité totale : 217 ressources</p>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="text-base">✚ Nos ressources sont uniformes, nommées et triées.</p>
                        <p className="text-base">✚ Nos ressources ont un cadrage parfait.</p>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Gallery Section */}
        <ProductGallery />

        {/* Payment Section */}
        <PaymentSection />
      </main>
    </div>
  );
};

export default Index;
