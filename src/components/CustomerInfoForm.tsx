
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  phone: z.string().optional()
});

export type CustomerInfo = z.infer<typeof formSchema>;

interface CustomerInfoFormProps {
  onSubmit: (data: CustomerInfo) => void;
  isLoading: boolean;
  price: string;
}

const CustomerInfoForm = ({ onSubmit, isLoading, price }: CustomerInfoFormProps) => {
  const { toast } = useToast();
  const form = useForm<CustomerInfo>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: ""
    }
  });

  const handleSubmit = (data: CustomerInfo) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom complet</FormLabel>
              <FormControl>
                <Input placeholder="Jean Dupont" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="vous@exemple.fr" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone (optionnel)</FormLabel>
              <FormControl>
                <Input placeholder="06 12 34 56 78" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 group disabled:opacity-75 disabled:cursor-not-allowed"
          aria-label={`Payer ${price} avec paiement sécurisé`}
        >
          <ShoppingCart className="mr-2 h-6 w-6 transition-all duration-300 group-hover:rotate-[-8deg]" aria-hidden="true" />
          {isLoading ? "Redirection..." : `Payer ${price}`}
        </Button>
      </form>
    </Form>
  );
};

export default CustomerInfoForm;
