
#!/bin/bash

# Mettre à jour toutes les catégories restantes de "logos" à "club-logos" ou "national-logos" selon le contenu
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Ignorer les fichiers de groupe et les scripts
  if [[ "$file" == *"groups/"* || "$file" == *"update-"* ]]; then
    continue
  fi
  
  # Vérifier si le fichier contient encore la catégorie "logos"
  if grep -q 'category: "logos"' "$file"; then
    # Vérifier s'il s'agit d'un logo d'équipe nationale
    if grep -q -i 'équipe nationale\|selection\|national team\|équipe de france\|portugal\|england\|espagne\|spain\|italy\|allemagne\|germany\|brazil\|argentine\|poland' "$file"; then
      # Mettre à jour vers national-logos
      sed -i 's/category: "logos"/category: "national-logos"/g' "$file"
      echo "Mis à jour $file vers national-logos"
    # Vérifier s'il s'agit d'un logo de compétition
    elif grep -q -i 'champions league\|europa league\|ligue des champions\|coupe\|trophy\|trophée\|competition\|championnat\|league\|copa\|bundesliga\|premier league\|ligue 1\|serie a\|la liga' "$file"; then
      # Mettre à jour vers competition-logos
      sed -i 's/category: "logos"/category: "competition-logos"/g' "$file"
      echo "Mis à jour $file vers competition-logos"
    # Vérifier si c'est du pixel art
    elif grep -q -i 'pixel art\|pixelisé\|pixelated\|8-bit\|retro gaming' "$file"; then
      # Mettre à jour vers pixel-art
      sed -i 's/category: "logos"/category: "pixel-art"/g' "$file"
      echo "Mis à jour $file vers pixel-art"
    else
      # Par défaut, c'est un logo de club
      sed -i 's/category: "logos"/category: "club-logos"/g' "$file"
      echo "Mis à jour $file vers club-logos"
    fi
  fi
done

echo "Mise à jour des catégories terminée!"
