import { isValidEmail } from "./validation/email.js";
import { isValidDate } from "./validation/date.js";

const email = 'kalle.kollen@hotmail.com';
const longDate = 'February 31, 2025'

console.log('Valid date: ', isValidDate(longDate));