import { EmailValidator } from '../main.js';

const emailValidator = new EmailValidator();

describe('isValidEmail()', () => {
  it('should return true on valid email string', () => {
    const validEmail = 'kalle.kollen@gmail.co.jp';
    const result = emailValidator.isValidEmail(validEmail);
    expect(result).toBe(true);
  });

  it('should return false on too short top level domain name', () => {
    const tooShort = 'kalle.kollen@gmail.c';
    const tooShortEndingResult = emailValidator.isValidEmail(tooShort);
    expect(tooShortEndingResult).toBe(false);
  });

  it('should return false on no "@" character', () => {
    const tooShort = 'kalle.kollengmail.com';
    const tooShortEndingResult = emailValidator.isValidEmail(tooShort);
    expect(tooShortEndingResult).toBe(false);
  });

  it('should return false on invalid characters', () => {
    const invalidCharacter = 'kalle>kollen@gmail.com';
    const invalidCharacter2 = 'kalle.kollen@gma*il.com';

    const invalidCharacterResult =
      emailValidator.isValidEmail(invalidCharacter);
    const invalidCharacterResult2 =
      emailValidator.isValidEmail(invalidCharacter2);

    expect(invalidCharacterResult).toBe(false);
    expect(invalidCharacterResult2).toBe(false);
  });

  it('should return false on consecutive special characters', () => {
    const consecutivePeriodLocalName = 'kalle..kollen@gmail.com';
    const consecutivePeriodDomainName = 'kalle.kollen@gmail..com';

    const consecutivePeriodLocalNameResult = emailValidator.isValidEmail(
      consecutivePeriodLocalName,
    );
    const consecutivePeriodDomainNameResult = emailValidator.isValidEmail(
      consecutivePeriodDomainName,
    );

    expect(consecutivePeriodLocalNameResult).toBe(false);
    expect(consecutivePeriodDomainNameResult).toBe(false);
  });
});
