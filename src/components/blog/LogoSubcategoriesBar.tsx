
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { countries } from "@/constants/countryData";
import { Folder } from "lucide-react";

const EXCLUDED_COUNTRIES = [
  "Sélections Nationales",
  "Compétitions de football",
  "Compétitions internationales",
  "Coupes nationales",
  "Championnats",
  "Default"
];

// Affiche les sous-groupes pays/championnats pour la catégorie "Logos"
const LogoSubcategoriesBar = () => {
  const [searchParams] = useSearchParams();
  const currentSub = searchParams.get("subCategory");

  // Filtrer les pays pertinents (peut être adapté à la logique des logos uniquement)
  const filteredCountries = countries.filter(
    (c) => !EXCLUDED_COUNTRIES.includes(c)
  );

  return (
    <div className="overflow-x-auto border-b border-gray-200 py-2 px-2 mb-5">
      <div className="flex gap-2 min-w-max">
        <Link
          to="/blog"
          className={
            !currentSub
              ? "px-3 py-1 bg-primary text-white font-medium rounded-full text-sm"
              : "px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
          }
        >
          <Folder className="inline-block mr-1 w-4 h-4" />
          Tous les pays
        </Link>
        {filteredCountries.map((country) => (
          <Link
            key={country}
            to={`/blog?category=logos&subCategory=${encodeURIComponent(country)}`}
            className={
              currentSub === country
                ? "px-3 py-1 bg-primary text-white font-medium rounded-full text-sm"
                : "px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
            }
          >
            {country}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LogoSubcategoriesBar;
