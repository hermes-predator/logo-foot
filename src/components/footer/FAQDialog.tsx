import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FAQDialog = () => {
  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger className={isMobile 
        ? "flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-all px-4 py-3 rounded-md text-left w-full"
        : "hover:text-gray-900 transition-colors"
      }>
        {isMobile && <HelpCircle className="w-4 h-4" />}
        <span>FAQ</span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Foire Aux Questions</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-sm">
          <h3 className="font-semibold text-gray-700">Question 1: Qu'est-ce que Logos de Foot ?</h3>
          <p>Logos de Foot est une collection massive de logos de clubs de football, allant des plus célèbres aux équipes moins connues du monde entier. Notre objectif est de fournir une ressource complète pour les designers, les fans et tous ceux qui ont besoin d'accéder à des logos de football de haute qualité.</p>

          <h3 className="font-semibold text-gray-700">Question 2: Comment puis-je télécharger les logos ?</h3>
          <p>Vous pouvez télécharger tous les logos en achetant notre fichier ZIP unique. Une fois l'achat effectué, vous recevrez un lien de téléchargement immédiat pour accéder à l'intégralité de la collection.</p>

          <h3 className="font-semibold text-gray-700">Question 3: Quels formats de fichiers sont inclus dans le ZIP ?</h3>
          <p>Le fichier ZIP contient des logos en formats PNG et SVG. Le format PNG est idéal pour une utilisation web et bureautique, tandis que le format SVG est vectoriel et peut être mis à l'échelle sans perte de qualité, parfait pour l'impression et le design professionnel.</p>

          <h3 className="font-semibold text-gray-700">Question 4: Les logos sont-ils officiels et à jour ?</h3>
          <p>Nous nous efforçons de maintenir notre collection à jour avec les logos officiels les plus récents. Cependant, en raison des changements fréquents dans le monde du football, il peut y avoir quelques exceptions. Nous vous recommandons de vérifier l'authenticité d'un logo si vous avez besoin d'une version absolument officielle.</p>

          <h3 className="font-semibold text-gray-700">Question 5: Puis-je utiliser ces logos à des fins commerciales ?</h3>
          <p>L'utilisation des logos est soumise aux droits d'auteur et aux marques déposées des clubs respectifs. Vous êtes responsable de vous assurer que votre utilisation est conforme aux lois applicables. En général, une utilisation commerciale nécessitera une autorisation des détenteurs de droits.</p>

          <h3 className="font-semibold text-gray-700">Question 6: Comment puis-je obtenir de l'aide si j'ai des problèmes avec le téléchargement ?</h3>
          <p>Si vous rencontrez des problèmes avec le téléchargement ou si vous avez d'autres questions, veuillez nous contacter via notre formulaire de contact. Nous ferons de notre mieux pour vous aider rapidement.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FAQDialog;
