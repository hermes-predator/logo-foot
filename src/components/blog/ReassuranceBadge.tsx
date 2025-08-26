
import React from 'react';
import { Shield, Users, Star, Clock } from 'lucide-react';

const ReassuranceBadge = () => {
  return (
    <div className="mb-4">
      <div className="flex flex-wrap justify-center gap-3 mb-3">
        {/* Badge Sécurisé */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: 'rgb(40, 39, 37)', border: '1px solid rgb(40, 39, 37)' }}>
          <Shield className="w-4 h-4" />
          <span>Téléchargement sécurisé</span>
        </div>
        
        {/* Badge Utilisateurs satisfaits */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: 'rgb(40, 39, 37)', border: '1px solid rgb(40, 39, 37)' }}>
          <Users className="w-4 h-4" />
          <span>+1000 utilisateurs satisfaits</span>
        </div>
        
        {/* Badge Qualité */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: 'rgb(40, 39, 37)', border: '1px solid rgb(40, 39, 37)' }}>
          <Star className="w-4 h-4" />
          <span>Qualité garantie</span>
        </div>
        
        {/* Badge Accès instantané */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: 'rgb(40, 39, 37)', border: '1px solid rgb(40, 39, 37)' }}>
          <Clock className="w-4 h-4" />
          <span>Accès instantané</span>
        </div>
      </div>
      
      {/* Petite ligne de confiance avec élément clignotant modifié */}
      <p className="text-center text-sm text-gray-600 font-medium">
        ✓ Fichier organisé et prêt à l'emploi • ✓ Compatible tous supports • ✓ Satisfaction garantie
      </p>
      
      {/* Élément clignotant modifié */}
      <div className="text-center mt-0">
        <span 
          className="inline-block text-white px-4 py-2 rounded-md font-bold text-sm shadow-md"
          style={{
            backgroundColor: 'rgb(40, 39, 37)',
            animation: 'fastBlink 0.8s ease-in-out infinite'
          }}
        >
          ⦗FRONT-CLOUD⦘~ Football.zip
        </span>
      </div>
    </div>
  );
};

export default ReassuranceBadge;
