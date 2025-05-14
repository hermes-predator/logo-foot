
import React from 'react';
import { ShieldCheck, Mail, User, Calendar, Ticket, Clock } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-6 p-2">
      <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg shadow-sm border border-blue-100">
        <h3 className="font-medium text-lg text-gray-900 mb-3 flex items-center gap-2">
          <div className="bg-blue-100 rounded-md p-2">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <a 
            href="mailto:contact@logo-foot.com" 
            className="text-blue-600 hover:text-blue-700 font-semibold relative group"
          >
            contact@logo-foot.com
            <span className="absolute -bottom-0.5 left-0 w-3/4 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
          </a>
        </h3>
        
        <p className="text-black leading-relaxed text-sm border-l-2 border-blue-300 pl-3 py-1 bg-blue-50/50 italic">
          En cas de questions, vous pouvez d'abord consulter notre FAQ avant de nous contacter.
        </p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        <p className="text-black font-medium mb-3 border-b pb-2 border-gray-200">Vous avez passé commande ? Veuillez inclure ces informations :</p>
        
        <div className="space-y-2 ml-1">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors">
            <div className="bg-gray-200 p-1.5 rounded-md">
              <User className="w-4 h-4 text-gray-700" />
            </div>
            <span className="font-medium text-gray-700 text-sm">Votre nom et prénom</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors">
            <div className="bg-gray-200 p-1.5 rounded-md">
              <Clock className="w-4 h-4 text-gray-700" />
            </div>
            <span className="font-medium text-gray-700 text-sm">La date et l'heure d'achat</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors">
            <div className="bg-gray-200 p-1.5 rounded-md">
              <Ticket className="w-4 h-4 text-gray-700" />
            </div>
            <span className="font-medium text-gray-700 text-sm">Votre preuve d'achat (reçu)</span>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
        <p className="text-xs text-gray-500 flex items-start gap-2.5 leading-snug">
          <ShieldCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-500" />
          <span>
            Conformément au RGPD, vos données personnelles sont uniquement utilisées pour traiter votre demande et ne seront jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
