/**
 * Class that checks if a date string is in a valid format.
 */
export class DateValidator {
  constructor() {}

  /**
   * Validates a date string.
   *
   * @param {string} date - Date string.
   * @returns {boolean} - True if valid format false if not.
   */
  public isValidDate(date: string): boolean {
    return (
      this.isValidISODate(date) ||
      this.isValidShortDate(date) ||
      this.isValidLongDate(date)
    );
  }

  /**
   * Checks if a date string is in a valid ISO standard format.
   *
   * @param {string} date - Date string.
   * @returns {boolean} - True if valid format false if not.
   */
  private isValidISODate(date: string): boolean {
    const ISO_DATE_REGEX: RegExp =
      /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;

    const regexGroups = date.match(ISO_DATE_REGEX)?.groups;

    if (
      !regexGroups ||
      !regexGroups.day ||
      !regexGroups.month ||
      !regexGroups.year
    ) {
      return false;
    }

    const year = Number(regexGroups.year);
    const month = Number(regexGroups.month) - 1;
    const day = Number(regexGroups.day);

    return this.hasValidYearMonthDay(year, month, day);
  }

  /**
   * Checks if a date string is in a valid short format.
   *
   * @param {string} date - Date string.
   * @returns {boolean} - True if valid format false if not.
   */
  private isValidShortDate(date: string): boolean {
    const SHORT_DATE_REGEX: RegExp =
      /^(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})$/;

    const regexGroups = date.match(SHORT_DATE_REGEX)?.groups;

    if (!regexGroups) {
      return false;
    }

    if (!regexGroups.day || !regexGroups.month || !regexGroups.year) {
      return false;
    }

    const year = Number(regexGroups.year);
    const month = Number(regexGroups.month) - 1;
    const day = Number(regexGroups.day);

    return this.hasValidYearMonthDay(year, month, day);
  }

  /**
   * Checks if a date string is in a valid long format.
   *
   * @param {string} date - Date string.
   * @returns {boolean} - True if valid format false if not.
   */
  private isValidLongDate(date: string): boolean {
    const LONG_DATE_REGEX: RegExp =
      /^(?<month>[A-Za-z]+)\s(?<day>\d{1,2}),\s(?<year>\d{4}$)/;

    const regexGroups = date.match(LONG_DATE_REGEX)?.groups;

    if (!regexGroups) {
      return false;
    }

    if (!regexGroups.month || !regexGroups.day || !regexGroups.year) {
      return false;
    }

    const year = Number(regexGroups.year);
    const month = this.getMonthNumber(regexGroups.month);
    const day = Number(regexGroups.day);

    if (month === undefined) {
      return false;
    }

    return this.hasValidYearMonthDay(year, month, day);
  }

  /**
   * Gets the month number from a month string. (0-11)
   *
   * @param {string} month - Month string.
   * @returns {number} - Number of a month. (0-11)
   */
  private getMonthNumber(month: string): number | undefined {
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

    return validMonth;
  }

  /**
   * Validates that if the combination of a year, month and day is a real valid date.
   *
   * @param {number} year - Year number.
   * @param {number} month - Month index number (0-11).
   * @param {number} day - Day of the month (1-31).
   * @returns {boolean} - True if valid, false if not.
   */
  private hasValidYearMonthDay(
    year: number,
    month: number,
    day: number,
  ): boolean {
    const validDate = new Date(year, month, day);

    const validDay = validDate.getDate() === day;
    const validMonth = validDate.getMonth() === month;
    const validYear = validDate.getFullYear() === year;

    if (!validDay || !validMonth || !validYear) {
      return false;
    }

    return true;
  }
}
