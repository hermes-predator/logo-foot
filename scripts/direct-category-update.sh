
#!/bin/bash

echo "Début de la mise à jour des catégories de logos..."

# Répertoire des logos
LOGOS_DIR="src/data/blog/logos"

# Liste des équipes nationales
NATIONAL_TEAMS="albania|algeria|australia|austria|belgium|brazil|england|france|germany|italy"

# Mettre à jour tous les fichiers avec la catégorie "logos" par défaut
find $LOGOS_DIR -name "*.ts" -exec sed -i '' 's/category: *"logos"/category: "club-logos"/g' {} \;

# Pour les fichiers de pays, mettre à jour en "national-logos"
find $LOGOS_DIR -type f -name "*-logo.ts" | grep -E "(${NATIONAL_TEAMS})" | while read file; do
    sed -i '' 's/category: *"[^"]*"/category: "national-logos"/g' "$file"
    echo "Mis à jour $(basename "$file") en national-logos"
done

# Pour le fichier Ballon d'Or, mettre à jour en "competition-logos"
if [ -f "$LOGOS_DIR/ballon-dor-logo.ts" ]; then
    sed -i '' 's/category: *"[^"]*"/category: "competition-logos"/g' "$LOGOS_DIR/ballon-dor-logo.ts"
    echo "Mis à jour ballon-dor-logo.ts en competition-logos"
fi

echo "Mise à jour des catégories de logos terminée !"
