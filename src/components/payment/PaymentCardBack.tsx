
import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PaymentCardBackProps {
  onClose: () => void;
}

const PaymentCardBack = ({ onClose }: PaymentCardBackProps) => {
  return (
    <div className="absolute inset-0 bg-white rounded-2xl p-4 [transform:rotateY(180deg)] backface-hidden">
      <div className="relative h-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 z-10"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <video 
          className="w-full h-full object-cover rounded-xl"
          controls
          autoPlay
          muted
          playsInline
        >
          <source src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};

export default PaymentCardBack;
