import React from 'react';
import { ShieldCheck, User, Clock, Ticket, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="space-y-0">
      {/* En-tête avec email de contact et informations sur les commandes combinés */}
      <div className="bg-gradient-to-r from-blue-50 to-gray-100 rounded-t-lg rounded-br-none p-4 border border-gray-200 border-b-0">
        <h3 className="font-medium text-xl text-gray-900 mb-2 flex items-center gap-2">
          <div className="bg-gradient-to-br from-blue-25 via-sky-25 to-white rounded-md p-4 shadow-lg shadow-blue-200/30 flex items-center gap-2 backdrop-blur-sm border border-blue-200/50">
            <MessageCircle className="w-7 h-7 text-blue-600 drop-shadow-sm" />
          </div>
          <div className="ml-2">
            <p className="text-xs text-gray-800 mb-0.5">Par e-mail</p>
            <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline font-semibold transition-colors duration-300 text-2xl">
              contact@logo-foot.com
            </a>
          </div>
        </h3>
        
        <div className="pt-2">
          <p className="text-gray-500 leading-relaxed text-sm border-l-2 border-blue-300 pl-3 py-1 mt-3 bg-blue-50/50 italic">
            En cas de questions, veuillez d'abord consulter notre FAQ avant de nous contacter.
          </p>
        </div>
        
        {/* Informations sur les commandes intégrées */}
        <div className="mt-6 pt-5 border-t border-gray-200">
          <p className="text-gray-800 font-bold mb-4 text-lg">Vous avez passé commande ? Veuillez inclure ces informations :</p>
          
          <div className="space-y-2 ml-1">
            <div className="flex items-center gap-2.5 p-2.5 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-transparent p-2 rounded-md group-hover:bg-blue-100/30 transition-colors border border-gray-200 shadow-sm">
                <User className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-base">Votre nom et prénom</span>
            </div>
            
            <div className="flex items-center gap-2.5 p-2.5 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-transparent p-2 rounded-md group-hover:bg-blue-100/30 transition-colors border border-gray-200 shadow-sm">
                <Clock className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-base">La date et l'heure d'achat</span>
            </div>
            
            <div className="flex items-center gap-2.5 p-2.5 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-transparent p-2 rounded-md group-hover:bg-blue-100/30 transition-colors border border-gray-200 shadow-sm">
                <Ticket className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-base">Votre preuve d'achat (reçu)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mention RGPD avec arrondis différents */}
      <div className="p-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-t-none rounded-bl-sm rounded-br-xl shadow-sm">
        <p className="text-xs text-gray-500 flex items-start gap-2.5 leading-relaxed">
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
