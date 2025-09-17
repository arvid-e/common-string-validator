/**
 * Validates a date string.
 *
 * @param {string} date - Date string.
 * @returns {boolean} - True if valid format false if not.
 */
export function isValidDate(date: string): boolean {
  return (
    isValidISODate(date) || isValidShortDate(date) || isValidLongDate(date)
  );
}

/**
 * Checks if a date string is in a valid ISO standard format.
 *
 * @param {string} date - Date string.
 * @returns {boolean} - True if valid format false if not.
 */
export function isValidISODate(date: string): boolean {
  // FIX: validate day, month and year.
  const SHORT_DATE_REGEX: RegExp =
    /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;
  const dateIsValid = SHORT_DATE_REGEX.test(date);

  return dateIsValid;
}

/**
 * Checks if a date string is in a valid short format.
 *
 * @param {string} date - Date string.
 * @returns {boolean} - True if valid format false if not.
 */
export function isValidShortDate(date: string): boolean {
  // FIX: validate day, month and year.
  const SHORT_DATE_REGEX: RegExp =
    /^(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})$/;
  const dateIsValid = SHORT_DATE_REGEX.test(date);

  return dateIsValid;
}

/**
 * Checks if a date string is in a valid long format.
 *
 * @param {string} date - Date string.
 * @returns {boolean} - True if valid format false if not.
 */
export function isValidLongDate(date: string): boolean {
  try {
    const LONG_DATE_REGEX: RegExp =
      /^(?<month>[A-Za-z]+)\s(?<day>\d{1,2}),\s(?<year>\d{4}$)/;
    const match = date.match(LONG_DATE_REGEX);

    if (!match?.groups) {
      return false;
    }

    const { month, day, year } = match.groups;

    if (!month || !day || !year) {
      return false;
    }

    const dateObj = new Date(`${month} ${day}, ${year}`);

    const dateIsValid =
      !isNaN(dateObj.getTime()) &&
      dateObj.getFullYear() === Number(year) &&
      dateObj.getMonth() === getMonthNumber(month);

    return dateIsValid;
  } catch (_error) {
    // Ignoring the caught error.
    return false;
  }
}

/**
 * Gets the month number from a month string. (0-11)
 *
 * @param {string} month - Month string.
 * @returns {number} - Number of a month. (0-11)
 */
export function getMonthNumber(month: string): number {
  const validMonths: { [key: string]: number } = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const validMonth = validMonths[month];

  if (validMonth === undefined) {
    throw new Error('Invalid month string.');
  }
  return validMonth;
}
