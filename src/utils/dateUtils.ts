
import { format as formatDate } from 'date-fns';

/**
 * Formats a date into the French format DD MMMM YYYY
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return formatDate(date, 'dd MMMM yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};
