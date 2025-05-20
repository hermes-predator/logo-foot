import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { cn } from "@/lib/utils";
import SparkleEffects from "./SparkleEffects";
import GoogleDriveBadge from "./GoogleDriveBadge";
import ButtonEffects from "./ButtonEffects";
import PricingBlock from "./PricingBlock";
import { motion } from "framer-motion";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const PaymentCardBack = () => {
  const [paymentClicked, setPaymentClicked] = useState(false);

  const handlePaymentClick = () => {
    setPaymentClicked(true);
    // Redirection vers la page de paiement après un court délai
    setTimeout(() => {
      window.location.href = "/payment";
    }, 500);
  };
  
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Top section with video */}
      <div className="relative w-full aspect-video overflow-hidden rounded-md bg-gradient-to-br from-gray-100 via-gray-50 to-white">
        <video
          src="/football-pack-preview.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SparkleEffects isPaymentClicked={paymentClicked} />
        </div>
      </div>
      
      {/* Bottom section with buttons */}
      <div className="flex flex-col gap-4 p-4 bg-white">
        <div className="flex items-center justify-between gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="default"
                className={cn(
                  "flex-1 bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  "transition-all duration-300"
                )}
              >
                Descriptif du fichier ZIP
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[540px] w-full overflow-hidden p-0 border-none shadow-2xl rounded-xl bg-gradient-to-br from-gray-100 via-gray-50 to-white">
              <div className="flex flex-col h-full">
                <DialogHeader className="p-4 pb-2 bg-gradient-to-b from-gray-100/90 via-gray-50/50 to-transparent">
                  <DialogTitle className="text-gray-800 font-medium">
                    Détails du package Football.zip
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 text-sm font-extralight">
                    Aperçu du contenu inclus dans votre achat
                  </DialogDescription>
                </DialogHeader>

                <div className="p-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Clubs Européens :</span>{" "}
                      Logos des clubs de football européens de première division.
                    </li>
                    <li>
                      <span className="font-medium">
                        Sélections Nationales :
                      </span>{" "}
                      Logos des équipes nationales du monde entier.
                    </li>
                    <li>
                      <span className="font-medium">Compétitions :</span>{" "}
                      Logos des tournois majeurs (Ligue des Champions, etc.).
                    </li>
                    <li>
                      <span className="font-medium">Formats multiples :</span>{" "}
                      Fichiers PNG transparents, SVG et vecteurs inclus.
                    </li>
                    <li>
                      <span className="font-medium">Haute résolution :</span>{" "}
                      Images de qualité supérieure pour tous vos projets.
                    </li>
                  </ul>
                </div>

                <div className="p-4 px-4 bg-gradient-to-t from-gray-100/90 via-gray-50/50 to-transparent">
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full font-medium bg-gray-50/95 border-gray-200/80",
                        "hover:bg-white/95 hover:border-gray-300/90",
                        "transition-all duration-300 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]",
                        "text-gray-700 hover:text-gray-900",
                        "backdrop-blur-sm"
                      )}
                    >
                      Fermer
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            onClick={handlePaymentClick}
            className={cn(
              "flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
              "shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium"
            )}
            size="default"
          >
            Achat rapide ~ 9€
          </Button>
        </div>
      </div>

      {/* Fallback view for mobile */}
      <div className="lg:hidden flex flex-col gap-3 p-4 bg-white">
        <div className="flex items-center justify-between gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="default"
                className={cn(
                  "flex-1 bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  "transition-all duration-300"
                )}
              >
                Descriptif du fichier ZIP
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[540px] w-full overflow-hidden p-0 border-none shadow-2xl rounded-xl bg-gradient-to-br from-gray-100 via-gray-50 to-white">
              <div className="flex flex-col h-full">
                <DialogHeader className="p-4 pb-2 bg-gradient-to-b from-gray-100/90 via-gray-50/50 to-transparent">
                  <DialogTitle className="text-gray-800 font-medium">
                    Détails du package Football.zip
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 text-sm font-extralight">
                    Aperçu du contenu inclus dans votre achat
                  </DialogDescription>
                </DialogHeader>

                <div className="p-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Clubs Européens :</span>{" "}
                      Logos des clubs de football européens de première division.
                    </li>
                    <li>
                      <span className="font-medium">
                        Sélections Nationales :
                      </span>{" "}
                      Logos des équipes nationales du monde entier.
                    </li>
                    <li>
                      <span className="font-medium">Compétitions :</span>{" "}
                      Logos des tournois majeurs (Ligue des Champions, etc.).
                    </li>
                    <li>
                      <span className="font-medium">Formats multiples :</span>{" "}
                      Fichiers PNG transparents, SVG et vecteurs inclus.
                    </li>
                    <li>
                      <span className="font-medium">Haute résolution :</span>{" "}
                      Images de qualité supérieure pour tous vos projets.
                    </li>
                  </ul>
                </div>

                <div className="p-4 px-4 bg-gradient-to-t from-gray-100/90 via-gray-50/50 to-transparent">
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full font-medium bg-gray-50/95 border-gray-200/80",
                        "hover:bg-white/95 hover:border-gray-300/90",
                        "transition-all duration-300 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]",
                        "text-gray-700 hover:text-gray-900",
                        "backdrop-blur-sm"
                      )}
                    >
                      Fermer
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            onClick={handlePaymentClick}
            className={cn(
              "flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
              "shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium"
            )}
            size="default"
          >
            Achat rapide ~ 9€
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCardBack;
