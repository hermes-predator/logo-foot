
#!/bin/bash

# Make the update script executable
chmod +x scripts/update-blog-categories.sh
echo "Made update-blog-categories.sh executable."

# Execute the script with proper permissions
echo "Running update-blog-categories.sh..."
bash ./scripts/update-blog-categories.sh

echo "Script execution completed!"
