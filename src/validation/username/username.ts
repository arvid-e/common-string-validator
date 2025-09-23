/**
 * Class that validates a username string against a set of rules.
 */
export class UsernameValidator {
  constructor() {}

  /**
   * Validates a username against a set of rules.
   *
   * @param {string} username - Username string.
   * @returns {boolean} - True if valid username, false if not.
   */
  public isValidUsername(username: string): boolean {
    return (
      this.hasValidLength(username) &&
      this.hasAllowedCharacters(username) &&
      this.hasLetter(username) &&
      this.hasValidCharacterSequence(username)
    );
  }

  /**
   * Checks if a string only has valid characters.
   *
   * @param {string} username - Username string.
   * @returns {boolean} - True if string has only valid characters, false if not.
   */
  private hasAllowedCharacters(username: string) {
    const allowedCharactersRegex: RegExp = /[A-Za-z0-9-_]*/;

    return allowedCharactersRegex.test(username);
  }

  /**
   * Checks if a string has a letter.
   *
   * @param username - Username string.
   * @returns {boolean} - True if string has a letter, false if not.
   */
  private hasLetter(username: string): boolean {
    const letterRegex: RegExp = /[A-Za-z]/;

    return letterRegex.test(username);
  }

  /**
   * Returns true if a string has no consecutive allowed special characters.
   *
   * @param {string} username - Username string.
   * @returns {boolean} - True if string has consecutive special characters, false if not.
   */
  private hasValidCharacterSequence(username: string): boolean {
    const hasConsecutiveSpecialCharactersRegex: RegExp =
      /^(?!.*[_-]{2})[A-Za-z-_]+$/;

    return hasConsecutiveSpecialCharactersRegex.test(username);
  }

  /**
   * Validates if a username string has a valid length.
   *
   * @param {string} username - Username string.
   * @returns {boolean} - True if valid, false if not.
   */
  private hasValidLength(username: string): boolean {
    return username.length > 3 && username.length < 13;
  }
}
