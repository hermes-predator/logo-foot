
#!/bin/bash

# Function to update all remaining logo files with the deprecated "logos" category
update_remaining_logo_files() {
  echo "Updating remaining logo files with deprecated 'logos' category..."
  
  # Update national team logos
  find src/data/blog/logos -type f -name "*.ts" | while read file; do
    # Skip files we've already processed or don't need to process
    if [[ $file == *"groups/"* || $file == *"update-"* ]]; then
      continue
    fi
    
    # Check if file still has the deprecated "logos" category
    if grep -q 'category: "logos"' "$file"; then
      # Check if it's likely a national team logo
      if grep -q -i 'national team\|équipe nationale\|national logo\|selection\|albania\|algeria\|australia\|austria\|belgium\|brazil\|cameroon\|canada\|chile\|colombia\|croatia\|denmark\|ecuador\|england\|france\|germany\|ghana\|iran\|italy\|japan\|korea\|morocco\|netherlands\|nigeria\|norway\|poland\|portugal\|qatar\|russia\|saudi arabia\|senegal\|serbia\|spain\|sweden\|switzerland\|tunisia\|turkey\|uruguay\|usa\|wales\|équipe de france' "$file"; then
        sed -i 's/category: "logos"/category: "national-logos"/g' "$file"
        sed -i 's/subCategory: ".*"/subCategory: "national-logos"/g' "$file"
        echo "Updated $file to national-logos"
        continue
      fi
      
      # Check if it's likely a competition logo
      if grep -q -i 'champions league\|europa league\|coupe\|trophy\|competition\|championnat\|league\|copa\|bundesliga\|primera\|serie\|eredivisie\|premier league\|ligue\|ballon d.or\|world cup\|euro\|can\|copa\|nations league' "$file"; then
        sed -i 's/category: "logos"/category: "competition-logos"/g' "$file"
        sed -i 's/subCategory: ".*"/subCategory: "competition-logos"/g' "$file"
        echo "Updated $file to competition-logos"
        continue
      fi
      
      # All other logos are assumed to be club logos
      sed -i 's/category: "logos"/category: "club-logos"/g' "$file"
      
      # Also update subCategory if it exists and is "logos"
      if grep -q 'subCategory: "logos"' "$file"; then
        sed -i 's/subCategory: "logos"/subCategory: "club-logos"/g' "$file"
      fi
      
      echo "Updated $file to club-logos"
    fi
    
    # Fix cases where category is correct but subCategory is still "logos"
    if ! grep -q 'category: "logos"' "$file" && grep -q 'subCategory: "logos"' "$file"; then
      # Get the category
      category=$(grep -o 'category: "[^"]*"' "$file" | sed 's/category: "\([^"]*\)"/\1/')
      sed -i "s/subCategory: \"logos\"/subCategory: \"$category\"/g" "$file"
      echo "Fixed subCategory in $file to match category: $category"
    fi
    
    # Fix cases where category is "logos" but already has a non-logos subCategory
    if grep -q 'category: "logos"' "$file" && grep -q 'subCategory: "[^"]*"' "$file" && ! grep -q 'subCategory: "logos"' "$file"; then
      # Get the subCategory
      subCategory=$(grep -o 'subCategory: "[^"]*"' "$file" | sed 's/subCategory: "\([^"]*\)"/\1/')
      
      if [[ $subCategory == "french-clubs" || $subCategory == "english-clubs" || $subCategory == "spanish-clubs" || $subCategory == "italian-clubs" || $subCategory == "german-clubs" || $subCategory == "non-european-clubs" ]]; then
        sed -i 's/category: "logos"/category: "club-logos"/g' "$file"
        echo "Updated $file category to club-logos based on subCategory: $subCategory"
      fi
    fi
  done
}

# Fix specific files that might need special attention
fix_specific_files() {
  echo "Fixing specific files..."
  
  # Fix heracles-almelo-logo.ts and fortuna-sittard-logo.ts - both have "logos" category
  if [ -f src/data/blog/logos/heracles-almelo-logo.ts ]; then
    sed -i 's/category: .logos./category: "club-logos"/g' src/data/blog/logos/heracles-almelo-logo.ts
    echo "Fixed heracles-almelo-logo.ts"
  fi
  
  if [ -f src/data/blog/logos/fortuna-sittard-logo.ts ]; then
    sed -i 's/category: .logos./category: "club-logos"/g' src/data/blog/logos/fortuna-sittard-logo.ts
    echo "Fixed fortuna-sittard-logo.ts"
  fi
  
  # Check for gaziantep-fk-logo.ts
  if [ -f src/data/blog/logos/gaziantep-fk-logo.ts ]; then
    sed -i 's/category: .logos./category: "club-logos"/g' src/data/blog/logos/gaziantep-fk-logo.ts
    echo "Fixed gaziantep-fk-logo.ts"
  fi
  
  # Check for moreirense-logo.ts
  if [ -f src/data/blog/logos/moreirense-logo.ts ]; then
    sed -i 's/category: .logos./category: "club-logos"/g' src/data/blog/logos/moreirense-logo.ts
    echo "Fixed moreirense-logo.ts"
  fi
  
  # Fix ballon-dor-logo.ts should be in competition-logos
  if [ -f src/data/blog/logos/ballon-dor-logo.ts ]; then
    sed -i 's/category: .logos./category: "competition-logos"/g' src/data/blog/logos/ballon-dor-logo.ts
    sed -i 's/subCategory: .*/subCategory: "competition-logos"/g' src/data/blog/logos/ballon-dor-logo.ts
    echo "Fixed ballon-dor-logo.ts to competition-logos"
  fi
  
  # Add the ballon-dor-logo.ts to the competitions.ts group
  if [ -f src/data/blog/logos/groups/competitions.ts ]; then
    # Check if it's not already there
    if ! grep -q "ballonDorLogoPost" src/data/blog/logos/groups/competitions.ts; then
      sed -i '/import { tacaDePortugalLogoPost } from/a import { ballonDorLogoPost } from '\''../ballon-dor-logo'\'';\n' src/data/blog/logos/groups/competitions.ts
      sed -i '/  tacaDePortugalLogoPost/a \ \ ballonDorLogoPost' src/data/blog/logos/groups/competitions.ts
      echo "Added ballon-dor-logo to competitions.ts group"
    fi
  fi
}

# Execute the functions
update_remaining_logo_files
fix_specific_files

echo "Category update complete! All deprecated 'logos' categories have been updated."
