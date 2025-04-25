
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
    if grep -q "logo club" "$file"; then
        update_category "$file" "club-logos"
    elif grep -q "national logo\|équipe nationale" "$file"; then
        update_category "$file" "national-logos"
    elif grep -q "competition logo\|trophy" "$file"; then
        update_category "$file" "competition-logos"
    else
        # Par défaut, utilise club-logos
        update_category "$file" "club-logos"
    fi
done

echo "Mise à jour des catégories de logos terminée."
