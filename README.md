# Validator Module

The purpose of this module is to provide validators for commonly used strings. This module makes sure that these different kinds of strings are in the correct format so that they can be used without problems in an application. 


## Provided validation

### Date validation
Validates a date string in three different formats:  
* **Short format**
  * 01/01/2025
* **Long format**
  * January 1, 2025
* **ISO standard format**: 
  * 2025:01:01

### E-mail validation
Validates using the most commonly used E-mail standard used by the most common E-mail providers.

* **Valid E-mail examples**
  * name@provider.com
  * firstname.lastname@provider.com
  * firstname-lastname@provider.company.org


### Password validation
  Validates a password string by making sure it contains character variation and a minimum length.

  * **Rules**
    * Has a uppercase letter.
    * Has a lowercase letter.
    * Has a Number.
    * Has a special character.
    * Is at least 12 characters long.


### Username validation
Validates a username string to make sure that it is easy to read.

* **Rules**
  * Can only contain letters, dashes and underscores.
  * Must be between 3 and 12 characters long.
  * Cannot have consecutive dashes or underscores.

### URL Validation
Validates an URL string to make sure it is in a usable format for HTTP requests.

* **Valid format**
  * scheme://[:port]/path[?query][#fragment]
  * **⚠** Only validates http or https schemes.

## Use case examples
* API endpoints
* Account creation
* User registration
* Content Management Systems


## Installation

`npm install common-string-validator`

## Usage examples

### Date validation
```
import { isValidDate } from 'common-string-validator';

// Correct ISO Standard Format
const isoDate = '2024-05-15';
console.log(`Is "${isoDate}" a valid date?`, isValidDate(isoDate));

// Output: Is "2024-05-15" a valid date? true


// Spelling mistake in long format
const longDate = 'Janry 13. 2007';
console.log(`Is "${longDate}" a valid date?`, isValidDate(longDate));

// Output: Is 'Janry 13. 2007' a valid date? false


```

### Email validation
```
import { isValidEmail } from 'common-string-validator';

// Valid E-mail
const email = 'john.doe@gmail.com';
console.log(`Is "${email}" a valid E-mail?`, isValidEmail(email));

// Output: Is "john.doe@gmail.com" a valid E-mail? true


// Invalid E-mail
const email = 'jo%hn.-doe@gmail.com';
console.log(`Is "${email}" a valid E-mail?`, isValidEmail(email));

// Output: Is 'jo%hn.-doe@gmail.com' a valid E-mail? false
```

### Password validation
```
import { isValidPassword } from 'common-string-validator';

// Valid password
const password = 'Sklr99m##dL';
console.log(`Is "${password}" a valid password?`, isValidPassword(password));

// Output: Is 'Sklr99m##dL' a valid password? true


/ Invalid password
const password = 'abc123';
console.log(`Is "${password}" a valid password?`, isValidPassword(password));

// Output: Is 'abc123' a valid password? false
```

### Username validation
```
import { isValidUsername } from 'common-string-validator';

// Valid password
const username = 'Johnny';
console.log(`Is "${username}" a valid username?`, isValidUsername(username));

// Output: Is 'Johnny' a valid username? true


// Invalid username
const username = 'J@nne__L#rss0n';
console.log(`Is "${username}" a valid username?`, isValidUsername(username));

// Output: Is 'J@nne__L#rss0n' a valid username? false

```

### URL validation
```
import { isValidUrl } from 'common-string-validator';

// Valid URL
const url = 'https://company-name.work.org';
console.log(`Is "${url}" a valid URL?`, isValidUrl(url));

// Output: Is 'https://company-name.work.org' a valid URL? true


// Invalid URL
const url = 'https://company..name.work.c';
console.log(`Is "${username}" a valid username?`, isValidUrl(url));

// Output: Is 'Johnny' a valid url? false

```

## Tests

Unit tests has been created for each validator in this module using **Vitest** and can be found in the src/_\_tests__/ folder. 


### Test results







