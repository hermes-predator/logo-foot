
import React from 'react';
import { motion } from 'framer-motion';
import { FileArchive, Download, Shield, Zap, Layout, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: FileArchive,
    title: "8 600+ Ressources",
    description: "La plus grande collection de logos de football en haute qualité"
  },
  {
    icon: Download,
    title: "Accès Instantané",
    description: "Livraison immédiate incluse"
  },
  {
    icon: Shield,
    title: "Usage Libre",
    description: "Utilisez les logos pour vos projets personnels"
  },
  {
    icon: Zap,
    title: "Haute Qualité",
    description: "Images PNG avec fond transparent"
  },
  {
    icon: Layout,
    title: "Organisation Claire",
    description: "Fichiers triés par pays et championnats"
  },
  {
    icon: RefreshCw,
    title: "Satisfait ou Remboursé",
    description: "Garantie de remboursement sous 10 jours"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800">
          Pourquoi choisir notre pack ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
                benefit.title === "Satisfait ou Remboursé" 
                  ? "border border-green-200 bg-green-50/50" 
                  : "border border-purple-100 bg-transparent backdrop-blur-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
