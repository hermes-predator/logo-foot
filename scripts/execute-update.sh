
#!/bin/bash

# Déterminer le répertoire du script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Rendre le script exécutable
chmod +x "$SCRIPT_DIR/update-logo-categories.sh"
echo "Script update-logo-categories.sh rendu exécutable."

# Exécuter le script
echo "Lancement de la mise à jour des catégories de logos..."
"$SCRIPT_DIR/update-logo-categories.sh"

echo "Opération terminée !"
