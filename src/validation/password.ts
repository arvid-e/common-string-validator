export function isValidPassword(password: string): boolean {
  return (
    containsLowerCaseLetter(password) &&
    containsUppercaseLetter(password) &&
    containsSpecialCharacter(password)
  );
}

function containsUppercaseLetter(password: string): boolean {
  const UPPER_CASE_REGEX = /[A-Z]/;
  const hasUppercaseLetter = UPPER_CASE_REGEX.test(password);

  return hasUppercaseLetter;
}

function containsLowerCaseLetter(password: string): boolean {
  const LOWER_CASE_REGEX = /[a-z]/;
  const hasLowerCaseLetter = LOWER_CASE_REGEX.test(password);

  return hasLowerCaseLetter;
}

function containsSpecialCharacter(password: string): boolean {
  const SPECIAL_CHARACTER_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const hasSpecialCharacter = SPECIAL_CHARACTER_REGEX.test(password);

  return hasSpecialCharacter;
}
