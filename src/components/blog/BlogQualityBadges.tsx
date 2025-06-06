
import { Shield, Star, Download, Users } from "lucide-react";

export const BlogQualityBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
        <Shield className="h-8 w-8 mx-auto mb-2 text-green-400" />
        <div className="text-sm font-semibold">Google Drive</div>
        <div className="text-xs opacity-80">Stockage Sécurisé</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
        <Star className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
        <div className="text-sm font-semibold">Judge.me</div>
        <div className="text-xs opacity-80">Avis Vérifiés</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
        <Download className="h-8 w-8 mx-auto mb-2 text-blue-400" />
        <div className="text-sm font-semibold">1000+ Logos</div>
        <div className="text-xs opacity-80">Haute Qualité</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
        <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
        <div className="text-sm font-semibold">15k+ Clients</div>
        <div className="text-xs opacity-80">Satisfaits</div>
      </div>
    </div>
  );
};
