# Validator Module

This is a module used for validating different kinds of strings and user input.

## Provided validators
* **Date validation**
  * Short, long and ISO standard format.
* **E-mail validation**
  * Using the most commonly used E-mail standard used by E-mail providers such as Google and Microsoft.
* **Password validation**
  * Make sure the password is safe by forcing character variation and a minimum length.

## Installation

`npm install [package name]`

## Usage examples

### Date validation
```
import { isValidDate } from '[package name]';

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
import { isValidEmail } from '[package name]';

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
import { isValidPassword } from '[package name]';

// Valid password
const password = 'Sklr99m##dL';
console.log(`Is "${password}" a valid password?`, isValidPassword(password));

// Output: Is 'Sklr99m##dL' a valid password? true


/ Invalid password
const password = 'abc123';
console.log(`Is "${password}" a valid password?`, isValidPassword(password));

// Output: Is 'abc123' a valid password? false
```

## Tests







