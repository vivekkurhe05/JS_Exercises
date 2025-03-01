/**
 * Write a Java program to count the number of words 
 * ending in 'm' or 'n' (not case sensitive) in a given text.
 * The given string is: mam is in the room
The number of words ends eith m or n is: 3
 */

function countWords(str) {

    let arr = str.toLowerCase().split(" ")
    let count=0
    arr.forEach((word) => {
        if(word.endsWith("m") || word.endsWith("n")) count++
    })
    return count
}

console.log(countWords("mam is in the room"))