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
                  <p>Les présentes conditions générales de vente régissent la vente de produits numériques par Hermès Ressources, SIRET 934 410 507 00016, à ses clients.</p>
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
                  
                  <p>Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives.</p>
                  
                  <p>⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante, compilée et organisée à des fins d'archivage, de culture visuelle et de création.</p>
                  
                  <p>Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.</p>
                  
                  <p>Nous ne revendiquons aucune affiliation, partenariat ou validation de la part des clubs, compétitions ou organisations citées ou représentées.</p>
                  
                  
                  
                  <p>Tout utilisateur est invité à respecter les droits de propriété intellectuelle des marques concernées dans le cadre de ses projets personnels.</p>
                </section>
                
                <section>
                  <h3 className="font-semibold mb-2">Article 8 - Protection des données</h3>
                  <p>Les données personnelles collectées sont utilisées uniquement pour le traitement de la commande conformément au RGPD. Pour exercer vos droits de rétractation, contactez : contact@logo-foot.com</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 9 - Preuve d'achat et facturation</h3>
                  <p>Une preuve d'achat (reçu) est automatiquement générée en format HTML ou PDF et mise à disposition du client immédiatement après le paiement. Hermès Ressources conserve un enregistrement de toutes les transactions pendant une durée de 10 ans conformément aux obligations légales. Dans le cadre de la dématérialisation des factures, aucune facture papier n'est envoyée par défaut.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 10 - Médiation de la consommation</h3>
                  <p>Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, vous pouvez recourir au service de médiation proposé par Hermès Ressources. Le médiateur "droit de la consommation" ainsi proposé est MEDICYS. Ce dispositif de médiation peut être joint par voie électronique à contact@medicys.fr ou par voie postale : MEDICYS - Centre de médiation et règlement amiable des huissiers de justice - 73, Boulevard de Clichy, 75009 - Paris.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Article 11 - Litiges</h3>
                  <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut de résolution amiable, tout litige relatif à l'interprétation ou à l'exécution des présentes CGV sera de la compétence exclusive des tribunaux du ressort de Calais, France.</p>
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
                  <h3 className="font-semibold mb-2">Conservation des données de transaction</h3>
                  <p>Les données relatives aux transactions et preuves d'achat sont conservées de manière sécurisée pendant 10 ans conformément aux obligations légales commerciales et fiscales françaises. Ces données incluent l'identifiant de transaction, la date, le montant et le produit acheté.</p>
                </section>

                <section>
                  <h3 className="font-semibold mb-2">Litiges</h3>
                  <p>En cas de litige, la législation française s'applique, une solution amiable sera recherchée avant toute action judiciaire. Le tribunal de commerce de Calais sera seul compétent en cas de litige non résolu à l'amiable.</p>
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

          <Dialog>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <AlertTriangle className="w-4 h-4" />
              Disclaimer
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <div className="mt-4 p-4 border border-amber-200 bg-amber-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-800 space-y-6">
                    <p>
                      Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives.<br/><br/>
                      ⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante, compilée et organisée à des fins d'archivage, de culture visuelle et de création.<br/><br/>
                      Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.<br/><br/>
                      Nous ne revendiquons aucune affiliation, partenariat ou validation de la part des clubs, compétitions ou organisations citées ou représentées.<br/><br/>
                      Le pack n'est pas destiné à un usage commercial ou à une revente des éléments qu'il contient.<br/><br/>
                      Tout utilisateur est invité à respecter les droits de propriété intellectuelle des marques concernées dans le cadre de ses projets personnels.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
