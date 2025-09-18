import {
  containsLowerCaseLetter,
  containsSpecialCharacter,
  containsUppercaseLetter,
  containsNumber,
  hasValidLength,
} from './password-helpers.js';

/**
 * Validates a password string making sure it is a strong enough password.
 *
 * @param {string} password - Password string to validate.
 * @returns {boolean} - True if valid password string, false if invalid.
 */
export function isValidPassword(password: string): boolean {
  return (
    hasValidLength(password) &&
    containsNumber(password) &&
    containsSpecialCharacter(password) &&
    containsUppercaseLetter(password) &&
    containsLowerCaseLetter(password)
  );
}
