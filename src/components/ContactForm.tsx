
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    
    const mailtoUrl = `mailto:sylvainbenoit62100@gmail.com?subject=Contact depuis le site - ${formData.name}&body=De: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "Redirection vers votre client mail",
      description: "Votre client mail va s'ouvrir avec le message pré-rempli.",
    });
    
    setSending(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nom</Label>
        <Input 
          id="name" 
          required 
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          required 
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          required 
          placeholder="Votre message..."
          className="min-h-[100px]"
          value={formData.message}
          onChange={handleChange}
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
