
import React from 'react';
import { Headphones, ShieldCheck } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-4">
      <h3 className="font-medium text-base text-gray-900 flex items-center gap-2">
        <div className="bg-blue-100 rounded-md p-1.5">
          <Headphones className="w-4 h-4 text-blue-600" />
        </div>
        Support Client
      </h3>
      <p>Pour toute demande ou si vous avez des questions, veuillez d'abord consulter la FAQ avant de nous contacter.</p>
      <p>Vous avez passé commande ? Veuillez joindre quelques informations pour nous aider à vous identifier :</p>
      <ul className="list-disc ml-4 space-y-1 text-gray-800">
        <li className="font-medium tracking-tight">Votre nom et prénom</li>
        <li className="font-medium tracking-tight">La date et l'heure d'achat</li>
        <li className="font-medium tracking-tight">Votre preuve d'achat (reçu)</li>
      </ul>
      <p className="flex items-center gap-2 mt-4">
        <Headphones className="w-4 h-4" />
        <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline">contact@logo-foot.com</a>
      </p>
      
      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-md">
        <p className="text-xs text-gray-500 flex items-start gap-2">
          <ShieldCheck className="w-3 h-3 mt-0.5 flex-shrink-0 text-gray-400" />
          <span>
            Conformément au RGPD, vos données personnelles sont uniquement utilisées pour traiter votre demande et ne seront jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de ces données.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;

