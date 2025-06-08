
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield } from 'lucide-react';

interface SumUpBadgeProps {
  className?: string;
}

const SumUpBadge = ({ className = '' }: SumUpBadgeProps) => {
  return (
    <Badge 
      className={`inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 border border-green-200 
        shadow-[0_2px_5px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_10px_rgba(34,197,94,0.15)] 
        transition-all duration-300 hover:bg-green-50/80 hover:border-green-300/80 ${className}`}
      role="status"
      aria-label="Paiement 100% sécurisé par SumUp"
    >
      <Shield className="h-4 w-4 text-green-600" aria-hidden="true" />
      <span className="font-medium text-sm">Paiement 100% sécurisé par</span>
      <img 
        src="/lovable-uploads/473f7b51-aeab-46c6-8dae-ae1850e2f111.png" 
        alt="SumUp" 
        className="h-5 w-auto object-contain"
        loading="lazy"
        width="50"
        height="20"
      />
    </Badge>
  );
};

export default SumUpBadge;
