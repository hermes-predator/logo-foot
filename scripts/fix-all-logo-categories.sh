
#!/bin/bash

echo "Starting comprehensive fix for all logo category issues..."

# Find and update all logo files with 'logos' category
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Skip directories, group files, or already processed files
  if [[ -d "$file" || "$file" == */groups/* || "$file" == */index.ts ]]; then
    continue
  fi
  
  # Check if file still uses the incorrect 'logos' category
  if grep -q 'category: *["'\'']logos["'\'']' "$file"; then
    # Determine appropriate category
    if grep -q -i "équipe nationale\|national team\|sélection\|drapeau\|équipe d\|\sflag\|selection\|albania\|algeria\|australia\|austria\|belgium\|brazil\|cameroon\|canada\|chile\|colombia\|croatia\|denmark\|ecuador\|england\|france\|germany\|ghana\|iran\|italy\|japan\|korea\|morocco\|netherlands\|nigeria\|norway\|poland\|portugal\|qatar\|russia\|saudi arabia\|senegal\|serbia\|spain\|sweden\|switzerland\|tunisia\|turkey\|uruguay\|usa\|wales" "$file"; then
      sed -i 's/category: *["'\'']logos["'\'']/category: "national-logos"/g' "$file"
      echo "Updated $file to national-logos"
    elif grep -q -i "champions league\|europa league\|coupe\|cup\|trophy\|competition\|championnat\|league\|copa\|bundesliga\|primera\|serie\|eredivisie\|premier league\|ligue\|ballon d.or\|world cup\|euro\|can\|copa\|nations\|tournament" "$file"; then
      sed -i 's/category: *["'\'']logos["'\'']/category: "competition-logos"/g' "$file"
      echo "Updated $file to competition-logos"
    else
      # Default to club logos for all other files
      sed -i 's/category: *["'\'']logos["'\'']/category: "club-logos"/g' "$file"
      echo "Updated $file to club-logos"
    fi
  fi
  
  # Fix subCategory if it's still using 'logos'
  if grep -q 'subCategory: *["'\'']logos["'\'']' "$file"; then
    # Get the category
    category=$(grep -o 'category: *["'\''][^"'\'']*["'\'']' "$file" | sed 's/category: *["'\'']\([^"'\'']*\)["'\'']/\1/')
    # Update subCategory to match category
    sed -i 's/subCategory: *["'\'']logos["'\'']/subCategory: "'$category'"/g' "$file"
    echo "Fixed subCategory in $file to match category: $category"
  fi
done

# Fix specific file that has an issue in the exports collection
if [ -f src/data/blog/logos/groups/competitions.ts ]; then
  # Make sure bundesligaLogoPost is correctly included
  if ! grep -q "bundesligaLogoPost" src/data/blog/logos/groups/competitions.ts; then
    sed -i '/import { bundesligaBrandPost } from/s/bundesligaBrandPost/bundesligaLogoPost/g' src/data/blog/logos/groups/competitions.ts
    echo "Fixed bundesligaLogoPost import in competitions.ts"
  fi
  
  # Also fix any references in the array
  if grep -q "bundesligaBrandPost" src/data/blog/logos/groups/competitions.ts; then
    sed -i '/bundesligaBrandPost/s/bundesligaBrandPost/bundesligaLogoPost/g' src/data/blog/logos/groups/competitions.ts
    echo "Fixed bundesligaLogoPost array reference in competitions.ts"
  fi
fi

# Make the script executable
chmod +x scripts/fix-all-logo-categories.sh

echo "Category fix script completed. Now run ./scripts/fix-all-logo-categories.sh to apply all fixes."
