import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Scroll } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MentionsLegalesDialog = () => {
  const isMobile = useIsMobile();
  
  return (
    <Dialog>
      <DialogTrigger className={`flex items-center gap-2 transition-colors ${
        isMobile 
          ? 'px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md text-left w-full' 
          : 'hover:text-gray-900'
      }`}>
        <Scroll className="w-4 h-4" />
        <span>Mentions légales</span>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Mentions légales</DialogTitle>
          <DialogDescription>
            Informations légales obligatoires concernant l'éditeur du site et les conditions d'utilisation.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-sm space-y-4">
          <section>
            <h3 className="font-semibold mb-2">Éditeur du site</h3>
            <p>
              Nom de l'entreprise : Hermès Ressources<br />
              Siège social : 35 rue Châteaubriand, 62100 Calais FR<br />
              SIRET : 934 410 507 00016<br />
              Contact : contact@logo-foot.com
            </p>
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
  );
};

export default MentionsLegalesDialog;
