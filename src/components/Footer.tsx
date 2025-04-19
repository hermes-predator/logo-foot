
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-600 space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Mentions Légales</h2>
            <div className="space-y-6">
                <section>
                  <h3 className="font-semibold mb-2">Article 7 - Clause de non-responsabilité</h3>
                  
                  <p>Ce fichier est un produit numérique mis à disposition à des fins strictement personnelles, éducatives ou créatives.</p>

                  <p>⦗FRONT-CLOUD⦘~ Football.zip est une ressource indépendante, compilée et organisée à des fins d'archivage, de culture visuelle et de création.</p>

                  <p>Aucune ressource présente dans ce fichier n'est vendue en tant que marque déposée, logo officiel ou fichier sous licence commerciale.</p>

                  <p>Nous ne revendiquons aucune affiliation, partenariat ou validation de la part des clubs, compétitions ou organisations citées ou représentées.</p>

                  <p>Le pack n'est pas destiné à un usage commercial ou à une revente des éléments qu'il contient.</p>

                  <p>Tout utilisateur est invité à respecter les droits de propriété intellectuelle des marques concernées dans le cadre de ses projets personnels.</p>
                </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
