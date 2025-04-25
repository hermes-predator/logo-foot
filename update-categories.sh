
#!/bin/bash

# Function to update club logo files
update_club_logo_files() {
  echo "Updating club logo files..."
  find src/data/blog/logos -type f -name "*.ts" | while read file; do
    # Skip files we've already updated manually
    if [[ $file == *"asian-clubs.ts" || $file == *"bandirmaspor-logo.ts" || $file == *"belgian-clubs.ts" || $file == *"brazilian-clubs.ts" || $file == *"french-clubs.ts" || $file == *"south-american-clubs.ts" ]]; then
      continue
    fi
    
    # Skip national team logo files that are handled separately
    if [[ $file == *"albania-logo.ts" || $file == *"algeria-logo.ts" || $file == *"switzerland-logo.ts" || $file == *"dinamo-tbilisi-logo.ts" ]]; then
      continue
    fi
    
    # Update category from "logos" to "club-logos"
    if grep -q 'category: .logos.' $file; then
      sed -i 's/category: "logos"/category: "club-logos"/g' $file
      echo "Updated $file"
    fi
  done
}

# Function to update national team logo files
update_national_logo_files() {
  echo "Updating national team logo files..."
  # Add specific national team logo files here
  files=(
    "src/data/blog/logos/albania-logo.ts"
    "src/data/blog/logos/algeria-logo.ts"
    "src/data/blog/logos/switzerland-logo.ts"
    "src/data/blog/logos/dinamo-tbilisi-logo.ts"
  )
  
  for file in "${files[@]}"; do
    if [ -f "$file" ]; then
      # Update category from "logos" to "national-logos"
      if grep -q 'category: .logos.' $file; then
        sed -i 's/category: "logos"/category: "national-logos"/g' $file
        echo "Updated $file"
      fi
    fi
  done
}

# Function to update analysis files
update_analysis_files() {
  echo "Updating analysis files..."
  # Add remaining analysis files that we haven't updated manually
  files=(
    "src/data/blog/analysis/premier-league.ts"
    "src/data/blog/analysis/serie-a.ts"
  )
  
  for file in "${files[@]}"; do
    if [ -f "$file" ]; then
      # Update category from "logos" to "club-logos"
      if grep -q 'category: .logos.' $file; then
        sed -i 's/category: "logos"/category: "club-logos"/g' $file
        echo "Updated $file"
      fi
    fi
  done
}

# Execute the functions
update_club_logo_files
update_national_logo_files
update_analysis_files

echo "Category update complete!"
