
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Sparkles, Trophy, Shield, Download } from 'lucide-react';
import PricingBlock from './PricingBlock';
import PaymentButton from './PaymentButton';
import TrustIndicators from './TrustIndicators';
import GoogleDriveBadge from './GoogleDriveBadge';
import SparkleEffects from './SparkleEffects';

const PaymentCard = () => {
  const advantages = [
    "8 600+ logos de clubs",
    "Format PNG transparent",
    "Organisation par pays",
    "Téléchargement instantané",
    "Usage libre et illimité"
  ];

  return (
    <div className="relative max-w-md mx-auto">
      <SparkleEffects />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* Header avec effet premium */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-6 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium opacity-90">Pack Premium</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">Collection Complète</h3>
            <p className="text-blue-100 text-sm">Tous les logos de football</p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-6">
          {/* Prix */}
          <PricingBlock />
          
          {/* Liste des avantages avec icônes Plus */}
          <div className="space-y-3 mb-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Plus className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 text-sm font-medium">{advantage}</span>
              </motion.div>
            ))}
          </div>

          {/* Badge Google Drive */}
          <GoogleDriveBadge />

          {/* Bouton de paiement */}
          <PaymentButton />

          {/* Indicateurs de confiance */}
          <TrustIndicators />
        </div>

        {/* Footer sécurisé */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Paiement 100% sécurisé</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentCard;
