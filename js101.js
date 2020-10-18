"use strict";
//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
let onMarsRightNow = false;

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

let fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];

//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini

let vegetables = ["eggplant","broccoli", "carrot","cauliflower","zucchini"];


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let numbers = [1,2,3,4,5,6,7,8,9,10];

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.

fruits.push("tomato");
// console.log(fruits);

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push("tomato");
// console.log(vegetables);

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
numbers.reverse();
// console.log(numbers);

// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();
// console.log(vegetables);

// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

fruits = fruits.sort().reverse();
// console.log(fruits);

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

let fruitsAndVeggies = fruits.concat(vegetables);
// console.log(fruitsAndVeggies);


// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
function addOne(num){
    return num +1;
}

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.

function isPositive(num){
    return (num>0);
}
// console.log(isPositive(-1));

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

function isNegative(num){
    return num<0;
}

// console.log(isNegative(0));

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

function isOdd(num){
  return (num % 2) !=0;
}
//
// console.log(isOdd("10"));
// console.log(isOdd(-1));


// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(num){
    return (num % 2 == 0);
}

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
function identity(input){
    return input;
}

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

function isPositiveOdd(a){
   return (a > 0 && a % 2 !== 0);
}

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

function isPositiveEven(b){
    return (b > 0 && b % 2 === 0 );
}

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
function isNegativeOdd(c){
    return (c<0 && c % 2 !==0);
}

// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

function isNegativeEven(d){
    return (d < 0 && d % 2 === 0 );
}

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

function half(e){
    return e /2;
}

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.

function double(num){
    return num * 2;
}

//
// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

function triple(num){
    return num * 3;
}

// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.

function reverseSign(num){
    return num * (-1);
}

//// Exercise 25
// // Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
/***** absolute method: Math.abs(num) *****/
function absoluteValue(num){
    return Math.abs(num);
}
