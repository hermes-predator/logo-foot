
import React from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-4">
      <p>Si vous avez le moindre problème en passant commande ou si vous n'êtes pas entièrement satisfait, vous pouvez nous contacter :</p>
      <p>Pour cela, nous vous invitons à joindre en pièce jointe une preuve d'achat pour nous aider à vous identifier :</p>
      <p className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <a href="mailto:sylvainbenoit62100@gmail.com" className="text-blue-600 hover:underline">sylvainbenoit62100@gmail.com</a>
      </p>
    </div>
  );
};

export default ContactForm;
