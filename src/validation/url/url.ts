export class UrlValidator {
  urlRegex: RegExp;

  constructor() {
    this.urlRegex = this.contructUrlRegex();
  }

  public isValidUrl(url: string): boolean {
    const urlIsValid = this.extractAndValidateUrl(url, this.urlRegex);

    return urlIsValid;
  }

  private contructUrlRegex(): RegExp {
    const protocolRegexStrings = ['^(?<protocol>https?:\/\/)']; // Starts with http:// or https://

    const hostnameRegexStrings = [
      '[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?', //  Hostname starts and ends with a letter or number
      '(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*', // Optional labels must be separated by a period
      '\\.[A-Za-z]{2,63}', // Ending top level domain must be 2-63 letters
    ];

    const optionalPortRegexStrings = ['(?::\d{1,5})?'];

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

  private extractAndValidateUrl(urlString: string, urlRegex: RegExp): boolean {
    const regexGroups = urlString.match(urlRegex)?.groups;

    if (!regexGroups) {
      return false;
    }

    if (!regexGroups.domainName) {
      return false;
    }

    return this.hasValidDomainNameLength(regexGroups.domainName);
  }

  private hasValidDomainNameLength(domainName: string): boolean {
    if (domainName.length > 255) {
      return false;
    }

    return true;
  }
}
