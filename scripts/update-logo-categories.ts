import fs from 'fs';
import path from 'path';

const logoDirectory = path.resolve(__dirname, '../src/data/blog/logos');

function updateLogoCategoriesRecursively(directory: string) {
  const files = fs.readdirSync(directory);
  let updatedCount = 0;

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && file.endsWith('.ts')) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const updatedContent = updateLogoCategory(fileContent, file);
        
        if (updatedContent !== fileContent) {
          fs.writeFileSync(filePath, updatedContent);
          updatedCount++;
          console.log(`Updated category in ${file}`);
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  });

  console.log(`\nUpdate completed: ${updatedCount} files were updated.`);
}

function updateLogoCategory(content: string, filename: string): string {
  // First fix any duplicate properties if they exist
  content = fixDuplicateProperties(content);
  
  // Check if it's already using one of the valid categories
  if (content.includes('category: "club-logos"') || 
      content.includes('category: "national-logos"') || 
      content.includes('category: "competition-logos"')) {
    return content;
  }
  
  // Check if it's a national team logo
  const nationalTeamKeywords = [
    'national team', 'équipe nationale', 'sélection', 'drapeau national', 
    'national logo', 'national football team', 'diables rouges', 
    'weltmeister', 'bulgarie', 'burkina faso', 'cameroun', 'can', 'sélection'
  ];

  const nationalTeamMatch = nationalTeamKeywords.some(keyword => 
    content.toLowerCase().includes(keyword)
  );

  if (nationalTeamMatch) {
    return content.replace(
      /category: *["']logos["']/g, 
      'category: "national-logos"'
    );
  }

  // Check if it's a competition logo
  const competitionKeywords = [
    'champions league', 'europa league', 'coupe', 'trophy', 
    'competition', 'championnat', 'league', 'copa', 
    'bundesliga', 'primera', 'serie', 'eredivisie', 
    'premier league', 'ligue', 'mondial', 'brand'
  ];

  const competitionMatch = competitionKeywords.some(keyword => 
    content.toLowerCase().includes(keyword)
  );

  if (competitionMatch) {
    return content.replace(
      /category: *["']logos["']/g, 
      'category: "competition-logos"'
    );
  }

  // Default to club logos
  return content.replace(
    /category: *["']logos["']/g, 
    'category: "club-logos"'
  );
}

// Function to fix duplicate property issues
function fixDuplicateProperties(content: string): string {
  // Check if there are multiple category properties
  const categoryMatches = content.match(/category: *["'][a-z-]+["']/g);
  
  if (categoryMatches && categoryMatches.length > 1) {
    // Keep only the last instance of the category property
    const lastCategory = categoryMatches[categoryMatches.length - 1];
    
    // Create a new content with only the last category
    let newContent = '';
    let foundFirst = false;
    
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.trim().startsWith('category:')) {
        if (!foundFirst) {
          newContent += line + '\n';
          foundFirst = true;
        }
        // Skip other category lines
      } else {
        newContent += line + '\n';
      }
    }
    
    return newContent;
  }
  
  return content;
}

// Execute the function
updateLogoCategoriesRecursively(logoDirectory);
