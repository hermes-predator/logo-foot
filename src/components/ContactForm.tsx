
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
      <p>Pour toute demande ou si vous avez des difficultés en passant commande, vous pouvez nous contacter.</p>
      <p>Pour cela, nous vous invitons à fournir quelques informations pour nous aider à vous identifier :</p>
      <ul className="list-disc ml-4 space-y-1">
        <li>Votre nom et prénom</li>
        <li>La date et l'heure d'achat</li>
        <li>La preuve d'achat (reçu)</li>
      </ul>
      <p className="flex items-center gap-2 mt-4">
        <Mail className="w-4 h-4" />
        <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline">contact@logo-foot.com</a>
      </p>
    </div>
  );
};

export default ContactForm;
