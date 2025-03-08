
import React from 'react';
import { Trophy } from 'lucide-react';

const CompetitionsSection = () => {
  const competitions = [
    "Ligue des Champions UEFA",
    "Ligue Europa UEFA",
    "Ligue Europa Conférence UEFA",
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
    "Primeira Liga",
    "Eredivisie",
    "UEFA Super Cup",
    "Coupe du Monde FIFA",
    "Euro UEFA",
    "Copa America",
    "Coupe d'Afrique des Nations",
    "Coupe de France",
    "DFB-Pokal",
    "FA Cup",
    "Copa del Rey",
    "Coppa Italia"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 backdrop-blur-md border border-blue-200/50 shadow-sm mb-8">
          <Trophy className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-900">Compétitions Majeures</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Logos officiels des plus grandes compétitions
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <p className="text-gray-700">{competition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
