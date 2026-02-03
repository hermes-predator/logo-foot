import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    id: "item-1",
    question: "Le paiement est-il sécurisé ?",
    answer: "Absolument ! Nous utilisons SumUp, l'un des leaders européens du paiement en ligne. Toutes les transactions sont cryptées et sécurisées selon les normes bancaires les plus strictes."
  },
  {
    id: "item-2",
    question: "Comment se déroule le téléchargement ?",
    answer: "C'est simple et instantané ! Après votre paiement, vous êtes redirigé vers la page d'après-paiement contenant le lien de téléchargement. Le fichier ZIP est disponible immédiatement."
  },
  {
    id: "item-3",
    question: "Que contient exactement le paquet ?",
    answer: "Notre pack premium contient plus de 8 600 logos de football en haute qualité, incluant : les logos des clubs de football de plus de 60 pays, les logos des principales compétitions, les drapeaux nationaux, et bien plus..."
  },
  {
    id: "item-4",
    question: "Comment puis-je utiliser ces logos ?",
    answer: "Les logos peuvent être utilisés pour vos projets web personnels. Notre pack est spécialement conçu pour une utilisation web avec des fichiers optimisés et homogènes."
  },
  {
    id: "item-5",
    question: "Un problème avec votre téléchargement ?",
    answer: "Notre service client est disponible 7j/7. Contactez-nous à contact@logo-foot.com. Nous vous répondrons dans les plus brefs délais."
  },
  {
    id: "item-6",
    question: "Comment obtenir ma facture ?",
    answer: "Un reçu est automatiquement généré après votre paiement et disponible sur la page de confirmation. Pour une facture formelle, contactez-nous à contact@logo-foot.com."
  }
];

const FAQSection = () => {
  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
          
          {/* Colonne gauche - Titre et CTA */}
          <div className="lg:sticky lg:top-32">
            {/* Badge F.A.Q */}
            <div className="inline-flex items-center px-3 py-1.5 rounded border-l-2 border-navy bg-transparent mb-5">
              <span className="text-sm font-semibold text-navy tracking-wide">F.A.Q</span>
            </div>
            
            {/* Titre */}
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
              Les questions<br />fréquentes
            </h2>
            
            {/* Texte disponibilité */}
            <p className="text-muted-foreground mb-2 max-w-md">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            
            {/* Email de contact */}
            <p className="text-muted-foreground mb-8 max-w-md">
              Écrivez-nous à{" "}
              <a href="mailto:contact@logo-foot.com" className="text-navy font-semibold hover:underline">
                contact@logo-foot.com
              </a>
            </p>
            
            {/* CTA Button */}
            <Button
              variant="outline"
              size="default"
              className="rounded-full border-2 border-navy text-navy font-semibold px-6 hover:bg-navy hover:text-white transition-all"
              onClick={() => window.location.href = 'mailto:contact@logo-foot.com'}
            >
              Contactez-nous
            </Button>
          </div>

          {/* Colonne droite - Accordion */}
          <div className="space-y-3">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className="bg-white rounded-xl border border-border shadow-sm px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="py-5 text-left hover:no-underline group">
                    <span className="font-medium text-foreground group-hover:text-navy transition-colors pr-4">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
