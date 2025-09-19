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
      this.containsNumber(password) &&
      this.containsSpecialCharacter(password) &&
      this.containsUppercaseLetter(password) &&
      this.containsLowerCaseLetter(password)
    );
  }

  /**
   * Checks if the password string contains at least one upper case letter.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if string contains an upper case letter, false if not.
   */
  private containsUppercaseLetter(password: string): boolean {
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
  private containsLowerCaseLetter(password: string): boolean {
    const LOWER_CASE_REGEX = /[a-z]/;
    const hasLowerCaseLetter = LOWER_CASE_REGEX.test(password);

    return hasLowerCaseLetter;
  }

  /**
   * Checks if the password string contains at least one number.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if string contains a number, false if not.
   */
  private containsNumber(password: string): boolean {
    const NUMBER_REGEX = /[0-9]/;
    const hasNumber = NUMBER_REGEX.test(password);

    return hasNumber;
  }

  /**
   * Checks if the password string contains at least one special character.
   *
   * @param {string} password - Password string.
   * @returns {boolean} - True if it contains a special character, false if not.
   */
  private containsSpecialCharacter(password: string): boolean {
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
  private hasValidLength(password: string): boolean {
    return password.length >= 8;
  }
}
