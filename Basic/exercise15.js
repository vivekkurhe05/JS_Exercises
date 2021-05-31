/**
 * Write a JavaScript program to get the difference between a given number and 13, 
 * if the number is greater than 13 return double the absolute difference. 
 */

function doubleAbsDifference(userInput){
    if(userInput > 13) {
        return (userInput - 13) * 2
    }
    return 13 - userInput;
}

console.log(doubleAbsDifference(25));
console.log(doubleAbsDifference(11));
