
#!/bin/bash

# Function to update club logo files
update_club_logo_files() {
  echo "Updating club logo files..."
  find src/data/blog/logos -type f -name "*.ts" | while read file; do
    # Skip files we've already updated manually and ignore special files
    if [[ $file == *"asian-clubs.ts" || $file == *"bandirmaspor-logo.ts" || $file == *"stevenage-logo.ts" || $file == *"belgian-clubs.ts" || $file == *"brazilian-clubs.ts" || $file == *"french-clubs.ts" || $file == *"south-american-clubs.ts" || $file == *"index.ts" ]]; then
      continue
    fi
    
    # Skip national team logo files that are handled separately
    if [[ $file == *"albania-logo.ts" || $file == *"algeria-logo.ts" || $file == *"switzerland-logo.ts" || $file == *"dinamo-tbilisi-logo.ts" || $file == *"australia-logo.ts" || $file == *"austria-logo.ts" ]]; then
      sed -i 's/category: "logos"/category: "national-logos"/g' $file
      echo "Updated $file to national-logos"
      continue
    fi
    
    # Update category from "logos" to "club-logos"
    if grep -q 'category: .logos.' $file; then
      sed -i 's/category: "logos"/category: "club-logos"/g' $file
      echo "Updated $file to club-logos"
    fi
  done
}

# Function to update analysis files
update_analysis_files() {
  echo "Updating analysis files..."
  find src/data/blog/analysis -type f -name "*.ts" | while read file; do
    # Update category from "logos" to "club-logos"
    if grep -q 'category: .logos.' $file; then
      sed -i 's/category: "logos"/category: "club-logos"/g' $file
      echo "Updated $file to club-logos"
    fi
  done
}

# Execute the functions
update_club_logo_files
update_analysis_files

echo "Category update complete!"
