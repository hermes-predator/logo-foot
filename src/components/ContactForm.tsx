
import React from 'react';
import { ShieldCheck, Mail, User, Calendar, Receipt } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-4">
      <div className="space-y-1">
        <h3 className="font-medium text-lg text-gray-900 flex items-center gap-4">
          <div className="bg-blue-100 rounded-md p-2.5">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline">contact@logo-foot.com</a>
        </h3>
      </div>
      
      <p>Si vous avez des questions, vous pouvez d'abord consulter notre FAQ avant de nous contacter.</p>
      <p>Vous avez passé commande ? Veuillez inclure quelques informations pour nous aider à vous identifier :</p>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 pl-1">
          <div className="bg-gray-100 p-1.5 rounded-md">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <span className="font-medium text-gray-800">Votre nom et prénom</span>
        </div>
        
        <div className="flex items-center gap-3 pl-1">
          <div className="bg-gray-100 p-1.5 rounded-md">
            <Calendar className="w-4 h-4 text-gray-600" />
          </div>
          <span className="font-medium text-gray-800">La date et l'heure d'achat</span>
        </div>
        
        <div className="flex items-center gap-3 pl-1">
          <div className="bg-gray-100 p-1.5 rounded-md">
            <Receipt className="w-4 h-4 text-gray-600" />
          </div>
          <span className="font-medium text-gray-800">Votre preuve d'achat (reçu)</span>
        </div>
      </div>
      
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
