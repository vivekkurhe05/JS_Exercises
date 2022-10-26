/**
 * Write a Python program to separate and print the numbers and their position of a given string.
 */

// my solution
let text = "The following example creates an ArrayList with a capacity of 50 elements. Four elements are then added to the ArrayList and the ArrayList is trimmed accordingly.";
let re = /\d+/g;
let matches = [];
let match;

do{
    match = re.exec(text);
    if(match){
        matches.push(match);
    }
}while(match!=null);

console.log(matches[0][0]);
console.log(`Index position: ${matches[0].index}`);