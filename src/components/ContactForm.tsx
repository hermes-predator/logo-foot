
import React from 'react';
import { ShieldCheck, User, Clock, Ticket, MessageCircle, Mail } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ContactForm = () => {
  return (
    <div className="space-y-0">
      {/* En-tête avec email de contact avec le même style que les cartes de confiance */}
      <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200 mb-4">
        {/* Icône stylisée avec un effet de halo */}
        <div className="mb-3 relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-md opacity-20 scale-150"></div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white rounded-full shadow-sm border border-blue-100">
            <MessageCircle className="w-7 h-7 text-blue-600 drop-shadow-sm" />
          </div>
        </div>
        
        {/* Séparateur décoratif */}
        <Separator className="w-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-3" />
        
        {/* Titre avec style amélioré */}
        <h3 className="font-semibold mb-1 text-gray-800 text-center">Par e-mail</h3>
        
        {/* Email de contact */}
        <div className="text-center mb-3">
          <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline font-semibold transition-colors duration-300 text-lg">
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
      
      {/* Informations sur les commandes */}
      <div className="bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg p-4 border border-gray-200 mb-4">
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
      
      {/* Mention RGPD */}
      <div className="p-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg shadow-sm">
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
