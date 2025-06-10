import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CGVDialog = () => {
  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger className={isMobile 
        ? "flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-all px-4 py-3 rounded-md text-left w-full"
        : "hover:text-gray-900 transition-colors"
      }>
        {isMobile && <FileText className="w-4 h-4" />}
        <span>CGV</span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Conditions Générales de Vente</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-sm">
          <p>
            Bienvenue sur notre site web. Si vous continuez à naviguer et à utiliser ce site web, vous acceptez de respecter et d'être lié par les conditions générales d'utilisation suivantes, qui, avec notre politique de confidentialité, régissent la relation de [Nom de l'entreprise] avec vous concernant ce site web.
          </p>
          <p>
            Le terme [Nom de l'entreprise] ou 'nous' ou 'notre' se réfère au propriétaire du site web. Le terme 'vous' se réfère à l'utilisateur ou au visiteur de notre site web.
          </p>
          <p>
            L'utilisation de ce site web est soumise aux conditions d'utilisation suivantes :
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Le contenu des pages de ce site web est pour votre information générale et votre utilisation seulement. Il est sujet à changement sans préavis.
            </li>
            <li>
              Ce site web utilise des cookies pour surveiller les préférences de navigation. Si vous autorisez l'utilisation de cookies, des informations personnelles peuvent être stockées par nous pour une utilisation par des tiers.
            </li>
            <li>
              Ni nous ni aucun tiers ne fournissons aucune garantie quant à l'exactitude, la rapidité, la performance, l'exhaustivité ou la pertinence des informations et des matériaux trouvés ou offerts sur ce site web pour un usage particulier. Vous reconnaissez que ces informations et matériaux peuvent contenir des inexactitudes ou des erreurs et nous excluons expressément toute responsabilité pour de telles inexactitudes ou erreurs dans toute la mesure permise par la loi.
            </li>
            <li>
              Votre utilisation de toute information ou matériel sur ce site web est entièrement à vos propres risques, pour lesquels nous ne serons pas responsables. Il sera de votre propre responsabilité de vous assurer que tous les produits, services ou informations disponibles sur ce site web répondent à vos exigences spécifiques.
            </li>
            <li>
              Ce site web contient du matériel qui nous appartient ou qui nous est concédé sous licence. Ce matériel comprend, sans s'y limiter, la conception, la mise en page, l'apparence, l'aspect et les graphiques. La reproduction est interdite autrement qu'en conformité avec l'avis de droit d'auteur, qui fait partie de ces termes et conditions.
            </li>
            <li>
              Toutes les marques reproduites sur ce site web, qui ne sont pas la propriété de l'opérateur ou qui ne lui sont pas concédées sous licence, sont reconnues sur le site web.
            </li>
            <li>
              L'utilisation non autorisée de ce site web peut donner lieu à une réclamation pour dommages et/ou constituer une infraction pénale.
            </li>
            <li>
              De temps en temps, ce site web peut également inclure des liens vers d'autres sites web. Ces liens sont fournis pour votre commodité afin de fournir de plus amples informations. Ils ne signifient pas que nous approuvons le(s) site(s) web. Nous n'avons aucune responsabilité quant au contenu du ou des sites web liés.
            </li>
            <li>
              Votre utilisation de ce site web et tout litige découlant de cette utilisation du site web est soumis aux lois de [Pays].
            </li>
          </ol>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CGVDialog;
