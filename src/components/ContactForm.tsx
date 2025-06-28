
import React from 'react';
import { ShieldCheck, User, Clock, Ticket, MessageCircle, Mail } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import FAQDialog from './footer/FAQDialog';

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm = ({
  onClose
}: ContactFormProps) => {
  return <div className="space-y-4">
      {/* Premier container : email de contact */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300">
        <div className="flex flex-col items-center p-5">
          {/* Icône stylisée */}
          <div className="mb-3 relative">
            <div className="bg-gray-50 p-4 rounded-full border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
              <Mail className="w-8 h-8 text-gray-700" />
            </div>
          </div>
          
          {/* Séparateur décoratif */}
          <Separator className="w-12 h-0.5 rounded-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-3" />
          
          {/* Email de contact */}
          <div className="text-center mb-3">
            <div className="text-gray-700 text-lg font-medium">
              E-mail : <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline font-semibold transition-colors duration-300 text-2xl">
                contact@logo-foot.com
              </a>
            </div>
          </div>
          
          {/* Note FAQ avec lien */}
          <div className="text-center mb-6">
            <div className="text-sm text-gray-600">
              Une <FAQDialog asLink={true} onContactClose={onClose} /> est aussi disponible pour répondre aux questions courantes.
            </div>
          </div>
        </div>
      </div>
      
      {/* Deuxième container : informations commande + RGPD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300">
        {/* Section informations commande */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-4 pt-6 rounded-t-xl">
          <p className="text-gray-800 font-bold mb-4 text-lg italic ml-4">Vous êtes déjà client ? Veuillez inclure vos informations :</p>
          
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
        
        {/* Section RGPD intégrée */}
        <div className="p-5 bg-gradient-to-r from-gray-50 to-white rounded-b-xl">
          <p className="text-xs text-gray-500 flex items-start gap-2.5 leading-relaxed">
            <ShieldCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500" />
            <span>
              Conformément au RGPD, vos données personnelles sont uniquement utilisées pour traiter votre demande et ne seront jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression.
            </span>
          </p>
        </div>
      </div>
    </div>;
};

export default ContactForm;
