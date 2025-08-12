import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InlineCTAProps {
  title?: string;
  description?: string;
}

const InlineCTA: React.FC<InlineCTAProps> = ({
  title = "Découvrez +8600 logos de football en un seul fichier",
  description = "Collection premium triée par pays et compétitions — idéale pour vos projets."
}) => {
  return (
    <section className="my-8">
      <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm p-5 md:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{description}</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Link to="/" aria-label="Voir la collection de logos">
              <Button variant="secondary" className="inline-flex items-center gap-2">
                Voir la collection
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/?pay=1" aria-label="Accéder au paiement pour télécharger la collection">
              <Button className="inline-flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Acheter maintenant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InlineCTA;
