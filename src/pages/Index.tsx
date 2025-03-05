
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ⦗FRONT-CLOUD⦘~ Football.zip
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Obtenez une couverture complète des ressources numériques du football en un coup.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="gap-2">
                  <Info className="h-4 w-4" />
                  Plus d'informations
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Détails importants</DialogTitle>
                  <DialogDescription>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2">
                        • Produits consultables (capture vidéo)
                      </li>
                      <li className="flex items-center gap-2">
                        • Ressources cadrées, uniformes, nommées et triées
                      </li>
                      <li className="flex items-center gap-2">
                        • Couverture totale du football pour vos projets WEB
                      </li>
                      <li className="flex items-center gap-2">
                        • Directement stockable sur ordinateur ou cloud privé
                      </li>
                    </ul>
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
