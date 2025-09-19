import { urlHasValidHostname, urlHasValidProtocol } from './url-helpers.js';

export function isValidURL(url: string): boolean {
  return urlHasValidProtocol(url) && urlHasValidHostname(url);
}
