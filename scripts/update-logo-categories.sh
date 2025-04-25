
#!/bin/bash

# Script pour mettre à jour les catégories de logos dans tous les fichiers concernés
# Ce script remplace la catégorie "logos" par "club-logos", "national-logos" ou "competition-logos"
# selon le contenu et le contexte du fichier

echo "Début de la mise à jour des catégories de logos..."

# Parcourir tous les fichiers de logos
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Vérifier si le fichier contient category: "logos"
  if grep -q 'category: "logos"' "$file"; then
    # Déterminer la catégorie appropriée
    if grep -q -i "équipe nationale\|national team\|sélection\|drapeau national\|équipe autriche\|équipe albanie\|équipe algérie" "$file"; then
      # C'est un logo d'équipe nationale
      sed -i 's/category: "logos"/category: "national-logos"/g' "$file"
      echo "Mis à jour $file en tant que logo d'équipe nationale"
    elif grep -q -i "coupe\|championnat\|league\|trophy\|trophée\|ballon d'or\|competition\|copa\|bundesliga\|ligue\|primera\|serie\|uefa" "$file"; then
      # C'est un logo de compétition
      sed -i 's/category: "logos"/category: "competition-logos"/g' "$file"
      echo "Mis à jour $file en tant que logo de compétition"
    else
      # Par défaut, c'est un logo de club
      sed -i 's/category: "logos"/category: "club-logos"/g' "$file"
      echo "Mis à jour $file en tant que logo de club"
    fi
  fi
done

echo "Mise à jour des catégories terminée!"
