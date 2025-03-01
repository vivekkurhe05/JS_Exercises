/**
 * Write a Java program to remove "b" and "ac" from a given string.
 * The given string is: abrambabasc
After removing the new string is: aramaasc
 */

function remove(str) {
    const re = /(b|ac)/g
    return str.replace(re,"")
}

console.log(remove("abrambabasc"))