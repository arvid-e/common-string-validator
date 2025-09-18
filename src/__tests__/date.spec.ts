import { isValidDate } from '../main.js';
import {
  getMonthNumber,
  isValidISODate,
  isValidLongDate,
  isValidShortDate,
} from '../validation/date/date-helpers.js';

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
    const invalidDate = '2024-11-99';
    const result = isValidISODate(invalidDate);
    expect(result).toBe(false);
  });

  it('should return false on invalid month input', () => {
    const invalidDate = '2024-99-02';
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

  it('should return false on invalid long date format', () => {
    const longDate = 'Janry 12, 2022';
    const result = isValidLongDate(longDate);
    expect(result).toBe(false);
  });
});

describe('getMonthNumber()', () => {
  it('should return correct month index on month string input', () => {
    const month0 = 'January';
    const result0 = getMonthNumber(month0);
    const month1 = 'February';
    const result1 = getMonthNumber(month1);
    const month11 = 'December';
    const result11 = getMonthNumber(month11);

    expect(result0).toBe(0);
    expect(result1).toBe(1);
    expect(result11).toBe(11);
  });

  it('should return undefined on invalid month string', () => {
    const invalidMonth = 'Epril';
    const result = getMonthNumber(invalidMonth);
    expect(result).toBeUndefined();
  });
});
