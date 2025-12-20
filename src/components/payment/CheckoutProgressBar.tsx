import React from 'react';
import { Check, CreditCard, Download } from 'lucide-react';

interface CheckoutProgressBarProps {
  /** Current step: 1 = Sélection, 2 = Paiement, 3 = Téléchargement */
  currentStep: 1 | 2 | 3;
}

const CheckoutProgressBar: React.FC<CheckoutProgressBarProps> = ({ currentStep }) => {
  const steps = [
    { label: 'Sélection', step: 1 },
    { label: 'Paiement', step: 2, icon: CreditCard },
    { label: 'Téléchargement', step: 3, icon: Download },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {steps.map((s, index) => {
          const isCompleted = currentStep > s.step;
          const isActive = currentStep === s.step;
          const Icon = s.icon;

          return (
            <React.Fragment key={s.step}>
              {/* Step circle */}
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    isCompleted
                      ? 'bg-blue-600 text-white'
                      : isActive
                      ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : Icon ? (
                    <Icon className="w-4 h-4" />
                  ) : (
                    s.step
                  )}
                </div>
                <span
                  className={`text-xs mt-1 hidden sm:block transition-colors ${
                    isActive
                      ? 'text-blue-600 font-medium'
                      : isCompleted
                      ? 'text-gray-600'
                      : 'text-gray-400'
                  }`}
                >
                  {s.label}
                </span>
              </div>

              {/* Connecting line (except after last step) */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-colors duration-300 ${
                    currentStep > s.step ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProgressBar;
