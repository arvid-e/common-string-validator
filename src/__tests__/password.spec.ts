import { isValidPassword } from '../validation/password/password.js';
import {
  containsLowerCaseLetter,
  containsSpecialCharacter,
  containsUppercaseLetter,
  containsNumber,
  hasValidLength,
} from '../validation/password/password-helpers.js';

describe('isValidPassword()', () => {
  it('should return true on a valid password string', () => {
    const validString = '#akjMN11*';
    const result = isValidPassword(validString);
    expect(result).toBe(true);
  });

  it('should return false on incorrect string length', () => {
    const invalidString = 'password';
    const result = isValidPassword(invalidString);
    expect(result).toBe(false);
  });
});

describe('hasValidLength()', () => {
  it('should return true on correct string length', () => {
    const validString = 'abc123ABC';
    const result = hasValidLength(validString);
    expect(result).toBe(true);
  });

  it('should return false on incorrect string length', () => {
    const invalidString = 'abc';
    const result = hasValidLength(invalidString);
    expect(result).toBe(false);
  });
});

describe('containsNumber()', () => {
  it('should return true if password string contains a number', () => {
    const validString = 'abc123ABC';
    const result = containsNumber(validString);
    expect(result).toBe(true);
  });

  it('should return false if password doesnt contain a number', () => {
    const invalidString = 'myPassword';
    const result = containsNumber(invalidString);
    expect(result).toBe(false);
  });
});

describe('containsLowerCaseLetter()', () => {
  it('should return true if string contains a lower case letter', () => {
    const validString = 'abc123ABC123';
    const result = containsLowerCaseLetter(validString);
    expect(result).toBe(true);
  });

  it('should return false if string doesnt contains a lower case letter', () => {
    const invalidString = 'ABC123';
    const result = containsLowerCaseLetter(invalidString);
    expect(result).toBe(false);
  });
});

describe('containsUpperCaseLetter()', () => {
  it('should return true if string contains a upper case letter', () => {
    const validString = 'abc123ABC123';
    const result = containsUppercaseLetter(validString);
    expect(result).toBe(true);
  });

  it('should return false if string doesnt contains a upper case letter', () => {
    const invalidString = 'abc123';
    const result = containsUppercaseLetter(invalidString);
    expect(result).toBe(false);
  });
});

describe('containsSpecialCharacter()', () => {
  it('should return true if string contains a special character', () => {
    const validString = 'abc123ABC123#*';
    const result = containsSpecialCharacter(validString);
    expect(result).toBe(true);
  });

  it('should return false if string doesnt contains a upper case letter', () => {
    const invalidString = 'abc123';
    const result = containsSpecialCharacter(invalidString);
    expect(result).toBe(false);
  });
});
