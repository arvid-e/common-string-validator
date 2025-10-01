import { UsernameValidator } from '../main.js';

const usernameValidator = new UsernameValidator();

describe('isValidUsername()', () => {
  it('should return true on valid username string', () => {
    const validUsername = 'Coolbert';
    const result = usernameValidator.isValidUsername(validUsername);
    expect(result).toBe(true);
  });

  it('should return false on consecutive non letter character in hostname', () => {
    const invalidUsername = 'Coola--Bert';
    const result = usernameValidator.isValidUsername(invalidUsername);
    expect(result).toBe(false);
  });

  it('should return false on too long username', () => {
    const invalidUsername = `Coooooooooola-Bert`;
    const result = usernameValidator.isValidUsername(invalidUsername);
    expect(result).toBe(false);
  });

  it('should return false on too short username', () => {
    const invalidUsername = 'CB';
    const result = usernameValidator.isValidUsername(invalidUsername);
    expect(result).toBe(false);
  });

  it('should return false on invalid characters', () => {
    const invalidUsername = 'Coola$Bert';
    const result = usernameValidator.isValidUsername(invalidUsername);
    expect(result).toBe(false);
  });
});
