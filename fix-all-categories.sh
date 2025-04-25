
#!/bin/bash

echo "Démarrage de la correction des catégories dans tous les fichiers logos..."

# Rechercher tous les fichiers avec la catégorie "logos"
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Ignorer les fichiers dans le répertoire groups/
  if [[ "$file" == *"/groups/"* ]]; then
    continue
  fi
  
  # Vérifier si le fichier contient la catégorie "logos"
  if grep -q 'category: *"logos"' "$file"; then
    # Déterminer la catégorie appropriée basée sur le contenu
    if grep -q -i -E "équipe nationale|national team|sélection|drapeau national|équipe|seleccion|argentina|brazil|england|france|germany|italy|morocco|portugal|poland|romania|russia|senegal|spain|tunisia" "$file"; then
      # Logo d'équipe nationale
      sed -i 's/category: *"logos"/category: "national-logos"/g' "$file"
      echo "Mis à jour $file vers national-logos"
    elif grep -q -i -E "champion league|europa league|coupe|cup|championnat|league|trophy|trophée|ballon d.or|competition|copa|bundesliga|ligue|primera|serie|premier league" "$file"; then
      # Logo de compétition
      sed -i 's/category: *"logos"/category: "competition-logos"/g' "$file"
      echo "Mis à jour $file vers competition-logos"
    else
      # Par défaut, c'est un logo de club
      sed -i 's/category: *"logos"/category: "club-logos"/g' "$file"
      echo "Mis à jour $file vers club-logos"
    fi
  fi
done

echo "Mise à jour terminée! Toutes les catégories ont été corrigées."
