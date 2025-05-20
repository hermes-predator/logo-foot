
import React, { useState } from 'react';
import { ShieldCheck, Mail, User, Calendar, Ticket, Clock, SendHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    purchaseDate: '',
    isSubmitting: false
  });
  const [activeTab, setActiveTab] = useState<'form' | 'info'>('info');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais",
      });
      setFormState({
        name: '',
        email: '',
        message: '',
        purchaseDate: '',
        isSubmitting: false
      });
      setActiveTab('info');
    }, 1000);
  };

  return (
    <div className="text-sm text-gray-600 space-y-6">
      {/* Tabs de navigation */}
      <div className="flex border-b border-gray-200 mb-4">
        <button 
          onClick={() => setActiveTab('info')}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ${
            activeTab === 'info' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Informations
        </button>
        <button 
          onClick={() => setActiveTab('form')}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ${
            activeTab === 'form' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Nous contacter
        </button>
      </div>
      
      {activeTab === 'info' ? (
        <>
          <div className="space-y-2 animate-fade-in">
            <h3 className="font-medium text-lg text-gray-900 mb-2 flex items-center gap-2">
              <div className="bg-blue-100 rounded-md p-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline font-semibold ml-2 transition-colors duration-200">
                contact@logo-foot.com
              </a>
            </h3>
            
            <div className="pt-3">
              <p className="text-black leading-relaxed text-sm border-l-2 border-blue-200 pl-3 py-0 mt-5">
                En cas de questions, vous pouvez d'abord consulter notre FAQ avant de nous contacter.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <p className="text-black font-medium mb-3">Vous avez passé commande ? Veuillez inclure ces informations :</p>
            
            <div className="space-y-3 ml-1">
              <div className="flex items-center gap-3 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                <div className="bg-gray-200 p-1.5 rounded-md">
                  <User className="w-4 h-4 text-gray-700" />
                </div>
                <span className="font-medium text-gray-700 text-sm">Votre nom et prénom</span>
              </div>
              
              <div className="flex items-center gap-3 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                <div className="bg-gray-200 p-1.5 rounded-md">
                  <Clock className="w-4 h-4 text-gray-700" />
                </div>
                <span className="font-medium text-gray-700 text-sm">La date et l'heure d'achat</span>
              </div>
              
              <div className="flex items-center gap-3 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                <div className="bg-gray-200 p-1.5 rounded-md">
                  <Ticket className="w-4 h-4 text-gray-700" />
                </div>
                <span className="font-medium text-gray-700 text-sm">Votre preuve d'achat (reçu)</span>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-md animate-fade-in" style={{animationDelay: "0.2s"}}>
            <p className="text-xs text-gray-500 flex items-start gap-2.5 leading-snug">
              <ShieldCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-500" />
              <span>
                Conformément au RGPD, vos données personnelles sont uniquement utilisées pour traiter votre demande et ne seront jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression.
              </span>
            </p>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom et prénom</label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Votre nom complet"
              required
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
              required
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">Date d'achat (si applicable)</label>
            <Input
              id="purchaseDate"
              name="purchaseDate"
              type="date"
              value={formState.purchaseDate}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Décrivez votre question ou problème ici..."
              required
              className="w-full min-h-[120px]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full group"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin mr-2">
                  <Clock className="h-4 w-4" />
                </span>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <SendHorizontal className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Envoyer le message
              </span>
            )}
          </Button>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 flex items-start gap-2.5 leading-snug">
              <ShieldCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-500" />
              <span>
                Conformément au RGPD, vos données personnelles sont uniquement utilisées pour traiter votre demande et ne seront jamais partagées avec des tiers.
              </span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
