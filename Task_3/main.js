// 1.1. Create an array of 20 elements and fill it with random numbers from 1 to 100

console.log(`1.1. Create an array of 20 elements and fill it with random numbers from 1 to 100.`);
const arrOne = [];
for (let i = 0; i < 20; i++) {
    arrOne[i] = Math.round((Math.random() * 100));
}
console.log(arrOne);

// 1.2. Display each element of the array in the form: [1] – 5; [2] – 78 ... etc.

console.log('1.2. Display each element of the array in the form: [1] - 5; [2] - 78 ... etc.:');
for (let i = 0; i < arrOne.length; i++) {
    console.log(`[${i}] - ${arrOne[i]}`);
}

// 1.3. Sort the array in descending order.

console.log(`1.3. Sort the array in descending order.`);
console.log(arrOne.sort((a, b) => a - b));

// 1.4. Fill the second half of the array with zeros.

console.log(`1.4. Fill the second half of the array with zeros.`);
console.log(`${arrOne.fill(0, (Math.ceil(arrOne.length / 2)))}`);

// 1.5. Check whether the array contains a number that is a multiple of 7.

console.log('1.5. Check whether the array contains a number that is a multiple of 7.');
console.log(arrOne.some(i => ((i % 7) === 0)));

// 1.6. Remove the first 3 elements from the array using one method.

console.log(`1.6. Remove the first 3 elements from the array using one method.`);
arrOne.splice(0, 3);
console.log(arrOne);

// 1.7. Count the number of even numbers in the array.

console.log('1.7. Count the number of even numbers in the array.');
const countArr = arrOne.reduce((accum, curr) => accum + curr);
console.log(countArr);

// 1.8. Check if the array has duplicates.

console.log('1.8. Check if the array has duplicates.');
const checkDuplicates = arr => (new Set(arr)).length !== arr.length;
console.log(checkDuplicates(arrOne));

// 2.1. The user enters a string. Count the number of spaces in it.

console.log('2.1 The user enters a string. Count the number of spaces in it.');
const userString = prompt('Enter string');
console.log(`[${userString}] contains ${userString.search(/[ ]/) !== -1 ? userString.search(/[ ]/) : 0} spaces`);

// 2.2. Write a function that converts the first character of a string to uppercase.

function upperCase() {
    console.log('2.2. First character of a string to uppercase:');
    console.log(`${userString[0].toUpperCase() + userString.slice(1)}`);
}
upperCase();

// 2.3. Count the number of words in the string that the user entered.

console.log('2.3. Count the number of words in the string that the user entered.');
const arrString = userString.split(' ');
console.log(arrString.length);

// 2.4. The user enters a phrase. Convert it to an abbreviation.

console.log('2.4. The user enters a phrase. Convert it to an abbreviation');
let abbreviation = '';
for (let i = 0; i < arrString.length; i++) {
    abbreviation += arrString[i][0].toUpperCase();
}
console.log(abbreviation);

// 2.5. Check if the entered string is a palindrome.

console.log('2.5. Check if the entered string is a palindrome.');
const reverseUserString = userString.split('').reverse().join('');
console.log(`[${userString}] palindrome?: ${reverseUserString == userString}`);

// 2.6. Write a function that takes a url and displays detailed information about it.

console.log('2.6. Write a function that takes a url and displays detailed information about it.');
function userURL() {
    const userURL = new URL(userString);
    console.log(userString)
    console.log(`protocol: ${userURL.protocol}`);
    console.log(`domain: ${userURL.hostname}`);
    console.log(`path: ${userURL.pathname}`);
}
userURL();