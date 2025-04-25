
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to logos directory
const logosDir = path.join(__dirname, '../src/data/blog/logos');

// Function to update a single file's category
function updateFileCategory(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't have "logos" category or is already updated
    if (!content.includes('category: "logos"') && !content.includes("category: 'logos'")) {
      return false;
    }
    
    let updatedContent = content;
    
    // Check for national team logos
    if (content.match(/national team|équipe nationale|national logo|selection|équipe de france|albanie|algérie|allemagne|angleterre|argentine|australie|autriche|belgique|brésil|cameroun|canada|chili|colombie|croatie|danemark|équateur|espagne|états-unis|france|ghana|iran|italie|japon|maroc|pays-bas|pologne|portugal|qatar|sénégal|serbie|suisse|tunisie|turquie|uruguay|usa|pays de galles/i)) {
      updatedContent = content.replace(/category: ['"]logos['"]/, 'category: "national-logos"');
      
      // Also update subCategory if it's "logos"
      if (content.includes('subCategory: "logos"') || content.includes("subCategory: 'logos'")) {
        updatedContent = updatedContent.replace(/subCategory: ['"]logos['"]/, 'subCategory: "national-logos"');
      }
    }
    // Check for competition logos
    else if (content.match(/champions league|europa league|coupe|trophy|competition|championnat|league|copa|bundesliga|primera|serie|eredivisie|premier league|ligue|ballon d.or|world cup|euro|can|copa|nations league/i)) {
      updatedContent = content.replace(/category: ['"]logos['"]/, 'category: "competition-logos"');
      
      // Also update subCategory if it's "logos"
      if (content.includes('subCategory: "logos"') || content.includes("subCategory: 'logos'")) {
        updatedContent = updatedContent.replace(/subCategory: ['"]logos['"]/, 'subCategory: "competition-logos"');
      }
    }
    // Default case: club logos
    else {
      updatedContent = content.replace(/category: ['"]logos['"]/, 'category: "club-logos"');
      
      // Also update subCategory if it's "logos"
      if (content.includes('subCategory: "logos"') || content.includes("subCategory: 'logos'")) {
        updatedContent = updatedContent.replace(/subCategory: ['"]logos['"]/, 'subCategory: "club-logos"');
      }
    }
    
    // Write the updated content back to the file
    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error updating file ${filePath}:`, error);
    return false;
  }
}

// Function to recursively process all files in a directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let updatedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Skip the groups directory to prevent conflicts
      if (file !== 'groups') {
        updatedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.ts')) {
      if (updateFileCategory(filePath)) {
        console.log(`Updated ${filePath}`);
        updatedCount++;
      }
    }
  }
  
  return updatedCount;
}

// Main function to execute the script
function main() {
  console.log('Starting category update process...');
  const updatedCount = processDirectory(logosDir);
  console.log(`Successfully updated ${updatedCount} files.`);
}

main();
