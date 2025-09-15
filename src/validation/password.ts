/**
 * Validates a password string making sure it is a strong enough password.
 *
 * @param {string} password - Password string to validate.
 * @returns {boolean} - True if valid password string, false if invalid.
 */
export function isValidPassword(password: string): boolean {
  return (
    containsLowerCaseLetter(password) &&
    containsUppercaseLetter(password) &&
    containsSpecialCharacter(password)
  );
}

/**
 * Checks if the password string contains at least one upper case letter.
 *
 * @param {string} password - Password string.
 * @returns {boolean} - True if string contains an upper case letter, false if not.
 */
function containsUppercaseLetter(password: string): boolean {
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
function containsLowerCaseLetter(password: string): boolean {
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
function containsSpecialCharacter(password: string): boolean {
  const SPECIAL_CHARACTER_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const hasSpecialCharacter = SPECIAL_CHARACTER_REGEX.test(password);

  return hasSpecialCharacter;
}
