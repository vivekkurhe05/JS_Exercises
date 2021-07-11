/**
 * Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223
 */

// your solution

function reverse_number(num) {
    let rev = "";
    while (num > 0) {
        rev += Math.floor(num % 10);
        num = Math.floor(num / 10);
    }
    return parseInt(rev);
}

console.log(reverse_number(32243));