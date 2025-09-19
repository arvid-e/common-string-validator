export class EmailValidator {
  emailRegex: RegExp;

  constructor() {
    this.emailRegex = this.constructEmailRegex();
  }

  /**
   * Validates an email strings using short, long or ISO standard format.
   *
   * @param {string} email - Email string to validate.
   * @returns {boolean} - True if valid, false if invalid.
   */
  public isValidEmail(email: string): boolean {
    const emailIsValid = this.emailRegex.test(email);

    return emailIsValid;
  }

  private constructEmailRegex(): RegExp {
    const localNameRegexStrings = [
      '^', // Start of the string
      '(?!.*[._+-]{2})', // No consecutive special characters
      '[A-Za-z0-9]', // Must start with a letter or number
      '(?:[A-Za-z0-9._+-]*[A-Za-z0-9])?', // Followed by a mix of allowed characters
      '@', // Separator
    ];
    const domainNameRegexStrings = [
      '[A-Za-z0-9]', // Must start with a letter or number
      '(?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?', // Up to 63 characters long and end with letter or number
      '(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*', // Multiple labels must be separated by a period
    ];
    const topLevelDomainNameStrings = [
      '\\.[A-Za-z]{2,63}', // Ending top level domain must be 2-63 letters
      '$', // End of the regex string
    ];

    const combinedEmailRegexStrings = [
      localNameRegexStrings,
      domainNameRegexStrings,
      topLevelDomainNameStrings,
    ];

    const emailRegex: RegExp = new RegExp(
      combinedEmailRegexStrings.flat().join(''),
    );

    return emailRegex;
  }
}
