import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder, Download, Lock, Users, Zap, Shield, RefreshCw, ChevronsRight } from "lucide-react";
import footballFolderIcon from '@/assets/football-folder.png';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PackDescription from './PackDescription';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import { useRecentBuyers } from '@/contexts/RecentBuyersContext';
import { useDownloadCount } from '@/contexts/DownloadCountContext';
import trustpilotLogo from '@/assets/trustpilot-logo.png';
import HeroDecorations from './HeroDecorations';
import TypewriterBadge from './TypewriterBadge';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const goToPayment = () => navigate('/payment');
  const recentBuyers = useRecentBuyers();
  const downloadCount = useDownloadCount();

  return (
    <section className="relative pt-8 pb-6 px-4 overflow-hidden">
      {/* Background pattern subtil */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />
      
      {/* Décorations style AgentFrancais */}
      <HeroDecorations />
      
      <div className="max-w-6xl mx-auto">
        {/* Layout principal */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          
          {/* Colonne gauche - Contenu */}
          <div className="space-y-6">
            {/* Typewriter Badge - style TopBar */}
            <TypewriterBadge />

            {/* Titre principal - Style AgentFrancais */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
                Tous les logos de foot,<br />
                <span className="text-navy/80">en un seul fichier.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Téléchargez plus de 8 700 logos de clubs de football uniformes, nommés et triés par pays.
              </p>
            </div>

            {/* Tags des bénéfices - Style AgentFrancais */}
            <div className="flex flex-wrap gap-3">
              <div className="badge-pill">
                <Zap className="w-4 h-4" />
                <span>Livraison instantanée</span>
              </div>
              <div className="badge-pill">
                <Shield className="w-4 h-4" />
                <span>Paiement sécurisé</span>
              </div>
              <div className="badge-pill">
                <RefreshCw className="w-4 h-4" />
                <span>MAJ régulières</span>
              </div>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={goToPayment}
                className="group relative inline-flex items-center bg-white/80 backdrop-blur-sm border border-border rounded-full p-1.5 pr-2 transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                {/* Inner lime button with hexagon pattern */}
                <span className="relative overflow-hidden bg-lime text-secondary font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2">
                  {/* Hexagon pattern overlay */}
                  <span className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                  <span className="relative">Télécharger pour 5€</span>
                  <ChevronsRight className="relative w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
              
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
            </div>

            {/* Prix barré et réassurance */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-lg text-muted-foreground line-through">86€</span>
                <span className="text-xs px-2 py-1 bg-red-100 text-red-700 font-semibold rounded-full">-90%</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <img src={trustpilotLogo} alt="TrustPilot" className="h-4" />
                <span className="font-medium">4.8/5</span>
                <span className="text-muted-foreground/60">• {downloadCount.toLocaleString('fr-FR')} downloads</span>
              </div>
            </div>

            {/* Badges de confiance */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <img src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" alt="SumUp" className="h-5" />
                <span>Paiement Sécurisé</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <img src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" alt="Google Drive" className="h-5" />
                <span>Stockable sur Drive</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Vidéo preview */}
          <div className="relative">
            {/* Floating cards autour de la vidéo */}
            <div className="hidden lg:block absolute -top-4 -right-4 z-20">
              <div className="floating-card px-4 py-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-lime-600" />
                <span className="text-sm font-medium">+8 700 logos</span>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -bottom-4 -left-4 z-20">
              <div className="floating-card px-4 py-3 flex items-center gap-2">
                <Download className="w-4 h-4 text-lime-600" />
                <span className="text-sm font-medium">Téléchargement instant</span>
              </div>
            </div>

            {/* Container vidéo */}
            <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-xl group">
              <video 
                className="w-full aspect-video object-cover"
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
          </div>
        </div>

        {/* Carrousel des avis clients */}
        <div className="w-full mt-10">
          <HeroTestimonialBadge />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
