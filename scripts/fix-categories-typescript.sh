
#!/bin/bash

echo "Starting to fix category issues in logo files..."

# First, fix the duplicate properties in annecy-logo.ts and aubagne-logo.ts
echo "Fixing files with duplicate properties..."
sed -i '0,/category:/s/category:.*/category: "club-logos"/' src/data/blog/logos/annecy-logo.ts
sed -i '/category:/s/category:.*/category: "club-logos"/2g' src/data/blog/logos/annecy-logo.ts

sed -i '0,/category:/s/category:.*/category: "club-logos"/' src/data/blog/logos/aubagne-logo.ts
sed -i '/category:/s/category:.*/category: "club-logos"/2g' src/data/blog/logos/aubagne-logo.ts

# Now update all files with "logos" category to valid types
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Skip directories, group files, or special files
  if [[ -d "$file" || "$file" == */groups/* || "$file" == */index.ts ]]; then
    continue
  fi
  
  # Check if the file contains the 'logos' category
  if grep -q 'category: *"logos"' "$file"; then
    # Determine the appropriate category
    if grep -q -i -E "national team|équipe nationale|drapeau|équipe d'|flag|sélection|diables rouges|weltmeister|bulgarie|burkina faso|cameroun|can" "$file"; then
      sed -i 's/category: *"logos"/category: "national-logos"/g' "$file"
      echo "Updated $file to national-logos"
    elif grep -q -i -E "competition|coupe|cup|league|trophy|champion|ligue|copa|bundesliga|primera|serie|eredivisie|premier league|ligue|mundial" "$file"; then
      sed -i 's/category: *"logos"/category: "competition-logos"/g' "$file"
      echo "Updated $file to competition-logos"
    else
      sed -i 's/category: *"logos"/category: "club-logos"/g' "$file"
      echo "Updated $file to club-logos"
    fi
  fi
done

echo "Category fixes complete!"
