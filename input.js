const readLine = require('readLine-sync');
let answer = readLine.question("What day is it?\nYour answer:"  );
    console.log(answer);

    let username= readLine.question("Enter Username");
    let password= readLine.question("Enter Password");
  if (password == "Sil.duta") {
      console.log(` Welcome ${Username}`);
  } else {
      console.log("invalid");
  }

  let currentPrice = readLine.question("enter current price: ");
let originalPrice = readLine.question("enter original price: ");
let diff = originalPrice - currentPrice;
let discount = (diff/originalPrice).toFixed(2);
console.log(`discount: ${discount}`);

//Exponents
let base = readLine.question("enter the base:");
let exp =  readLine.question("enter the exponent:");
let answer2 = base ** exp;
console.log(`${base} to the power of ${exp} - ${answer2}`);


//rounding
console.log(5.7);
console.log(Math.round(5.7));0
console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));