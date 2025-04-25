
#!/bin/bash

echo "Mise à jour des catégories des articles de blog..."

# Répertoire des logos
LOGOS_DIR="src/data/blog/logos"

# Compteurs
updated_files=0
club_logos=0
national_logos=0
competition_logos=0

# Fonction de mise à jour de catégorie
update_category() {
    local file=$1
    local content=$(cat "$file")
    local new_category="club-logos"

    # Règles de catégorisation
    if grep -q -E "national team|pays|équipe nationale|drapeau national" "$file"; then
        new_category="national-logos"
        national_logos=$((national_logos+1))
    elif grep -q -E "competition|trophée|coupe|championnat|tournoi|ligue des champions|mondial" "$file"; then
        new_category="competition-logos"
        competition_logos=$((competition_logos+1))
    else
        club_logos=$((club_logos+1))
    fi

    # Mise à jour du fichier
    sed -i "s/category: *\"logos\"/category: \"$new_category\"/g" "$file"
    echo "Mis à jour $file en $new_category"
    updated_files=$((updated_files+1))
}

# Traitement de tous les fichiers .ts dans le répertoire logos
for file in "$LOGOS_DIR"/*.ts; do
    if grep -q "category: *\"logos\"" "$file"; then
        update_category "$file"
    fi
done

echo "-------------------------------------"
echo "Mise à jour des catégories terminée !"
echo "Fichiers mis à jour : $updated_files"
echo "  - Logos de clubs : $club_logos"
echo "  - Logos nationaux : $national_logos"
echo "  - Logos de compétitions : $competition_logos"
echo "-------------------------------------"
