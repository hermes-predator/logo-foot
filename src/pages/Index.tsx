import React from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Crown, Book, ShieldCheck, Lock, CheckCircle2, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Testimonials from '../components/Testimonials';

const Index = () => {
  const scrollToPayment = () => {
    const paymentSection = document.querySelector('#payment-section');
    paymentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto">
        <section className="relative pt-12 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-blue-50/40 to-white opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.08),transparent_50%)]" />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-purple-200/50 shadow-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md mb-6">
              <Crown className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Collection Premium</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2">
              Logos des clubs de football
            </h1>

            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 italic mt-6">
              ⦗FRONT-CLOUD⦘~ Football.zip
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La plus grande collection de logos des équipes de foot en haute qualité et uniforme. Plus de 8 600 logos de club de foot internationaux, les logos des compétitions... une couverture complète réunie dans un seul fichier arborescent.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Fichiers Consultables</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Téléchargement Instantané</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Book className="h-4 w-4" />
                    Descriptif du ZIP
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">Contenu du pack</DialogTitle>
                    <DialogDescription className="text-left space-y-6">
                      <p className="text-lg font-medium text-[#403E43]">
                        Le ⦗FRONT-CLOUD⦘~ Football.zip est un fichier précieux à ajouter à votre patrimoine numérique.
                      </p>

                      <div className="space-y-8">
                        <div className="space-y-4 p-4 rounded-lg bg-purple-50/50">
                          <h3 className="text-xl font-bold text-purple-900">𝐅.𝟎𝟏 – Logos de clubs de football</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">Format :</p>
                              <p>PNG (fond transparent)</p>
                            </div>
                            <div>
                              <p className="font-semibold">Dimensions :</p>
                              <p>120px</p>
                            </div>
                            <div>
                              <p className="font-semibold">Sous-groupes :</p>
                              <p>60 collections</p>
                            </div>
                            <div>
                              <p className="font-semibold">Quantité totale :</p>
                              <p>8 062 ressources</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="font-semibold mb-2">Collections incluses :</p>
                            <p className="text-sm leading-relaxed">
                              Default (20) • Albanie (70) • Allemagne (450) • Angleterre (450) • Arabie Saoudite (80) • Argentine (200) • Arménie (40) • Australie (80) • Autriche (120) • Azerbaïdjan (50) • Belgique (160) • Biélorussie (100) • Bosnie-Herzégovine (80) • Brésil (300) • Bulgarie (100) • Chypre (40) • Croatie (120) • Danemark (150) • Écosse (120) • Espagne (450) • Estonie (40) • États-Unis (300) • Finlande (100) • France (450) • Géorgie (40) • Gibraltar (12) • Grèce (150) • Hongrie (120) • Iles Féroés (20) • Irlande (100) • Irlande du Nord (60) • Islande (80) • Israël (80) • Italie (400) • Kazakhstan (40) • Kosovo (40) • Lettonie (40) • Lituanie (40) • Luxembourg (80) • Macédoine du Nord (40) • Malte (60) • Moldavie (50) • Monténégro (40) • Norvège (150) • Pays-Bas (300) • Pays de Galles (80) • Pologne (150) • Portugal (200) • Qatar (20) • République Tchèque (150) • Roumanie (150) • Russie (150) • Serbie (120) • Slovaquie (120) • Slovénie (80) • Suède (150) • Suisse (150) • Turquie (200) • Ukraine (100) • Sélections nationales de football (240)
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 p-4 rounded-lg bg-blue-50/50">
                          <h3 className="text-xl font-bold text-blue-900">𝐅.𝟎𝟐 – Compétitions de football</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">Format :</p>
                              <p>PNG (fond transparent)</p>
                            </div>
                            <div>
                              <p className="font-semibold">Dimensions :</p>
                              <p>200px</p>
                            </div>
                            <div>
                              <p className="font-semibold">Sous-groupes :</p>
                              <p>1 collection</p>
                            </div>
                            <div>
                              <p className="font-semibold">Quantité totale :</p>
                              <p>100 ressources</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 p-4 rounded-lg bg-green-50/50">
                          <h3 className="text-xl font-bold text-green-900">𝐅.𝟎𝟑 – Drapeaux mondiaux</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">Format :</p>
                              <p>PNG (fond transparent)</p>
                            </div>
                            <div>
                              <p className="font-semibold">Dimensions :</p>
                              <p>256px</p>
                            </div>
                            <div>
                              <p className="font-semibold">Sous-groupes :</p>
                              <p>1 collection</p>
                            </div>
                            <div>
                              <p className="font-semibold">Quantité totale :</p>
                              <p>270 ressources</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 p-4 rounded-lg bg-yellow-50/50">
                          <h3 className="text-xl font-bold text-yellow-900">𝐅.𝟎𝟒 – Couvertures - Instruments de football</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">Format :</p>
                              <p>PNG (fond transparent)</p>
                            </div>
                            <div>
                              <p className="font-semibold">Dimensions :</p>
                              <p>150px</p>
                            </div>
                            <div>
                              <p className="font-semibold">Sous-groupes :</p>
                              <p>3 collections</p>
                            </div>
                            <div>
                              <p className="font-semibold">Quantité totale :</p>
                              <p>220 ressources</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 p-4 rounded-lg bg-red-50/50">
                          <h3 className="text-xl font-bold text-red-900">𝐅.𝟎𝟓 – Logos des bookmakers</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">Format :</p>
                              <p>PNG (fond transparent)</p>
                            </div>
                            <div>
                              <p className="font-semibold">Dimensions :</p>
                              <p>200px</p>
                            </div>
                            <div>
                              <p className="font-semibold">Sous-groupes :</p>
                              <p>1 collection</p>
                            </div>
                            <div>
                              <p className="font-semibold">Quantité totale :</p>
                              <p>20 ressources</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 pt-6 border-t">
                          <p className="flex items-center gap-2 text-[#403E43]">
                            <CheckCircle2 className="h-5 w-5" />
                            Ressources cadrées, uniformes, nommées et déjà triées
                          </p>
                          <p className="flex items-center gap-2 text-[#403E43]">
                            <CheckCircle2 className="h-5 w-5" />
                            Couverture totale du football pour vos projets WEB
                          </p>
                          <p className="flex items-center gap-2 text-[#403E43]">
                            <CheckCircle2 className="h-5 w-5" />
                            Directement stockable sur ordinateur ou cloud privé
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Button
                variant="default"
                size="lg"
                onClick={scrollToPayment}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base gap-2"
              >
                <ChevronDown className="h-4 w-4 animate-bounce" />
                Voir le prix
              </Button>
            </div>
          </div>
        </section>

        <ProductGallery />

        <div id="payment-section">
          <PaymentSection />
        </div>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
