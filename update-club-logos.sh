
#!/bin/bash

# Find and update all logo files with 'club-logos' category
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Update category from 'logos' to 'club-logos' if it's a club logo
  if grep -q 'category: "logos"' "$file" && ! (grep -q "national team" "$file" || grep -q "Équipe nationale" "$file" || grep -q "national logo" "$file"); then
    sed -i 's/category: "logos"/category: "club-logos"/g' "$file"
    echo "Updated $file to club-logos"
  fi
done

echo "Club logos category update complete!"
