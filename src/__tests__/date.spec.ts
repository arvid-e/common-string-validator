import { isValidDate } from '../main.js';
import {
  isValidISODate,
  isValidLongDate,
  isValidShortDate,
} from '../validation/date.js';

describe('isValidDate()', () => {
  it('should return false on invalid date format', () => {
    const invalidDate = '1111-111-11-1';
    const result = isValidDate(invalidDate);
    expect(result).toBe(false);
  });
});

describe('isValidISODate()', () => {
  it('should return true on valid ISO standard date format', () => {
    const shortDate = '2024-11-02';
    const result = isValidISODate(shortDate);
    expect(result).toBe(true);
  });

  it('should return false on invalid day input', () => {
    const invalidDate = '99/11/2020';
    const result = isValidISODate(invalidDate);
    expect(result).toBe(false);
  });

  it('should return false on invalid month input', () => {
    const invalidDate = '02/99/2020';
    const result = isValidISODate(invalidDate);
    expect(result).toBe(false);
  });
});

describe('isValidShortDate()', () => {
  it('should return true on valid short date format', () => {
    const shortDate = '02/11/2024';
    const result = isValidShortDate(shortDate);
    expect(result).toBe(true);
  });

  it('should return false on invalid day', () => {
    const invalidDate = '99/11/2020';
    const result = isValidShortDate(invalidDate);
    expect(result).toBe(false);
  });

  it('should return false on invalid month', () => {
    const invalidDate = '02/99/2020';
    const result = isValidShortDate(invalidDate);
    expect(result).toBe(false);
  });
});

describe('isValidLongDate()', () => {
  it('should return true on valid long date format', () => {
    const longDate = 'January 12, 2022';
    const result = isValidLongDate(longDate);
    expect(result).toBe(true);
  });
});
