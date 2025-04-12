
import React from 'react';
import { Mail, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-4">
      <h3 className="font-medium text-base text-gray-900 flex items-center gap-2">
        <div className="bg-gray-200 rounded-md p-1.5">
          <Send className="w-4 h-4 text-black" />
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
      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
        <p className="flex items-center gap-2 text-blue-700">
          <Mail className="w-5 h-5 text-blue-600" />
          <a 
            href="mailto:contact@logo-foot.com" 
            className="text-base font-semibold hover:underline tracking-wide"
          >
            contact@logo-foot.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
