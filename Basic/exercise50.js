/**
 * Write a JavaScript program to capitalize the first letter of each word of a given string.
 */

function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.substring(1);
}
console.log(capitalizeFirstLetter('welcome'));