/**
 * Write a JavaScript program to concatenate two strings except their first character.
 */

function concate(str1, str2){
    return str1.slice(1)+str2.slice(1);
}
console.log(concate("Java", "Script"));