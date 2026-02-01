
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    id: "item-1",
    question: "Le paiement est-il sécurisé ?",
    answer: "Absolument ! Nous utilisons SumUp, l'un des leaders européens du paiement en ligne. Toutes les transactions sont cryptées et sécurisées selon les normes bancaires les plus strictes. Vous pouvez payer en toute confiance avec votre carte bancaire ou Google Pay. En cas de doutes persistants, vous pouvez aussi utiliser une carte éphémère à usage unique."
  },
  {
    id: "item-2",
    question: "Comment se déroule le téléchargement ?",
    answer: "C'est simple et instantané ! Après votre paiement, vous êtes redirigé vers la page d'après-paiement contenant le lien de téléchargement. Le fichier ZIP est disponible immédiatement."
  },
  {
    id: "item-3",
    question: "Que contient exactement le paquet ?",
    answer: "Notre pack premium contient plus de 8 600 logos de football en haute qualité, incluant : les logos des clubs de football de plus de 60 pays, les logos des principales compétitions, les drapeaux nationaux, les logos des bookmakers et bien plus... Tous les fichiers sont en PNG avec fond transparent, parfaitement optimisés pour une utilisation web."
  },
  {
    id: "item-4",
    question: "Comment puis-je utiliser ces logos ?",
    answer: "Les logos peuvent être utilisés pour vos projets web personnels. Notre pack est spécialement conçu pour une utilisation web avec des fichiers optimisés et homogènes. Vous bénéficiez d'une collection complète et professionnelle, prête à l'emploi."
  },
  {
    id: "item-5",
    question: "Un problème ? Nous sommes là pour vous aider",
    answer: "Notre service client est disponible 7j/7 pour vous accompagner. En cas de question ou de difficulté avec votre téléchargement, contactez-nous à contact@logo-foot.com. Nous vous répondrons dans les plus brefs délais pour vous assurer une expérience parfaite."
  },
  {
    id: "item-6",
    question: "Comment obtenir ma facture ou preuve d'achat ?",
    answer: "Un reçu au format HTML ou PDF est automatiquement généré après votre paiement et disponible sur la page de confirmation. Vous pouvez le télécharger immédiatement. Si vous avez besoin d'une facture formelle ou d'une copie de votre reçu, contactez-nous à contact@logo-foot.com en précisant la date de votre achat et nous vous l'enverrons dans un délai de 48h."
  }
];

const FAQSection = () => {
  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/20 text-navy font-medium text-sm mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          {/* Accordion */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className={index !== faqItems.length - 1 ? "border-b border-border" : "border-none"}
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-muted/30 transition-colors group">
                    <span className="font-semibold text-foreground group-hover:text-navy transition-colors pr-4">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Vous avez d'autres questions ?{" "}
              <a 
                href="mailto:contact@logo-foot.com" 
                className="text-navy font-medium hover:text-lime transition-colors underline underline-offset-2"
              >
                Contactez-nous
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
