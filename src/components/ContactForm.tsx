
import React from 'react';
import { ShieldCheck, Mail, User, Clock, Ticket } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="space-y-6">
      {/* En-tête avec email de contact et informations sur les commandes combinés */}
      <div className="bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md border border-gray-200">
        <h3 className="font-medium text-lg text-gray-900 mb-2 flex items-center gap-2">
          <div className="bg-blue-100 rounded-md p-3 shadow-sm">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline font-semibold ml-2 transition-colors duration-300">
            contact@logo-foot.com
          </a>
        </h3>
        
        <div className="pt-2">
          <p className="text-gray-700 leading-relaxed text-sm border-l-2 border-blue-300 pl-3 py-1 mt-3 bg-blue-50/50">
            En cas de questions, vous pouvez d'abord consulter notre FAQ avant de nous contacter.
          </p>
        </div>
        
        {/* Informations sur les commandes intégrées */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-800 font-medium mb-3">Vous avez passé commande ? Veuillez inclure ces informations :</p>
          
          <div className="space-y-2.5 ml-1">
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-gray-200 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
                <User className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Votre nom et prénom</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-gray-200 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
                <Clock className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-sm">La date et l'heure d'achat</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-gray-200 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
                <Ticket className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Votre preuve d'achat (reçu)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mention RGPD (inchangée) */}
      <div className="p-3.5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-md shadow-sm">
        <p className="text-xs text-gray-500 flex items-start gap-2.5 leading-snug">
          <ShieldCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500" />
          <span>
            Conformément au RGPD, vos données personnelles sont uniquement utilisées pour traiter votre demande et ne seront jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
