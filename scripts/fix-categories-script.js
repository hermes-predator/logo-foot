
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

const logoDir = path.join(__dirname, '../src/data/blog/logos');

async function scanDirectory(dir) {
  const entries = await readDir(dir);
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stats = await stat(fullPath);
    
    if (stats.isDirectory()) {
      // Skip the groups directory
      if (entry !== 'groups') {
        await scanDirectory(fullPath);
      }
    } else if (entry.endsWith('.ts') && entry !== 'index.ts') {
      await fixCategoryInFile(fullPath);
    }
  }
}

async function fixCategoryInFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf8');
    
    // Skip files that already have valid categories
    if (
      content.includes('category: "club-logos"') || 
      content.includes('category: "national-logos"') || 
      content.includes('category: "competition-logos"')
    ) {
      return;
    }
    
    // Fix duplicate category property first
    const categoryMatches = content.match(/category: *["'][a-z-]+["']/g);
    if (categoryMatches && categoryMatches.length > 1) {
      console.log(`Fixing duplicate category in ${filePath}`);
      // Remove all but the first category
      const lines = content.split('\n');
      const newLines = [];
      let foundFirst = false;
      
      for (const line of lines) {
        if (line.includes('category:')) {
          if (!foundFirst) {
            newLines.push(line.replace(/category: *["'][a-z-]+["']/, 'category: "club-logos"'));
            foundFirst = true;
          }
          // Skip other category lines
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
    }
    
    // Determine the appropriate category based on the content
    let newCategory = "club-logos"; // Default
    
    // Check for national team content
    if (
      /national team|équipe nationale|drapeau national|équipe d'|flag|sélection|diables rouges|weltmeister|bulgarie|burkina faso|cameroun|can/i.test(content)
    ) {
      newCategory = "national-logos";
    } 
    // Check for competition content
    else if (
      /competition|coupe|cup|league|trophy|champion|ligue|copa|bundesliga|primera|serie|eredivisie|premier league|ligue|mundial/i.test(content)
    ) {
      newCategory = "competition-logos";
    }
    
    // Replace any "logos" category with the appropriate one
    if (content.includes('category: "logos"')) {
      content = content.replace(/category: *["']logos["']/, `category: "${newCategory}"`);
      console.log(`Updated ${path.basename(filePath)} to ${newCategory}`);
      await writeFile(filePath, content, 'utf8');
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function main() {
  console.log('Starting to fix categories in logo files...');
  await scanDirectory(logoDir);
  console.log('Category fixes complete!');
}

main().catch(console.error);
