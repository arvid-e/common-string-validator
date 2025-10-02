/**
 * Class used to check if a URL string is valid.
 */
export class UrlValidator {
  urlRegex: RegExp;

  constructor() {
    this.urlRegex = this.contructUrlRegex();
  }

  /**
   * Validates a URL string.
   *
   * @param {string} url - URL string to validate.
   * @returns {boolean} - True if valid, false if not.
   */
  public isValidUrl(url: string): boolean {
    const urlIsValid = this.extractAndValidateUrl(url, this.urlRegex);

    return urlIsValid;
  }

  /**
   * Constructs and returns regular expression used to validate a URL string.
   *
   * @returns {RegExp} - URL regular expression.
   */
  private contructUrlRegex(): RegExp {
    const protocolRegexStrings = ['^(?<protocol>https?:\/\/)']; // Starts with http:// or https://

    const hostnameRegexStrings = [
      '(?<hostname>', // Make group for hostname
      '[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?', //  Hostname starts and ends with a letter or number
      '(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*', // Optional labels must be separated by a period
      '\\.[A-Za-z]{2,63}', // Ending top level domain must be 2-63 letters
      ')', // Group closing parenthesis for hostname
    ];

    const optionalPortRegexStrings = ['(?::\\d{1,5})?'];

    const optionalPathRegexStrings = ['(?:\/[^?#]*)?'];

    const optionalQueryRegexStrings = ['(?:\\?[^#]*)?'];

    const optionalFragmentRegexStrings = ['(?:#.*)?$'];

    const combinedUrlRegexStrings = [
      protocolRegexStrings,
      hostnameRegexStrings,
      optionalPortRegexStrings,
      optionalPathRegexStrings,
      optionalQueryRegexStrings,
      optionalFragmentRegexStrings,
    ];

    const urlRegex: RegExp = new RegExp(
      combinedUrlRegexStrings.flat().join(''),
    );

    return urlRegex;
  }

  /**
   * Extract a URL using a regular expression which validates it.
   *
   * @param {string} urlString - URL string to validate.
   * @param {RegExp} urlRegex  - URL regular expression.
   * @returns {boolean} - True if valid, false if not.
   */
  private extractAndValidateUrl(urlString: string, urlRegex: RegExp): boolean {
    const regexGroups = urlString.match(urlRegex);

    if (!regexGroups?.groups || !regexGroups.groups.hostname) {
      return false;
    }

    return this.hasValidHostnameLength(regexGroups.groups.hostname);
  }

  /**
   * Checks if the hostname has a valid length.
   *
   * @param {string} hostname - Host name extracted from the URL string.
   * @returns {boolean} - True if valid length, false if not.
   */
  private hasValidHostnameLength(hostname: string): boolean {
    if (hostname.length > 255) {
      return false;
    }

    return true;
  }
}
