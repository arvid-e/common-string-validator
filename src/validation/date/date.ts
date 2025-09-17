import {
  isValidISODate,
  isValidLongDate,
  isValidShortDate,
} from './date-helpers.js';

/**
 * Validates a date string.
 *
 * @param {string} date - Date string.
 * @returns {boolean} - True if valid format false if not.
 */
export function isValidDate(date: string): boolean {
  return (
    isValidISODate(date) || isValidShortDate(date) || isValidLongDate(date)
  );
}
