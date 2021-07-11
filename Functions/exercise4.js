/**
 * Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
 */

// your solution
function alphabet_order(str) {
    return str.trim().split("").sort().join("");
}

console.log(alphabet_order("webmaster"));

// or

function alphabet_order_2(str) {
    let chrCode = [], order_st = "";
    for (let i = 0; i < str.length; i++) {
        chrCode.push(str.charCodeAt(i));
    }
    let code = chrCode.sort((a, b) => a - b);
    for (let i = 0; i < code.length; i++) {
        order_st += String.fromCharCode(code[i]);
    }
    return order_st;

}

console.log(alphabet_order_2("webmaster"));