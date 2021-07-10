/**
 * Write a JavaScript conditional statement to find the largest of five numbers. 
 * Display an alert box to show the result.
Sample numbers : -5, -2, -6, 0, -1
Output : 0
 */

// your solution

function find_the_largest() {
    let largest = 0;
    for(let i=0; i<arguments.length; i++) {
        if(arguments[i+1] < arguments[i]){
            largest = arguments[i];
        }
    }
    return largest;
}

console.log(find_the_largest(-5, -2, -6, 0, -1));