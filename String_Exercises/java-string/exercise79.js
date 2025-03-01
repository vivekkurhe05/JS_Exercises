/**
 * Write a Java program to create a string from a given string. 
 * This is done after removing the 2nd character from the substring of 
 * length three starting with 'z' and ending with 'g' presents in the said string.
 * 
 * The given string is: zzgkitandkatcaketoket
The new string is: zgkitandkatcaketoket
 */

function createString(str) {
    const re = /(?<=z).(?=g)/g
    return str.replace(re,"")
}

console.log(createString('zzgkitandkatcaketoket'))