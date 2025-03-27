
/**
 * Helper function to extract FAQ sections from article content
 */
export const extractFAQs = (content: string) => {
  const faqs = [];
  
  // Match patterns like "**Question:** Answer" or "### Question\nAnswer"
  const boldPattern = /\*\*(.*?)\*\*\s*:\s*(.*?)(?=\n\n|\*\*|$)/gs;
  const headingPattern = /###\s+(.*?)\n(.*?)(?=\n###|\n\n##|\n\n#|$)/gs;
  
  // Extract bold-style FAQs
  let boldMatch;
  while ((boldMatch = boldPattern.exec(content)) !== null) {
    if (boldMatch[1] && boldMatch[2] && 
        (boldMatch[1].toLowerCase().includes('question') || 
         boldMatch[1].toLowerCase().includes('?') ||
         boldMatch[1].toLowerCase().includes('comment') ||
         boldMatch[1].toLowerCase().includes('pourquoi') ||
         boldMatch[1].toLowerCase().includes('quelle') ||
         boldMatch[1].toLowerCase().includes('quand') ||
         boldMatch[1].toLowerCase().includes('qui') ||
         boldMatch[1].toLowerCase().includes('où'))) {
      faqs.push({
        question: boldMatch[1].replace(/question\s*:/i, '').trim(),
        answer: boldMatch[2].trim()
      });
    }
  }
  
  // Extract heading-style FAQs
  let headingMatch;
  while ((headingMatch = headingPattern.exec(content)) !== null) {
    if (headingMatch[1] && headingMatch[2] && 
        (headingMatch[1].toLowerCase().includes('?') ||
         headingMatch[1].toLowerCase().includes('comment') ||
         headingMatch[1].toLowerCase().includes('pourquoi') ||
         headingMatch[1].toLowerCase().includes('quelle') ||
         headingMatch[1].toLowerCase().includes('quand') ||
         headingMatch[1].toLowerCase().includes('qui') ||
         headingMatch[1].toLowerCase().includes('où'))) {
      faqs.push({
        question: headingMatch[1].trim(),
        answer: headingMatch[2].trim()
      });
    }
  }
  
  return faqs;
};
