
#!/bin/bash

# Rendre les scripts exécutables
chmod +x fix-remaining-categories.sh
chmod +x fix-all-categories.sh

# Exécuter les corrections des catégories
./fix-remaining-categories.sh
./fix-all-categories.sh

echo "Toutes les corrections ont été appliquées avec succès."
