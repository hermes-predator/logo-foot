
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import ContactForm from './ContactForm';

// Nouveaux composants refactorisés
import CGVDialog from './footer/CGVDialog';
import MentionsLegalesDialog from './footer/MentionsLegalesDialog';
import DisclaimerDialog from './footer/DisclaimerDialog';
import FAQDialog from './footer/FAQDialog';

const Footer = () => {
  return (
    <footer className="border-t mt-12 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <Dialog>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <MessageCircle className="w-4 h-4" />
              Contactez-nous
            </DialogTrigger>
            <DialogContent className="max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-gray-800">Contacter le service client</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <ContactForm />
              </div>
            </DialogContent>
          </Dialog>

          <CGVDialog />
          <MentionsLegalesDialog />
          <DisclaimerDialog />
          <FAQDialog />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
