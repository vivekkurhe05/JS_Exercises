/**
 * w3schools
 * Check if all the values in the ages array are a specific number or over :
 */

 var ages = [32, 33, 12, 40];

 function checkAdult(arr, age) {
    return arr.every( function (e) {
        return e > 11;
    })

 }

 console.log(checkAdult(ages, 18));