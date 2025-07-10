

import React, { useState } from 'react';
import { ShieldCheck, User, Clock, Ticket, MessageCircle, Mail, Copy, Check } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import FAQDialog from './footer/FAQDialog';

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm = ({
  onClose
}: ContactFormProps) => {
  const [copied, setCopied] = useState(false);
  const email = "contact@logo-foot.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

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
          
          {/* Email de contact avec bouton copier */}
          <div className="text-center mb-3">
            <div className="flex items-center gap-2 justify-center group">
              <a href={`mailto:${email}`} className="text-blue-600 hover:underline font-semibold transition-colors duration-300 text-2xl">
                {email}
              </a>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={copyEmail}
                      className="ml-1 p-1.5 rounded-md bg-gray-100 hover:bg-blue-50 transition-all duration-200 opacity-70 hover:opacity-100 group-hover:opacity-100"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-blue-600" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copied ? "Email copié !" : "Copier l'email"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          {/* Note FAQ avec lien */}
          <div className="text-center mb-6">
            <div className="text-sm text-gray-600">
              Une <FAQDialog asLink={true} onContactClose={onClose} /> est disponible pour répondre aux questions les plus courantes.
            </div>
          </div>
        </div>
      </div>
      
      {/* Deuxième container : informations commande + RGPD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300">
        {/* Section informations commande */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-4 rounded-t-xl">
          <p className="text-gray-800 font-medium mb-3 text-base">Vous êtes déjà client ? Veuillez inclure vos informations :</p>
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-transparent p-1.5 rounded-md group-hover:bg-blue-100/30 transition-colors border border-gray-200 shadow-sm">
                <User className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Votre nom et prénom</span>
            </div>
            
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-transparent p-1.5 rounded-md group-hover:bg-blue-100/30 transition-colors border border-gray-200 shadow-sm">
                <Clock className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-sm">La date et l'heure d'achat</span>
            </div>
            
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/80 transition-colors group">
              <div className="bg-transparent p-1.5 rounded-md group-hover:bg-blue-100/30 transition-colors border border-gray-200 shadow-sm">
                <Ticket className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Votre preuve d'achat (reçu)</span>
            </div>
          </div>
        </div>
        
        {/* Section RGPD intégrée */}
        <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-b-xl">
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

