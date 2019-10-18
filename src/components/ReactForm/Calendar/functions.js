const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];


/**
 * Get days of a month that should be shown on a month page
 *
 * @param month A moment object
 * @returns {Array}
 */
export function getDaysOfMonth(month, isGregorian) {
    const days = [];
    
    const monthFormat = isGregorian ? 'Month' : 'jMonth';
    const dayOffset = isGregorian ? 0 : 1;
    
    const current = month.clone().startOf(monthFormat);
    const end = month.clone().endOf(monthFormat);
    
    // Set start to the first day of week in the last month
    current.subtract((current.day() + dayOffset) % 7, 'days');
    
    // Set end to the last day of week in the next month
    end.add(6 - ((end.day() + dayOffset) % 7), 'days');
    
    while (current.isBefore(end)) {
        days.push(current.clone());
        current.add(1, 'days');
    }
    
    return days;
}



function prepareNumber(input) {
  let string;
  if (typeof input === 'number') {
    string = input.toString();
  } else if (typeof input === 'undefined') {
    string = '';
  } else {
    string = input;
  }

  return string;
}

function latinToPersian(string) {
  let result = string;

  for (let index = 0; index < 10; index++) {
    result = result.replace(latinNumbers[index], latinToPersianMap[index]);
  }

  return result;
}

export function persianNumber(input) {
  return latinToPersian(prepareNumber(input));
}

export function checkToday(compare) {
  const today = new Date();
  const todayString =
    String(today.getFullYear()) +
    addZero(String(today.getMonth() + 1)) +
    addZero(String(today.getDate()));

  return compare === todayString;
}

export function addZero(val) {
  val = Number(val);
  if (val < 10) return `0${val}`;
  return val;
}

