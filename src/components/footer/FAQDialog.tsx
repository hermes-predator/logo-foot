
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FAQDialogProps {
  asLink?: boolean;
  onContactClose?: () => void;
}

const FAQDialog = ({ asLink = false, onContactClose }: FAQDialogProps) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    if (onContactClose) {
      // D'abord ouvrir la FAQ
      setIsOpen(true);
      // Puis fermer le contact avec un petit délai
      setTimeout(() => {
        onContactClose();
      }, 100);
    }
  };
  
  const triggerContent = asLink ? (
    <span className="text-blue-600 hover:underline cursor-pointer font-bold">FAQ</span>
  ) : (
    <span className={`flex items-center gap-2 transition-colors ${
      isMobile 
        ? 'px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md text-left w-full' 
        : 'hover:text-gray-900'
    }`}>
      <HelpCircle className="w-4 h-4" />
      <span>FAQ</span>
    </span>
  );
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={asLink ? "inline" : ""} onClick={handleClick}>
          {triggerContent}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800" style={{ letterSpacing: '-0.01em' }}>Questions fréquentes</DialogTitle>
          <DialogDescription>
            Retrouvez les réponses aux questions les plus courantes concernant nos produits et services.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Le paiement est-il sécurisé ?</AccordionTrigger>
              <AccordionContent>
                Absolument ! Nous utilisons SumUp, l'un des leaders européens du paiement en ligne. 
                Toutes les transactions sont cryptées et sécurisées selon les normes bancaires les plus strictes. 
                Vous pouvez payer en toute confiance avec votre carte bancaire ou Google Pay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Comment se déroule le téléchargement ?</AccordionTrigger>
              <AccordionContent>
                C'est simple et instantané ! Après votre paiement, vous êtes redirigé vers la page d'après-paiement contenant le lien de téléchargement. 
                Le fichier ZIP est disponible immédiatement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Que contient exactement le paquet ?</AccordionTrigger>
              <AccordionContent>
                Notre pack premium contient plus de 8 600 logos de football en haute qualité, incluant : 
                Les logos des clubs de football de plus de 60 pays • Les logos des principales compétitions • Les drapeaux nationaux • Les logos des bookmakers et bien plus... 
                Tous les fichiers sont en PNG avec fond transparent, parfaitement optimisés pour une utilisation web.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Comment puis-je utiliser ces logos ?</AccordionTrigger>
              <AccordionContent>
                Les logos peuvent être utilisés pour vos projets web personnels. Notre pack est spécialement 
                conçu pour une utilisation web avec des fichiers optimisés et homogènes. Vous bénéficiez 
                d'une collection complète et professionnelle, prête à l'emploi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Un problème ? Nous sommes là pour vous aider</AccordionTrigger>
              <AccordionContent>
                Notre service client est disponible 7j/7 pour vous accompagner. En cas de question ou de 
                difficulté avec votre téléchargement, contactez-nous à contact@logo-foot.com. Nous vous 
                répondrons dans les plus brefs délais pour vous assurer une expérience parfaite.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Comment obtenir ma facture ou preuve d'achat ?</AccordionTrigger>
              <AccordionContent>
                Un reçu au format HTML ou PDF est automatiquement généré après votre paiement et 
                disponible sur la page de confirmation. Vous pouvez le télécharger immédiatement. 
                Si vous avez besoin d'une facture formelle ou d'une copie de votre reçu, contactez-nous 
                à contact@logo-foot.com en précisant la date de votre achat et nous vous l'enverrons 
                dans un délai de 48h.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FAQDialog;
