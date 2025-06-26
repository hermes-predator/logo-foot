import React from 'react';
import { Crown, Folder, ShieldCheck, Lock, CheckCircle2, Download, Sparkles, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PackDescription from './PackDescription';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import HeroTestimonialBadge from './HeroTestimonialBadge';
interface HeroSectionProps {
  onScrollToPayment: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToPayment
}) => {
  return <section className="relative pt-14 pb-12 px-4 overflow-hidden">
      {/* Background effects - Améliorés */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-blue-50/50 to-white opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.1),transparent_50%)]" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -z-10" style={{
        animation: 'pulse 8s ease-in-out infinite'
      }} />
        <div className="absolute top-60 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10" style={{
        animation: 'pulse 12s ease-in-out infinite'
      }} />
      </div>

      {/* Sparkles brandés premium - effet de profondeur et hiérarchie */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sparkles niveau 1 - Hero sparkles avec glow intense */}
        <Sparkles className="absolute top-16 left-[10%] text-purple-500/70 w-5 h-5" style={{
        animation: 'floating 8s ease-in-out infinite',
        filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3))',
        transform: 'rotate(-15deg)'
      }} />
        <Sparkles className="absolute top-28 right-[8%] text-indigo-500/60 w-6 h-6" style={{
        animation: 'floating 10s ease-in-out infinite',
        animationDelay: '2s',
        filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.6)) drop-shadow(0 0 20px rgba(99, 102, 241, 0.2))',
        transform: 'rotate(25deg)'
      }} />
        
        {/* Sparkles niveau 2 - Support sparkles avec glow moyen */}
        <Sparkles className="absolute top-[42%] left-[7%] text-purple-400/55 w-4 h-4" style={{
        animation: 'floating 7s ease-in-out infinite',
        animationDelay: '3.5s',
        filter: 'drop-shadow(0 0 6px rgba(196, 181, 253, 0.8)) drop-shadow(0 0 12px rgba(196, 181, 253, 0.4))',
        transform: 'rotate(45deg)'
      }} />
        <Sparkles className="absolute top-[35%] right-[12%] text-blue-400/50 w-5 h-5" style={{
        animation: 'floating 9s ease-in-out infinite',
        animationDelay: '1.2s',
        filter: 'drop-shadow(0 0 7px rgba(147, 197, 253, 0.7)) drop-shadow(0 0 14px rgba(147, 197, 253, 0.3))',
        transform: 'rotate(-30deg)'
      }} />
        
        {/* Sparkles niveau 3 - Accent sparkles avec glow subtil */}
        <Sparkles className="absolute top-[60%] left-[20%] text-purple-300/45 w-3 h-3" style={{
        animation: 'floating 6s ease-in-out infinite',
        animationDelay: '5s',
        filter: 'drop-shadow(0 0 4px rgba(216, 180, 254, 0.6))',
        transform: 'rotate(60deg)'
      }} />
        <Sparkles className="absolute top-[52%] right-[22%] text-indigo-300/40 w-4 h-4" style={{
        animation: 'floating 8.5s ease-in-out infinite',
        animationDelay: '4.2s',
        filter: 'drop-shadow(0 0 5px rgba(165, 180, 252, 0.5))',
        transform: 'rotate(-45deg)'
      }} />
        
        {/* Sparkles niveau 4 - Background sparkles très subtils */}
        <Sparkles className="absolute bottom-[25%] left-[15%] text-blue-200/35 w-3 h-3" style={{
        animation: 'floating 5.5s ease-in-out infinite',
        animationDelay: '2.8s',
        filter: 'drop-shadow(0 0 3px rgba(191, 219, 254, 0.4))',
        transform: 'rotate(15deg)'
      }} />
        <Sparkles className="absolute bottom-[32%] right-[18%] text-purple-200/30 w-3 h-3" style={{
        animation: 'floating 11s ease-in-out infinite',
        animationDelay: '6s',
        filter: 'drop-shadow(0 0 2px rgba(233, 213, 255, 0.4))',
        transform: 'rotate(-60deg)'
      }} />
        
        {/* Sparkles niveau 5 - Micro sparkles pour texture */}
        <Sparkles className="absolute top-[70%] left-[25%] text-indigo-100/25 w-2 h-2" style={{
        animation: 'floating 4s ease-in-out infinite',
        animationDelay: '3.8s',
        transform: 'rotate(90deg)'
      }} />
        <Sparkles className="absolute top-[75%] right-[28%] text-purple-100/20 w-2 h-2" style={{
        animation: 'floating 12s ease-in-out infinite',
        animationDelay: '7.5s',
        transform: 'rotate(-90deg)'
      }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-7">
        {/* Google Drive Badge remplaçant le Premium Badge */}
        <div className="flex justify-center mb-3">
          <GoogleDriveBadge className="transform transition-transform duration-300" alwaysEnlarged={true} />
        </div>

        {/* Main title - Amélioré */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2 drop-shadow-sm">Logo des clubs de football</h1>

        {/* Subtitle - Amélioré */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 italic mt-5">
          <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">⦗FRONT-CLOUD⦘~ Football.zip</span>
        </h2>
        
        {/* Description - Amélioré */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-2">La plus grande collection de logo des équipes de foot en haute qualité et uniforme. Plus de 8 600 logos de club de foot internationaux, les logos des compétitions... une couverture totale du football réunie dans un fichier ZIP arborescent.</p>

        {/* Testimonial Badge - Déplacé ici après la description */}
        <div className="flex justify-center pt-2">
          <HeroTestimonialBadge />
        </div>

        {/* Trust badges - Animation optimisée et améliorée */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Fichiers Consultables</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <Lock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <Download className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Téléchargement Instantané</span>
          </div>
        </div>

        {/* CTA buttons - Spacing amélioré */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200/80 hover:border-gray-300 transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 opacity-80"></div>
                <Folder size={28} className="mr-2 text-gray-800 transition-colors duration-300" />
                <span className="relative z-10 font-bold text-[22px] text-gray-800 transition-colors duration-300">Descriptif du ZIP</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
              <DialogHeader className="pb-0">
                <div className="flex flex-col mb-0">
                  <DialogTitle className="text-2xl font-bold text-black text-left mb-0">
                    Descriptif du ZIP
                  </DialogTitle>
                  
                  <div className="relative mt-1 mb-1">
                    <span className="text-sm font-mono tracking-tight bg-gray-800 px-3 py-1 rounded text-gray-100 inline-block relative shadow-sm">
                      ⦗FRONT-CLOUD⦘~ Football.zip
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="mt-4">
                    <GoogleDriveBadge />
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button onClick={() => {
                      const returnUrl = `${window.location.origin}/payment-success`;
                      window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
                    }} variant="outline" size="sm" className="h-8 bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-600 gap-1 mt-4">
                        <Download className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">Télécharger ce fichier (9€)</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="end" className="max-w-[180px] text-center">
                      <p className="text-xs">Accès immédiat après paiement</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                <DialogDescription className="text-left pt-0 mt-0">
                  <PackDescription />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default" size="lg" onClick={() => {
              const returnUrl = `${window.location.origin}/payment-success`;
              window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
            }} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-[22px] gap-5 hover:-translate-y-0.5 px-12 py-6 h-auto relative group overflow-hidden">
                {/* Outer glow animation - Améliorée */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-yellow-300/30 to-amber-400/30 rounded-md blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{
                animation: 'pulse 2s ease-in-out infinite'
              }}></div>

                <div className="relative">
                  <ShoppingCart style={{
                  color: "#FFE082",
                  filter: 'drop-shadow(0 0 4px rgba(255, 224, 130, 0.8))',
                  animation: 'cartMove 1.5s ease-in-out infinite',
                  width: '26px',
                  height: '26px',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease'
                }} />
                </div>
                
                <span className="relative z-10 font-bold tracking-wide">
                  Achat rapide ~ 9€
                </span>
                
                {/* Shine effect - Amélioré */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-50 group-hover:animate-shine" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center" sideOffset={10} className="bg-white border border-gray-200 shadow-md p-4 max-w-[400px]">
              <div className="space-y-3">
                {/* Titre principal plus grand */}
                <p className="text-lg font-bold text-gray-800 leading-tight">Télécharger le fichier ZIP complet</p>
                
                {/* Séparateur visuel */}
                <div className="h-px bg-gray-200"></div>
                
                {/* Étapes avec numérotation simple */}
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-gray-500 mt-0.5">1</span>
                    <span className="text-sm text-gray-600 leading-relaxed">Paiement sécurisé via SumUp</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-gray-500 mt-0.5">2</span>
                    <span className="text-sm text-gray-600 leading-relaxed">Accès en page d'après-paiement</span>
                  </div>
                </div>
                
                {/* Badges de confiance plus espacés */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">⏱️ 2 minutes seulement</span>
                  <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">✓ Fiable à 100%</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>;
};
export default HeroSection;