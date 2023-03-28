// 1.1. Ask the user for a number from 0 to 9 and display the special character located on this key (1-!, 2-@, 3-#, etc.).

const value = +prompt('Enter a number to see the special symbol corresponding to the number.');

switch (value) {
    case 0: alert(')');
        break;
    case 1: alert('!');
        break;
    case 2: alert('@');
        break;
    case 3: alert('#');
        break;
    case 4: alert('$');
        break;
    case 5: alert('%');
        break;
    case 6: alert('^');
        break;
    case 7: alert('&');
        break;
    case 8: alert('*');
        break;
    case 9: alert('(');
        break;
    default:
        alert('Invalid value');
}

/*
1.2. Ask the user for the year and check whether it is a leap year or not.
A leap year is either a (multiple of 400) or a (multiple of 4 but not a multiple of 100).
*/

const year = +prompt('Enter the desired year');

((year % 400) == 0) || (((year % 4) == 0) && !((year % 100) == 0)) ? alert(`The ${year} is a leap year`) : alert(`The ${year} is not a leap year`);

/*
1.3. Request a date (day, month, year) and display the next date.
Consider the possibility of moving to the next month, year, as well as leap year.
*/

const creationDateObj = {
    year: +prompt('Specify the year'),
    month: +prompt('Specify the month') - 1,
    day: +prompt('Specify the day') + 1
}

const creationDate = new Date(
    creationDateObj.year,
    creationDateObj.month,
    creationDateObj.day
);

alert(`Next date: ${creationDate.getFullYear()}-${(creationDate.getMonth() < 10) ? '0' + creationDate.getMonth() : creationDate.getMonth()}-${(creationDate.getDate() < 10) ? '0' + creationDate.getDate() : creationDate.getDate()}`);

// 2.1. Calculate the sum of all numbers in the range specified by the user.

const firstNumber = +prompt('Enter first number');
const lastNumber = +prompt('Enter last number');
let sumNumbers = 0;

for (let i = firstNumber; i <= lastNumber; i++) {
    sumNumbers += i;
    console.log(sumNumbers);
}

alert(`Sum of all numbers: ${sumNumbers}`);

// 2.2. Determine the number of digits in the entered number.

let getDigitsInNumber = prompt('Enter a number to determine the number of digits');

let countDigits = 0;

while (getDigitsInNumber !== 0) {
    countDigits++
    getDigitsInNumber = Math.floor(getDigitsInNumber / 10);
}

alert(`Number digits in number: ${countDigits}`);

/*
2.3. Ask the user for 10 numbers and count how many positive, negative and zeros were entered.
Besides, also count how many even and odd numbers present.
Display statistics on the screen. Try to use only one variable in the solution.
*/

let oneVariable = {
    'number': 0,
    'positive': 0,
    'negative': 0,
    'zero': 0,
    'even': 0,
    'odd': 0
}

for (let i = 0; i < 10; i++) {

    oneVariable.number = prompt('Enter a number to check');

    if (oneVariable.number > 0) {
        oneVariable.positive++
    } else if (oneVariable.number < 0) {
        oneVariable.negative++
    } else {
        oneVariable.zero++
    }

    if ((oneVariable.number % 2) != 0) {
        oneVariable.odd++
    } else {
        oneVariable.even++
    }
}

alert(Object.entries(oneVariable).slice(1));

// 2.4. Loop the output of the weekdays as follows: {Day of the week}. Do you want to see the next day? and so on until the user clicks OK.

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let i = 0;
let res;

do {
    const weekDay = weekDays[i];
    res = prompt(`${weekDay}. Do you want to see the next day?`);
    console.log(res)
    i++;

    if (i === weekDays.length) {
        i = 0;
    }
} while (res.toUpperCase() === 'OK');
