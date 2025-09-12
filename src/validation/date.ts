export function isValidDate(date: string): boolean {
  return (
    isValidISODate(date) || isValidShortDate(date) || isValidLongDate(date)
  );
}

function isValidISODate(date: string) {
  const SHORT_DATE_REGEX: RegExp = /^\d{4}-\d{2}-\d{2}$/;
  const isValid = SHORT_DATE_REGEX.test(date);

  return isValid;
}

function isValidShortDate(date: string) {
  const SHORT_DATE_REGEX: RegExp = /^\d{2}\/\d{2}\/\d{4}$/;
  const isValid = SHORT_DATE_REGEX.test(date);

  return isValid;
}

function isValidLongDate(date: string): boolean {
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
}

function getMonthNumber(month: string) {
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
