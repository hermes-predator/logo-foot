
import React from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-4">
      <h3 className="font-medium text-base text-gray-900 flex items-center gap-2">
        <div className="bg-blue-100 rounded-md p-1.5">
          <Mail className="w-4 h-4 text-blue-600" />
        </div>
        Support disponible
      </h3>
      <p>Pour toute demande ou si vous avez des questions, veuillez lire la FAQ avant de nous contacter.</p>
      <p>Lors du contact, veuillez nous fournir quelques informations pour nous aider à vous identifier :</p>
      <ul className="list-disc ml-4 space-y-1 text-gray-800">
        <li className="font-medium tracking-tight">Votre nom et prénom</li>
        <li className="font-medium tracking-tight">La date et l'heure d'achat</li>
        <li className="font-medium tracking-tight">Votre preuve d'achat (reçu)</li>
      </ul>
      <p className="flex items-center gap-2 mt-4">
        <Mail className="w-4 h-4" />
        <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline">contact@logo-foot.com</a>
      </p>
    </div>
  );
};

export default ContactForm;
