export * from './validation/date.js';
export * from './validation/email.js';
export * from './validation/password.js';

import { isValidDate } from './validation/date.js';

const longDate = 'January 12, 2022';
const result = isValidDate(longDate);
console.log(result);
