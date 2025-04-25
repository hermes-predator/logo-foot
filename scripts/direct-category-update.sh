
#!/bin/bash

echo "Starting direct category update for all logo files..."

# Directory for logo files
LOGOS_DIR="src/data/blog/logos"

# Update all files with "logos" category to "club-logos" by default
find $LOGOS_DIR -name "*.ts" -exec sed -i 's/category: *"logos"/category: "club-logos"/g' {} \;

# National teams list
NATIONAL_TEAMS="albania|algeria|australia|austria|belgium|brazil|england|france|germany|italy"

# For country files, update to national-logos
find $LOGOS_DIR -type f -name "*-logo.ts" | grep -E "(${NATIONAL_TEAMS})" | while read file; do
    sed -i 's/category: *"[^"]*"/category: "national-logos"/g' "$file"
    echo "Updated $(basename "$file") to national-logos"
done

# For the ballon d'or file, update to competition-logos
if [ -f "$LOGOS_DIR/ballon-dor-logo.ts" ]; then
    sed -i 's/category: *"[^"]*"/category: "competition-logos"/g' "$LOGOS_DIR/ballon-dor-logo.ts"
    echo "Updated ballon-dor-logo.ts to competition-logos"
fi

echo "Direct category update completed!"
