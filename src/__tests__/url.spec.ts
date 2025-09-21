import { UrlValidator } from '../main.js';

const urlValidator = new UrlValidator();

describe('isValidUrl()', () => {
  it('should return true on valid url string', () => {
    const validUrl = 'https://mysite.more.com';
    const result = urlValidator.isValidUrl(validUrl);
    expect(result).toBe(true);
  });

  it('should return false on consecutive periods in hostname', () => {
    const invalidUrl = 'https://mysite..more.com';
    const result = urlValidator.isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });

  it('should return false on too long hosname', () => {
    const longString = 'a'.repeat(256);
    const invalidUrl = `https://${longString}.com`;
    const result = urlValidator.isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });

  it('should return false on invalid port', () => {
    const invalidUrl = 'https://mysite.more.com:9999999';
    const result = urlValidator.isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });

  it('should return false on invalid protocol', () => {
    const invalidUrl = 'hps://mysite.more.com';
    const result = urlValidator.isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });
});
