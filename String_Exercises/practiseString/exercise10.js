/**
 * 
 * Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and 
 * converts upper case letters to lower case, and lower case letters to upper case.
 * Test Data :
 * console.log(swapcase('AaBbc'));
 * "aAbBC"
 */

function swapcase(str){
    let arr = str.split('');
    return arr.map(function(val){
        if(val == val.toLocaleUpperCase()) return val.toLocaleLowerCase();
        else return val.toLocaleUpperCase();
    }).join("");
}

console.log('AaBbc');
console.log(swapcase('AaBbc'));