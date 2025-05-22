
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { countryChampionships } from '@/constants/countryData';

interface CountryFolderProps {
  country: string;
  logoCount: string;
  flagSrc: string;
  teamLogos: string[];
}

const CountryFolder: React.FC<CountryFolderProps> = ({ country, logoCount, flagSrc, teamLogos }) => {
  return (
    <Link to={`/pays/${country.toLowerCase()}`} className="block transition-transform hover:scale-105">
      <Card className="overflow-hidden bg-gray-800 text-white">
        <div className="p-3">
          <h3 className="text-xl font-bold text-center mb-2">{country.toUpperCase()}</h3>
          <div className="flex justify-center gap-2 mb-2">
            {teamLogos.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                className="w-8 h-8 object-contain"
              />
            ))}
            <span className="bg-white text-black px-2 py-1 text-xs rounded font-medium">{logoCount}</span>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-700 p-4 flex justify-center items-center">
            <div className="bg-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
              <img 
                src="/lovable-uploads/b1f19bbf-2fae-4b5b-9cca-003118dbba13.png" 
                alt="Soccer ball" 
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          <div className="absolute bottom-2 right-2">
            <img 
              src={flagSrc} 
              alt={`Drapeau ${country}`} 
              className="w-8 h-8 object-cover rounded" 
            />
          </div>
          <div className="text-center text-xs p-2 bg-gray-900">
            LOGOS | PNG | 120x120
          </div>
        </div>
      </Card>
    </Link>
  );
};

const CountryFolders: React.FC = () => {
  const countryData = [
    {
      country: "Angleterre",
      logoCount: "+450 logos",
      flagSrc: "/flags/england.png",
      teamLogos: [
        "/team-logos/manchester-city.png",
        "/team-logos/manchester-united.png",
        "/team-logos/chelsea.png"
      ]
    },
    {
      country: "Allemagne",
      logoCount: "+450 logos",
      flagSrc: "/flags/germany.png",
      teamLogos: [
        "/team-logos/bayern.png",
        "/team-logos/dortmund.png",
        "/team-logos/frankfurt.png"
      ]
    },
    // Ajoutez ici les autres pays selon vos besoins
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Logos par pays</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countryData.map((data, index) => (
          <CountryFolder key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default CountryFolders;
