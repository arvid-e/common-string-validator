import { UrlValidator } from '../main.js';

const urlValidator = new UrlValidator();

describe('isValidUrl()', () => {
  it('should return true on valid url string', () => {
    const validUrl = 'https://mysite.more.com';
    const result = urlValidator.isValidUrl(validUrl);
    expect(result).toBe(true);
  });
});
