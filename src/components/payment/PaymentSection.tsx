
import React, { useState, useEffect, Suspense, lazy } from 'react';
import PaymentTitle from './PaymentTitle';
import TrustIndicators from './TrustIndicators';
import { Skeleton } from '@/components/ui/skeleton';
import { PerformanceWrapper } from '@/components/ui/performance-wrapper';
import PaymentTrust from './PaymentTrust';

// Chargement paresseux des composants non-critiques
const PaymentCard = lazy(() => import('./PaymentCard'));

const PaymentSection = () => {
  const [recentBuyers, setRecentBuyers] = useState(0);

  // Simuler un nombre aléatoire de personnes ayant récemment acheté
  useEffect(() => {
    // Base plus élevée pour le nombre de départ
    const minBuyers = 75;
    const maxBuyers = 90;
    const randomBuyers = Math.floor(Math.random() * (maxBuyers - minBuyers + 1)) + minBuyers;
    setRecentBuyers(randomBuyers);
    
    // Mettre à jour le nombre toutes les 20 minutes pour simuler de nouveaux acheteurs
    const interval = setInterval(() => {
      // Ajouter 1-3 nouveaux acheteurs périodiquement
      setRecentBuyers(prevCount => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return prevCount + increment;
      });
    }, 20 * 60 * 1000); // 20 minutes
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <PaymentTitle />
      <TrustIndicators />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <PerformanceWrapper id="payment-card" priority={true}>
            <Suspense fallback={<Skeleton className="w-full h-[500px] rounded-lg" />}>
              <PaymentCard recentBuyers={recentBuyers} />
            </Suspense>
          </PerformanceWrapper>
          
          <Suspense fallback={<Skeleton className="w-full h-[200px] rounded-lg mt-4" />}>
            <PaymentTrust />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
