/**
 * output
 * Array ["a", "b", "c", "d", "e", "f"]
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);
console.log(array3);

// Concatenating two arrays

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
console.log(letters.concat(numbers));


// Concatenating three arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

console.log(num1.concat(num2, num3));

// Concatenating values to an array

console.log(letters.concat(1, [2, 3]));

// Concatenating nested arrays

const num4 = [[1]];
const num5 = [2, [3]];

const numbersArr = num4.concat(num5);

console.log(numbersArr);

numbersArr.push(4)
console.log(numbersArr)

num4[0].push(2)
console.log(numbersArr);

num5[1].push(6)
console.log(numbersArr)