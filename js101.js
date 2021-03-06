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

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
/***** absolute method: Math.abs(num) *****/
function absoluteValue(num){
    return Math.abs(num);
}

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
function isMultipleOfThree(num){
    return (num % 3 == 0);
}
// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.

function isMultipleOfFive(num){
    return (num % 5 == 0);
}

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

function isMultipleOfBothThreeAndFive(num){
    return num % 3 == 0 && num % 5 ==0;
}

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

function square(num){
    return Math.pow(num,2);
}

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.

function add(num1, num2){
    return num1 + num2;
}

// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

function cube(num){
    return Math.pow(num,3);
}

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number

function squareRoot(num){
    return Math.pow(num, 1/2);
}

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.

function subtract(num1, num2){
    return num1 - num2;
}

// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
function multiply(num1,num2){
    return num1 * num2;
}


// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.

function divide(num1, num2){
    return num1 / num2;
}

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
//
// The Math.floor() function returns the largest integer less than or equal to a given number.
function quotient(num1, num2){
    return Math.floor(num1 / num2);
}

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

function remainder(num1, num2){
    return num1 % num2;
}
// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
function sumOfSquares(num1, num2){
    num1 = Math.pow(num1,2);
    num2 = Math.pow(num2,2);
    return num1 + num2;
}

// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.

function timesTwoPlusThree(num){
    return num * 2 + 3;
}

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.

function areaOfRectangle(num1, num2) {
    return num1 * num2;
}

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle

function areaOfCircle(rad){
    return Math.PI * Math.pow(rad,2);
}

// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.

function circumference(rad){
    return 2 * Math.PI * rad;
}


// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

function isVowel(num){
    num = num.toLowerCase();
    return (num == "a" ||num == "e" || num == "i" || num == "o" || num == "u");
}

// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.

function hasVowels(value) {
    let vowelstring = "aeiouAEIOU";
    for (let x = 0; x < value.length; x++) {
        if (vowelstring.valueOf(value[x]) !== -1) {
            return true;
        }
        return false;
    }
}

// console.log(hasVowels("o"));

// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.
function countVowels(val){
    let vowelString = "aeiouAEIOU";
    let sum = 0;
    for(let i =0; i < val.length; i++){
        if(vowelString.indexOf(val[i]) !== -1){
            sum++;
        }
    }
    return sum;
}
// console.log(countVowels("nihaoHello"));

// // Exercise 46
// // Write a function definition named removeVowels that takes in string and returns the string without any vowels
function removeVowels(str){
    let vowelString = "aeiouAEIOU";
    let newString = "";
    for(let i = 0 ; i < str.length; i++){
        if(vowelString.indexOf(str[i]) == -1){
            newString += str[i]
        }
    }
    return newString;
}

// console.log(removeVowels("helloCodeup"));

// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
function startsWithVowel(str){
    let vowelString = "aeiouAEIOU";
    if(vowelString.indexOf(str[0]) !== -1){
        return true;
    }
    return false;
}

// console.log(startsWithVowel("a,hello"));

// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
function endsWithVowel(str){
    let vowelString = "aeiouAEIOU";
    if(vowelString.indexOf(str[str.length-1]) !== -1){
        return true;
    }
    return false;
}

// console.log(endsWithVowel("a,hello"));

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
function startsAndEndsWithVowel(str){
    if(endsWithVowel(str) == true && startsWithVowel(str) == true){
        return true;
    }
    return false;
}

// console.log(startsAndEndsWithVowel("hello"));
// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

function first(value){
    return value[0];
}

// console.log(first("ubuntu"));
// console.log(first([1, 2, 3]));


// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
function last(value){
    return value[value.length-1];

}

// console.log(last(["JS", "is", "awesome"]));
// console.log(last("ubuntu"));
// console.log(last([1, 2, 3]));

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array

function firstAndSecond(arr){
    return arr.slice(0,2);
}

// console.log(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]));

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array

function firstAndLast(arr){
    return arr.slice(0,1).concat(arr.slice(arr.length-1,));
}

// console.log(firstAndLast([1, 2, 3, 4]));

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.

function firstToLast(value){
    let start = value[0];
    value = value.slice(1,);
    value.push(start);
    return value;

}

// console.log(firstToLast([1, 2, 3, 4]));

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.

function sumAll(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
function mean(arr){
    return sumAll(arr)/arr.length;
}

// console.log(mean([1, 2, 3, 4]));


// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value

function median(num){
    if (num.length % 2 === 0){
        return (num[num.length / 2] + num[num.length / 2 - 1]) / 2;
    } else {
        return (num[parseInt(num.length / 2)]);
    }
}

