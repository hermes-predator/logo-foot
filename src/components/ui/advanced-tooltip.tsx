
import React, { useState } from 'react';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CreditCard, CheckCircle2, Package, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TooltipStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface AdvancedTooltipProps {
  children: React.ReactNode;
  steps: TooltipStep[];
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
  simpleTooltip?: string;
}

export const AdvancedTooltip = ({ 
  children, 
  steps,
  side = "top",
  align = "center",
  className,
  simpleTooltip
}: AdvancedTooltipProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  // Si on n'a qu'une seule étape, on utilise un tooltip simple
  if (steps.length === 1 && !simpleTooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent 
            side={side} 
            align={align}
            className={cn("bg-white border border-gray-200 shadow-md text-gray-800", className)}
          >
            <div className="max-w-[260px] p-2">
              <p className="font-medium mb-1">{steps[0].title}</p>
              <p className="text-xs text-gray-600">{steps[0].description}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  // Si simpleTooltip est fourni, on l'affiche en tooltip simple
  if (simpleTooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span 
              onMouseEnter={() => setIsOpen(false)} 
              onClick={() => setIsOpen(!isOpen)}
            >
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent 
            side={side} 
            align={align}
            className={cn("bg-white border border-gray-200 shadow-md text-gray-800 flex items-center gap-1.5", className)}
          >
            <p className="text-xs">{simpleTooltip}</p>
            <Info className="h-3 w-3 text-gray-400" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  // Pour les tooltips multi-étapes, on utilise un Popover
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <span 
          onMouseEnter={() => setIsOpen(true)} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {children}
        </span>
      </PopoverTrigger>
      <PopoverContent 
        side={side} 
        align={align}
        className={cn(
          "w-80 p-0 border border-gray-200 rounded-lg shadow-xl bg-gradient-to-b from-white to-gray-50", 
          className
        )}
      >
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-800">
              {steps[currentStep].title}
            </h3>
            <span className="text-xs text-gray-500">
              Étape {currentStep + 1}/{steps.length}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex gap-3 items-start mb-1">
            {steps[currentStep].icon || 
              <div className="h-5 w-5 mt-0.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <span className="text-xs font-medium">{currentStep + 1}</span>
              </div>
            }
            <p className="text-sm text-gray-700">{steps[currentStep].description}</p>
          </div>
        </div>
        
        <div className="p-3 border-t border-gray-100 bg-gray-50/80 flex items-center justify-between rounded-b-lg">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="h-8 px-2"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Précédent
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className="h-8 px-2"
            >
              Suivant
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 px-2 text-blue-600"
            >
              Compris
              <CheckCircle2 className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
