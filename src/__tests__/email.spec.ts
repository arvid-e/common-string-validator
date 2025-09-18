import { isValidEmail } from '../validation/email/email.js';

describe('isValidEmail()', () => {
  it('should return true on valid email string', () => {
    const validEmail = 'kalle.kollen@gmail.co.jp';
    const result = isValidEmail(validEmail);
    expect(result).toBe(true);
  });

  it('should return false on too short top level domain name', () => {
    const tooShort = 'kalle.kollen@gmail.c';
    const tooShortEndingResult = isValidEmail(tooShort);
    expect(tooShortEndingResult).toBe(false);
  });

  it('should return false on invalid characters', () => {
    const invalidCharacter = 'kalle#kollen@gmail.com';
    const invalidCharacter2 = 'kalle.kollen@gma*il.com';

    const invalidCharacterResult = isValidEmail(invalidCharacter);
    const invalidCharacterResult2 = isValidEmail(invalidCharacter2);

    expect(invalidCharacterResult).toBe(false);
    expect(invalidCharacterResult2).toBe(false);
  });

  it('should return false on consecutive special characters', () => {
    const consecutivePeriodLocalName = 'kalle..kollen@gmail.com';
    const consecutivePeriodDomainName = 'kalle.kollen@gmail..com';

    const consecutivePeriodLocalNameResult = isValidEmail(
      consecutivePeriodLocalName,
    );
    const consecutivePeriodDomainNameResult = isValidEmail(
      consecutivePeriodDomainName,
    );

    expect(consecutivePeriodLocalNameResult).toBe(false);
    expect(consecutivePeriodDomainNameResult).toBe(false);
  });
});
