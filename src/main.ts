import { isValidEmail } from './validation/email.js';
import { isValidDate } from './validation/date.js';
import { isValidPassword } from './validation/password.js';

const email = 'kalle.kollen@hotmail.com';
const longDate = 'June 1, 2025';
const password = '';

console.log('Valid date: ', isValidDate(longDate));
console.log('Valid password:', isValidPassword(password));
