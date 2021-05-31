/**
 * Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
 */

function exists(chr){
    var given = "Pineapple";
    var index = given.indexOf(chr, 2);
    if(index >= 2 && index <= 4){
        return true;
    }
    return false;
}
console.log(exists('a'));

//or

function exists(chr){
    var given = "Pineapple";
    return given.substring(2, 5).includes(chr);
}
console.log(exists('a'));