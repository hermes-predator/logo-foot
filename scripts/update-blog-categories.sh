
#!/bin/bash

# Fonction pour mettre à jour la catégorie d'un fichier
update_category() {
    local file_path="$1"
    local new_category="$2"
    
    # Utilise sed pour remplacer la ligne de catégorie
    sed -i "s/category: *\"logos\"/category: \"$new_category\"/g" "$file_path"
}

# Répertoire des logos
LOGOS_DIR="src/data/blog/logos"

# Parcourt tous les fichiers de logos
for file in "$LOGOS_DIR"/*.ts; do
    # Vérifie si le fichier contient des mots-clés spécifiques
    if grep -q "équipe nationale\|national logo\|national team\|équipes nationales\|sélection nationale" "$file"; then
        update_category "$file" "national-logos"
    elif grep -q "competition logo\|trophy\|coupe\|champions league\|europa league\|world cup\|ballon d'or" "$file"; then
        update_category "$file" "competition-logos"
    else
        # Par défaut, utilise club-logos pour tous les autres fichiers
        update_category "$file" "club-logos"
    fi
    
    # Correction spécifique pour le fichier ballon-dor-logo.ts
    if [[ "$file" == *"ballon-dor-logo.ts"* ]]; then
        update_category "$file" "competition-logos"
    fi
    
    # Correction spécifique pour les fichiers nationaux
    if [[ "$file" == *"-logo.ts"* ]] && grep -q -i "national\|country\|équipe\|nation\|albania\|algeria\|australia\|austria" "$file"; then
        update_category "$file" "national-logos"
    fi
done

echo "Mise à jour des catégories de logos terminée."
