import React from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Crown, Info, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Fond décoratif */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.1),transparent_50%)]" />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Crown badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-purple-100 mb-6">
              <Crown className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Collection Premium</span>
            </div>

            {/* Title and subtitle */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2">
              Logos des clubs de football
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 italic mt-6">
              ⦗FRONT-CLOUD⦘~ Football.zip
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La plus grande collection de logos des équipes de foot en haute qualité et uniforme. Plus de 8600 logos de clubs de foot internationaux, les logos des compétitions... une couverture complète réunie dans un seul fichier arborescent.
            </p>

            {/* Badges de confiance */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Fichiers Consultables</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Téléchargement Instantané</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Info className="h-4 w-4" />
                    Descriptif complet
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold mb-4">Contenu du pack</DialogTitle>
                    <DialogDescription className="text-left space-y-6">
                      <p className="text-base font-medium">
                        Le ⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎ULD⦘~ 𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩 est un fichier précieux à ajouter à votre patrimoine numérique.
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
                          <p>Quantité totale : 270 ressources</p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2">𝐅.𝟎𝟒 – Couvertures - Instruments de football - wallet.Type</h3>
                          <p>Format : PNG (fond transparent)</p>
                          <p>Dimensions : 150px</p>
                          <p>Sous-groupes : 3 collections</p>
                          <p>Quantité totale : 220 ressources</p>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-base">✚ Nos ressources sont cadrées, uniformes, nommées et déjà triées.</p>
                          <p className="text-base">✚ Couverture totale du football pour vos projets WEB.</p>
                          <p className="text-base">✚ Directement stockable sur ordinateur ou cloud privé.</p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <ProductGallery />

        {/* Payment Section */}
        <PaymentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
