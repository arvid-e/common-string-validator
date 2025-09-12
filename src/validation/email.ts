/**
 * Validates an email strings using short, long or ISO standard format.
 *
 * @param {string} email - Email string to validate.
 * @returns {boolean} - True if valid, false if invalid.
 */
export function isValidEmail(email: string) {
  const EMAIL_VALIDATION_PARTS_REGEX = [
    '^', // Start of the string
    '[A-Za-z0-9]', // Local name must start with a letter or number
    '(?:[A-Za-z0-9._+-]*[A-Za-z0-9])?', // Followed by a mix of allowed characters
    '@', // Separator
    '[A-Za-z0-9]', // Domain name first label must start with a letter or number
    '(?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?', // Up to 63 characters long and end with letter or number
    '(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*', // Multiple labels must be separated by a period
    '\\.[A-Za-z]{2,63}', // Ending top level domain must be 2-63 letters
    '$', // End of the regex string
  ];

  const EMAIL_VALIDATION_REGEX: RegExp = new RegExp(
    EMAIL_VALIDATION_PARTS_REGEX.join(''),
  );
  const emailIsValid = EMAIL_VALIDATION_REGEX.test(email);

  return emailIsValid;
}
