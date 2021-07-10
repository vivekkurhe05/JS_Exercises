/**
 * Write a JavaScript conditional statement to find the sign of product of three numbers. 
 * Display an alert box with the specified sign. 
Sample numbers : 3, -7, 2
Output : The sign is -
 */

// your solution

function display_sign (a, b, c) {
    let prod = a*b*c;
    
    return prod < 0 ? "The sign is -" : "The sign is +";
}
console.log(display_sign(3, -7, 2));