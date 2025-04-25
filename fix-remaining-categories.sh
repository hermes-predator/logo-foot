
#!/bin/bash

echo "Correction des catégories restantes dans les fichiers logos..."

# Rechercher tous les fichiers avec la catégorie "logos"
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Ignorer les fichiers dans certains répertoires ou les scripts
  if [[ "$file" == *"/groups/"* || "$file" == *"update-"* || "$file" == *"fix-"* ]]; then
    continue
  fi
  
  # Vérifier si le fichier contient encore la catégorie "logos"
  if grep -q 'category: *"logos"' "$file"; then
    # Déterminer la catégorie appropriée basée sur le contenu
    if grep -q -i -E "équipe nationale|national team|sélection|drapeau national|équipe|seleccion|argentina|brazil|england|france|germany|italy|spain|morocco|portugal|poland|romania|russia|senegal|tunisia|denmark" "$file"; then
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
    
    # Également mettre à jour la sous-catégorie si nécessaire
    if grep -q 'subCategory: *"logos"' "$file"; then
      # Détecter le type de sous-catégorie appropriée
      if grep -q -i -E "spain|madrid|barcelona|betis|valencia|sevilla|athletic|espagnol|villarreal|rayo|atletico|espanyol|real" "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "spanish-clubs"/g' "$file"
        echo "  - Sous-catégorie mise à jour vers spanish-clubs"
      elif grep -q -i -E "england|english|manchester|liverpool|arsenal|chelsea|tottenham|crystal|west ham|newcastle|brighton|everton|leeds|aston villa" "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "english-clubs"/g' "$file"
        echo "  - Sous-catégorie mise à jour vers english-clubs"
      elif grep -q -i -E "france|paris|monaco|lyon|marseille|lille|bordeaux|nantes|lens|strasbourg|rennes|reims|nice|montpellier" "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "french-clubs"/g' "$file"
        echo "  - Sous-catégorie mise à jour vers french-clubs"
      elif grep -q -i -E "italy|italia|milan|juventus|inter|napoli|roma|lazio|torino|fiorentina|atalanta|genoa|sampdoria|cagliari" "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "italian-clubs"/g' "$file"
        echo "  - Sous-catégorie mise à jour vers italian-clubs"
      elif grep -q -i -E "germany|bayern|dortmund|leipzig|gladbach|leverkusen|frankfurt|wolfsburg|schalke|hertha|hoffenheim" "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "german-clubs"/g' "$file"
        echo "  - Sous-catégorie mise à jour vers german-clubs"
      elif grep -q -i -E "portugal|benfica|porto|sporting|braga|guimaraes|boavista" "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "portuguese-clubs"/g' "$file"
        echo "  - Sous-catégorie mise à jour vers portuguese-clubs"
      elif grep -q -i -E "national team|équipe nationale|sélection|drapeau national" "$file"; then
        if grep -q -i -E "europe|european|uefa" "$file"; then
          sed -i 's/subCategory: *"logos"/subCategory: "european-teams"/g' "$file"
          echo "  - Sous-catégorie mise à jour vers european-teams"
        elif grep -q -i -E "south america|amérique du sud|conmebol|copa america" "$file"; then
          sed -i 's/subCategory: *"logos"/subCategory: "south-american-teams"/g' "$file"
          echo "  - Sous-catégorie mise à jour vers south-american-teams"
        elif grep -q -i -E "afrique|africa|caf" "$file"; then
          sed -i 's/subCategory: *"logos"/subCategory: "african-teams"/g' "$file"
          echo "  - Sous-catégorie mise à jour vers african-teams"
        else
          sed -i 's/subCategory: *"logos"/subCategory: "national-teams"/g' "$file"
          echo "  - Sous-catégorie mise à jour vers national-teams"
        fi
      elif grep -q -i -E "competition|league|cup|coupe|championnat|trophy|trophée" "$file"; then
        if grep -q -i -E "europe|european|uefa|champions league|europa" "$file"; then
          sed -i 's/subCategory: *"logos"/subCategory: "european-competitions"/g' "$file"
          echo "  - Sous-catégorie mise à jour vers european-competitions"
        else
          # Utiliser le pays comme sous-catégorie pour les compétitions nationales
          if grep -q -i -E "england|english|premier league|fa cup" "$file"; then
            sed -i 's/subCategory: *"logos"/subCategory: "english-competitions"/g' "$file"
            echo "  - Sous-catégorie mise à jour vers english-competitions"
          elif grep -q -i -E "france|french|ligue 1|coupe de france" "$file"; then
            sed -i 's/subCategory: *"logos"/subCategory: "french-competitions"/g' "$file"
            echo "  - Sous-catégorie mise à jour vers french-competitions"
          elif grep -q -i -E "spain|spanish|la liga|copa del rey" "$file"; then
            sed -i 's/subCategory: *"logos"/subCategory: "spanish-competitions"/g' "$file"
            echo "  - Sous-catégorie mise à jour vers spanish-competitions"
          else
            sed -i 's/subCategory: *"logos"/subCategory: "competitions"/g' "$file"
            echo "  - Sous-catégorie mise à jour vers competitions"
          fi
        fi
      else
        # Par défaut, utiliser la même valeur que la catégorie
        cat_value=$(grep -o 'category: *"[^"]*"' "$file" | grep -o '"[^"]*"' | tr -d '"')
        sed -i "s/subCategory: *\"logos\"/subCategory: \"$cat_value\"/g" "$file"
        echo "  - Sous-catégorie mise à jour vers $cat_value"
      fi
    fi
  fi
done

echo "Mise à jour terminée! Toutes les catégories restantes ont été corrigées."
