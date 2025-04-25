
import fs from 'fs';
import path from 'path';

const logoDirectory = path.resolve(__dirname, '../src/data/blog/logos');

function updateLogoCategoriesRecursively(directory: string) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && file.endsWith('.ts')) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const updatedContent = updateLogoCategory(fileContent, file);
        
        if (updatedContent !== fileContent) {
          fs.writeFileSync(filePath, updatedContent);
          console.log(`Updated category in ${file}`);
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  });
}

function updateLogoCategory(content: string, filename: string): string {
  // Check if it's a national team logo
  const nationalTeamKeywords = [
    'national team', 'équipe nationale', 'sélection', 'drapeau national', 
    'national logo', 'national football team'
  ];

  const nationalTeamMatch = nationalTeamKeywords.some(keyword => 
    content.toLowerCase().includes(keyword)
  );

  if (nationalTeamMatch) {
    return content.replace(
      /category: *"logos"/g, 
      'category: "national-logos"'
    );
  }

  // Check if it's a competition logo
  const competitionKeywords = [
    'champions league', 'europa league', 'coupe', 'trophy', 
    'competition', 'championnat', 'league', 'copa', 
    'bundesliga', 'primera', 'serie', 'eredivisie', 
    'premier league', 'ligue', 'mondial'
  ];

  const competitionMatch = competitionKeywords.some(keyword => 
    content.toLowerCase().includes(keyword)
  );

  if (competitionMatch) {
    return content.replace(
      /category: *"logos"/g, 
      'category: "competition-logos"'
    );
  }

  // Default to club logos
  return content.replace(
    /category: *"logos"/g, 
    'category: "club-logos"'
  );
}

updateLogoCategoriesRecursively(logoDirectory);
