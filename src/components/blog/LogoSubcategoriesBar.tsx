
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Folder } from "lucide-react";
import { blogPosts } from "@/data/blog";

// Liste des intitulés à exclure explicitement en plus des anomalies éventuelles
const EXCLUDED_SUBCATEGORIES = [
  "Sélections Nationales",
  "Compétitions de football",
  "Compétitions internationales",
  "Coupes nationales",
  "Championnats",
  "Default",
  undefined,
  null,
  "",
];

const LogoSubcategoriesBar = () => {
  const [searchParams] = useSearchParams();
  const currentSub = searchParams.get("subCategory");

  // Extraire dynamiquement les sous-groupes utilisés dans les posts logos
  const logoSubcategoriesSet = new Set<string>();
  blogPosts
    .filter((post) => post.category === "logos" && post.subCategory && !EXCLUDED_SUBCATEGORIES.includes(post.subCategory))
    .forEach((post) => {
      // Certains articles peuvent avoir des sous-groupes multiples séparés par virgule ou autre (optionnel)
      if (typeof post.subCategory === "string") {
        logoSubcategoriesSet.add(post.subCategory);
      }
    });

  // Générer une liste unique et triée
  const availableSubcategories = Array.from(logoSubcategoriesSet).sort((a, b) => a.localeCompare(b, "fr"));

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
          Tous les sous-groupes
        </Link>
        {availableSubcategories.map((sub) => (
          <Link
            key={sub}
            to={`/blog?category=logos&subCategory=${encodeURIComponent(sub)}`}
            className={
              currentSub === sub
                ? "px-3 py-1 bg-primary text-white font-medium rounded-full text-sm"
                : "px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
            }
          >
            {sub}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LogoSubcategoriesBar;
