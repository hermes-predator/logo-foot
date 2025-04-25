
#!/bin/bash

echo "Starting to fix all category issues in logo files..."

# Find all files with the "logos" category and update them
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Skip directories or group files
  if [[ -d "$file" || "$file" == */groups/* ]]; then
    continue
  fi
  
  # Check if the file contains the "logos" category
  if grep -q 'category: *"logos"' "$file"; then
    # Determine the appropriate category
    if grep -q -i -E "national team|équipe nationale|sélection|drapeau|équipe d|flag|seleccion|argentina|brazil|england|france|germany|italy|morocco|portugal|poland|romania|russia|senegal|tunisia" "$file"; then
      # Logo d'équipe nationale
      sed -i 's/category: *"logos"/category: "national-logos"/g' "$file"
      echo "Updated $file to national-logos"
    elif grep -q -i -E "champions league|europa league|coupe|cup|championnat|league|trophy|trophée|ballon d.or|competition|copa|bundesliga|ligue|primera|serie|eredivisie|premier league" "$file"; then
      # Logo de compétition
      sed -i 's/category: *"logos"/category: "competition-logos"/g' "$file"
      echo "Updated $file to competition-logos"
    else
      # Par défaut, c'est un logo de club
      sed -i 's/category: *"logos"/category: "club-logos"/g' "$file"
      echo "Updated $file to club-logos"
    fi
  fi
done

echo "All category fixes have been applied successfully!"
