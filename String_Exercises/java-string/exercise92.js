/**
 * Write a Java program that returns a substring after removing all 
 * instances of remove string as given from the given main string.
 * 
 * The main string is: This is the test string
The removable string is: st
The new string is: This is the te ring
 */

function removeInstances(str) {
    return str.replaceAll("st", "")
}

console.log(removeInstances("This is the test string"))