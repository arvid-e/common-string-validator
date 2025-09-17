import { isValidDate } from '../main.js';

describe('isValidDate()', () => {
  it('should return false on invalid dates', () => {
    const invalidDate = '1111-111-11-1';
    const result = isValidDate(invalidDate);
    expect(result).toBe(false);
  });

  it('should return true on valid short date format', () => {
    const shortDate = '02/11/2024';
    const result = isValidDate(shortDate);
    expect(result).toBe(true);
  });

  it('should return true on valid ISO standard date format', () => {
    const shortDate = '2024-11-02';
    const result = isValidDate(shortDate);
    expect(result).toBe(true);
  });

  it('should return true on valid long date format', () => {
    const longDate = 'January 12, 2022';
    const result = isValidDate(longDate);
    expect(result).toBe(true);
  });
});
