/**
 * Write a Python program to search a literals string in a string and also find the location within the original string where the pattern occurs.
 * Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox'
 */

// my solution
let pattern = "The quick brown fox jumps over the lazy dog.";
let re = /fox/g;
let matches = [];
let match;

do{
    match = re.exec(pattern);
    if(match){
        matches.push(match);
    }
}while(match!=null);


let startIndex = matches[0].index;
let endIndex = startIndex + matches[0][0].length;
console.log(`Found "fox" in "The quick brown fox jumps over the lazy dog." from ${startIndex} to ${endIndex}`)
