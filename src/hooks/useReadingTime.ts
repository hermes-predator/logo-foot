
/**
 * A hook to calculate reading time for a text content
 * @param content The text content to calculate reading time for
 * @returns The estimated reading time in minutes
 */
export function useReadingTime(content: string) {
  if (!content) return 1; // Default to 1 minute if no content provided
  
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return minutes;
}
