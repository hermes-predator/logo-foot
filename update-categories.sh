
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
      if grep -q -i 'national team\|équipe nationale\|national logo\|selection' "$file"; then
        sed -i 's/category: "logos"/category: "national-logos"/g' "$file"
        sed -i 's/subCategory: ".*"/subCategory: "national-logos"/g' "$file"
        echo "Updated $file to national-logos"
        continue
      fi
      
      # Check if it's likely a competition logo
      if grep -q -i 'champions league\|europa league\|coupe\|trophy\|competition\|championnat\|league\|copa\|bundesliga\|primera\|serie\|eredivisie\|premier league\|ligue' "$file"; then
        sed -i 's/category: "logos"/category: "competition-logos"/g' "$file"
        sed -i 's/subCategory: ".*"/subCategory: "competition-logos"/g' "$file"
        echo "Updated $file to competition-logos"
        continue
      fi
      
      # All other logos are assumed to be club logos
      sed -i 's/category: "logos"/category: "club-logos"/g' "$file"
      echo "Updated $file to club-logos"
    fi
  done
}

# Execute the function
update_remaining_logo_files

echo "Category update complete! All deprecated 'logos' categories have been updated."
