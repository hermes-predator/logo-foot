
#!/bin/bash

echo "Starting to fix all category issues in logo files..."

# First, fix duplicate properties in specific files
echo "Fixing duplicate properties..."
sed -i 's/category: ".*"/category: "club-logos"/g' src/data/blog/logos/annecy-logo.ts
sed -i 's/category: ".*"/category: "club-logos"/g' src/data/blog/logos/aubagne-logo.ts

# Now update all logo files that still have the "logos" category
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Skip directories and group files
  if [[ -d "$file" || "$file" == */groups/* ]]; then
    continue
  fi
  
  # Fix category for each file
  if grep -q 'category: *"logos"' "$file"; then
    # Check if it's likely a national team logo
    if grep -q -i "national team\|équipe nationale\|drapeau\|équipe d\|\sflag\|sélection" "$file"; then
      sed -i 's/category: *"logos"/category: "national-logos"/g' "$file"
      echo "Updated $file to national-logos"
      continue
    fi
    
    # Check if it's likely a competition logo
    if grep -q -i "competition\|coupe\|cup\|league\|trophy\|champion\|ligue\|copa\|bundesliga\|euro" "$file"; then
      sed -i 's/category: *"logos"/category: "competition-logos"/g' "$file"
      echo "Updated $file to competition-logos"
      continue
    fi
    
    # Default to club logos
    sed -i 's/category: *"logos"/category: "club-logos"/g' "$file"
    echo "Updated $file to club-logos"
  fi
done

echo "Category updates complete!"
