// You are given 3 coins of value 1, 3 and 5. You are also given a total which you have to arrive at. Findthe minimum number of coins to arrive at it.
"use strict";

let array = [5,3,1];

function minNumber(num){
    let minNum = 0;
    for(let i=0 ; i< array.length ; i++){
          if(num % array[i] != 0){
              minNum += parseInt(num / array[i]);
              num = num % array[i];
          } else {
              minNum += num / array[i];
              return minNum;
          }

    }

}

console.log(minNumber(21));
console.log(minNumber(20));
console.log(minNumber(7));
console.log(minNumber(2));