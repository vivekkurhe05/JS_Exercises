/**
 * Write a JavaScript function that takes a string which has lower and upper case letters 
 * as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
 * Test Data :
 * console.log(swapcase('AaBbc'));
 * "aAbBC"
 */

function swapcase (str) {

    return str.trim().split('').map(function(letters){
        return letters == letters.toLocaleUpperCase() ? letters.toLocaleLowerCase() : letters.toLocaleUpperCase();
    }).join('');
}

console.log(swapcase('AaBbc'));


//or

swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));