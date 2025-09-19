export class UrlValidator {
  constructor() {}

  public isValidUrl(url: string): boolean {
    const domainName = this.getDomainName(url);

    if (!domainName) {
      return false;
    }

    const protocolIsValid = this.hasValidProtocol(url);
    const domainNameIsValid = this.hasValidHostNameLength(domainName);

    return protocolIsValid && domainNameIsValid;
  }

  private getDomainName(url: string): string | null {
    const HOSTNAME_PARTS_REGEX = [
      '[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?', //  Hostname starts and ends with a letter or number
      '(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*', // Optional labels must be separated by a period
      '\\.[A-Za-z]{2,63}', // Ending top level domain must be 2-63 letters
    ];

    const HOSTNAME_REGEX: RegExp = new RegExp(HOSTNAME_PARTS_REGEX.join(''));

    const hostnameMatch = url.match(HOSTNAME_REGEX);

    if (!hostnameMatch) {
      return null;
    }

    const hostname = hostnameMatch[0];

    return hostname;
  }

  private hasValidProtocol(url: string): boolean {
    const PROTOCOL_REGEX: RegExp = /(?<protocol>https?:\/\/)/;
    const hasValidProtocol = PROTOCOL_REGEX.test(url);

    return hasValidProtocol;
  }

  private hasValidHostNameLength(hostname: string): boolean {
    if (hostname.length > 255) {
      return false;
    }

    return true;
  }
}
