import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder, ChevronsRight, Lock } from "lucide-react";
import footballFolderIcon from '@/assets/football-folder.png';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PackDescription from './PackDescription';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import { useRecentBuyers } from '@/contexts/RecentBuyersContext';

import trustpilotLogo from '@/assets/trustpilot-logo.png';
import HeroDecorations from './HeroDecorations';
import TypewriterBadge from './TypewriterBadge';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const goToPayment = () => navigate('/payment');
  const recentBuyers = useRecentBuyers();

  return (
    <section className="relative pt-8 pb-6 px-4 overflow-hidden">
      {/* Background pattern subtil */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />
      
      {/* Décorations style AgentFrancais */}
      <HeroDecorations />
      
      <div className="max-w-6xl mx-auto">
        {/* Layout principal */}
        <div className="grid grid-cols-1 gap-8 items-center max-w-4xl mx-auto">
          
          {/* Colonne gauche - Contenu */}
          <div className="space-y-6">
            {/* Typewriter Badge - style TopBar */}
            <TypewriterBadge />

            {/* Titre principal - Style AgentFrancais */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
                Tous les logos des clubs de football, <span className="text-navy/80">en un fichier.</span>
              </h1>
            </div>

            {/* Prix barré et offre actuelle */}
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-muted-foreground line-through">86€</span>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 font-semibold rounded-full">Valeur cumulée</span>
              <div className="w-px h-6 bg-border" />
              <span className="text-lg font-bold text-navy">8€</span>
              <span className="text-xs px-2 py-1 bg-lime-100 text-lime-700 font-semibold rounded-full">Paiement unique</span>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-xl border-2 border-border hover:border-navy/30 text-navy font-semibold px-6 py-6 h-auto text-lg hover:bg-muted/50"
                  >
                    <Folder className="w-5 h-5 mr-2" />
                    Voir le contenu
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      Descriptif du ZIP
                    </DialogTitle>
                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-bold">⦗FRONT-CLOUD⦘~ Football.zip</span>
                    </div>
                    <DialogDescription>
                      <PackDescription />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              
              <Button
                size="lg"
                onClick={goToPayment}
                className="group bg-navy hover:bg-navy/90 text-white font-bold px-8 py-6 h-auto text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-navy/25"
              >
                <span className="flex items-center gap-3">
                  <span>Télécharger maintenant</span>
                  <ChevronsRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            {/* Badges de confiance - une seule ligne */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" alt="SumUp" className="h-5" />
                <span>Paiement Sécurisé</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <img src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" alt="Google Drive" className="h-5" />
                <span>Stockable sur Drive</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <img src={trustpilotLogo} alt="TrustPilot" className="h-4" />
                <span className="font-medium">4.8/5</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Vidéo preview */}
          <div className="relative flex flex-col h-full">
            {/* Container vidéo */}
            <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-xl group">
              <video 
                className="w-full aspect-[6/5] object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
              >
                <source src="https://www.logo-foot.com/videos/preview-zip.mp4" type="video/mp4" />
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  <Folder className="w-12 h-12 text-muted-foreground" />
                </div>
              </video>
              
              {/* Overlay cadenas - disparaît au survol */}
              <div className="absolute inset-0 bg-navy/30 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
                <div className="bg-white rounded-full p-5 shadow-xl">
                  <Lock className="w-8 h-8 text-navy animate-wiggle" />
                </div>
              </div>
              
              {/* Label en bas */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <img 
                      src={footballFolderIcon} 
                      alt="Dossier Football" 
                      className="w-6 h-6 object-contain"
                    />
                    <span className="font-bold text-sm">⦗FRONT-CLOUD⦘~ Football.zip</span>
                  </div>
                  <span className="text-xs text-white/70">8 774 éléments</span>
                </div>
              </div>
            </div>
            
            {/* Indicateur téléchargements récents - aligné avec les badges de confiance */}
            <div className="flex-grow flex items-end">
              <div className="flex items-center justify-center gap-2 w-full pt-4 text-muted-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm">
                  <span className="font-bold text-foreground">{recentBuyers} personnes</span> ont téléchargé récemment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carrousel des avis clients */}
        <div className="w-full mt-6">
          <HeroTestimonialBadge />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
