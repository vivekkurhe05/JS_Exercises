/**
 * Write a Java program to count how many times the substring 'life' appears anywhere in a given string. 
 * Counting can also happen with the substring 'li?e', any character instead of 'f'.
 * 
 * The given string is: liveonwildlife
The substring life or li?e appear number of times: 2
 */

function countOccurrences(str) {
    const re = /li.e/g
    return `The substring life or li?e appear number of times: ${str.match(re).length}`
}

console.log(countOccurrences("liveonwildlife"))