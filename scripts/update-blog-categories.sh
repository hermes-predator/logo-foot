
#!/bin/bash

echo "Starting category update for blog logo files..."

# Fonction pour mettre à jour la catégorie d'un fichier
update_category() {
    local file_path="$1"
    local new_category="$2"
    
    # Utilise sed pour remplacer la ligne de catégorie
    sed -i "s/category: *\"logos\"/category: \"$new_category\"/g" "$file_path"
    echo "Updated $file_path to use $new_category"
}

# Répertoire des logos
LOGOS_DIR="src/data/blog/logos"

# Compteurs pour le suivi
updated_files=0
national_count=0
competition_count=0
club_count=0

# Parcourt tous les fichiers de logos
for file in "$LOGOS_DIR"/*.ts; do
    # Vérifie si le fichier contient la catégorie "logos"
    if grep -q "category: *\"logos\"" "$file"; then
        # Vérifie si le fichier contient des mots-clés spécifiques pour les équipes nationales
        if grep -q -i "équipe nationale\|national logo\|national team\|équipes nationales\|sélection nationale\|albania\|algeria\|australia\|austria\|belgium\|brazil\|country\|england\|france\|germany\|italy\|nation" "$file"; then
            update_category "$file" "national-logos"
            national_count=$((national_count+1))
        # Vérifie si le fichier contient des mots-clés spécifiques pour les compétitions
        elif grep -q -i "competition logo\|trophy\|coupe\|champions league\|europa league\|world cup\|ballon d'or\|ligue des champions\|euro\|mondial\|uefa" "$file"; then
            update_category "$file" "competition-logos"
            competition_count=$((competition_count+1))
        else
            # Par défaut, utilise club-logos pour tous les autres fichiers
            update_category "$file" "club-logos"
            club_count=$((club_count+1))
        fi
        
        updated_files=$((updated_files+1))
    fi
    
    # Correction spécifique pour le fichier ballon-dor-logo.ts
    if [[ "$file" == *"ballon-dor-logo.ts"* ]] && grep -q "category: *\"" "$file"; then
        update_category "$file" "competition-logos"
    fi
    
    # Correction spécifique pour wolfsberger-ac-logo.ts qui peut être manquée
    if [[ "$file" == *"wolfsberger-ac-logo.ts"* ]] && grep -q "category: *\"logos\"" "$file"; then
        update_category "$file" "club-logos"
    fi
done

echo "-------------------------------------"
echo "Mise à jour des catégories terminée !"
echo "Fichiers traités : $updated_files"
echo "  - National logos : $national_count"
echo "  - Competition logos : $competition_count"
echo "  - Club logos : $club_count"
echo "-------------------------------------"
