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

  it('should return false on too long hostname', () => {
    const longString = 'a'.repeat(256);
    const invalidUrl = `https://${longString}.com`;
    const result = urlValidator.isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });

  it('should return false on too long port number', () => {
    const invalidUrl = 'https://mysite.more.com:9999999';
    const result = urlValidator.isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });

  it('should return true on correct port number', () => {
    const validUrl = 'https://mysite.more.com:8000';
    const result = urlValidator.isValidUrl(validUrl);
    expect(result).toBe(true);
  });

  it('should return true on correct path', () => {
    const validUrl = 'https://mysite.more.com:8000/home';
    const result = urlValidator.isValidUrl(validUrl);
    expect(result).toBe(true);
  });

  it('should return true on correct query', () => {
    const validUrl =
      'https://www.example.com/products?category=electronics&sort=price_asc';
    const result = urlValidator.isValidUrl(validUrl);
    expect(result).toBe(true);
  });

  it('should return true on correct fragment', () => {
    const validUrl = 'https://www.example.com/article#section-conclusion';
    const result = urlValidator.isValidUrl(validUrl);
    expect(result).toBe(true);
  });

  it('should return false on invalid protocol', () => {
    const invalidUrl = 'hps://mysite.more.com';
    const result = urlValidator.isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });
});
