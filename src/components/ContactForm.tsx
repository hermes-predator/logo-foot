
import React from 'react';
import { ShieldCheck, Mail, User, Calendar, Ticket, Clock } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-6">
      <div className="space-y-3 bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg">
        <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2.5">
          <div className="bg-blue-100 rounded-md p-2.5 shadow-sm">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline font-semibold relative group">
            contact@logo-foot.com
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </h3>
        
        <p className="text-black leading-relaxed text-sm border-l-2 border-blue-300 pl-4 py-1.5 bg-blue-50 rounded-r-md">
          En cas de questions, vous pouvez d'abord consulter notre FAQ avant de nous contacter.
        </p>
      </div>
      
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm">
        <p className="text-black font-medium mb-4 pb-2 border-b border-gray-200">Vous avez passé commande ? Veuillez inclure ces informations :</p>
        
        <div className="space-y-3 ml-1">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white transition-colors group">
            <div className="bg-gray-200 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
              <User className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </div>
            <span className="font-medium text-gray-700 text-sm">Votre nom et prénom</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white transition-colors group">
            <div className="bg-gray-200 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
              <Clock className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </div>
            <span className="font-medium text-gray-700 text-sm">La date et l'heure d'achat</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white transition-colors group">
            <div className="bg-gray-200 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
              <Ticket className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </div>
            <span className="font-medium text-gray-700 text-sm">Votre preuve d'achat (reçu)</span>
          </div>
        </div>
      </div>
      
      <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
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
