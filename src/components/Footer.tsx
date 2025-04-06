import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Scroll, MessageCircle, HelpCircle, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
                  <p>Les présentes conditions générales de vente régissent la vente de ressources numériques par Hermès Ressources, SIRET 934 410 507 00016, à ses clients.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 2 - Prix</h3>
                  <p>Les prix sont indiqués en euros TTC. Hermès Ressources se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix affiché lors de la commande sera le seul applicable.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 3 - Produit</h3>
                  <p>Le produit vendu est un fichier numérique contenant une collection de ressources liées au football au format PNG. Les caractéristiques essentielles sont décrites et présentées avec la plus grande exactitude possible.</p>
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
                  <h3 className="font-semibold mb-2">Article 7 - Clause de non-responsabilité</h3>
                  <p>Ce fichier est un produit numérique destiné à un usage personnel, créatif ou éducatif. Il ne contient aucun fichier affilié à des marques officielles. Aucune ressource n'est hébergée ou distribuée en tant que fichier propriétaire sous licence.<br />⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante.</p>
                </section>
                
                <section>
                  <h3 className="font-semibold mb-2">Article 8 - Protection des données</h3>
                  <p>Les données personnelles collectées sont utilisées uniquement pour le traitement de la commande conformément au RGPD. Pour exercer vos droits de rétractation, contactez : contact@logo-foot.com</p>
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
                  <p>Siège social : 35 rue Châteaubriand, 62100 Calais FR</p>
                  <p>SIRET : 934 410 507 00016</p>
                  <p>Contact : contact@logo-foot.com</p>
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
                  <p>Les informations collectées sont utilisées uniquement dans le cadre de la gestion des commandes et ne sont pas partagées avec des tiers. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en contactant contact@logo-foot.com.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Litiges</h3>
                  <p>En cas de litige, la législation française s'applique, une solution amiable sera recherchée avant toute action judiciaire.</p>
                </section>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Questions fréquentes</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Le paiement est-il sécurisé ?</AccordionTrigger>
                    <AccordionContent>
                      Absolument ! Nous utilisons SumUp, l'un des leaders européens du paiement en ligne. 
                      Toutes les transactions sont cryptées et sécurisées selon les normes bancaires les plus strictes. 
                      Vous pouvez payer en toute confiance avec votre carte bancaire.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Comment se déroule le téléchargement ?</AccordionTrigger>
                    <AccordionContent>
                      C'est simple et instantané ! Après votre paiement, vous recevez immédiatement un lien de 
                      téléchargement sur la page de confirmation. Le fichier ZIP contenant tous les logos est 
                      disponible instantanément.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Que contient exactement le pack ?</AccordionTrigger>
                    <AccordionContent>
                      Notre pack premium contient plus de 8 600 logos de football en haute qualité, incluant :
                      • Les logos des clubs de plus de 60 pays
                      • Les logos des principales compétitions
                      • Les drapeaux nationaux
                      • Les logos des bookmakers
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
                </Accordion>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
