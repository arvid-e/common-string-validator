import {
  containsLowerCaseLetter,
  containsSpecialCharacter,
  containsUppercaseLetter,
  hasValidLength,
  isString,
} from './password-helpers.js';

/**
 * Validates a password string making sure it is a strong enough password.
 *
 * @param {string} password - Password string to validate.
 * @returns {boolean} - True if valid password string, false if invalid.
 */
export function isValidPassword(password: string): boolean {
  return (
    isString(password) &&
    containsLowerCaseLetter(password) &&
    containsUppercaseLetter(password) &&
    containsSpecialCharacter(password) &&
    hasValidLength(password)
  );
}
