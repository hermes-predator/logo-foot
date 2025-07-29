
import React from 'react';
import { Folder, TrendingUp, Star, Heart, Zap, BadgeCheck, Plus } from 'lucide-react';
import FeatureFlipBox from './FeatureFlipBox';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  description?: string;
  className?: string;
  iconColor?: string;
}

const Feature = ({ icon: Icon, text, description, className, iconColor }: FeatureProps) => {
  return (
    <div className="relative flex items-center gap-4 text-gray-800 p-2 rounded-lg">
      <div className={`relative z-10 p-2.5 rounded-full ${className || 'bg-blue-100'}`}>
        <Icon className={`h-5 w-5 ${iconColor || 'text-blue-600'}`} />
      </div>
      <div className="relative z-10">
        <span className="text-[15px] font-semibold">{text}</span>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5 leading-tight max-w-[240px]">{description}</p>
        )}
      </div>
    </div>
  );
};

const FeatureList = () => {
  const features = [
    {
      icon: Folder,
      text: "Fichier de 8 600+ ressources",
      description: "Un fichier couvrant la majorité des besoins numériques du football.",
      seoContent: "Notre collection premium comprend plus de 8 600 logos de clubs de football européens : Premier League anglaise, Liga espagnole, Serie A italienne, Bundesliga allemande, Ligue 1 française. Formats PNG haute résolution et SVG vectoriels pour tous vos projets professionnels. Logos officiels des équipes nationales, clubs historiques et nouvelles franchises. Base de données complète pour créateurs de contenu, designers graphiques et développeurs d'applications sportives."
    },
    {
      icon: Plus,
      text: "Gain de temps", 
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Accédez instantanément à tous les logos sans recherche fastidieuse.",
      seoContent: "Économisez des heures de recherche sur Internet. Tous les logos sont pré-organisés par championnats, pays et divisions. Finies les recherches Google Images de qualité douteuse ou les logos pixellisés. Notre système de nomenclature uniforme permet de retrouver instantanément le logo Chelsea FC, Real Madrid, Bayern Munich ou PSG. Idéal pour les montages vidéo, présentations PowerPoint, sites web et applications mobiles."
    },
    {
      icon: Star,
      text: "Fichier unique sur le marché",
      className: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Un fichier trouvable nulle part ailleurs. Procurez-vous le sans attendre !",
      seoContent: "Collection exclusive introuvable sur les plateformes concurrentes comme Shutterstock, Getty Images ou Adobe Stock. Logos rares de clubs amateurs, équipes historiques disparues et franchises récentes. Incluant les logos alternatifs, versions rétro et éditions spéciales des plus grands clubs européens. Mise à jour régulière avec les nouveaux logos de saison, rebranding et créations d'équipes émergentes."
    },
    {
      icon: Plus,
      text: "Gain de confiance",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Boostez votre parcours personnel et gagnez en confiance pour vos projets.",
      seoContent: "Démarquez-vous de la concurrence avec des visuels professionnels. Impressionnez vos clients, collaborateurs et audience avec des logos officiels haute définition. Parfait pour les freelances graphistes, agences de communication, chaînes YouTube football, blogs sportifs et influenceurs. Donnez une crédibilité instantanée à vos créations et montrez votre professionnalisme dans l'univers du football."
    },
    {
      icon: BadgeCheck,
      text: "Fichier professionnel", 
      className: "bg-blue-100",
      iconColor: "text-blue-700",
      description: "Nos logos sont uniformes, nommés et triés par pays pour un usage fiable.",
      seoContent: "Standards professionnels respectés : résolution minimum 300 DPI pour l'impression, formats web optimisés, transparence PNG préservée. Organisation méthodique par ligues : England/Premier League, Spain/La Liga, Italy/Serie A, Germany/Bundesliga, France/Ligue 1. Nomenclature cohérente facilite l'automatisation et l'intégration dans vos workflows de production. Compatible Adobe Creative Suite, Canva Pro, Figma et tous logiciels de design."
    },
    {
      icon: Plus,
      text: "Patrimoine numérique",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Augmentez la valeur de votre patrimoine en stockant notre fichier spécialisé.",
      seoContent: "Investissement à long terme dans votre arsenal créatif. Cette banque d'images premium vous accompagnera sur tous vos futurs projets football. Valeur ajoutée pour votre portfolio professionnel, agence de design ou studio de création. Ressource rare qui prend de la valeur avec le temps, surtout pour les logos de clubs qui évoluent ou disparaissent. Avantage concurrentiel durable dans l'industrie du sport et du divertissement."
    },
    {
      icon: Heart,
      text: "Prix accessible",
      description: "Un tarif simple permettant un accès à cette ressource pour un prix abordable.",
      seoContent: "Tarification transparente sans abonnement mensuel caché. Achat unique pour un accès à vie, contrairement aux plateformes comme Adobe Stock ou Shutterstock. Prix démocratique pour les étudiants, freelances débutants et petites entreprises. Rapport qualité-prix exceptionnel : plus de 8 600 logos premium pour le coût d'une seule image sur les banques d'images traditionnelles. Pas de frais cachés, de royalties ou de licences compliquées."
    },
    {
      icon: Plus,
      text: "Utilité stratégique",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Parfait pour les projets personnels spécialisés dans l'analyse sportive.",
      seoContent: "Essentiel pour les data analysts football, journalistes sportifs, créateurs de contenu YouTube, podcasteurs sport et développeurs d'applications mobiles. Idéal pour créer des infographies de transferts, analyses tactiques, comparaisons de performances, fantasy football apps et quiz interactifs. Ressource précieuse pour les startups SportsTech, applications de paris sportifs et plateformes de statistiques football."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-7 pt-4 mt-2">
      {features.map((feature, index) => (
        <FeatureFlipBox
          key={index} 
          icon={feature.icon} 
          text={feature.text} 
          description={feature.description}
          seoContent={feature.seoContent}
          className={feature.className} 
          iconColor={feature.iconColor} 
        />
      ))}
    </div>
  );
};

export default FeatureList;
export { Feature, type FeatureProps };
