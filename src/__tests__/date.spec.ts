import { DateValidator } from '../main.js';

const dateValidator = new DateValidator();

describe('isValidDate()', () => {
  it('should return false on invalid date format', () => {
    const invalidDate = '1111-111-11-1';
    const result = dateValidator.isValidDate(invalidDate);
    expect(result).toBe(false);
  });
});

describe('isValidISODate()', () => {
  it('should return true on valid ISO standard date format', () => {
    const shortDate = '2024-11-02';
    const result = dateValidator.isValidDate(shortDate);
    expect(result).toBe(true);
  });

  it('should return false on invalid day input', () => {
    const invalidDate = '2024-11-99';
    const result = dateValidator.isValidDate(invalidDate);
    expect(result).toBe(false);
  });

  it('should return false on invalid month input', () => {
    const invalidDate = '2024-99-02';
    const result = dateValidator.isValidDate(invalidDate);
    expect(result).toBe(false);
  });

  it('should return false on invalid year input', () => {
    const invalidDate = '0-01-02';
    const result = dateValidator.isValidDate(invalidDate);
    expect(result).toBe(false);
  });
});

describe('isValidShortDate()', () => {
  it('should return true on valid short date format', () => {
    const shortDate = '02/11/2024';
    const result = dateValidator.isValidDate(shortDate);
    expect(result).toBe(true);
  });

  it('should return false on invalid day', () => {
    const invalidDate = '99/11/2020';
    const result = dateValidator.isValidDate(invalidDate);
    expect(result).toBe(false);
  });

  it('should return false on invalid month', () => {
    const invalidDate = '02/99/2020';
    const result = dateValidator.isValidDate(invalidDate);
    expect(result).toBe(false);
  });
});

describe('isValidLongDate()', () => {
  it('should return true on valid long date format', () => {
    const longDate = 'January 12, 2022';
    const result = dateValidator.isValidDate(longDate);
    expect(result).toBe(true);
  });

  it('should return false on invalid long date format', () => {
    const longDate = 'Janry 12, 2022';
    const result = dateValidator.isValidDate(longDate);
    expect(result).toBe(false);
  });

  it('should return false on no comma in long date format', () => {
    const longDate = 'January 12 2022';
    const result = dateValidator.isValidDate(longDate);
    expect(result).toBe(false);
  });
});
