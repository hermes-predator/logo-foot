
import React, { Suspense, lazy } from 'react';
import PaymentTitle from './PaymentTitle';
import TrustIndicators from './TrustIndicators';
import { Skeleton } from '@/components/ui/skeleton';
import { PerformanceWrapper } from '@/components/ui/performance-wrapper';
import { useRecentBuyers } from '@/hooks/useRecentBuyers';

// Chargement paresseux des composants non-critiques
const PaymentCard = lazy(() => import('./PaymentCard'));
const PaymentTrust = lazy(() => import('./PaymentTrust'));

const PaymentSection = () => {
  const recentBuyers = useRecentBuyers();
  
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
