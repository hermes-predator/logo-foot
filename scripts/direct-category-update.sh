
#!/bin/bash

echo "Starting direct category update for all logo files..."

# Directory for logo files
LOGOS_DIR="src/data/blog/logos"

# Update all files with "logos" category to "club-logos" by default
find $LOGOS_DIR -name "*.ts" -exec sed -i 's/category: *"logos"/category: "club-logos"/g' {} \;

# For country files, update to national-logos
find $LOGOS_DIR -name "*-logo.ts" | grep -E '(albania|algeria|australia|austria|belgium|brazil|england|france|germany|italy)-logo\.ts' | xargs sed -i 's/category: *"club-logos"/category: "national-logos"/g'

# For the ballon d'or file, update to competition-logos
if [ -f "$LOGOS_DIR/ballon-dor-logo.ts" ]; then
    sed -i 's/category: *"club-logos"/category: "competition-logos"/g' "$LOGOS_DIR/ballon-dor-logo.ts"
    echo "Updated ballon-dor-logo.ts to competition-logos"
fi

echo "Direct category update completed!"
