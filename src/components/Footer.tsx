import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Scroll, MessageCircle } from "lucide-react";
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className="border-t mt-12 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <Dialog>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <MessageCircle className="w-4 h-4" />
              Contactez-nous
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Contactez-nous</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <ContactForm />
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <FileText className="w-4 h-4" />
              Conditions générales de vente
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Conditions générales de vente</DialogTitle>
              </DialogHeader>
              <div className="mt-4 text-sm space-y-4">
                <section>
                  <h3 className="font-semibold mb-2">Article 1 - Objet</h3>
                  <p>Les présentes conditions générales de vente régissent la vente de ressources numériques (logos de football) par Hermès Ressources, SIRET 934 410 507 00016, à ses clients.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 2 - Prix</h3>
                  <p>Les prix sont indiqués en euros TTC. Hermès Ressources se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix affiché lors de la commande sera le seul applicable.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 3 - Produit</h3>
                  <p>Le produit vendu est un fichier numérique contenant une collection de logos de football au format PNG. Les caractéristiques essentielles sont décrites et présentées avec la plus grande exactitude possible.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 4 - Commande et Paiement</h3>
                  <p>La commande devient effective au moment du paiement intégral. Le paiement s'effectue par carte bancaire via notre prestataire sécurisé SumUp.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 5 - Livraison</h3>
                  <p>La livraison s'effectue immédiatement après le paiement par téléchargement numérique. Un lien de téléchargement est automatiquement fourni.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 6 - Droit de rétractation</h3>
                  <p>Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contenus numériques fournis sur un support immatériel dont l'exécution a commencé après accord préalable exprès du consommateur.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 7 - Propriété intellectuelle</h3>
                  <p>L'achat confère un droit d'utilisation personnel des ressources. La revente, la redistribution ou la modification des fichiers est interdite. Les logos contenus dans le pack sont la propriété de leurs détenteurs respectifs.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 8 - Protection des données</h3>
                  <p>Les données personnelles collectées sont utilisées uniquement pour le traitement de la commande conformément au RGPD. Pour exercer vos droits, contactez : sylvainbenoit62100@gmail.com</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 9 - Litiges</h3>
                  <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.</p>
                </section>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <Scroll className="w-4 h-4" />
              Mentions légales
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Mentions légales</DialogTitle>
              </DialogHeader>
              <div className="mt-4 text-sm space-y-4">
                <section>
                  <h3 className="font-semibold mb-2">Éditeur du site</h3>
                  <p>Nom de l'entreprise : Hermès Ressources</p>
                  <p>Siège social : 35 rue Châteaubriand Calais 62100 FR</p>
                  <p>SIRET : 934 410 507 00016</p>
                  <p>Contact : sylvainbenoit62100@gmail.com</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Hébergement</h3>
                  <p>Le site est hébergé par Hostinger, HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Activité</h3>
                  <p>L'entreprise propose la vente de prestations de service commerciales et de produits digitaux téléchargeables.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Propriété intellectuelle</h3>
                  <p>Tous les contenus présents sur ce site (textes, images, produits numériques) sont protégés par le droit d'auteur. Toute reproduction ou diffusion sans autorisation est interdite.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Droit de rétractation</h3>
                  <p>Conformément à l'article L.221-28 du Code de la consommation, les produits numériques ne bénéficient pas du droit de rétractation dès lors qu'ils ont été téléchargés.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Données personnelles</h3>
                  <p>Les informations collectées sont utilisées uniquement dans le cadre de la gestion des commandes et ne sont pas partagées avec des tiers. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en contactant sylvainbenoit62100@gmail.com.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Litiges</h3>
                  <p>En cas de litige, la législation française s'applique. Tout différend pourra être soumis aux tribunaux compétents.</p>
                </section>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
