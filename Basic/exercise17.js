/**
 * Write a JavaScript program to compute the absolute difference between a specified number and 19. 
 * Returns triple their absolute difference if the specified number is greater than 19.
 */

function tripleAbsoluteDifference(userInput) {
    if (userInput > 19) {
        return (userInput - 19) * 3;
    }
    else {
        return (19 - userInput);
    }
}
console.log(tripleAbsoluteDifference(12));
console.log(tripleAbsoluteDifference(19));
console.log(tripleAbsoluteDifference(22));