
#!/bin/bash

echo "Starting comprehensive logo category fix..."

# Find all logo files with the "logos" category
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Skip groups directory
  if [[ "$file" == *"/groups/"* ]]; then
    continue
  fi
  
  # Check if the file contains the outdated "logos" category
  if grep -q 'category: *"logos"' "$file"; then
    # Determine the appropriate category based on file content
    if grep -q -i -E "équipe nationale|national team|sélection|drapeau national|équipe|federation|seleccion|russia|spain|poland|france|germany|austria|australia|argentina|brazil|england|italy|morocco|senegal|tunisia|cameroon|flag" "$file"; then
      # National team logo
      sed -i 's/category: *"logos"/category: "national-logos"/g' "$file"
      echo "Updated $file to national-logos"
    elif grep -q -i -E "champion league|europa league|coupe|cup|championnat|league|trophy|trophée|ballon d.or|competition|copa|bundesliga|ligue|primera|serie|uefa|mundial|championship|world cup|premier league" "$file"; then
      # Competition logo
      sed -i 's/category: *"logos"/category: "competition-logos"/g' "$file"
      echo "Updated $file to competition-logos"
    else
      # Default to club logos
      sed -i 's/category: *"logos"/category: "club-logos"/g' "$file"
      echo "Updated $file to club-logos"
    fi
    
    # Also update subCategory if it exists and matches the old category
    if grep -q 'subCategory: *"logos"' "$file"; then
      # Use the same category as determined above
      if grep -q 'category: *"national-logos"' "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "national-logos"/g' "$file"
      elif grep -q 'category: *"competition-logos"' "$file"; then
        sed -i 's/subCategory: *"logos"/subCategory: "competition-logos"/g' "$file"
      else
        sed -i 's/subCategory: *"logos"/subCategory: "club-logos"/g' "$file"
      fi
    fi
  fi
done

# Handle specific edge cases - competition logos that might not be caught by the pattern
find src/data/blog/logos -type f -name "*-league-*.ts" -o -name "*-cup-*.ts" -o -name "*-trophy-*.ts" -o -name "*-championship-*.ts" | while read file; do
  if grep -q 'category: *"logos"' "$file"; then
    sed -i 's/category: *"logos"/category: "competition-logos"/g' "$file"
    echo "Updated $file to competition-logos (special case)"
    
    # Update subCategory too if needed
    if grep -q 'subCategory: *"logos"' "$file"; then
      sed -i 's/subCategory: *"logos"/subCategory: "competition-logos"/g' "$file"
    fi
  fi
done

# Fix the special cases for champions-league-logo.ts and other competition logos
for logo_file in src/data/blog/logos/champions-league-logo.ts src/data/blog/logos/europa-league-logo.ts src/data/blog/logos/can-logo.ts; do
  if [ -f "$logo_file" ] && grep -q 'category: *"logos"' "$logo_file"; then
    sed -i 's/category: *"logos"/category: "competition-logos"/g' "$logo_file"
    echo "Updated $logo_file to competition-logos (critical competition)"
  fi
done

# Fix national team logos that might be missed
for country in cameroon chile morocco argentina brazil england germany france spain italy; do
  logo_file="src/data/blog/logos/$country-logo.ts"
  if [ -f "$logo_file" ] && grep -q 'category: *"logos"' "$logo_file"; then
    sed -i 's/category: *"logos"/category: "national-logos"/g' "$logo_file"
    echo "Updated $logo_file to national-logos (country)"
  fi
done

echo "Logo category update completed successfully!"
