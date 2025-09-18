/**
 * Checks if the password string contains at least one upper case letter.
 *
 * @param {string} password - Password string.
 * @returns {boolean} - True if string contains an upper case letter, false if not.
 */
export function containsUppercaseLetter(password: string): boolean {
  const UPPER_CASE_REGEX = /[A-Z]/;
  const hasUppercaseLetter = UPPER_CASE_REGEX.test(password);

  return hasUppercaseLetter;
}

/**
 * Checks if the password string contains at least one lower case letter.
 *
 * @param {string} password - Password string.
 * @returns {boolean} - True if string contains an lower case letter, false if not.
 */
export function containsLowerCaseLetter(password: string): boolean {
  const LOWER_CASE_REGEX = /[a-z]/;
  const hasLowerCaseLetter = LOWER_CASE_REGEX.test(password);

  return hasLowerCaseLetter;
}

/**
 * Checks if the password string contains at least one special character.
 *
 * @param {string} password - Password string.
 * @returns {boolean} - True if it contains a special character, false if not.
 */
export function containsSpecialCharacter(password: string): boolean {
  const SPECIAL_CHARACTER_REGEX = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  const hasSpecialCharacter = SPECIAL_CHARACTER_REGEX.test(password);

  return hasSpecialCharacter;
}

/**
 * Checks if the password string is long enough.
 *
 * @param {string} password - Password string.
 * @returns {boolean} - True if password string is long enough, false if not.
 */
export function hasValidLength(password: string): boolean {
  return password.length >= 8;
}

/**
 * Checks if the password string is a string type.
 *
 * @param {string} password - Password string.
 * @returns {boolean} - True if password string is a string, false if not.
 */
export function isString(password: string): boolean {
  return typeof password === 'string';
}
