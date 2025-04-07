
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Extrait les sections FAQ du contenu Markdown
 * Amélioré pour détecter différents formats de FAQ
 */
export const extractFAQs = (content: string): FAQItem[] => {
  const faqSections: FAQItem[] = [];
  
  // Patterns pour détecter les sections FAQ dans différents formats
  const patterns = [
    // Format 1: Questions avec ? suivies de paragraphes (le plus courant)
    {
      questionRegex: /#{2,3}\s+(.*\?)\s*\n/g,
      answerExtractor: (content: string, questionEndIndex: number): { answer: string, endIndex: number } => {
        // Cherche jusqu'au prochain titre ou jusqu'à deux sauts de ligne consécutifs
        const nextHeaderIndex = content.indexOf('#', questionEndIndex);
        const doubleNewlineIndex = content.indexOf('\n\n', questionEndIndex);
        
        let endIndex = content.length;
        if (nextHeaderIndex > -1) endIndex = Math.min(endIndex, nextHeaderIndex);
        if (doubleNewlineIndex > -1) endIndex = Math.min(endIndex, doubleNewlineIndex + 2);
        
        const answerText = content.substring(questionEndIndex, endIndex).trim();
        return { answer: answerText, endIndex };
      }
    },
    // Format 2: Format explicite FAQ avec Q: et R: ou Q. et R.
    {
      questionRegex: /(?:Q[:\.]\s*)(.*?)(?:\n|$)/g,
      answerExtractor: (content: string, questionEndIndex: number): { answer: string, endIndex: number } => {
        const answerStartMatch = content.substring(questionEndIndex).match(/R[:\.]\s*(.*?)(?:\n\s*Q[:\.]\s*|$)/s);
        if (answerStartMatch) {
          return { 
            answer: answerStartMatch[1].trim(), 
            endIndex: questionEndIndex + answerStartMatch[0].length 
          };
        }
        return { answer: "", endIndex: questionEndIndex };
      }
    },
    // Format 3: Liste de questions numérotées suivies de réponses
    {
      questionRegex: /\d+\.\s+(.*\?)\s*\n/g,
      answerExtractor: (content: string, questionEndIndex: number): { answer: string, endIndex: number } => {
        // Cherche jusqu'au prochain élément numéroté ou jusqu'à un saut de ligne
        const nextItemIndex = content.substring(questionEndIndex).search(/\n\d+\.\s+/);
        const endIndex = nextItemIndex > -1 
          ? questionEndIndex + nextItemIndex 
          : content.indexOf('\n\n', questionEndIndex);
        
        const answerText = content.substring(questionEndIndex, endIndex > -1 ? endIndex : content.length).trim();
        return { answer: answerText, endIndex: endIndex > -1 ? endIndex : content.length };
      }
    }
  ];
  
  // Recherche des sections FAQ avec les différents patterns
  for (const pattern of patterns) {
    let match;
    let contentCopy = content;
    
    // Utilisation de exec pour trouver tous les matchs avec leur position
    while ((match = pattern.questionRegex.exec(contentCopy)) !== null) {
      const question = match[1].trim();
      
      // Ne traiter que si cela ressemble à une vraie question
      if (question.length > 10 && (question.endsWith('?') || question.includes('?'))) {
        const questionEndIndex = match.index + match[0].length;
        const { answer, endIndex } = pattern.answerExtractor(contentCopy, questionEndIndex);
        
        // Ne l'ajouter que si la réponse a du contenu
        if (answer && answer.length > 15) {
          faqSections.push({
            question,
            answer
          });
        }
      }
    }
  }
  
  // Recherche explicite d'une section FAQ
  const faqSectionMatch = content.match(/#{2,3}\s+(?:FAQ|Questions\s+(?:fréquentes|fréquemment\s+posées)|Foire\s+aux\s+questions)\s*\n([\s\S]*?)(?=\n#{2,3}|$)/i);
  
  if (faqSectionMatch) {
    const faqContent = faqSectionMatch[1];
    const questionMatches = Array.from(faqContent.matchAll(/(?:#{3,4}|[*+-]\s+|\d+\.\s+|Q[:.])(.*?)(?:\n|$)/g));
    
    questionMatches.forEach((qMatch, index) => {
      const question = qMatch[1].trim().replace(/^[:\s]+/, '');
      
      // Déterminer où commence la prochaine question ou la fin de la section
      const nextQuestionIndex = index < questionMatches.length - 1 
        ? questionMatches[index + 1].index 
        : faqContent.length;
      
      // Extraire la réponse entre cette question et la suivante
      const answerText = faqContent
        .substring(qMatch.index + qMatch[0].length, nextQuestionIndex)
        .trim()
        .replace(/^A[:.]|^R[:.]|^Réponse[:.]/, '') // Supprimer les préfixes de réponse
        .trim();
      
      if (question && answerText && question.length > 5 && answerText.length > 15) {
        faqSections.push({
          question,
          answer: answerText
        });
      }
    });
  }
  
  return faqSections;
};
