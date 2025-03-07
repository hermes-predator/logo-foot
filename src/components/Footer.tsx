
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Scroll } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-12 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <Dialog>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <FileText className="w-4 h-4" />
              Conditions générales de vente
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Conditions générales de vente</DialogTitle>
              </DialogHeader>
              <div className="mt-4 text-sm">
                <p>En attente du contenu des CGV...</p>
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
