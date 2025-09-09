export function isValidEmail(email: string) {

    const localName = getLocalName(email);
    const localNameIsValid = validateLocalName(localName);

    const domainName = getDomainName(email);
    const domainNameIsValid = validateDomainName(domainName);

}

function getDomainName(email: string): string {
    const DOMAIN_NAME_REGEX: RegExp = /(?<=@)([A-Za-z0-9.-]+)/;
    const domainNameRegexMatch = email.match(DOMAIN_NAME_REGEX);

    if (!domainNameRegexMatch) {
        throw new Error('Invalid domain name.')
    }

    const domainName = domainNameRegexMatch[0];
    
    return domainName;
}

function getAllDomainLabels(domainName: string): string[] {
    const DOMAIN_LABEL_REGEX: RegExp = /([A-Za-z0-9-]+)/g;

    const domainLabelMatches = domainName.matchAll(DOMAIN_LABEL_REGEX);
    const allDomainLabels = [...domainLabelMatches].map(match => match[0])

    console.log(allDomainLabels);
    return allDomainLabels;
}


function getLocalName(email: string): string {
    const LOCAL_NAME_REGEX: RegExp = /^([A-Za-z0-9._-]+)(?=@)/;

    const localNameRegexMatch = email.match(LOCAL_NAME_REGEX);

    if (!localNameRegexMatch) {
        throw new Error('Invalid localname.');
    }
    const localName = localNameRegexMatch[0];

    return localName;
}

function validateLocalName(localName: string) {
    const lastCharacterValid = validateLastCharacter(localName);
    const firstCharacterValid = validateFirstCharacter(localName);
    const containsNoConsecutiveSpecialCharacters = hasNoConsecutiveSpecialCharacters(localName);

    if (lastCharacterValid && 
        firstCharacterValid && 
        containsNoConsecutiveSpecialCharacters
    ) {
        return true;
    }

    return false;
}

function validateDomainName(domainName: string) {
    const domainLabels = getAllDomainLabels(domainName);
    const domainLabelsAreValid = validateDomainLabels(domainLabels);

    if (domainLabelsAreValid) {
        return true;
    } 
    
    else {
        return false;
    }
}

function validateDomainLabels(domainLabels: string[]): boolean {
    for (const label of domainLabels) {
        validateDomainLabelLength(label);
        validateFirstCharacter(label);
        validateLastCharacter(label);
        hasNoConsecutiveSpecialCharacters(label);
    }

    return true;
}

function validateDomainLabelLength(label: string) {
    const CHARACTER_LENGTH_REGEX: RegExp = /[A-Za-z0-9-]{2,63}/;

    const validLabelRegexMatch = label.match(CHARACTER_LENGTH_REGEX);

    if (!validLabelRegexMatch) {
        throw new Error('Invalid domain label length.')
    }
    const validLabel = validLabelRegexMatch[0];

    return validLabel;
}

function validateFirstCharacter(localName: string) {
    const FIRST_CHARACTER_REGEX: RegExp = /^[A-Za-z0-9]/g;

    return FIRST_CHARACTER_REGEX.test(localName);
}

function validateLastCharacter(localName: string) {
    const LAST_CHARACTER_REGEX: RegExp = /[A-Za-z0-9]$/g;

    return LAST_CHARACTER_REGEX.test(localName);
}

function hasNoConsecutiveSpecialCharacters(email: string) {
    const CONSECUTIVE_SPECIAL_CHARACTER_REGEX: RegExp = /[-_.+]{2,}/;

    return !CONSECUTIVE_SPECIAL_CHARACTER_REGEX.test(email);
}


