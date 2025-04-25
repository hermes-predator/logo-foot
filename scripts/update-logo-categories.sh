
#!/bin/bash

# Ce script met à jour toutes les catégories "logos" en "club-logos" dans les fichiers .ts
# Il peut être exécuté depuis n'importe quel répertoire

echo "Début de la mise à jour des catégories de logos..."

# Répertoire des logos - chemin absolu basé sur l'emplacement du script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$( dirname "$SCRIPT_DIR" )"
LOGOS_DIR="$PROJECT_DIR/src/data/blog/logos"

echo "Répertoire des logos: $LOGOS_DIR"

# Vérifier si le répertoire existe
if [ ! -d "$LOGOS_DIR" ]; then
  echo "Erreur: Le répertoire $LOGOS_DIR n'existe pas!"
  exit 1
fi

# Compter les fichiers avant la mise à jour
TOTAL_FILES=$(find "$LOGOS_DIR" -name "*.ts" | wc -l)
echo "Nombre total de fichiers à traiter: $TOTAL_FILES"

# Liste des équipes nationales
NATIONAL_TEAMS="albania|algeria|australia|austria|belgium|brazil|england|france|germany|italy"

# Mettre à jour tous les fichiers avec la catégorie "logos" par défaut
find "$LOGOS_DIR" -name "*.ts" -exec sed -i '' 's/category: *"logos"/category: "club-logos"/g' {} \; 2>/dev/null || \
find "$LOGOS_DIR" -name "*.ts" -exec sed -i 's/category: *"logos"/category: "club-logos"/g' {} \;

echo "Catégories par défaut mises à jour en 'club-logos'"

# Pour les fichiers de pays, mettre à jour en "national-logos"
find "$LOGOS_DIR" -type f -name "*-logo.ts" | grep -E "(${NATIONAL_TEAMS})" | while read file; do
    sed -i '' 's/category: *"[^"]*"/category: "national-logos"/g' "$file" 2>/dev/null || \
    sed -i 's/category: *"[^"]*"/category: "national-logos"/g' "$file"
    echo "Mis à jour $(basename "$file") en national-logos"
done

# Pour le fichier Ballon d'Or, mettre à jour en "competition-logos"
if [ -f "$LOGOS_DIR/ballon-dor-logo.ts" ]; then
    sed -i '' 's/category: *"[^"]*"/category: "competition-logos"/g' "$LOGOS_DIR/ballon-dor-logo.ts" 2>/dev/null || \
    sed -i 's/category: *"[^"]*"/category: "competition-logos"/g' "$LOGOS_DIR/ballon-dor-logo.ts"
    echo "Mis à jour ballon-dor-logo.ts en competition-logos"
fi

echo "Mise à jour des catégories de logos terminée !"
