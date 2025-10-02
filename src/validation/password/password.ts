/**
 * Class used to make sure a password string is not too simple.
 */
export class PasswordValidator {
  constructor() {}

  /**
   * Validates a password string making sure it is a strong enough password.
   *
   * @param {string} password - Password string to validate.
   * @returns {boolean} - True if valid password string, false if invalid.
   */
  public isValidPassword(password: string): boolean {
    return (
      this.hasValidLength(password) &&
      this.hasNumber(password) &&
      this.hasSpecialCharacter(password) &&
      this.hasUppercaseLetter(password) &&
      this.hasLowerCaseLetter(password)
    );
  }

  /**
   * Checks if the password string has at least one upper case letter.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if string has an upper case letter, false if not.
   */
  private hasUppercaseLetter(password: string): boolean {
    const upperCaseRegex = /[A-Z]/;
    const hasUppercaseLetter = upperCaseRegex.test(password);

    return hasUppercaseLetter;
  }

  /**
   * Checks if the password string has at least one lower case letter.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if string has an lower case letter, false if not.
   */
  private hasLowerCaseLetter(password: string): boolean {
    const lowerCaseRegex = /[a-z]/;
    const hasLowerCaseLetter = lowerCaseRegex.test(password);

    return hasLowerCaseLetter;
  }

  /**
   * Checks if the password string has at least one number.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if string has a number, false if not.
   */
  private hasNumber(password: string): boolean {
    const numberRegex = /[0-9]/;
    const hasNumber = numberRegex.test(password);

    return hasNumber;
  }

  /**
   * Checks if the password string has at least one special character.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if it has a special character, false if not.
   */
  private hasSpecialCharacter(password: string): boolean {
    const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    const hasSpecialCharacter = specialCharacterRegex.test(password);

    return hasSpecialCharacter;
  }

  /**
   * Checks if the password string is long enough.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if password string is long enough, false if not.
   */
  private hasValidLength(password: string): boolean {
    return password.length >= 8;
  }
}
