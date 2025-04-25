
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory containing logo files
const logosDir = path.join(__dirname, '../src/data/blog/logos');

// Function to determine the appropriate category
function determineCategory(content, filePath) {
  const fileName = path.basename(filePath);
  
  // National teams - check for national identifiers
  if (
    content.includes('équipe nationale') || 
    content.includes('national team') || 
    content.includes('sélection') || 
    content.includes('drapeau national') || 
    content.includes('seleccion') || 
    /\b(russia|spain|poland|france|germany|austria|australia|argentina|brazil|england|italy|morocco|senegal|tunisia|cameroon|algeria)\b/i.test(fileName) ||
    fileName.includes('flag')
  ) {
    return 'national-logos';
  }
  
  // Competition logos
  if (
    content.includes('champion league') || 
    content.includes('europa league') || 
    content.includes('coupe') || 
    content.includes('cup') || 
    content.includes('championnat') || 
    content.includes('league') || 
    content.includes('trophy') || 
    content.includes('trophée') || 
    content.includes('ballon d\'or') || 
    content.includes('competition') || 
    content.includes('copa') || 
    content.includes('bundesliga') || 
    content.includes('ligue') || 
    content.includes('primera') || 
    content.includes('serie') || 
    content.includes('uefa') || 
    content.includes('mundial') || 
    content.includes('championship') || 
    content.includes('world cup') || 
    content.includes('premier league')
  ) {
    return 'competition-logos';
  }
  
  // By default, consider it a club logo
  return 'club-logos';
}

// Function to update a file's category
function updateFileCategory(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip files that don't have the old category
    if (!content.includes('category: "logos"')) {
      return;
    }
    
    const newCategory = determineCategory(content, filePath);
    
    // Replace the category
    const updatedContent = content.replace(/category: *"logos"/g, `category: "${newCategory}"`);
    
    // Update subCategory if it exists and matches the old category
    const finalContent = updatedContent.replace(/subCategory: *"logos"/g, `subCategory: "${newCategory}"`);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, finalContent);
    console.log(`Updated ${path.basename(filePath)} to ${newCategory}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all .ts files in the logos directory
function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      // Skip the groups directory as needed
      if (item !== 'groups') {
        processDirectory(itemPath);
      }
    } else if (item.endsWith('.ts')) {
      updateFileCategory(itemPath);
    }
  }
}

// Start processing
console.log("Starting category fix for all logo files...");
processDirectory(logosDir);
console.log("Category fix completed!");
