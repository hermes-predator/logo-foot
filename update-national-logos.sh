
#!/bin/bash

# Find and update all logo files with 'logos' category to 'national-logos'
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Check if the file contains a 'logos' category and is likely a national team logo
  if grep -q 'category: "logos"' "$file" && (grep -q "national team" "$file" || grep -q "Équipe nationale" "$file" || grep -q "national logo" "$file"); then
    sed -i 's/category: "logos"/category: "national-logos"/g' "$file"
    echo "Updated $file to national-logos"
  fi
done

echo "National logos category update complete!"
