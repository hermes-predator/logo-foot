import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MentionsLegalesDialog = () => {
  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger className={isMobile 
        ? "flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-all px-4 py-3 rounded-md text-left w-full"
        : "hover:text-gray-900 transition-colors"
      }>
        {isMobile && <Shield className="w-4 h-4" />}
        <span>Mentions légales</span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Mentions Légales</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-sm">
          <p>
            <strong>Identification de l'éditeur du site</strong>
          </p>
          <p>
            [Nom de l'éditeur]
            [Adresse de l'éditeur]
            [Numéro de téléphone de l'éditeur]
            [Adresse e-mail de l'éditeur]
          </p>

          <p>
            <strong>Directeur de la publication</strong>
          </p>
          <p>
            [Nom du directeur de la publication]
            [Adresse e-mail du directeur de la publication]
          </p>

          <p>
            <strong>Hébergeur du site</strong>
          </p>
          <p>
            [Nom de l'hébergeur]
            [Adresse de l'hébergeur]
            [Numéro de téléphone de l'hébergeur]
          </p>

          <p>
            <strong>Propriété intellectuelle</strong>
          </p>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>

          <p>
            <strong>Marques et logos</strong>
          </p>
          <p>
            Les marques et logos figurant sur ce site sont des marques déposées. Toute reproduction ou représentation totale ou partielle de ces marques ou logos, seules ou intégrées à d'autres éléments, sans l'autorisation expresse et préalable de [Nom de l'entreprise], est prohibée, et engagerait la responsabilité de l'utilisateur au sens des articles L.713-2 et L.713-3 du Code de la propriété intellectuelle.
          </p>

          <p>
            <strong>Liens hypertextes</strong>
          </p>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet, ne sauraient engager la responsabilité de [Nom de l'entreprise].
          </p>

          <p>
            <strong>Données personnelles</strong>
          </p>
          <p>
            [Décrire la politique de confidentialité concernant la collecte et le traitement des données personnelles des utilisateurs du site, conformément au RGPD et à la législation applicable.]
          </p>

          <p>
            <strong>Cookies</strong>
          </p>
          <p>
            [Décrire l'utilisation des cookies sur le site, en informant les utilisateurs de leur finalité et de la possibilité de les désactiver.]
          </p>

          <p>
            <strong>Responsabilité</strong>
          </p>
          <p>
            [Nom de l'entreprise] met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site.
          </p>

          <p>
            <strong>Droit applicable et juridiction compétente</strong>
          </p>
          <p>
            Tout litige en relation avec l'utilisation du présent site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de [Ville].
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MentionsLegalesDialog;
