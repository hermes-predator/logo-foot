

import React from 'react';
import { ShieldCheck, User, Clock, Ticket, MessageCircle, Mail } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ContactForm = () => {
  return (
    <div className="space-y-0">
      {/* En-tête avec email de contact avec le même style que les cartes de confiance */}
      <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300 mb-4 relative overflow-hidden">
        {/* Background décoratif avec des bulles */}
        <div className="absolute inset-0 opacity-5">
          <MessageCircle className="absolute top-4 left-4 w-12 h-12 text-blue-600 rotate-12" />
          <MessageCircle className="absolute top-8 right-6 w-8 h-8 text-blue-400 -rotate-6" />
          <MessageCircle className="absolute bottom-6 left-8 w-6 h-6 text-blue-500 rotate-45" />
          <MessageCircle className="absolute bottom-4 right-4 w-10 h-10 text-blue-300 -rotate-12" />
          <MessageCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-200 rotate-6" />
        </div>
        
        {/* Contenu au premier plan */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Icône centrale avec effet plus subtil */}
          <div className="mb-3">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full shadow-sm border border-blue-100">
              <MessageCircle className="w-7 h-7 text-blue-600" />
            </div>
          </div>
          
          {/* Séparateur décoratif */}
          <Separator className="w-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-3" />
          
          {/* Titre avec style amélioré */}
          <h3 className="font-semibold mb-1 text-gray-800 text-center">Par e-mail</h3>
          
          {/* Email de contact */}
          <div className="text-center mb-3">
            <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline font-semibold transition-colors duration-300 text-3xl">
              contact@logo-foot.com
            </a>
          </div>
          
          {/* Note FAQ */}
          <div className="text-center">
            <p className="text-xs text-gray-600">
              En cas de questions, veuillez d'abord consulter notre FAQ avant de nous contacter.
            </p>
          </div>
        </div>
      </div>
      
      {/* Container fusionné avec informations commande et mention RGPD */}
      <div className="bg-gradient-to-r from-blue-50 to-gray-100 rounded-t-lg border border-gray-200 border-b-0 p-4">
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
      
      {/* Mention RGPD - partie basse du container fusionné */}
      <div className="p-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 border-t-0 rounded-b-lg shadow-sm">
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

