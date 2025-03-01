/**
 * Write a Java program to create a string containing every character twice of a given string.
 * 
 * The given string is: welcome
The new string is: wweellccoommee
 */

function twice(str) {
    let arr = Array.from(str)
    return arr.map((chr) => {
        return chr.repeat(2)
    }).join("")
}

console.log(twice("welcome"))