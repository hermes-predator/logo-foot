
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CGVDialog = () => {
  const isMobile = useIsMobile();
  
  return (
    <Dialog>
      <DialogTrigger className={`flex items-center gap-2 transition-colors ${
        isMobile 
          ? 'px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md text-left w-full' 
          : 'hover:text-gray-900'
      }`}>
        <FileText className="w-4 h-4" />
        <span>Conditions générales de vente</span>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Conditions générales de vente</DialogTitle>
          <DialogDescription>
            Conditions régissant la vente de nos produits numériques et les droits et obligations de chaque partie.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-sm space-y-4">
          <section>
            <h3 className="font-semibold mb-2">Article 1 - Objet</h3>
            <p>Les présentes conditions générales de vente régissent la vente de produits numériques via le site logo-foot.com, édité par Hermès Ressources, SIRET 934 410 507 00016, à ses clients.</p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 2 - Prix</h3>
            <p>Les prix sont indiqués en EURO TTC. Hermès Ressources se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix affiché lors de la commande sera le seul applicable.</p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 3 - Produit</h3>
            <p>Le produit vendu est un fichier ZIP regroupant de nombreuses collections d'images numériques du football. Les caractéristiques essentielles sont décrites et présentées avec la plus grande exactitude possible en actionnant le bouton "Descriptif du ZIP".</p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 4 - Commande et Paiement</h3>
            <p>La commande devient effective au moment du paiement intégral.</p>
            <p>Le paiement s'effectue par carte bancaire via notre prestataire sécurisé SumUp.</p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 5 - Livraison</h3>
            <p>
              La livraison s'effectue immédiatement après le paiement par téléchargement numérique.<br />
              Un lien de téléchargement est automatiquement accessible.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 6 - Droit de rétractation</h3>
            <p>Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contenus numériques fournis sur un support immatériel dont l'exécution a commencé après accord préalable exprès du consommateur.</p>
          </section>
          
          <section>
            <h3 className="font-semibold mb-2">Article 7 - Garantie "Satisfait ou remboursé"</h3>
            <p>Bien que les produits numériques ne soient légalement pas soumis au droit de rétractation une fois téléchargés (article L221-28 du Code de la consommation), Hermès Ressources propose, à titre commercial, une garantie "Satisfait ou Remboursé" sous conditions.</p>
            <p className="mt-2">
              Le client peut formuler une demande de remboursement motivée par e-mail dans un délai de 14 jours après l'achat. 
              Chaque demande sera étudiée au cas par cas, et Hermès Ressources se réserve le droit de l'accepter ou de la refuser selon les éléments fournis.
            </p>
            <p className="mt-2">
              Hermès Ressources se réserve notamment le droit de refuser une demande en cas de téléchargement complet du fichier, d'usage manifeste du produit ou de tentative de fraude.
            </p>
            <p className="mt-2">
              Cette garantie est optionnelle, non automatique et laissée à l'appréciation exclusive de Hermès Ressources. 
              Elle ne constitue pas une obligation légale.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Article 8 - Clause de non-responsabilité</h3>
            <p>Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives. Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.</p>

            <p className="mt-2">⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante, compilée et organisée à des fins d'archivage, de culture visuelle et de création.</p>

            <p className="mt-2">Nous ne revendiquons aucune affiliation, partenariat ou validation de la part des clubs, compétitions ou organisations citées ou représentées.</p>

            <p className="mt-2">Tout utilisateur est invité à respecter les droits de propriété intellectuelle des marques concernés dans le cadre de ses projets personnels.</p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 9 - Protection des données</h3>
            <p>Les données personnelles collectées sont utilisées uniquement pour le traitement de la commande conformément au RGPD. Pour exercer vos droits de rétractation, contactez : contact@logo-foot.com</p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 10 - Preuve d'achat et facturation</h3>
            <p>Une preuve d'achat (reçu) est automatiquement générée en format HTML ou PDF et mise à disposition du client immédiatement après le paiement. Hermès Ressources conserve un enregistrement de toutes les transactions pendant une durée de 10 ans conformément aux obligations légales. Dans le cadre de la dématérialisation des factures, aucune facture papier n'est envoyée par défaut.</p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 11 - Médiation de la consommation</h3>
            <p>
              Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, 
              vous pouvez recourir au service de médiation proposé par Hermès Ressources.<br />
            Le médiateur "droit de la consommation" ainsi proposé est MEDICYS.
          </p>
          <p className="mt-2">
            Ce dispositif de médiation peut être joint :
            <br />- Par voie électronique à contact@medicys.fr
            <br />- Par voie postale : MEDICYS - Centre de médiation et règlement amiable des huissiers de justice - 73, Boulevard de Clichy, 75009 - Paris.
          </p>
          <p className="mt-2">
            Plateforme européenne de règlement des litiges en ligne (ODR) : https://ec.europa.eu/consumers/odr
          </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Article 12 - Litiges</h3>
            <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut de résolution amiable, tout litige relatif à l'interprétation ou à l'exécution des présentes CGV sera de la compétence exclusive des tribunaux du ressort de Calais, France.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CGVDialog;
