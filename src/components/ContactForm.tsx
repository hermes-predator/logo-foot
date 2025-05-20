
import React from 'react';
import { ShieldCheck, Mail, User, Calendar, Ticket, Clock } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="space-y-6">
      {/* En-tête avec email de contact */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
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
      </div>
      
      {/* Formulaire de contact */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Votre nom</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 focus:outline-none transition-all duration-200"
              placeholder="Nom et prénom"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 focus:outline-none transition-all duration-200"
              placeholder="votre@email.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
          <input 
            type="text" 
            id="subject" 
            className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 focus:outline-none transition-all duration-200"
            placeholder="Sujet de votre message"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
          <Textarea 
            id="message" 
            className="min-h-[120px] w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 focus:outline-none transition-all duration-200"
            placeholder="Détaillez votre demande ici..."
          />
        </div>
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-all duration-200 shadow-sm hover:shadow"
        >
          Envoyer le message
        </Button>
      </div>
      
      {/* Informations sur les commandes */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200 shadow-sm">
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
      
      {/* Mention RGPD */}
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
