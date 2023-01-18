/**
 * Write a JavaScript program to shuffle an array.
 */

function shuffle(myArray) {
  return myArray.sort(() => 0.5 - Math.random());
}

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
