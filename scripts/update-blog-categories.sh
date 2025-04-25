
#!/bin/bash

echo "Starting category update for blog logo files..."

# Directory for logo files
LOGOS_DIR="src/data/blog/logos"

# Counters for tracking progress
updated_files=0
national_count=0
competition_count=0
club_count=0

# Function to categorize and update a file
update_category() {
    local file=$1
    local content=$(cat "$file")
    
    # Default to club-logos unless other criteria are met
    local new_category="club-logos"
    
    # Check for national team related keywords
    if grep -q -i "équipe nationale\|national logo\|national team\|équipes nationales\|sélection nationale\|albania\|algeria\|australia\|austria\|belgium\|brazil\|country\|england\|france\|germany\|italy\|nation" "$file"; then
        new_category="national-logos"
        national_count=$((national_count+1))
    # Check for competition related keywords
    elif grep -q -i "competition logo\|trophy\|coupe\|champions league\|europa league\|world cup\|ballon d'or\|ligue des champions\|euro\|mondial\|uefa" "$file"; then
        new_category="competition-logos"
        competition_count=$((competition_count+1))
    else
        club_count=$((club_count+1))
    fi

    # Update the category directly with sed
    sed -i "s/category: *\"logos\"/category: \"$new_category\"/g" "$file"
    echo "Updated $file to use $new_category"
    updated_files=$((updated_files+1))
}

# Process all .ts files in the logos directory
for file in "$LOGOS_DIR"/*.ts; do
    if grep -q "category: *\"logos\"" "$file"; then
        update_category "$file"
    fi
done

# Special cases (make sure these files are correctly categorized)
if grep -q "category: *\"logos\"" "$LOGOS_DIR/ballon-dor-logo.ts" 2>/dev/null; then
    sed -i "s/category: *\"logos\"/category: \"competition-logos\"/g" "$LOGOS_DIR/ballon-dor-logo.ts"
    echo "Fixed ballon-dor-logo.ts to use competition-logos"
    competition_count=$((competition_count+1))
    updated_files=$((updated_files+1))
fi

# Fix countries
for country in albania algeria australia austria belgium brazil england france germany italy; do
    if grep -q "category: *\"logos\"" "$LOGOS_DIR/$country-logo.ts" 2>/dev/null; then
        sed -i "s/category: *\"logos\"/category: \"national-logos\"/g" "$LOGOS_DIR/$country-logo.ts"
        echo "Fixed $country-logo.ts to use national-logos"
        national_count=$((national_count+1))
        updated_files=$((updated_files+1))
    fi
done

echo "-------------------------------------"
echo "Category update completed!"
echo "Files updated: $updated_files"
echo "  - National logos: $national_count"
echo "  - Competition logos: $competition_count"
echo "  - Club logos: $club_count"
echo "-------------------------------------"
