export function isValidEmail(email: string) {

    const localName = getLocalName(email);

    validateLocalName(localName);

}

function getLocalName(email: string): string {
    const LOCAL_NAME_REGEX: RegExp = /^([A-Za-z0-9._-]+)(?=@)/;

    const localNameRegexMatch = email.match(LOCAL_NAME_REGEX);

    if (!localNameRegexMatch) {
        throw new Error('Invalid localname.');
    }
    return localNameRegexMatch[0];
}

function validateLocalName(localName: string) {
    const lastCharacterValid = validateLocalNameLastCharacter(localName);
    const firstCharacterValid = validateLocalNameFirstCharacter(localName);
    const containsConsecutiveSpecialCharacters = hasNoConsecutiveSpecialCharacters(localName);

    if (lastCharacterValid && 
        firstCharacterValid && 
        containsConsecutiveSpecialCharacters
    ) {
        return true;
    }

    return false;
}

function validateLocalNameFirstCharacter(localName: string) {
    const FIRST_CHARACTER_REGEX: RegExp = /^[A-Za-z0-9]/g;

    return FIRST_CHARACTER_REGEX.test(localName);
}

function validateLocalNameLastCharacter(localName: string) {
    const LAST_CHARACTER_REGEX: RegExp = /[A-Za-z0-9]$/g;

    return LAST_CHARACTER_REGEX.test(localName);
}

function hasNoConsecutiveSpecialCharacters(email: string) {
    const CONSECUTIVE_SPECIAL_CHARACTER_REGEX: RegExp = /[-_.+]{2,}/;

    return !CONSECUTIVE_SPECIAL_CHARACTER_REGEX.test(email);
}


