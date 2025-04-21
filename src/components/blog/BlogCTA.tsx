import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
});

interface BlogCTAProps {
  className?: string;
}

const BlogCTA: React.FC<BlogCTAProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate a fake background saving process.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast({
      title: "Inscription réussie!",
      description: "Merci de vous être inscrit à notre newsletter.",
    });
    form.reset();
  }

  return (
    <div className={`bg-secondary rounded-md p-4 flex flex-col items-center ${className}`}>
      <h3 className="text-lg font-semibold text-center">Abonnez-vous à notre newsletter</h3>
      <p className="text-sm text-muted-foreground text-center mt-1">
        Recevez les dernières nouvelles, mises à jour et offres spéciales directement dans votre boîte de réception.
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row w-full gap-2 mt-4">
        <Input 
          placeholder="Entrez votre email" 
          {...form.register("email")}
          className="sm:w-2/3"
          disabled={isLoading}
         />
        <Button type="submit" className="sm:w-1/3" disabled={isLoading}>
          {isLoading ? "Chargement" : "S'abonner"}
        </Button>
      </form>
      
      <div className="mt-2 mb-4">
        <p className="text-xs text-gray-500">
          En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité et au RGPD. Nous utilisons ces informations uniquement pour vous envoyer notre newsletter et vous pouvez vous désinscrire à tout moment.
        </p>
      </div>
    </div>
  );
};

export default BlogCTA;
