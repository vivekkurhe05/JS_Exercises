/**
 * Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, 
 * if "Script" presents in the string return the string without "Script" otherwise return the original one.
 */

function reduceString(str) {
    if (str.includes('Script')) {
        let a = str.substring(0, str.indexOf('Script')); // Java
        /**
         * write logic for removing string Script
         */
    }
    else
        return str;
}
console.log(reduceString('JavaScript language'));
console.log(reduceString('Java'));