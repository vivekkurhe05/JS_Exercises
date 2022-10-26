/**
 * Write a Python program to separate and print the numbers of a given string.
 */

// my solution
let pattern = "Ten 10, Twenty 20, Thirty 30";
let re = /\d+/g;
let matches = [];
let match;

do{
    match = re.exec(pattern);
    if(match){
        matches.push(match);
    }
}while(match!=null);

for(let i=0;i < matches.length; i++) {
    console.log(matches[i][0]);
}

