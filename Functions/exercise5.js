/**
 * 
 * Write a JavaScript function that accepts a string as a parameter and converts the 
 * first letter of each word of the string in upper case. Go to the editor
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
 */

// your solution

function uppercase(str) {
    let arr = str.trim().split(' ');
    return arr.map(function (el) {
        return el[0].toUpperCase() + el.slice(1);
    }).join(" ");
}

console.log(uppercase("the quick brown fox"));