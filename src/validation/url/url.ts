interface UrlsParts {
  protocol: string;
  domainName: string;
  path?: string;
  query?: string;
  fragment?: string;
}

export class UrlValidator {
  constructor() {}

  public isValidUrl(url: string): boolean {

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

  private hasValidHostNameLength(hostname: string): boolean {
    if (hostname.length > 255) {
      return false;
    }

    return true;
  }
}
