import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import PaymentWidget from "./PaymentWidget";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ open, onOpenChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="h-[90dvh] overflow-hidden flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-2xl">Paiement sécurisé</SheetTitle>
          </SheetHeader>
          <div className="mt-4 overflow-y-auto flex-1">
            <PaymentWidget />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85dvh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">Paiement sécurisé</DialogTitle>
        </DialogHeader>
        <div className="mt-2 overflow-y-auto flex-1">
          <PaymentWidget />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
