
console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log(hello())


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log("Hello, Jo!", helloName('Jo'));
console.log("Hello, Stacy!", helloName('Stacy'));
console.log("Hello, Bjork!", helloName('Bjork'));
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber; 
}
const addExample1 = addNumbers(4, 4);
const addExample2 = addNumbers(6, 4);
const addExample3 = addNumbers(1, 99);

console.log(' 4 and 4 is:', addExample1); 
console.log(' -2 and 8 is:', addExample2); 
console.log(' 0 and 0 is:', addExample3); 
// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
return num1 * num2 * num3;
}
console.log("multiplyThree, ", multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
const resultPositive = isPositive(5);
const resultNegative = isPositive(-3);
const resultPositive2 = isPositive(55);
const resultNegative2 = isPositive(-1655);
const resultNegative3 = isPositive(-666);
const resultPositive3 = isPositive(666);


// Write a separate console.log statement for each outcome
console.log("5 is positive: ", resultPositive);
console.log("-3 is positive: ", resultNegative);
console.log("-1655 is negative: ", resultNegative2);
console.log("55 is positive: ", resultPositive2);
console.log ("-666 is negative: ", resultNegative3);
console.log ("666 is positive: " , resultPositive3);

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
if(array.length > 0) {
  return array [array.length -1];
} else {
  return undefined;
}
}


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
return false

}
//console.log


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
