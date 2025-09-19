export * from './validation/date/date.js';
export * from './validation/email/email.js';
export * from './validation/password/password.js';

import { urlHasValidHostname } from './validation/url/url-helpers.js';

const url = 'https://youtube.com';

urlHasValidHostname(url);
