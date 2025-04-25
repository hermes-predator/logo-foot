
#!/bin/bash

# Find and update competition-related logo files
find src/data/blog/logos -type f -name "*.ts" | while read file; do
  # Update competition-related files to use the new category
  if grep -q 'category: "logos"' "$file" && (grep -q "champions league" "$file" || grep -q "europa league" "$file" || grep -q "coupe" "$file" || grep -q "trophy" "$file" || grep -q "competition" "$file" || grep -q "championnat" "$file" || grep -q "league" "$file" || grep -q "copa" "$file" || grep -q "bundesliga" "$file" || grep -q "primera" "$file" || grep -q "serie" "$file" || grep -q "eredivisie" "$file" || grep -q "premier league" "$file" || grep -q "ligue" "$file"); then
    sed -i 's/category: "logos"/category: "competition-logos"/g' "$file"
    sed -i 's/subCategory: ".*"/subCategory: "competition-logos"/g' "$file"
    echo "Updated $file to competition-logos"
  fi
done

echo "Competition logos category update complete!"
