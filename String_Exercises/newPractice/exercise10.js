/**
 * Write a JavaScript function that takes a string which has lower and upper case letters as a 
 * parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */

function swapcase(str) {

    let arr = str.split("");
    if(arr.length > 1) {
        return arr.map(function(chr) {
            return chr == chr.toLocaleLowerCase() ? chr.toLocaleUpperCase() : chr.toLocaleLowerCase();
        }).join("");
    }
}

console.log(swapcase('AaBbc'));
