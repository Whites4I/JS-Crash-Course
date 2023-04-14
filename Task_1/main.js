// 1. Request the birth year from the user and show his age. Use a constant in this code.

const currentYear = new Date().getFullYear();
const getBirthYear = +prompt('Enter your year of birth:');
alert(`Your age: ${currentYear - getBirthYear} years old.`);

// 2. Ask the user for the radius of a circle and display its area.

const getRadius = +prompt('Please specify the circle radius:');
const circleAreaValue = Math.PI * (getRadius ** 2);
alert(`The area of the circle is ${circleAreaValue.toFixed(2)}`);

/*
3. Ask the user for the distance in km between two cities and the amount of time
they have to reach their destination. Calculate the speed they need to travel to
arrive on time.
*/

const arrData = prompt('Please enter the distance and travel time in km, hh, and mm separated by a comma (Example: 150,2,0):').split(',');
const valueSpeed = +arrData[0] / (+arrData[1] + +arrData[2] / 60); //Divide the distance by the total time in hours
alert(`Required speed of movement: ${valueSpeed.toFixed(2)} km/h`);

/*
4. Implement a currency converter. The user inputs dollars and the program
converts it to euros. Store the currency rate in a constant.
*/

const getAmountCurrency = +prompt('Enter the amount of USD currency:');
const dollarInEuro = getAmountCurrency * 0.9328;
alert(`Conversion result: ${dollarInEuro.toFixed(2)} EUR.`);

/*
5. *The user enters the capacity of a flash drive in GB. The program should calculate
how many files of size 820 MB can be saved on the flash drive.
*/

const getCapacityFlashDrive = +prompt('Enter the capacity of the flash drive in GB:');
const megaInOneGiga = getCapacityFlashDrive * 1024;
const valueFiles = megaInOneGiga / 820;
alert(`The number of possible saved files is 820 MB: ${Math.floor(valueFiles)} pieces.`);

/*
Additional practice
1. Implement the kilometers to miles unit converter. The user inputs a value in km, and
then the app displays this value in miles (1 km = 0,621371 miles). Use a constant here.
*/

const getKilometers = +prompt('Enter the value of kilometers that needs to be converted to miles:');
const valueMiles = getKilometers * 0.621371;
alert(`${getKilometers} kilometers equals ${valueMiles.toFixed(2)} miles.`);

/*
Additional practice
2. Ask the user for the current time (hours, minutes). Calculate how many hours and minutes are left until the end of the day.
*/

const arrTime = prompt('Please enter the time in hh and mm separated by a comma (Example: 13,20):').split(',');
alert(`Time left until the end of the day: ${23 - arrTime[0]}:${60 - arrTime[1]}`);

/*
Additional practice
3.Ask the user for the 3-digit number and display it backwards. Try to use the % (division remainder) operator.
*/

const getArrNumber = prompt('Enter the three-digit number you want to reverse:').split('');
const newArr = [];

for (let i = 0; i < getArrNumber.length; i++) {
    newArr.unshift(getArrNumber[i]);
}

alert(`The result of the reversal: ${newArr.join('')}`);