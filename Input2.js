const readLine = require('readLine-sync');


let num = Number(readLine.question("Enter any number:"));
let num2 = Number(readLine.question("Enter any number"));
console.log(`${num} + ${num2} = ${num + num2}`);


let numb = Number(readLine.question("Enter any number:"));
let numb2 = Number(readLine.question("Enter any number"));
console.log(`${numb} - ${numb2} = ${numb - numb2}`);


let numb1 = Number(readLine.question("Enter any number:"));
let numb3 = Number(readLine.question("Enter any number"));
console.log(`${numb1} * ${numb3} = ${numb1 * numb3}`);


let number1 = Number(readLine.question("Enter any number:"));
let number2 = Number(readLine.question("Enter any number"));
console.log(`${number1} / ${number2} = ${number1 / number2}`);


let number3 = Number(readLine.question("Enter any number:"));
let number4 = Number(readLine.question("Enter any number"));
console.log(`${number3} % ${number4} = ${number3 % number4}`);


let first = (readLine.question("Enter First Name"));
let last = (readLine.question("Enter Last Name"));
console.log(`Welcome ${last}, ${first}`);


let title = (readLine.question("What is your title?"));
let lastn = (readLine.question("what is your last name?"));
let suffix = (readLine.question("what is your suffix?"));
console.log(`welcome ${title} ${lastn}, ${suffix} `);


let street = (readLine.question("What is your street number?"));
let streetname = (readLine.question("what is your streetname?"));
let city = (readLine.question("what is your city?"));
let state = (readLine.question("what is your state?"));
let zip = (readLine.question("what is your zip code?"));
console.log(`mailing label ${street} ${streetname}, ${city} ${state} ${zip}`);