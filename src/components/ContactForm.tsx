
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [sending, setSending] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setSending(false);
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nom</Label>
        <Input id="name" required placeholder="Votre nom" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required placeholder="votre@email.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          required 
          placeholder="Votre message..."
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" disabled={sending} className="w-full">
        <Send className="mr-2 h-4 w-4" />
        {sending ? 'Envoi en cours...' : 'Envoyer'}
      </Button>
    </form>
  );
};

export default ContactForm;
