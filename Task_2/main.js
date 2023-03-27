// 1. Ask the user for a number from 0 to 9 and display the special character located on this key (1-!, 2-@, 3-#, etc.).

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
2. Ask the user for the year and check whether it is a leap year or not. 
A leap year is either a (multiple of 400) or a (multiple of 4 but not a multiple of 100).
*/

const year = +prompt('Enter the desired year');

((year % 400) == 0) || (((year % 4) == 0) && !((year % 100) == 0)) ? alert(`The ${year} year is a leap year`) : alert(`The ${year} year is not a leap year`);

