import { isValidDate } from '../main.js';

describe('isValidDate()', () => {
  it('should return false on invalid dates', () => {
    const invalidDate = '1111-111-11-1';
    const result = isValidDate(invalidDate);
    expect(result).toBe(false);
  });
});
